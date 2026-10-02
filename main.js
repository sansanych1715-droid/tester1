/* ------------------------------------------------------------------ */
/* T000: Translation Constants                                              */
/* ------------------------------------------------------------------ */
const QUICK_TEST_BUTTON_LABEL = "Швидкий тест";
const INTERVIEW_TEST_BUTTON_LABEL = "Інтерв'ю тест";

/* ------------------------------------------------------------------ */
/* T004: Encryption Module (Web Crypto API - AES-GCM, PBKDF2)        */
/* ------------------------------------------------------------------ */
const EncryptionModule = (() => {
  const STORAGE_KEY = "interview-trainer-encrypted";
  const SALT_KEY = "interview-trainer-salt";
  const PBKDF2_ITERATIONS = 100000;

  function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }

  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++)
      binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  function generateSalt() {
    return crypto.getRandomValues(new Uint8Array(16));
  }

  async function deriveKey(salt, passphrase = "react-interview-trainer-key") {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      enc.encode(passphrase),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"],
    );
    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: PBKDF2_ITERATIONS,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"],
    );
  }

  async function getSalt() {
    let saltBase64 = localStorage.getItem(SALT_KEY);
    if (!saltBase64) {
      const salt = generateSalt();
      saltBase64 = arrayBufferToBase64(salt.buffer);
      localStorage.setItem(SALT_KEY, saltBase64);
    }
    return base64ToArrayBuffer(saltBase64);
  }

  async function encryptAndSave(data) {
    const salt = await getSalt();
    const key = await deriveKey(salt);
    const enc = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      enc.encode(JSON.stringify(data)),
    );
    const payload = {
      iv: arrayBufferToBase64(iv.buffer),
      data: arrayBufferToBase64(encrypted),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    return true;
  }

  async function loadAndDecrypt() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    try {
      const salt = await getSalt();
      const key = await deriveKey(salt);
      const { iv, data } = JSON.parse(stored);
      const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: base64ToArrayBuffer(iv) },
        key,
        base64ToArrayBuffer(data),
      );
      const decoder = new TextDecoder();
      return JSON.parse(decoder.decode(decrypted));
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  }

  return { encryptAndSave, loadAndDecrypt, STORAGE_KEY, SALT_KEY };
})();

/* ------------------------------------------------------------------ */
/* T005: Data Access Layer (saveData / loadData)                       */
/* ------------------------------------------------------------------ */
const DataAccessLayer = (() => {
  const DEFAULT_STATE = {
    ratings: {},
    sessions: [],
    stats: {
      totalQuestionsRated: 0,
      averageScore: 0,
      perCategory: {},
      weakSpotsCount: 0,
    },
    appState: {
      lastMode: "practice",
      selectedCategories: ["all"],
      lastQuizConfig: { numQuestions: 10, timeLimit: 90, categories: ["all"] },
    },
  };

  let appData = null;

  async function loadData() {
    if (appData) return appData;
    const stored = await EncryptionModule.loadAndDecrypt();
    appData = stored
      ? mergeWithDefault(stored)
      : JSON.parse(JSON.stringify(DEFAULT_STATE));
    return appData;
  }

  function mergeWithDefault(stored) {
    return {
      ratings: stored.ratings || {},
      sessions: stored.sessions || [],
      stats: {
        totalQuestionsRated: stored.stats?.totalQuestionsRated || 0,
        averageScore: stored.stats?.averageScore || 0,
        perCategory: stored.stats?.perCategory || {},
        weakSpotsCount: stored.stats?.weakSpotsCount || 0,
      },
      appState: {
        lastMode: stored.appState?.lastMode || "practice",
        selectedCategories: stored.appState?.selectedCategories || ["all"],
        lastQuizConfig:
          stored.appState?.lastQuizConfig ||
          DEFAULT_STATE.appState.lastQuizConfig,
      },
    };
  }

  async function saveData(data) {
    appData = data;
    await EncryptionModule.encryptAndSave(data);
    return true;
  }

  async function updateRating(questionId, ratingObj) {
    if (!appData) await loadData();
    appData.ratings[questionId] = {
      rating: ratingObj.rating,
      weight: ratingObj.weight,
      timestamp: ratingObj.timestamp || Date.now(),
      answered: ratingObj.answered || false,
    };
    await saveData(appData);
    return appData;
  }

  async function updateAppState(updates) {
    if (!appData) await loadData();
    appData.appState = { ...appData.appState, ...updates };
    await saveData(appData);
    return appData;
  }

  async function updateStats(statsObj) {
    if (!appData) await loadData();
    appData.stats = { ...appData.stats, ...statsObj };
    await saveData(appData);
    return appData;
  }

  async function resetData() {
    localStorage.removeItem(EncryptionModule.STORAGE_KEY);
    localStorage.removeItem(EncryptionModule.SALT_KEY);
    appData = JSON.parse(JSON.stringify(DEFAULT_STATE));
    return appData;
  }

  async function saveSession(sessionType, summaryScore) {
    if (!appData) await loadData();
    const sessionEntry = {
      id: 'sess-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
      type: sessionType,
      date: new Date().toISOString(),
      score: summaryScore,
      questionsRated: 10 // Assumes full session completion
    };
    appData.sessions = appData.sessions || [];
    appData.sessions.unshift(sessionEntry);
    // Keep only the 5 most recent sessions
    if (appData.sessions.length > 5) {
      appData.sessions = appData.sessions.slice(0, 5);
    }
    await saveData(appData);
    return appData.sessions;
  }

  function getAppData() {
    return appData;
  }

  return {
    loadData,
    saveData,
    updateRating,
    updateAppState,
    updateStats,
    resetData,
    saveSession,
    getAppData,
    DEFAULT_STATE,
  };
})();

/* ------------------------------------------------------------------ */
/* T007: React Context for Global State                                */
/* ------------------------------------------------------------------ */
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [appData, setAppData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [currentView, setCurrentView] = React.useState("home");
  const [selectedCategories, setSelectedCategories] = React.useState(["all"]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategoryId, setActiveCategoryId] = React.useState(null);
    const [quickTestSession, setQuickTestSession] = React.useState(null);
  const [quickTestQuestions, setQuickTestQuestions] = React.useState([]);
  const [quickTestIndex, setQuickTestIndex] = React.useState(0);
  const [interviewTestSession, setInterviewTestSession] = React.useState(null);
  const [interviewTestQuestions, setInterviewTestQuestions] = React.useState([]);
  const [interviewTestIndex, setInterviewTestIndex] = React.useState(0);

  const setCurrentQuickTestSession = React.useCallback((questions) => {
    const sessionId = 'quick-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    setQuickTestQuestions(questions);
    setQuickTestIndex(0);
    setQuickTestSession({
      id: sessionId,
      type: 'quick',
      questionIds: questions.map(q => q.id),
      startTime: Date.now(),
      elapsedTime: 0,
      currentQuestionIndex: 0,
      userAnswers: {},
      isCompleted: false
    });
    setCurrentView('quick');
  }, []);

  const setCurrentInterviewTestSession = React.useCallback((questions) => {
    const sessionId = 'interview-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    setInterviewTestQuestions(questions);
    setInterviewTestIndex(0);
    setInterviewTestSession({
      id: sessionId,
      type: 'interview',
      questionIds: questions.map(q => q.id),
      startTime: Date.now(),
      elapsedTime: 0,
      currentQuestionIndex: 0,
      userAnswers: {},
      isCompleted: false
    });
    setCurrentView('interview');
  }, []);

  React.useEffect(() => {
    DataAccessLayer.loadData().then((data) => {
      setAppData(data);
      setSelectedCategories(data.appState.selectedCategories || ["all"]);
      setCurrentView(data.appState.lastMode === "practice" ? "home" : "home");
      setLoading(false);
    });
  }, []);

  const persistRating = React.useCallback(async (questionId, ratingObj) => {
    const updated = await DataAccessLayer.updateRating(questionId, ratingObj);
    setAppData({ ...updated });
  }, []);

  const savePreferences = React.useCallback(async (prefs) => {
    const updated = await DataAccessLayer.updateAppState(prefs);
    setAppData({ ...updated });
    if (prefs.selectedCategories)
      setSelectedCategories(prefs.selectedCategories);
  }, []);

    const resetProgress = React.useCallback(async () => {
    const fresh = await DataAccessLayer.resetData();
    setAppData(fresh);
    setSelectedCategories(["all"]);
    setSearchTerm("");
    setCurrentView("home");
    setQuickTestSession(null);
    setQuickTestQuestions([]);
    setQuickTestIndex(0);
    setInterviewTestSession(null);
    setInterviewTestQuestions([]);
    setInterviewTestIndex(0);
  }, []);

  const saveSession = React.useCallback(async (sessionType, summaryScore) => {
    const updated = await DataAccessLayer.saveSession(sessionType, summaryScore);
    setAppData((prev) => ({ ...prev, sessions: updated }));
  }, []);

  const updateStats = React.useCallback(async (statsObj) => {
    const updated = await DataAccessLayer.updateStats(statsObj);
    setAppData({ ...updated });
  }, []);

  if (loading)
    return React.createElement(
      "div",
      { className: "loading-screen" },
      "Loading...",
    );

  return React.createElement(
    AppContext.Provider,
    {
      value: {
        appData,
        setAppData,
        currentView,
        setCurrentView,
        selectedCategories,
        setSelectedCategories,
        searchTerm,
        setSearchTerm,
        activeCategoryId,
        setActiveCategoryId,
        persistRating,
        savePreferences,
        resetProgress,
        saveSession,
        updateStats,
        quickTestSession,
        quickTestQuestions,
        quickTestIndex,
        setQuickTestIndex,
        setCurrentQuickTestSession,
        interviewTestSession,
        interviewTestQuestions,
        interviewTestIndex,
        setInterviewTestIndex,
        setCurrentInterviewTestSession,
      },
    },
    children,
  );
}

/* ------------------------------------------------------------------ */
/* T008: Scoring Utility                                               */
/* ------------------------------------------------------------------ */
const ScoringUtility = {
  calculateWeightedScore: function (ratings) {
    const entries = Object.values(ratings);
    if (entries.length === 0) return 0;
    let total = 0;
    for (const entry of entries) total += entry.rating * entry.weight;
    return (total / (3 * 5 * entries.length)) * 100;
  },
  calculateSessionScore: function (completed, questionsMap) {
    if (!completed || completed.length === 0) return 0;
    let total = 0;
    for (const item of completed) {
      const weight = questionsMap[item.questionId]?.weight || 3;
      total += item.rating * weight;
    }
    return (total / (3 * 5 * completed.length)) * 100;
  },
  calculatePerCategory: function (ratings, questionsMap) {
    const result = {};
    for (const [qid, rating] of Object.entries(ratings)) {
      const q = questionsMap[qid];
      if (!q) continue;
      const cat = q.category;
      if (!result[cat]) result[cat] = { rated: 0, score: 0 };
      result[cat].rated += 1;
      result[cat].score += rating.rating * rating.weight;
    }
    for (const cat of Object.keys(result)) {
      const maxPossible = 3 * 5 * result[cat].rated;
      result[cat].score =
        maxPossible > 0
          ? Math.round((result[cat].score / maxPossible) * 100)
          : 0;
    }
    return result;
  },
  countWeakSpots: function (ratings) {
    return Object.values(ratings).filter((r) => r.rating <= 1).length;
  },
};

function getQuestionsByCategories(categories) {
  if (categories.includes("all") || categories.length === 0)
    return Object.values(QUESTION_BANK);
  return Object.values(QUESTION_BANK).filter((q) =>
    categories.includes(q.category),
  );
}

/* ------------------------------------------------------------------ */
/* T005: Topic Statistics Helper - Dynamic category enumeration        */
/* ------------------------------------------------------------------ */
function getTopicStats() {
  const counts = new Map();
  for (const q of Object.values(QUESTION_BANK)) {
    const cat = q.category;
    counts.set(cat, (counts.get(cat) || 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/* ------------------------------------------------------------------ */
/* T002: Quick Test Session Helper - Random question selection        */
/* ------------------------------------------------------------------ */
function startQuickTestSession() {
  const allQuestions = getQuestionsByCategories(['all']);
  const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
  return selectedQuestions;
}

/* ------------------------------------------------------------------ */
/* T015a: Interview Test Session Helper - Random question selection   */
/* ------------------------------------------------------------------ */
function startInterviewTestSession() {
  const allQuestions = Object.values(QUESTION_INTERVUER);
  const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
  return selectedQuestions;
}

/* ------------------------------------------------------------------ */
/* T010: QuestionCard Component - Displays question with answer input */
/* ------------------------------------------------------------------ */
function QuestionCard({ question, onAnswerChange, onSubmit }) {
  const [answer, setAnswer] = React.useState("");
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    onAnswerChange && onAnswerChange(e.target.value);
  };
  return React.createElement(
    "div",
    { className: "question-card" },
    React.createElement(
      "h2",
      { className: "question-text", id: "question-" + question.id },
      question.question,
    ),
    React.createElement("textarea", {
      className: "answer-input",
      "aria-label": "Ваша відповідь",
      placeholder: "Введіть вашу відповідь...",
      value: answer,
      onChange: handleAnswerChange,
    }),
    React.createElement(
      "button",
      {
        className: "submit-btn",
        onClick: () => onSubmit && onSubmit(answer),
        "aria-label": "Submit answer",
      },
      "Надіслати відповідь",
    ),
    React.createElement(
      "button",
      {
        className: "skip-btn",
        onClick: () => onSubmit && onSubmit(""),
        "aria-label": "Skip this question",
      },
      "Пропустити",
    ),
  );
}

/* ------------------------------------------------------------------ */
/* T011: AnswersPanel Component - Shows ideal and short answers      */
/* ------------------------------------------------------------------ */
function AnswersPanel({ idealAnswer, shortAnswer, onRating, onClose }) {
  return React.createElement(
    "div",
    { className: "answers-panel", "aria-live": "polite" },
    React.createElement(
      "div",
      { className: "answer-section" },
      React.createElement("h3", null, "Ідеальна відповідь"),
      React.createElement("p", { className: "answer-content" }, idealAnswer),
    ),
    React.createElement(
      "div",
      { className: "answer-section" },
      React.createElement("h3", null, "Коротка відповідь"),
      React.createElement("p", { className: "answer-content" }, shortAnswer),
    ),
    React.createElement(
      "div",
      { className: "rating-section" },
      React.createElement("h3", null, "Ваша оцінка"),
      React.createElement(
        "div",
        { className: "rating-buttons" },
        [0, 1, 2, 3].map((rating) =>
          React.createElement(
            "button",
            {
              key: rating,
              className: "rating-btn rating-" + rating,
              onClick: () => onRating && onRating(rating),
              "aria-label": "Select rating " + rating,
            },
            rating === 0
              ? "Не знав"
              : rating === 1
                ? "Частково"
                : rating === 2
                  ? "Добре"
                  : "Чудово",
          ),
        ),
      ),
      React.createElement(
        "button",
        { className: "next-btn", onClick: onClose },
        "Наступне питання",
      ),
    ),
  );
}

/* ------------------------------------------------------------------ */
/* T009: HomeView Component (Mode Selection)                            */
/* ------------------------------------------------------------------ */
function HomeView() {
  const ctx = React.useContext(AppContext);
  const handleQuickTest = () => {
    const questions = startQuickTestSession();
    ctx.setCurrentQuickTestSession(questions);
  };
  const handleInterviewTest = () => {
    const questions = startInterviewTestSession();
    ctx.setCurrentInterviewTestSession(questions);
  };
  return React.createElement(
    "div",
    { className: "home-view" },
    React.createElement(
      "h1",
      { id: "main-content" },
      "Тренер інтерв'ю з React",
    ),
    React.createElement(
      "div",
      { className: "mode-buttons" },
      React.createElement(
        "button",
        { onClick: () => ctx.setCurrentView("practice") },
        "Тренування",
      ),
      React.createElement(
        "button",
        { onClick: () => ctx.setCurrentView("quiz") },
        "Тест (таймер)",
      ),
      React.createElement(
        "button",
        { onClick: () => ctx.setCurrentView("review") },
        "Огляд слабких місць",
      ),
      React.createElement(
        "button",
        { onClick: () => ctx.setCurrentView("dashboard") },
        "Прогрес",
      ),
      React.createElement(
        "button",
        { onClick: () => ctx.setCurrentView("topic-select") },
        "Test by Topic",
      ),
    ),
    React.createElement(
      "button",
      {
        className: "quick-test-btn",
        onClick: handleQuickTest,
      },
      QUICK_TEST_BUTTON_LABEL,
    ),
    React.createElement(
      "button",
      {
        className: "interview-test-btn",
        onClick: handleInterviewTest,
      },
      INTERVIEW_TEST_BUTTON_LABEL,
    ),
  );
}

/* ------------------------------------------------------------------ */
/* T012: ProgressIndicator Component - Shows position in deck         */
/* ------------------------------------------------------------------ */
function ProgressIndicator({ current, total }) {
  const progress = total > 0 ? (current / total) * 100 : 0;
  return React.createElement(
    "div",
    { className: "progress-container" },
    React.createElement(
      "p",
      { className: "progress-text" },
      "Питання " + current + " з " + total,
    ),
    React.createElement(
      "div",
      { className: "progress-bar" },
      React.createElement("div", {
        className: "progress-fill",
        style: { width: progress + "%" },
      }),
    ),
  );
}

/* ------------------------------------------------------------------ */
/* T013: PracticeView Component - Main practice mode interface        */
/* ------------------------------------------------------------------ */
function PracticeView() {
  const ctx = React.useContext(AppContext);
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [userRating, setUserRating] = React.useState(null);
  const [completed, setCompleted] = React.useState([]);

  React.useEffect(() => {
    const filtered = getQuestionsByCategories(ctx.selectedCategories);
    setQuestions(shuffleArray(filtered));
  }, [ctx.selectedCategories]);

  if (questions.length === 0) {
    return React.createElement(
      "div",
      { className: "practice-view" },
      React.createElement("p", null, "«Немає питань для тестування»."),
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleRating = (rating) => {
    setUserRating(rating);
    setShowAnswer(false);
    ctx.persistRating(currentQuestion.id, {
      rating: rating,
      weight: currentQuestion.weight,
      timestamp: Date.now(),
    });
        // Move to next question after rating
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const sessionScore = ScoringUtility.calculateWeightedScore(
        ctx.appData.ratings
      );
      ctx.saveSession("practice", Math.round(sessionScore));
      ctx.setCurrentView("results");
    }
  };

  return React.createElement(
    "div",
    { className: "practice-view" },
    React.createElement(ProgressIndicator, {
      current: currentIndex + 1,
      total: questions.length,
    }),
    !showAnswer
      ? React.createElement(QuestionCard, {
          key: currentQuestion.id,
          question: currentQuestion,
          onSubmit: () => setShowAnswer(true),
        })
      : React.createElement(AnswersPanel, {
          idealAnswer: currentQuestion.idealAnswer,
          shortAnswer: currentQuestion.shortAnswer,
          onRating: handleRating,
        }),
  );
}

/* ------------------------------------------------------------------ */
/* T015: QuickTestView Component - Quick test flow                   */
/* ------------------------------------------------------------------ */
function QuickTestView() {
  const ctx = React.useContext(AppContext);
  const questions = ctx.quickTestQuestions;
  const [currentIndex, setCurrentIndex] = React.useState(ctx.quickTestIndex || 0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [userRating, setUserRating] = React.useState(null);
  const total = questions.length;

  React.useEffect(() => {
    setCurrentIndex(ctx.quickTestIndex || 0);
  }, [ctx.quickTestIndex]);

  const handleRating = (rating) => {
    const q = questions[currentIndex];
    setUserRating(rating);
    setShowAnswer(false);
    ctx.persistRating(q.id, {
      rating: rating,
      weight: q.weight,
      timestamp: Date.now(),
    });
    ctx.setQuickTestIndex(currentIndex + 1);
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const sessionScore = ScoringUtility.calculateWeightedScore(
        ctx.appData.ratings
      );
      ctx.saveSession("quick", Math.round(sessionScore));
      ctx.setCurrentView("results");
    }
  };

  if (!questions || questions.length === 0) {
    return React.createElement(
      "div",
      { className: "practice-view" },
      React.createElement("p", null, "«Немає питань для тестування»."),
    );
  }

  const currentQuestion = questions[currentIndex];

  return React.createElement(
    "div",
    { className: "practice-view" },
    React.createElement(
      "div",
      { className: "quick-test-header" },
      React.createElement(
        "button",
        {
          onClick: () => {
            ctx.setCurrentView("home");
          },
          className: "quick-test-back-btn",
        },
        "\u2190 Назад",
      ),
      React.createElement(
        "p",
        { className: "quick-test-progress" },
        "Питань " + (currentIndex + 1) + " з " + total,
      ),
    ),
    React.createElement(ProgressIndicator, {
      current: currentIndex + 1,
      total: total,
    }),
    !showAnswer
      ? React.createElement(QuestionCard, {
          key: currentQuestion.id,
          question: currentQuestion,
          onSubmit: () => setShowAnswer(true),
        })
      : React.createElement(AnswersPanel, {
          idealAnswer: currentQuestion.idealAnswer,
          shortAnswer: currentQuestion.shortAnswer,
          onRating: handleRating,
        }),
    );
}

/* ------------------------------------------------------------------ */
/* T015b: InterviewTestView Component - Interview test flow          */
/* ------------------------------------------------------------------ */
function InterviewTestView() {
  const ctx = React.useContext(AppContext);
  const questions = ctx.interviewTestQuestions;
  const [currentIndex, setCurrentIndex] = React.useState(ctx.interviewTestIndex || 0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [userRating, setUserRating] = React.useState(null);
  const total = questions.length;

  React.useEffect(() => {
    setCurrentIndex(ctx.interviewTestIndex || 0);
  }, [ctx.interviewTestIndex]);

  const handleRating = (rating) => {
    const q = questions[currentIndex];
    setUserRating(rating);
    setShowAnswer(false);
    ctx.persistRating(q.id, {
      rating: rating,
      weight: q.weight,
      timestamp: Date.now(),
    });
    ctx.setInterviewTestIndex(currentIndex + 1);
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const sessionScore = ScoringUtility.calculateWeightedScore(
        ctx.appData.ratings
      );
      ctx.saveSession("interview", Math.round(sessionScore));
      ctx.setCurrentView("results");
    }
  };

  if (!questions || questions.length === 0) {
    return React.createElement(
      "div",
      { className: "practice-view" },
      React.createElement("p", null, "«Немає питань для тестування»."),
    );
  }

  const currentQuestion = questions[currentIndex];

  return React.createElement(
    "div",
    { className: "practice-view" },
    React.createElement(
      "div",
      { className: "quick-test-header" },
      React.createElement(
        "button",
        {
          onClick: () => {
            ctx.setCurrentView("home");
          },
          className: "quick-test-back-btn",
        },
        "← Назад",
      ),
      React.createElement(
        "p",
        { className: "quick-test-progress" },
        "Питань " + (currentIndex + 1) + " з " + total,
      ),
    ),
    React.createElement(ProgressIndicator, {
      current: currentIndex + 1,
      total: total,
    }),
    !showAnswer
      ? React.createElement(QuestionCard, {
          key: currentQuestion.id,
          question: currentQuestion,
          onSubmit: () => setShowAnswer(true),
        })
      : React.createElement(AnswersPanel, {
          idealAnswer: currentQuestion.idealAnswer,
          shortAnswer: currentQuestion.shortAnswer,
          onRating: handleRating,
        }),
  );
}

/* ------------------------------------------------------------------ */
/* T014: PracticeLayout Component - Container with navigation        */
/* ------------------------------------------------------------------ */
function PracticeLayout() {
  const ctx = React.useContext(AppContext);
  return React.createElement(
    "div",
    { className: "practice-layout" },
    React.createElement(
      "nav",
      { className: "practice-nav" },
      React.createElement(
        "button",
        {
          onClick: () => ctx.setCurrentView("home"),
        },
        "\u2190 Додому",
      ),
    ),
    React.createElement(PracticeView, null),
  );
}

/* ------------------------------------------------------------------ */
/* T016: ResultsView Component - Post-quiz results screen           */
/* ------------------------------------------------------------------ */
function ResultsView() {
  const ctx = React.useContext(AppContext);
  const { appData } = ctx;
  const ratings = appData?.ratings || {};
  const questionsMap = QUESTION_BANK;

  const score = ScoringUtility.calculateWeightedScore(ratings);
  const perCategory = ScoringUtility.calculatePerCategory(ratings, questionsMap);
  const weakSpotsCount = ScoringUtility.countWeakSpots(ratings);

  const totalRated = Object.keys(ratings).length;

  const handleTakeAgain = () => {
    const questions = startQuickTestSession();
    ctx.setCurrentQuickTestSession(questions);
  };

  const handleGoHome = () => {
    ctx.setCurrentView("home");
  };

  return React.createElement(
    "div",
    { className: "results-view" },
    React.createElement(
      "div",
      { className: "results-header" },
      React.createElement("h1", null, "Результати"),
    ),
    React.createElement(
      "div",
      { className: "score-display" },
      React.createElement(
        "div",
        { className: "score-value" },
        Math.round(score) + "%",
      ),
      React.createElement(
        "p",
        { className: "score-label" },
        "Ваша оціна",
      ),
    ),
    React.createElement(
      "div",
      { className: "results-details" },
      React.createElement(
        "p",
        null,
        "Питань оцінено: " + totalRated,
      ),
      React.createElement(
        "p",
        null,
        "Слабких місць: " + weakSpotsCount,
      ),
    ),
    React.createElement(
      "div",
      { className: "results-actions" },
      React.createElement(
        "button",
        {
          className: "take-again-btn",
          onClick: handleTakeAgain,
        },
        "Пройти ще раз",
      ),
      React.createElement(
        "button",
        {
          className: "home-btn",
          onClick: handleGoHome,
        },
        "На головну",
      ),
    ),
  );
}

/* ------------------------------------------------------------------ */
/* ProgressDashboardView Component - Statistics, categories, history  */
/* ------------------------------------------------------------------ */
function ProgressDashboardView() {
  const ctx = React.useContext(AppContext);
  const { appData, resetProgress } = ctx;
  const ratings = appData?.ratings || {};
  const sessions = appData?.sessions || [];

  const totalRated = Object.keys(ratings).length;
  const overallScore = ScoringUtility.calculateWeightedScore(ratings);
  const perCategory = ScoringUtility.calculatePerCategory(ratings, QUESTION_BANK);
  const weakSpotsCount = ScoringUtility.countWeakSpots(ratings);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("uk-UA", {
      year: "numeric", month: "short", day: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  const sessionTypeLabel = (type) => {
    if (type === "quick") return "Швидкий тест";
    if (type === "interview") return "Інтерв'ю тест";
    if (type === "practice") return "Практика";
    return type;
  };

  const handleResetClick = () => {
    if (window.confirm("Ви впевнені, що хочете скинути увесь прогрес? Ця дія не може бути скасована.")) {
      resetProgress();
    }
  };

  return React.createElement(
    "div", { className: "dashboard-view" },
    React.createElement(
      "div", { className: "dashboard-header" },
      React.createElement("h1", null, "Прогрес"),
      React.createElement("button", {
        className: "home-btn", onClick: () => ctx.setCurrentView("home"),
        style: { marginTop: "1rem" },
      }, "На головну")
    ),

    /* Statistics Cards (US1) */
    React.createElement(
      "div", { className: "stats-summary" },
      React.createElement("div", { className: "stat-card" },
        React.createElement("div", { className: "stat-value" }, totalRated),
        React.createElement("div", { className: "stat-label" }, "Оцінено питань")
      ),
      React.createElement("div", { className: "stat-card" },
        React.createElement("div", { className: "stat-value" }, Math.round(overallScore) + "%"),
        React.createElement("div", { className: "stat-label" }, "Середній бал")
      ),
      React.createElement("div", { className: "stat-card" },
        React.createElement("div", { className: "stat-value" }, weakSpotsCount),
        React.createElement("div", { className: "stat-label" }, "Слабких тем")
      )
    ),

    /* Category Progress (US2) */
    Object.keys(perCategory).length > 0
      ? React.createElement(
          "div", { className: "category-breakdown" },
          React.createElement("h3", null, "Прогрес за категоріями"),
          React.createElement(
            "div", { className: "progress-bars" },
            Object.entries(perCategory).map(([cat, data]) =>
              React.createElement(
                "div", { className: "progress-row", key: cat },
                React.createElement("div", { className: "progress-row-label" },
                  React.createElement("span", null, cat),
                  React.createElement("span", null, data.score + "% (" + data.rated + " питань)")
                ),
                React.createElement("div", { className: "progress-bar-full" },
                  React.createElement("div", {
                    className: "progress-bar-fill",
                    style: { width: data.score + "%" },
                  })
                )
              )
            )
          )
        )
            : React.createElement(
          "div", { className: "empty-state" },
          React.createElement("p", null, "Поки що немає оцінених питань. Вирішіть кілька тестів, щоб побачити прогрес!")
        ),

    /* Session History (US3) */
    sessions.length > 0
      ? React.createElement(
          "div", { className: "category-breakdown" },
          React.createElement("h3", null, "Історія сесій"),
          React.createElement(
            "div", { className: "progress-bars" },
            sessions.map((session) =>
              React.createElement(
                "div", { className: "review-item", key: session.id },
                React.createElement("div", { className: "review-question" },
                  sessionTypeLabel(session.type) + " · " + Math.round(session.score) + "%"),
                React.createElement("div", { className: "review-meta" },
                  formatDate(session.date) + " · " + session.questionsRated + " питань")
              )
            )
          )
        )
      : React.createElement(
          "div", { className: "empty-state" },
          React.createElement("p", null, "Ще немає історії сесій.")
        ),

    /* Reset Button (US4) */
    React.createElement(
      "div", { style: { textAlign: "center", marginTop: "1.5rem" } },
      React.createElement("button", {
        className: "reset-btn", onClick: handleResetClick,
      }, "Скинути прогрес")
    )
  );
}

/* ------------------------------------------------------------------ */
/* T006: TopicSelectView Component - Category selection screen        */
/* T007: Home navigation button in TopicSelectView                    */
/* ------------------------------------------------------------------ */
function TopicSelectView() {
  const ctx = React.useContext(AppContext);
  const topics = getTopicStats();

  const handleTopicSelect = (categoryName) => {
    ctx.setSelectedCategories([categoryName]);
    ctx.setCurrentView("practice");
  };

  return React.createElement(
    "div",
    { className: "home-view" },
    React.createElement(
      "h1",
      { id: "main-content" },
      "Виберіть тему для тесту"
    ),
    React.createElement(
      "div",
      { className: "mode-buttons" },
      topics.map((topic) =>
        React.createElement(
          "button",
          {
            key: topic.name,
            onClick: () => handleTopicSelect(topic.name),
          },
          `${topic.name} (${topic.count} питань)`
        )
      ),
      React.createElement(
        "button",
        {
          onClick: () => ctx.setCurrentView("home"),
          className: "quick-test-back-btn",
        },
        "← Назад",
      ),
    ),
  );
}

/* ------------------------------------------------------------------ */
/* App Component - Main router                                       */
/* ------------------------------------------------------------------ */
function App() {
  const ctx = React.useContext(AppContext);
  let renderedView;
  switch (ctx.currentView) {
    case "practice":
      renderedView = React.createElement(PracticeLayout);
      break;
    case "quick":
      renderedView = React.createElement(QuickTestView);
      break;
    case "interview":
      renderedView = React.createElement(InterviewTestView);
      break;
    case "results":
      renderedView = React.createElement(ResultsView);
      break;
    case "dashboard":
      renderedView = React.createElement(ProgressDashboardView);
      break;
    case "topic-select":
      renderedView = React.createElement(TopicSelectView);
      break;
    default:
      renderedView = React.createElement(HomeView);
  }
  return renderedView;
}

function AppRoot() {
  return React.createElement(AppProvider, null, React.createElement(App));
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(AppRoot),
);
