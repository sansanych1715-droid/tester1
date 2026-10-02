const QUESTION_BANK = {
  // =========================================================
  // JavaScript: основи
  // =========================================================

  "q-js-01": {
    id: "q-js-01",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між var, let і const?",
    idealAnswer:
      "`var` має функціональну область видимості та може бути повторно оголошена. `let` і `const` мають блочну область видимості. `let` можна переприсвоювати, а `const` — ні. При цьому об’єкти та масиви, оголошені через `const`, можна змінювати всередині.",
    shortAnswer:
      "`var` — функціональна область видимості; `let` і `const` — блочна; `const` не можна переприсвоїти.",
    weight: 2,
    tags: ["javascript", "variables"],
  },

  "q-js-02": {
    id: "q-js-02",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке область видимості (scope)?",
    idealAnswer:
      "Scope визначає, де саме в коді доступна змінна або функція. У JavaScript є глобальна, функціональна та блочна області видимості. `let` і `const` мають блочну область видимості, а `var` — функціональну.",
    shortAnswer: "Scope визначає, де змінна або функція доступна в коді.",
    weight: 2,
    tags: ["javascript", "scope"],
  },

  "q-js-03": {
    id: "q-js-03",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Поясни, що таке замикання (closure).",
    idealAnswer:
      "Замикання виникає, коли внутрішня функція зберігає доступ до змінних зовнішньої функції навіть після завершення її виконання. Функція зберігає посилання на лексичне оточення, у якому була створена.",
    shortAnswer:
      "Внутрішня функція зберігає доступ до змінних зовнішньої функції після її завершення.",
    weight: 4,
    tags: ["javascript", "closure"],
  },

  "q-js-04": {
    id: "q-js-04",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між `==` і `===`?",
    idealAnswer:
      "`==` порівнює значення з можливим неявним приведенням типів. `===` порівнює і значення, і тип без приведення. У більшості випадків рекомендується використовувати `===`, щоб уникати неочікуваних перетворень типів.",
    shortAnswer:
      "`==` може приводити типи, а `===` порівнює і тип, і значення без приведення.",
    weight: 2,
    tags: ["javascript", "operators"],
  },

  "q-js-05": {
    id: "q-js-05",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між `undefined` і `null`?",
    idealAnswer:
      "`undefined` зазвичай означає, що значення не було присвоєне або властивість не існує. `null` — це явне значення, яке означає відсутність значення. Наприклад, функція без `return` повертає `undefined`, а розробник може явно встановити `value = null`.",
    shortAnswer:
      "`undefined` означає відсутність присвоєного значення, а `null` — явно задану відсутність значення.",
    weight: 2,
    tags: ["javascript", "types"],
  },

  "q-js-06": {
    id: "q-js-06",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Які основні типи даних є в JavaScript?",
    idealAnswer:
      "До примітивних типів належать `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` і `null`. Окремо можна виділити об’єкти (`object`), до яких також належать масиви, функції та інші складні структури.",
    shortAnswer:
      "Примітиви: string, number, bigint, boolean, undefined, symbol, null; складний тип — object.",
    weight: 2,
    tags: ["javascript", "types"],
  },

  "q-js-07": {
    id: "q-js-07",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між примітивними типами та об’єктами?",
    idealAnswer:
      "Примітиви є простими значеннями та передаються як значення. Об’єкти є складними структурами й змінюються через посилання на них. Наприклад, якщо дві змінні посилаються на один об’єкт, зміна його властивості буде видима через обидві змінні.",
    shortAnswer:
      "Примітиви передаються як значення, а об’єкти — як посилання на складну структуру.",
    weight: 3,
    tags: ["javascript", "objects"],
  },

  "q-js-08": {
    id: "q-js-08",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке destructuring?",
    idealAnswer:
      "Destructuring дозволяє отримувати значення з масивів або властивості об’єктів і присвоювати їх окремим змінним. Наприклад: `const { name, age } = user` або `const [first, second] = items`.",
    shortAnswer:
      "Синтаксис для зручного вилучення значень з об’єктів і масивів.",
    weight: 2,
    tags: ["javascript", "destructuring"],
  },

  "q-js-09": {
    id: "q-js-09",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Для чого використовуються map, filter і reduce?",
    idealAnswer:
      "`map` створює новий масив, перетворюючи кожен елемент. `filter` створює новий масив лише з елементів, що відповідають умові. `reduce` проходить масив і накопичує одне підсумкове значення.",
    shortAnswer:
      "`map` перетворює елементи, `filter` відбирає їх, `reduce` накопичує результат.",
    weight: 3,
    tags: ["javascript", "arrays"],
  },

  "q-js-10": {
    id: "q-js-10",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між `map()` і `forEach()`?",
    idealAnswer:
      "`map()` створює та повертає новий масив із результатів callback-функції. `forEach()` просто виконує callback для кожного елемента й не створює новий масив. Тому `map` використовують для перетворення даних, а `forEach` — коли потрібно виконати побічну дію.",
    shortAnswer:
      "`map()` повертає новий масив, а `forEach()` лише виконує callback для кожного елемента.",
    weight: 3,
    tags: ["javascript", "arrays"],
  },

  "q-js-11": {
    id: "q-js-11",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що робить spread operator `...`?",
    idealAnswer:
      "Spread розгортає елементи масиву або властивості об’єкта в іншій структурі. Його часто використовують для створення копій та оновлення стану без прямої мутації: `[...items]` або `{ ...user, name: 'John' }`.",
    shortAnswer:
      "Розгортає елементи масиву або властивості об’єкта в іншій структурі.",
    weight: 2,
    tags: ["javascript", "spread"],
  },

  "q-js-12": {
    id: "q-js-12",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке rest operator `...`?",
    idealAnswer:
      "Rest збирає декілька значень в один масив або об’єкт. Наприклад, `function sum(...numbers)` збирає всі аргументи в масив `numbers`. У destructuring він також дозволяє отримати решту властивостей або елементів.",
    shortAnswer: "Rest збирає декілька значень у масив або об’єкт.",
    weight: 2,
    tags: ["javascript", "rest"],
  },

  "q-js-13": {
    id: "q-js-13",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке Promise?",
    idealAnswer:
      "Promise — це об’єкт, який представляє майбутній результат асинхронної операції. Він може перебувати у станах pending, fulfilled або rejected. Результат можна обробляти через `.then()`, `.catch()` і `.finally()`.",
    shortAnswer:
      "Promise представляє майбутній результат асинхронної операції.",
    weight: 3,
    tags: ["javascript", "async"],
  },

  "q-js-14": {
    id: "q-js-14",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між Promise `.then()` і async/await?",
    idealAnswer:
      "Обидва підходи працюють з Promise. `.then()` використовує callback для обробки результату, а `async/await` дозволяє записувати асинхронний код у більш послідовному стилі. `await` можна використовувати всередині `async`-функції.",
    shortAnswer:
      "`async/await` — зручніший синтаксис роботи з Promise, а `.then()` використовує callback-ланцюжок.",
    weight: 3,
    tags: ["javascript", "async", "promise"],
  },

  "q-js-15": {
    id: "q-js-15",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Для чого потрібні try/catch?",
    idealAnswer:
      "`try/catch` використовується для перехоплення помилок під час виконання коду. Потенційно небезпечний код розміщують у `try`, а обробку помилки — у `catch`. Для асинхронного коду з `await` це дозволяє обробляти відхилені Promise.",
    shortAnswer:
      "`try/catch` дозволяє перехоплювати та обробляти помилки під час виконання.",
    weight: 2,
    tags: ["javascript", "errors"],
  },

  "q-js-16": {
    id: "q-js-16",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке event loop?",
    idealAnswer:
      "Event loop — механізм JavaScript, який дозволяє виконувати асинхронні операції, незважаючи на те, що JavaScript виконує код у головному потоці. Синхронний код виконується через call stack, а завершені асинхронні операції потрапляють у відповідні черги та виконуються, коли stack звільняється.",
    shortAnswer:
      "Механізм, який координує виконання синхронного та асинхронного коду JavaScript.",
    weight: 4,
    tags: ["javascript", "event-loop", "async"],
  },

  "q-js-17": {
    id: "q-js-17",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке callback-функція?",
    idealAnswer:
      "Callback — це функція, яку передають іншій функції як аргумент, щоб викликати її пізніше. Наприклад, callback використовується в `map`, `setTimeout`, обробниках подій і багатьох API JavaScript.",
    shortAnswer: "Функція, передана іншій функції для подальшого виклику.",
    weight: 2,
    tags: ["javascript", "functions"],
  },

  "q-js-18": {
    id: "q-js-18",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке чиста функція (pure function)?",
    idealAnswer:
      "Чиста функція для однакових аргументів завжди повертає однаковий результат і не має побічних ефектів. Вона не змінює зовнішній стан, не мутує аргументи та не залежить від прихованих зовнішніх даних. Чисті функції особливо важливі для reducer-ів.",
    shortAnswer:
      "Функція без побічних ефектів, яка для однакових аргументів завжди повертає однаковий результат.",
    weight: 3,
    tags: ["javascript", "functional-programming"],
  },

  "q-js-19": {
    id: "q-js-19",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке immutability і чому вона важлива в React?",
    idealAnswer:
      "Immutability означає, що існуючі об’єкти та масиви не змінюються напряму, а замість цього створюються нові значення. React використовує порівняння посилань для визначення змін, тому створення нового об’єкта або масиву допомагає коректно визначати оновлення стану.",
    shortAnswer:
      "Замість мутації існуючих даних створюється нова структура, що допомагає React визначати зміни.",
    weight: 3,
    tags: ["javascript", "react", "immutability"],
  },

  // =========================================================
  // React: основи
  // =========================================================

  "q-react-01": {
    id: "q-react-01",
    category: "React",
    difficulty: "junior",
    question: "Що таке React?",
    idealAnswer:
      "React — бібліотека JavaScript для створення користувацьких інтерфейсів на основі компонентів. Вона дозволяє описувати UI через стан і props та оновлювати необхідні частини інтерфейсу при зміні даних.",
    shortAnswer:
      "React — бібліотека JavaScript для побудови UI на основі компонентів.",
    weight: 2,
    tags: ["react", "concepts"],
  },

  "q-react-02": {
    id: "q-react-02",
    category: "React",
    difficulty: "junior",
    question: "Чому React використовує компонентний підхід?",
    idealAnswer:
      "Компоненти дозволяють розбивати великий інтерфейс на невеликі незалежні частини, які можна повторно використовувати та тестувати. Кожен компонент може мати власний стан і приймати дані через props.",
    shortAnswer:
      "Компоненти розбивають UI на невеликі, повторно використовувані та керовані частини.",
    weight: 2,
    tags: ["react", "components"],
  },

  "q-react-03": {
    id: "q-react-03",
    category: "React",
    difficulty: "junior",
    question: "Що таке React-компонент?",
    idealAnswer:
      "React-компонент — це функція або клас, який описує частину UI та повертає React-елементи. Сучасний React переважно використовує функціональні компоненти та хуки.",
    shortAnswer:
      "Компонент — частина UI, яка описується функцією або класом і повертає React-елементи.",
    weight: 2,
    tags: ["react", "components"],
  },

  "q-react-04": {
    id: "q-react-04",
    category: "React",
    difficulty: "junior",
    question: "Що таке JSX?",
    idealAnswer:
      "JSX — синтаксис, який дозволяє описувати структуру UI у коді JavaScript у вигляді HTML-подібної розмітки. JSX не є HTML і перед виконанням перетворюється на JavaScript-виклики, які створюють React-елементи.",
    shortAnswer:
      "HTML-подібний синтаксис для опису React UI всередині JavaScript.",
    weight: 2,
    tags: ["react", "jsx"],
  },

  "q-react-05": {
    id: "q-react-05",
    category: "React",
    difficulty: "junior",
    question: "Чим JSX відрізняється від HTML?",
    idealAnswer:
      "JSX є синтаксисом JavaScript, а не HTML-документом. У JSX використовуються JavaScript-вирази через `{}`, `className` замість `class`, camelCase для багатьох атрибутів і обов’язкове коректне закриття елементів.",
    shortAnswer:
      "JSX — JavaScript-синтаксис для UI, тому має власні правила та дозволяє використовувати JS-вирази.",
    weight: 2,
    tags: ["react", "jsx"],
  },

  "q-react-06": {
    id: "q-react-06",
    category: "React",
    difficulty: "junior",
    question: "Що таке props?",
    idealAnswer:
      "Props — це вхідні дані компонента, які передаються від батьківського компонента до дочірнього. Props доступні лише для читання і не повинні змінюватися дочірнім компонентом.",
    shortAnswer:
      "Props — вхідні дані, які батьківський компонент передає дочірньому.",
    weight: 2,
    tags: ["react", "props"],
  },

  "q-react-07": {
    id: "q-react-07",
    category: "React",
    difficulty: "junior",
    question: "Що таке state?",
    idealAnswer:
      "State — внутрішні дані компонента, від зміни яких залежить його UI. У функціональних компонентах для роботи зі станом зазвичай використовується `useState` або інші хуки.",
    shortAnswer:
      "State — внутрішні дані компонента, зміна яких може спричинити повторний рендер.",
    weight: 2,
    tags: ["react", "state"],
  },

  "q-react-08": {
    id: "q-react-08",
    category: "React",
    difficulty: "junior",
    question: "У чому різниця між props і state?",
    idealAnswer:
      "Props приходять у компонент ззовні та призначені для передачі даних між компонентами. State належить самому компоненту й може змінюватися через відповідні механізми React.",
    shortAnswer:
      "Props — зовнішні вхідні дані компонента; state — його внутрішній змінюваний стан.",
    weight: 3,
    tags: ["react", "props", "state"],
  },

  "q-react-09": {
    id: "q-react-09",
    category: "React",
    difficulty: "junior",
    question: "Чи можна змінювати props напряму?",
    idealAnswer:
      "Ні. Props є read-only. Якщо компоненту потрібно змінити дані, він має повідомити про це батьківський компонент через callback або працювати зі своїм локальним state.",
    shortAnswer:
      "Ні, props не можна мутувати; для зміни даних використовують state або callback до батьківського компонента.",
    weight: 2,
    tags: ["react", "props"],
  },

  "q-react-10": {
    id: "q-react-10",
    category: "React",
    difficulty: "junior",
    question: "Як передати дані від батьківського компонента до дочірнього?",
    idealAnswer:
      'Дані передають через props. Наприклад: `<User name="Ivan" />`, а всередині компонента отримують `name` через параметри функції.',
    shortAnswer: "Через props.",
    weight: 2,
    tags: ["react", "props"],
  },

  "q-react-11": {
    id: "q-react-11",
    category: "React",
    difficulty: "junior",
    question: "Як передати дані від дочірнього компонента до батьківського?",
    idealAnswer:
      "Зазвичай батьківський компонент передає дочірньому callback через props. Дочірній компонент викликає цю функцію та передає потрібні дані.",
    shortAnswer:
      "Через callback-функцію, яку батьківський компонент передає дочірньому через props.",
    weight: 3,
    tags: ["react", "props", "events"],
  },

  "q-react-12": {
    id: "q-react-12",
    category: "React",
    difficulty: "junior",
    question: "Що таке `children` у React?",
    idealAnswer:
      "`children` — спеціальний prop, який містить елементи, передані між відкриваючим і закриваючим тегами компонента. Наприклад, у `<Card><Button /></Card>` компонент `Card` отримує `<Button />` через `children`.",
    shortAnswer:
      "`children` — спеціальний prop для передачі вкладеного JSX у компонент.",
    weight: 2,
    tags: ["react", "children"],
  },

  "q-react-13": {
    id: "q-react-13",
    category: "React",
    difficulty: "junior",
    question: "Для чого потрібен `key` при рендерингу списків?",
    idealAnswer:
      "`key` дозволяє React стабільно ідентифікувати елементи списку між рендерами. Завдяки цьому React може коректно визначати, які елементи були додані, видалені або переміщені.",
    shortAnswer:
      "`key` допомагає React ідентифікувати елементи списку між рендерами.",
    weight: 3,
    tags: ["react", "lists", "keys"],
  },

  "q-react-14": {
    id: "q-react-14",
    category: "React",
    difficulty: "junior",
    question: "Чому використання index як key може бути проблемою?",
    idealAnswer:
      "Індекс можна використовувати для стабільного списку, який не змінюється. Але якщо елементи додаються, видаляються або сортуються, індекси змінюються, і React може неправильно зіставити елементи та їхній внутрішній стан. Краще використовувати стабільний унікальний ID.",
    shortAnswer:
      "Index як key може бути нестабільним при зміні порядку або складу списку; краще використовувати унікальний ID.",
    weight: 3,
    tags: ["react", "lists", "keys"],
  },

  "q-react-15": {
    id: "q-react-15",
    category: "React",
    difficulty: "junior",
    question: "Як зробити умовний рендеринг у React?",
    idealAnswer:
      "Для умовного рендерингу можна використовувати `if`, тернарний оператор або `&&`. Наприклад: `{isLoading ? <Loader /> : <Content />}` або `{isAdmin && <AdminPanel />}`.",
    shortAnswer: "Через `if`, тернарний оператор або логічний оператор `&&`.",
    weight: 2,
    tags: ["react", "rendering"],
  },

  "q-react-16": {
    id: "q-react-16",
    category: "React",
    difficulty: "junior",
    question: "Як відрендерити масив компонентів у React?",
    idealAnswer:
      "Зазвичай використовують `map`, який повертає JSX для кожного елемента. Кожен елемент списку повинен мати стабільний `key`: `items.map(item => <Item key={item.id} {...item} />)`.",
    shortAnswer:
      "Через `map()` із JSX для кожного елемента та стабільним `key`.",
    weight: 2,
    tags: ["react", "lists"],
  },

  "q-react-17": {
    id: "q-react-17",
    category: "React",
    difficulty: "junior",
    question: "Що відбувається, коли змінюється state?",
    idealAnswer:
      "Оновлення state через setter повідомляє React, що компонент потрібно повторно обробити. React виконує новий render, порівнює результат із попереднім і оновлює необхідні DOM-вузли.",
    shortAnswer:
      "React планує повторний рендер компонента, порівнює результат і оновлює необхідну частину UI.",
    weight: 3,
    tags: ["react", "state", "render"],
  },

  "q-react-18": {
    id: "q-react-18",
    category: "React",
    difficulty: "junior",
    question: "Що таке controlled component?",
    idealAnswer:
      "Controlled component — компонент форми, значення якого контролюється React state. Наприклад, `<input value={name} onChange={e => setName(e.target.value)} />`. Джерелом істини є state React.",
    shortAnswer: "Компонент форми, значення якого контролюється React state.",
    weight: 3,
    tags: ["react", "forms"],
  },

  "q-react-19": {
    id: "q-react-19",
    category: "React",
    difficulty: "junior",
    question: "У чому різниця між controlled та uncontrolled input?",
    idealAnswer:
      "У controlled input значення зберігається в React state та оновлюється через `onChange`. В uncontrolled input значення переважно зберігається самим DOM, а доступ до нього можна отримати через `ref`.",
    shortAnswer:
      "Controlled — значення керується React state; uncontrolled — значення зберігається в DOM.",
    weight: 3,
    tags: ["react", "forms"],
  },

  // =========================================================
  // React Hooks
  // =========================================================

  "q-hooks-01": {
    id: "q-hooks-01",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке Hooks у React?",
    idealAnswer:
      "Hooks — це функції React, які дозволяють функціональним компонентам використовувати state, effects, refs, context та інші можливості React. Приклади: `useState`, `useEffect`, `useRef`, `useContext`.",
    shortAnswer:
      "Функції React, які дозволяють використовувати state та інші можливості у функціональних компонентах.",
    weight: 2,
    tags: ["react", "hooks"],
  },

  "q-hooks-02": {
    id: "q-hooks-02",
    category: "React Hooks",
    difficulty: "junior",
    question: "Для чого використовується `useState`?",
    idealAnswer:
      "`useState` додає локальний стан функціональному компоненту. Він повертає поточне значення state та функцію для його оновлення. Оновлення через setter повідомляє React про необхідність нового рендера.",
    shortAnswer:
      "`useState` дозволяє зберігати та оновлювати локальний стан компонента.",
    weight: 2,
    tags: ["react", "hooks", "useState"],
  },

  "q-hooks-03": {
    id: "q-hooks-03",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що робить `useEffect`?",
    idealAnswer:
      "`useEffect` дозволяє виконувати side effects після рендеру компонента. Наприклад, запити до API, підписки, таймери або синхронізацію з зовнішніми системами.",
    shortAnswer:
      "`useEffect` використовується для side effects, які виконуються після рендеру.",
    weight: 3,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-04": {
    id: "q-hooks-04",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що означає порожній масив залежностей `[]` у useEffect?",
    idealAnswer:
      "Порожній масив залежностей означає, що effect не залежить від значень props або state і запускається після початкового монтування компонента. Cleanup може виконатися при його розмонтуванні.",
    shortAnswer:
      "Effect запускається після початкового монтування, а cleanup — при розмонтуванні.",
    weight: 3,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-05": {
    id: "q-hooks-05",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що станеться, якщо не передати масив залежностей у useEffect?",
    idealAnswer:
      "Якщо dependency array не переданий, effect запускається після кожного завершеного рендера компонента.",
    shortAnswer: "Effect виконується після кожного рендера.",
    weight: 2,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-06": {
    id: "q-hooks-06",
    category: "React Hooks",
    difficulty: "junior",
    question: "Для чого потрібні залежності useEffect?",
    idealAnswer:
      "Dependency array визначає, після яких змін effect має виконуватися повторно. React порівнює залежності між рендерами і запускає effect, якщо залежність змінилася.",
    shortAnswer:
      "Залежності визначають, при зміні яких значень useEffect має виконуватися повторно.",
    weight: 3,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-07": {
    id: "q-hooks-07",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке cleanup-функція в useEffect?",
    idealAnswer:
      "Cleanup повертається з callback `useEffect` і використовується для очищення side effects: таймерів, підписок, event listeners або інших ресурсів. Вона виконується перед повторним запуском effect при зміні залежностей і при розмонтуванні компонента.",
    shortAnswer:
      "Функція очищення ресурсів, створених effect, перед повторним запуском або розмонтуванням.",
    weight: 3,
    tags: ["react", "hooks", "cleanup"],
  },

  "q-hooks-08": {
    id: "q-hooks-08",
    category: "React Hooks",
    difficulty: "junior",
    question: "Для чого використовується useRef?",
    idealAnswer:
      "`useRef` повертає об’єкт із властивістю `.current`, значення якої зберігається між рендерами. Зміна `.current` сама по собі не викликає повторний рендер. Його часто використовують для доступу до DOM або зберігання мутабельного значення.",
    shortAnswer:
      "Зберігає значення між рендерами без виклику ререндеру та часто використовується для доступу до DOM.",
    weight: 3,
    tags: ["react", "hooks", "refs"],
  },

  "q-hooks-09": {
    id: "q-hooks-09",
    category: "React Hooks",
    difficulty: "junior",
    question: "У чому різниця між useRef і useState?",
    idealAnswer:
      "Значення `useState` використовується під час рендеру, а його оновлення викликає новий рендер. Зміна `.current` у `useRef` не викликає ререндер. Тому state використовують для даних, що впливають на UI, а ref — для значень, які не повинні безпосередньо впливати на UI.",
    shortAnswer: "Оновлення state викликає ререндер, а зміна ref — ні.",
    weight: 3,
    tags: ["react", "hooks", "refs", "state"],
  },

  "q-hooks-10": {
    id: "q-hooks-10",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке useMemo?",
    idealAnswer:
      "`useMemo` кешує результат обчислення між рендерами та повторно обчислює його лише тоді, коли змінюються залежності. Його використовують для дорогих обчислень або стабілізації обчисленого значення, але не варто застосовувати без потреби.",
    shortAnswer:
      "`useMemo` кешує результат обчислення та перераховує його при зміні залежностей.",
    weight: 3,
    tags: ["react", "hooks", "performance"],
  },

  "q-hooks-11": {
    id: "q-hooks-11",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке useCallback?",
    idealAnswer:
      "`useCallback` кешує посилання на функцію між рендерами та створює нову функцію лише при зміні залежностей. Це може бути корисно, коли функція передається в оптимізований дочірній компонент або використовується як залежність іншого hook.",
    shortAnswer: "`useCallback` кешує посилання на функцію між рендерами.",
    weight: 3,
    tags: ["react", "hooks", "performance"],
  },

  "q-hooks-12": {
    id: "q-hooks-12",
    category: "React Hooks",
    difficulty: "junior",
    question: "У чому різниця між useMemo і useCallback?",
    idealAnswer:
      "`useMemo` кешує результат обчислення, а `useCallback` кешує саму функцію. `useMemo(() => value, deps)` повертає значення, а `useCallback(fn, deps)` — функцію.",
    shortAnswer: "`useMemo` кешує значення, `useCallback` — функцію.",
    weight: 3,
    tags: ["react", "hooks", "performance"],
  },

  "q-hooks-13": {
    id: "q-hooks-13",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке custom hook?",
    idealAnswer:
      "Custom hook — це JavaScript-функція, назва якої зазвичай починається з `use`, яка використовує інші hooks для інкапсуляції та повторного використання логіки. Наприклад, `useFetch` може містити логіку завантаження даних, loading і error.",
    shortAnswer:
      "Функція з префіксом `use`, яка інкапсулює та повторно використовує React-логіку.",
    weight: 3,
    tags: ["react", "hooks", "custom-hooks"],
  },

  "q-hooks-14": {
    id: "q-hooks-14",
    category: "React Hooks",
    difficulty: "junior",
    question: "Які є Rules of Hooks?",
    idealAnswer:
      "Hooks потрібно викликати лише на верхньому рівні компонента або custom hook — не всередині циклів, умов чи вкладених функцій. Також hooks можна викликати лише з React-компонентів або інших custom hooks. Це дозволяє React зберігати стабільний порядок виклику hooks.",
    shortAnswer:
      "Hooks викликають на верхньому рівні React-компонента або custom hook, не всередині умов і циклів.",
    weight: 4,
    tags: ["react", "hooks", "rules"],
  },

  // =========================================================
  // API / HTTP / Network
  // =========================================================

  "q-api-01": {
    id: "q-api-01",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Як отримати дані з API у React?",
    idealAnswer:
      "Для HTTP-запиту можна використати `fetch` або бібліотеку на кшталт Axios. У функціональному компоненті часто запит виконують у `useEffect`, а результат зберігають у state. Також зазвичай потрібно окремо обробляти loading і error.",
    shortAnswer:
      "Виконати HTTP-запит, зберегти результат у state та окремо обробити loading/error.",
    weight: 3,
    tags: ["react", "api", "fetch"],
  },

  "q-api-02": {
    id: "q-api-02",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Чому API-запит у React часто виконують у useEffect?",
    idealAnswer:
      "Запит до API є side effect, оскільки він взаємодіє із зовнішньою системою. `useEffect` дозволяє виконати цей side effect після рендеру та контролювати, коли саме його повторювати через dependencies.",
    shortAnswer:
      "Тому що HTTP-запит є side effect і має виконуватися поза самим render.",
    weight: 3,
    tags: ["react", "api", "useEffect"],
  },

  "q-api-03": {
    id: "q-api-03",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Як правильно показати loading під час API-запиту?",
    idealAnswer:
      "Зазвичай створюють state `loading`, встановлюють його в `true` перед запитом і в `false` після завершення. У UI за значенням loading показують loader або інший стан завантаження.",
    shortAnswer:
      "Зберігати loading у state та показувати відповідний UI до завершення запиту.",
    weight: 2,
    tags: ["react", "api", "loading"],
  },

  "q-api-04": {
    id: "q-api-04",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Як обробити помилку API-запиту?",
    idealAnswer:
      "Помилку потрібно перехопити через `try/catch` для async/await або `.catch()` для Promise. Її можна зберегти в окремий state `error` і показати користувачу зрозумілий стан помилки.",
    shortAnswer:
      "Перехопити помилку через try/catch або catch Promise та відобразити error state.",
    weight: 2,
    tags: ["react", "api", "errors"],
  },

  "q-api-05": {
    id: "q-api-05",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Що таке REST API?",
    idealAnswer:
      "REST — архітектурний стиль побудови API, що працює з ресурсами через стандартні HTTP-методи та URL. Найчастіше API повертає дані у JSON і використовує stateless-взаємодію між клієнтом і сервером.",
    shortAnswer:
      "Архітектурний стиль API на основі ресурсів, URL і стандартних HTTP-методів.",
    weight: 3,
    tags: ["network", "api", "rest"],
  },

  "q-api-06": {
    id: "q-api-06",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "У чому різниця між GET, POST, PUT, PATCH і DELETE?",
    idealAnswer:
      "`GET` отримує дані, `POST` зазвичай створює ресурс або запускає операцію, `PUT` зазвичай повністю замінює ресурс, `PATCH` частково змінює ресурс, `DELETE` видаляє ресурс.",
    shortAnswer:
      "GET — отримання; POST — створення; PUT — повна заміна; PATCH — часткова зміна; DELETE — видалення.",
    weight: 3,
    tags: ["network", "http"],
  },

  "q-api-07": {
    id: "q-api-07",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Що означають HTTP-коди 200, 201, 400, 401, 403, 404 і 500?",
    idealAnswer:
      "200 — успішний запит; 201 — ресурс створено; 400 — некоректний запит; 401 — потрібна автентифікація або вона не пройдена; 403 — доступ заборонений; 404 — ресурс не знайдено; 500 — внутрішня помилка сервера.",
    shortAnswer:
      "2xx — успіх, 4xx — помилка на стороні клієнта/запиту, 5xx — помилка сервера.",
    weight: 4,
    tags: ["network", "http"],
  },

  "q-api-08": {
    id: "q-api-08",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Що таке токен-автентифікація?",
    idealAnswer:
      "Після успішної автентифікації сервер може видати токен, який клієнт використовує в наступних запитах для підтвердження своєї автентичності. Наприклад, access token часто передають у заголовку `Authorization: Bearer <token>`.",
    shortAnswer:
      "Клієнт отримує токен після входу та використовує його для автентифікації наступних запитів.",
    weight: 3,
    tags: ["network", "auth", "security"],
  },

  "q-api-09": {
    id: "q-api-09",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "У чому різниця між fetch та Axios?",
    idealAnswer:
      "`fetch` — стандартний Web API браузера, який не потребує встановлення бібліотеки. Axios — стороння HTTP-бібліотека з додатковими можливостями, наприклад interceptors, автоматичною роботою з JSON та зручнішою конфігурацією запитів.",
    shortAnswer:
      "`fetch` — вбудований Web API, Axios — стороння бібліотека з додатковими можливостями.",
    weight: 2,
    tags: ["network", "fetch", "axios"],
  },

  // =========================================================
  // TypeScript
  // =========================================================

  "q-ts-01": {
    id: "q-ts-01",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке TypeScript і чим він відрізняється від JavaScript?",
    idealAnswer:
      "TypeScript — надмножина JavaScript, яка додає статичну типізацію. TypeScript-код перевіряється та перетворюється на JavaScript, який може виконуватися в браузері або Node.js. Типізація допомагає виявляти багато помилок ще під час розробки.",
    shortAnswer:
      "TypeScript — надмножина JavaScript зі статичною типізацією, яка компілюється у JavaScript.",
    weight: 3,
    tags: ["typescript", "javascript"],
  },

  "q-ts-02": {
    id: "q-ts-02",
    category: "TypeScript",
    difficulty: "junior",
    question: "У чому різниця між `type` і `interface`?",
    idealAnswer:
      "Обидва використовуються для опису типів. `interface` особливо зручний для опису форми об’єктів і підтримує розширення через `extends`. `type` може описувати не лише об’єкти, а й union, intersection, примітиви та інші складні типи. У багатьох простих випадках вони взаємозамінні.",
    shortAnswer:
      "`interface` зручний для контрактів об’єктів, `type` має ширші можливості для побудови типів.",
    weight: 3,
    tags: ["typescript", "types"],
  },

  "q-ts-03": {
    id: "q-ts-03",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке union type?",
    idealAnswer:
      "Union дозволяє змінній мати одне з кількох визначених значень або типів. Наприклад: `let status: 'loading' | 'success' | 'error'`. Значення повинно відповідати одному з варіантів.",
    shortAnswer:
      "Тип, який дозволяє значенню бути одним із декількох визначених типів або значень.",
    weight: 2,
    tags: ["typescript", "union"],
  },

  "q-ts-04": {
    id: "q-ts-04",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке optional property `?`?",
    idealAnswer:
      "Знак `?` означає, що властивість є необов’язковою. Наприклад, `interface User { name: string; age?: number }` дозволяє створити User без `age`.",
    shortAnswer: "`?` робить властивість необов’язковою.",
    weight: 2,
    tags: ["typescript", "types"],
  },

  "q-ts-05": {
    id: "q-ts-05",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке generics у TypeScript?",
    idealAnswer:
      "Generics дозволяють писати повторно використовуваний код, який працює з різними типами, зберігаючи типобезпеку. Наприклад, `function identity<T>(value: T): T { return value }` працює з різними типами без втрати інформації про тип.",
    shortAnswer:
      "Generics дозволяють створювати універсальний код, який зберігає інформацію про конкретний тип.",
    weight: 3,
    tags: ["typescript", "generics"],
  },

  "q-ts-06": {
    id: "q-ts-06",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке `any` і чому його не варто використовувати без потреби?",
    idealAnswer:
      "`any` фактично вимикає перевірку типів для конкретного значення. Це може приховувати помилки та зменшувати користь TypeScript. Краще використовувати конкретні типи, union, generics або `unknown`, коли тип справді невідомий.",
    shortAnswer:
      "`any` вимикає більшість типових перевірок, тому його надмірне використання зменшує користь TypeScript.",
    weight: 3,
    tags: ["typescript", "any"],
  },

  "q-ts-07": {
    id: "q-ts-07",
    category: "TypeScript",
    difficulty: "junior",
    question: "У чому різниця між `unknown` та `any`?",
    idealAnswer:
      "`unknown` також дозволяє зберігати значення невідомого типу, але TypeScript не дозволить виконувати над ним довільні операції без попередньої перевірки типу. `any` таких обмежень не має.",
    shortAnswer:
      "`unknown` вимагає перевірити тип перед використанням, а `any` фактично вимикає ці перевірки.",
    weight: 3,
    tags: ["typescript", "unknown", "any"],
  },

  "q-ts-08": {
    id: "q-ts-08",
    category: "TypeScript",
    difficulty: "junior",
    question: "Як типізувати props React-компонента?",
    idealAnswer:
      "Можна створити `type` або `interface` і використати його як тип props. Наприклад: `type Props = { name: string; age?: number }; function User({ name, age }: Props) { ... }`.",
    shortAnswer:
      "Створити type або interface для props і використати його в типізації компонента.",
    weight: 3,
    tags: ["typescript", "react", "props"],
  },

  // =========================================================
  // HTML / CSS
  // =========================================================

  "q-html-01": {
    id: "q-html-01",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке семантичний HTML?",
    idealAnswer:
      "Семантичний HTML використовує елементи відповідно до їхнього призначення: `header`, `nav`, `main`, `section`, `article`, `footer` тощо. Це покращує структуру документа, доступність і зрозумілість коду.",
    shortAnswer:
      "Використання HTML-елементів відповідно до їхнього змістовного призначення.",
    weight: 2,
    tags: ["html", "accessibility"],
  },

  "q-html-02": {
    id: "q-html-02",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "У чому різниця між div, section, article і main?",
    idealAnswer:
      "`div` — нейтральний контейнер без семантики. `section` — тематичний розділ документа. `article` — самостійний блок контенту, який може існувати окремо. `main` містить основний унікальний контент сторінки.",
    shortAnswer:
      "`div` — нейтральний контейнер; `section` — тематичний розділ; `article` — самостійний контент; `main` — основний контент сторінки.",
    weight: 3,
    tags: ["html", "semantic"],
  },

  "q-css-01": {
    id: "q-css-01",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке специфічність (specificity) у CSS?",
    idealAnswer:
      "Специфічність визначає, яке CSS-правило матиме пріоритет, якщо кілька правил підходять до одного елемента. Загалом селектори з id мають більшу специфічність, ніж класи, атрибути та псевдокласи, а ті, у свою чергу, вищу за селектори тегів.",
    shortAnswer:
      "Механізм визначення пріоритету CSS-селекторів при конфлікті правил.",
    weight: 3,
    tags: ["css", "specificity"],
  },

  "q-css-02": {
    id: "q-css-02",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "У чому різниця між Flexbox і CSS Grid?",
    idealAnswer:
      "Flexbox — одновимірна модель компонування, яка працює переважно з рядком або колонкою. Grid — двовимірна модель, яка одночасно працює з рядками та колонками.",
    shortAnswer: "Flexbox — одновимірне компонування; Grid — двовимірне.",
    weight: 2,
    tags: ["css", "flexbox", "grid"],
  },

  "q-css-03": {
    id: "q-css-03",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке responsive layout?",
    idealAnswer:
      "Responsive layout — підхід до створення інтерфейсу, який адаптується до різних розмірів екрана. Для цього використовують гнучкі одиниці, Flexbox/Grid, media queries, responsive images та інші техніки.",
    shortAnswer:
      "Макет, який адаптується до різних розмірів екрана та пристроїв.",
    weight: 2,
    tags: ["css", "responsive"],
  },

  "q-css-04": {
    id: "q-css-04",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Для чого використовуються media queries?",
    idealAnswer:
      "Media queries дозволяють застосовувати CSS-правила залежно від характеристик пристрою або viewport, найчастіше від його ширини. Вони є основним інструментом responsive design.",
    shortAnswer:
      "Дозволяють застосовувати різні CSS-правила залежно від характеристик viewport або пристрою.",
    weight: 2,
    tags: ["css", "responsive", "media-query"],
  },

  "q-css-05": {
    id: "q-css-05",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "У чому різниця між position: absolute і position: relative?",
    idealAnswer:
      "`relative` залишає елемент у звичайному потоці та дозволяє зміщувати його відносно початкової позиції. `absolute` прибирає елемент зі звичайного потоку та позиціонує його відносно найближчого позиціонованого предка.",
    shortAnswer:
      "`relative` зберігає елемент у потоці, `absolute` — виводить його з потоку та позиціонує відносно предка.",
    weight: 3,
    tags: ["css", "position"],
  },

  "q-css-06": {
    id: "q-css-06",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Для чого використовується z-index?",
    idealAnswer:
      "`z-index` визначає порядок накладання позиціонованих або інших відповідних елементів у stacking context. Елемент із більшим значенням може відображатися поверх елемента з меншим.",
    shortAnswer: "Керує порядком накладання елементів по осі Z.",
    weight: 2,
    tags: ["css", "z-index"],
  },

  "q-css-07": {
    id: "q-css-07",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке CSS-препроцесор, наприклад Sass?",
    idealAnswer:
      "Sass розширює можливості CSS додатковими можливостями, такими як змінні, вкладеність, mixins і функції. Sass-код компілюється у звичайний CSS, який розуміє браузер.",
    shortAnswer:
      "Інструмент, що розширює CSS можливостями на кшталт змінних і mixins та компілюється у CSS.",
    weight: 2,
    tags: ["css", "sass"],
  },

  "q-css-08": {
    id: "q-css-08",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Як зробити компонент адаптивним?",
    idealAnswer:
      "Потрібно використовувати responsive layout: гнучкі розміри, Flexbox або Grid, media queries, відносні одиниці та коректну роботу з контентом. Компонент не повинен залежати від одного фіксованого розміру екрана.",
    shortAnswer:
      "Використовувати гнучкий layout, media queries та розміри, які адаптуються до viewport.",
    weight: 3,
    tags: ["css", "responsive", "components"],
  },

  // =========================================================
  // Git
  // =========================================================

  "q-git-01": {
    id: "q-git-01",
    category: "Git",
    difficulty: "junior",
    question: "Що таке Git?",
    idealAnswer:
      "Git — розподілена система контролю версій, яка дозволяє зберігати історію змін коду, працювати з гілками, об’єднувати зміни та повертатися до попередніх версій.",
    shortAnswer:
      "Система контролю версій для збереження історії змін і роботи з кодом.",
    weight: 2,
    tags: ["git"],
  },

  "q-git-02": {
    id: "q-git-02",
    category: "Git",
    difficulty: "junior",
    question: "У чому різниця між git pull і git fetch?",
    idealAnswer:
      "`git fetch` завантажує нові зміни з remote, але не об’єднує їх із поточною гілкою. `git pull` зазвичай виконує fetch, а потім інтегрує отримані зміни у поточну гілку.",
    shortAnswer:
      "`fetch` лише отримує зміни, а `pull` отримує їх і інтегрує в поточну гілку.",
    weight: 3,
    tags: ["git", "remote"],
  },

  "q-git-03": {
    id: "q-git-03",
    category: "Git",
    difficulty: "junior",
    question: "Що таке merge conflict і як його вирішити?",
    idealAnswer:
      "Merge conflict виникає, коли Git не може автоматично об’єднати зміни, наприклад коли одна й та сама ділянка файлу була змінена по-різному. Потрібно вручну вибрати правильний код, видалити conflict markers, виконати `git add` і завершити merge.",
    shortAnswer:
      "Виникає, коли Git не може автоматично об’єднати зміни; конфлікт вирішують вручну і завершують merge.",
    weight: 3,
    tags: ["git", "merge"],
  },

  "q-git-04": {
    id: "q-git-04",
    category: "Git",
    difficulty: "junior",
    question: "Що таке git commit?",
    idealAnswer:
      "Commit — це зафіксований набір змін у локальній історії Git. Він містить інформацію про зміни та повідомлення, яке описує їх.",
    shortAnswer: "Commit фіксує набір змін у локальній історії Git.",
    weight: 2,
    tags: ["git", "commit"],
  },

  "q-git-05": {
    id: "q-git-05",
    category: "Git",
    difficulty: "junior",
    question: "Для чого потрібні Git branches?",
    idealAnswer:
      "Гілки дозволяють розробляти функціональність або виправлення окремо від основної гілки. Після завершення роботи зміни можна об’єднати через merge або інший workflow.",
    shortAnswer:
      "Гілки ізолюють різні лінії розробки та дозволяють працювати над функціями незалежно.",
    weight: 2,
    tags: ["git", "branches"],
  },

  "q-git-06": {
    id: "q-git-06",
    category: "Git",
    difficulty: "junior",
    question: "Що робить git stash?",
    idealAnswer:
      "`git stash` тимчасово зберігає незакомічені зміни робочої директорії, щоб можна було переключитися на іншу гілку або виконати іншу роботу без створення проміжного commit.",
    shortAnswer:
      "Тимчасово зберігає незакомічені зміни, щоб очистити робочу директорію.",
    weight: 2,
    tags: ["git", "stash"],
  },

  // =========================================================
  // State management / Context / Redux
  // =========================================================

  "q-state-01": {
    id: "q-state-01",
    category: "State Management",
    difficulty: "junior",
    question: "Що таке lifting state up?",
    idealAnswer:
      "Lifting state up — перенесення спільного state до найближчого спільного батьківського компонента, щоб кілька дочірніх компонентів могли працювати з одним джерелом даних через props.",
    shortAnswer:
      "Перенесення спільного state до найближчого спільного батьківського компонента.",
    weight: 3,
    tags: ["react", "state"],
  },

  "q-state-02": {
    id: "q-state-02",
    category: "State Management",
    difficulty: "junior",
    question: "Коли достатньо useState, а коли потрібен глобальний state?",
    idealAnswer:
      "Локальний `useState` достатній, якщо дані потрібні одному компоненту або невеликій частині дерева. Глобальний state або інший shared state management може бути корисним, коли багато віддалених компонентів повинні працювати з одними даними.",
    shortAnswer:
      "useState — для локального стану; глобальний state — коли одні й ті самі дані потрібні багатьом частинам застосунку.",
    weight: 3,
    tags: ["react", "state"],
  },

  "q-state-03": {
    id: "q-state-03",
    category: "State Management",
    difficulty: "junior",
    question: "Що таке Context API?",
    idealAnswer:
      "Context API дозволяє передавати значення через дерево компонентів без необхідності вручну передавати props на кожному проміжному рівні. Контекст створюється через `createContext`, значення надається через Provider і читається через `useContext`.",
    shortAnswer:
      "Механізм передачі даних через дерево компонентів без prop drilling.",
    weight: 3,
    tags: ["react", "context"],
  },

  "q-state-04": {
    id: "q-state-04",
    category: "State Management",
    difficulty: "junior",
    question: "Які можуть бути недоліки Context API?",
    idealAnswer:
      "Якщо значення Context часто змінюється, багато споживачів контексту можуть отримувати оновлення та ререндеритися. Також великий обсяг різнорідного глобального стану може зробити Context складнішим для підтримки.",
    shortAnswer:
      "Часті зміни Context можуть спричиняти зайві ререндери та ускладнювати керування великим глобальним станом.",
    weight: 3,
    tags: ["react", "context", "performance"],
  },

  "q-redux-01": {
    id: "q-redux-01",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке Redux?",
    idealAnswer:
      "Redux — бібліотека для централізованого керування станом. Стан зберігається у store, зміни описуються actions, а reducer-и обчислюють новий стан.",
    shortAnswer:
      "Бібліотека для централізованого та передбачуваного керування станом застосунку.",
    weight: 2,
    tags: ["redux", "state"],
  },

  "q-redux-02": {
    id: "q-redux-02",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке Redux Toolkit?",
    idealAnswer:
      "Redux Toolkit — офіційний рекомендований набір інструментів для написання Redux-коду. Він спрощує створення store, reducer-ів і actions та зменшує кількість шаблонного коду.",
    shortAnswer:
      "Офіційний набір інструментів для простішої та рекомендованої роботи з Redux.",
    weight: 3,
    tags: ["redux", "redux-toolkit"],
  },

  "q-redux-03": {
    id: "q-redux-03",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке store, action, reducer і slice у Redux?",
    idealAnswer:
      "Store містить стан застосунку. Action описує подію або зміну, яку потрібно виконати. Reducer обчислює новий стан на основі поточного state та action. Slice у Redux Toolkit групує state, reducer-и та відповідні actions для певної частини стану.",
    shortAnswer:
      "Store — стан; action — подія; reducer — обчислення нового стану; slice — логічна частина Redux state.",
    weight: 4,
    tags: ["redux", "redux-toolkit"],
  },

  "q-redux-04": {
    id: "q-redux-04",
    category: "Redux",
    difficulty: "junior",
    question: "Опиши потік даних у Redux.",
    idealAnswer:
      "Компонент викликає `dispatch(action)`. Action потрапляє до reducer, який на основі поточного state та action обчислює новий state. Store оновлюється, а компоненти, які підписані на змінену частину стану, отримують нові дані та рендеряться.",
    shortAnswer:
      "dispatch(action) → reducer → новий state у store → оновлення підписаних компонентів.",
    weight: 4,
    tags: ["redux", "data-flow"],
  },

  "q-redux-05": {
    id: "q-redux-05",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке reducer?",
    idealAnswer:
      "Reducer — функція, яка отримує поточний state та action і повертає новий state. Reducer має бути чистим і не повинен виконувати side effects.",
    shortAnswer:
      "Чиста функція, яка на основі state та action обчислює новий state.",
    weight: 3,
    tags: ["redux", "reducer"],
  },

  "q-redux-06": {
    id: "q-redux-06",
    category: "Redux",
    difficulty: "junior",
    question: "Для чого потрібні useSelector і useDispatch?",
    idealAnswer:
      "`useSelector` дозволяє отримати потрібну частину Redux state та підписатися на її зміни. `useDispatch` повертає функцію `dispatch`, через яку компонент відправляє actions у Redux.",
    shortAnswer: "`useSelector` читає state, `useDispatch` відправляє actions.",
    weight: 3,
    tags: ["redux", "hooks"],
  },

  "q-redux-07": {
    id: "q-redux-07",
    category: "Redux",
    difficulty: "junior",
    question: "Для чого потрібен middleware у Redux?",
    idealAnswer:
      "Middleware дозволяє виконувати додаткову логіку між dispatch action та його обробкою reducer-ом. Його використовують, наприклад, для асинхронних операцій, логування або додаткової обробки actions.",
    shortAnswer:
      "Дозволяє додавати логіку між dispatch action і його обробкою reducer-ом.",
    weight: 3,
    tags: ["redux", "middleware"],
  },

  "q-redux-08": {
    id: "q-redux-08",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке selector у Redux?",
    idealAnswer:
      "Selector — функція, яка отримує весь Redux state і повертає потрібну його частину. Наприклад, `useSelector(state => state.user)` отримує user state.",
    shortAnswer: "Функція, яка вибирає потрібну частину Redux state.",
    weight: 2,
    tags: ["redux", "selector"],
  },

  "q-redux-09": {
    id: "q-redux-09",
    category: "Redux",
    difficulty: "junior",
    question: "У чому різниця між Redux і Context API?",
    idealAnswer:
      "Context є вбудованим механізмом React для передачі значень через дерево компонентів. Redux — окремий state management інструмент із централізованим store, actions, reducers і middleware. Context часто достатній для простого shared state, а Redux має більше спеціалізованих інструментів для складнішого стану.",
    shortAnswer:
      "Context — механізм React для передачі даних; Redux — окрема система централізованого керування станом.",
    weight: 3,
    tags: ["redux", "context", "state"],
  },

  // =========================================================
  // React Router
  // =========================================================

  "q-router-01": {
    id: "q-router-01",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке React Router?",
    idealAnswer:
      "React Router — бібліотека для організації клієнтської навігації в React-застосунках. Вона дозволяє пов’язувати URL із компонентами та створювати маршрути без повного перезавантаження сторінки.",
    shortAnswer: "Бібліотека для клієнтської маршрутизації React-застосунку.",
    weight: 2,
    tags: ["react", "router"],
  },

  "q-router-02": {
    id: "q-router-02",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке route?",
    idealAnswer:
      "Route описує відповідність між певним URL-шляхом і компонентом або набором компонентів, які потрібно показати для цього шляху.",
    shortAnswer: "Правило, яке пов’язує URL-шлях із відповідним UI.",
    weight: 2,
    tags: ["react", "router"],
  },

  "q-router-03": {
    id: "q-router-03",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке dynamic route?",
    idealAnswer:
      "Dynamic route містить змінну частину URL. Наприклад, `/users/:id` може відповідати `/users/15` або `/users/42`. Значення параметра можна отримати з router.",
    shortAnswer: "Маршрут зі змінним параметром у URL, наприклад `/users/:id`.",
    weight: 3,
    tags: ["react", "router", "params"],
  },

  "q-router-04": {
    id: "q-router-04",
    category: "React Router",
    difficulty: "junior",
    question: "Чим Link відрізняється від звичайного `<a>`?",
    idealAnswer:
      "React Router `Link` виконує клієнтську навігацію без повного перезавантаження сторінки. Звичайний `<a>` переходить за URL через стандартний механізм браузера і зазвичай перезавантажує документ.",
    shortAnswer:
      "`Link` забезпечує SPA-навігацію без повного перезавантаження сторінки.",
    weight: 3,
    tags: ["react", "router", "navigation"],
  },

  "q-router-05": {
    id: "q-router-05",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке protected route?",
    idealAnswer:
      "Protected route — маршрут, доступ до якого залежить від певної умови, наприклад автентифікації користувача. Якщо користувач не має доступу, його можна перенаправити на сторінку login.",
    shortAnswer:
      "Маршрут, доступ до якого дозволяється лише за певної умови, наприклад після авторизації.",
    weight: 3,
    tags: ["react", "router", "auth"],
  },

  "q-router-06": {
    id: "q-router-06",
    category: "React Router",
    difficulty: "junior",
    question: "Як виконати програмну навігацію в React Router?",
    idealAnswer:
      "Для програмної навігації використовують відповідний navigation hook, наприклад `useNavigate`. Він дозволяє перейти на інший маршрут після події, завершення запиту або іншої логіки.",
    shortAnswer: "Через navigation API React Router, наприклад `useNavigate`.",
    weight: 2,
    tags: ["react", "router", "navigation"],
  },

  // =========================================================
  // Performance
  // =========================================================

  "q-performance-01": {
    id: "q-performance-01",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що таке повторний рендер компонента?",
    idealAnswer:
      "Повторний рендер означає, що React знову виконує компонент, щоб отримати актуальний опис UI на основі нового state або props. Це не означає автоматично повне перемальовування всього DOM.",
    shortAnswer:
      "React повторно виконує компонент для отримання актуального опису UI.",
    weight: 3,
    tags: ["react", "render", "performance"],
  },

  "q-performance-02": {
    id: "q-performance-02",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що може спричинити зайві ререндери?",
    idealAnswer:
      "Причинами можуть бути зміна state, props або context, нестабільні об’єкти та функції, які передаються дочірнім компонентам, а також відсутність необхідної мемоізації в оптимізованих компонентах.",
    shortAnswer:
      "Зміни state/props/context і нестабільні посилання на об’єкти або функції можуть спричиняти зайві ререндери.",
    weight: 3,
    tags: ["react", "performance", "render"],
  },

  "q-performance-03": {
    id: "q-performance-03",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що таке React.memo?",
    idealAnswer:
      "`React.memo` дозволяє мемоізувати функціональний компонент. Якщо його props не змінилися за поверхневим порівнянням, React може пропустити повторний рендер цього компонента.",
    shortAnswer:
      "Мемоізує компонент і дозволяє пропускати його ререндер, якщо props не змінилися.",
    weight: 3,
    tags: ["react", "performance", "memo"],
  },

  "q-performance-04": {
    id: "q-performance-04",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що таке Virtual DOM?",
    idealAnswer:
      "Virtual DOM — концептуальне представлення UI у пам’яті, яке React використовує для порівняння попереднього та нового дерева елементів. На основі цього порівняння React визначає необхідні зміни реального DOM.",
    shortAnswer:
      "Представлення UI в пам’яті, яке React використовує для визначення необхідних DOM-змін.",
    weight: 3,
    tags: ["react", "virtual-dom"],
  },

  "q-performance-05": {
    id: "q-performance-05",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Чи потрібно використовувати useMemo і useCallback всюди?",
    idealAnswer:
      "Ні. Мемоізація має власну вартість і не завжди дає користь. Її варто використовувати, коли є конкретна причина: дороге обчислення, стабільність посилання для оптимізованого компонента або залежність hook, де це реально впливає на продуктивність.",
    shortAnswer:
      "Ні, мемоізацію слід використовувати за потреби, а не автоматично для кожного значення чи функції.",
    weight: 3,
    tags: ["react", "performance", "hooks"],
  },

  "q-performance-06": {
    id: "q-performance-06",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Як знайти повільний компонент у React-застосунку?",
    idealAnswer:
      "Для цього можна використовувати React DevTools Profiler та інструменти браузера. Вони дозволяють побачити, які компоненти рендеряться, скільки часу займає render і які зміни могли спричинити оновлення.",
    shortAnswer:
      "Використати React DevTools Profiler та Performance tools браузера.",
    weight: 3,
    tags: ["react", "performance", "devtools"],
  },

  // =========================================================
  // Testing / Accessibility
  // =========================================================

  "q-testing-01": {
    id: "q-testing-01",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що таке unit test?",
    idealAnswer:
      "Unit test перевіряє невелику ізольовану частину коду, наприклад функцію, компонентну логіку або окремий модуль. Мета — перевірити, що конкретна одиниця працює відповідно до очікувань.",
    shortAnswer:
      "Тест, який перевіряє окрему невелику одиницю коду в ізоляції.",
    weight: 2,
    tags: ["testing", "unit-test"],
  },

  "q-testing-02": {
    id: "q-testing-02",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що варто тестувати в React-компоненті?",
    idealAnswer:
      "Потрібно перевіряти поведінку компонента: що користувач бачить потрібний UI, може виконати необхідну дію, а компонент правильно реагує на props, state та помилки. Тести не повинні надмірно залежати від внутрішньої реалізації.",
    shortAnswer:
      "Перш за все поведінку компонента та його реакцію на дії користувача й дані.",
    weight: 3,
    tags: ["testing", "react"],
  },

  "q-testing-03": {
    id: "q-testing-03",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що таке mock у тестуванні?",
    idealAnswer:
      "Mock — заміна реальної залежності контрольованою тестовою реалізацією. Наприклад, замість реального API можна створити mock, який повертає наперед визначені дані, щоб тест був швидким і передбачуваним.",
    shortAnswer:
      "Тестова заміна реальної залежності, яка дозволяє контролювати її поведінку.",
    weight: 3,
    tags: ["testing", "mock"],
  },

  "q-testing-04": {
    id: "q-testing-04",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що таке accessibility (a11y)?",
    idealAnswer:
      "Accessibility означає створення інтерфейсу, яким можуть користуватися люди з різними можливостями та способами взаємодії. Важливі семантичний HTML, клавіатурна навігація, доступні форми, контраст і правильне використання ARIA там, де воно справді потрібне.",
    shortAnswer:
      "Створення інтерфейсу, доступного для користувачів із різними потребами та способами взаємодії.",
    weight: 3,
    tags: ["accessibility", "html"],
  },

  "q-testing-05": {
    id: "q-testing-05",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Чому семантичні HTML-елементи важливі для accessibility?",
    idealAnswer:
      "Семантичні елементи передають браузерам і assistive technologies інформацію про призначення контенту. Наприклад, `button` повідомляє, що елемент є кнопкою, і забезпечує стандартну поведінку клавіатури, тоді як `div` цього не дає автоматично.",
    shortAnswer:
      "Семантика допомагає браузерам і assistive technologies правильно розуміти призначення елементів.",
    weight: 3,
    tags: ["accessibility", "html", "semantic"],
  },

  // =========================================================
  // Практичні React / JavaScript питання
  // =========================================================

  "q-practical-01": {
    id: "q-practical-01",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Що буде виведено після натискання кнопки та чому? `const [count, setCount] = useState(0); const handleClick = () => { setCount(count + 1); setCount(count + 1); setCount(count + 1); };`",
    idealAnswer:
      "У типовій ситуації після одного кліку count збільшиться на 1, а не на 3. Усі три виклики використовують одне й те саме значення `count`, яке було доступне під час поточного render. Для послідовного оновлення потрібно використовувати functional updater: `setCount(prev => prev + 1)`.",
    shortAnswer:
      "Значення збільшиться на 1; для трьох послідовних збільшень треба використати `setCount(prev => prev + 1)`.",
    weight: 4,
    tags: ["react", "useState", "practical"],
  },

  "q-practical-02": {
    id: "q-practical-02",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Що не так із цим кодом? `const [user, setUser] = useState({ name: 'Ivan' }); user.name = 'Petro';`",
    idealAnswer:
      "State мутується напряму, а React не отримує коректного повідомлення про оновлення. Потрібно створити новий об’єкт через setter: `setUser(prev => ({ ...prev, name: 'Petro' }))`.",
    shortAnswer:
      "Не можна мутувати state напряму; потрібно створити новий об’єкт через setter.",
    weight: 3,
    tags: ["react", "state", "immutability", "practical"],
  },

  "q-practical-03": {
    id: "q-practical-03",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Як правильно додати елемент у масив state: `const [items, setItems] = useState([])`?",
    idealAnswer:
      "Потрібно створити новий масив, а не використовувати `push` для мутації існуючого: `setItems(prev => [...prev, newItem])`. Це зберігає принцип immutability.",
    shortAnswer:
      "Використати `setItems(prev => [...prev, newItem])`, а не мутувати масив через push.",
    weight: 3,
    tags: ["react", "state", "arrays", "practical"],
  },

  "q-practical-04": {
    id: "q-practical-04",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як видалити елемент із масиву state, якщо він має id?",
    idealAnswer:
      "Потрібно створити новий масив через `filter`: `setItems(prev => prev.filter(item => item.id !== id))`. `filter` не мутує початковий масив.",
    shortAnswer:
      "Використати `filter`, наприклад `setItems(prev => prev.filter(item => item.id !== id))`.",
    weight: 3,
    tags: ["react", "state", "arrays", "practical"],
  },

  "q-practical-05": {
    id: "q-practical-05",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як реалізувати перемикач стану `isOpen` через useState?",
    idealAnswer:
      "Можна використати functional updater: `setIsOpen(prev => !prev)`. Це безпечно працює навіть коли оновлення state відбуваються послідовно.",
    shortAnswer: "Використати `setIsOpen(prev => !prev)`.",
    weight: 2,
    tags: ["react", "useState", "practical"],
  },

  "q-practical-06": {
    id: "q-practical-06",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Як зробити API-запит у useEffect так, щоб зберігати loading, data та error?",
    idealAnswer:
      "Потрібно створити три state: `loading`, `data`, `error`. Перед запитом встановити loading у true, виконати запит у `try`, записати результат у data, у `catch` записати помилку, а у `finally` встановити loading у false. Для реального застосунку також варто подумати про cleanup або скасування запиту.",
    shortAnswer:
      "Використати окремі state для data/loading/error та обробити запит через try/catch/finally.",
    weight: 4,
    tags: ["react", "api", "useEffect", "practical"],
  },

  "q-practical-07": {
    id: "q-practical-07",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Чому цей useEffect може створити нескінченний цикл? `useEffect(() => { setCount(count + 1); });`",
    idealAnswer:
      "У effect немає dependency array, тому він виконується після кожного рендера. Усередині effect змінюється state, що викликає новий render, після якого effect знову запускається. Це створює цикл.",
    shortAnswer:
      "Effect запускається після кожного рендера і кожного разу змінює state, запускаючи наступний рендер.",
    weight: 4,
    tags: ["react", "useEffect", "state", "practical"],
  },

  "q-practical-08": {
    id: "q-practical-08",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як очистити setInterval у React-компоненті?",
    idealAnswer:
      "Потрібно створити interval у `useEffect`, зберегти його ID та повернути cleanup-функцію з `clearInterval`: `return () => clearInterval(id)`. Це запобігає витокам і роботі таймера після розмонтування компонента.",
    shortAnswer:
      "Створити interval у useEffect і очистити його через `clearInterval` у cleanup.",
    weight: 3,
    tags: ["react", "useEffect", "cleanup", "practical"],
  },

  "q-practical-09": {
    id: "q-practical-09",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Що станеться, якщо передати в дочірній компонент inline-функцію: `<Child onClick={() => handleClick()} />`?",
    idealAnswer:
      "Під час кожного render батьківського компонента створюється нове посилання на функцію. Якщо `Child` оптимізований через `React.memo`, нове посилання може спричинити його повторний рендер. У разі реальної потреби стабільне посилання можна отримати через `useCallback`.",
    shortAnswer:
      "При кожному render створюється нова функція; для memo-компонента це може спричинити зайвий ререндер.",
    weight: 3,
    tags: ["react", "performance", "useCallback", "practical"],
  },

  "q-practical-10": {
    id: "q-practical-10",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як відрендерити компонент тільки якщо користувач авторизований?",
    idealAnswer:
      "Можна виконати умовний рендеринг на основі auth state: `{isLoggedIn ? <Dashboard /> : <Login />}`. Якщо використовується router, аналогічну перевірку можна реалізувати через protected route.",
    shortAnswer:
      "Перевірити auth state та умовно відрендерити потрібний компонент або захистити маршрут.",
    weight: 2,
    tags: ["react", "auth", "conditional-rendering", "practical"],
  },

  // =========================================================
  // General Front-End
  // =========================================================

  "q-general-01": {
    id: "q-general-01",
    category: "Загальні основи",
    difficulty: "junior",
    question: "У чому різниця між frontend і backend?",
    idealAnswer:
      "Frontend відповідає за інтерфейс і взаємодію користувача з вебзастосунком та працює переважно в браузері. Backend відповідає за серверну логіку, роботу з базою даних, авторизацію та API.",
    shortAnswer:
      "Frontend — UI та клієнтська логіка; backend — серверна логіка, дані та API.",
    weight: 2,
    tags: ["general", "frontend", "backend"],
  },

  "q-general-02": {
    id: "q-general-02",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке DOM?",
    idealAnswer:
      "DOM (Document Object Model) — об’єктне представлення HTML-документа у вигляді дерева вузлів. JavaScript може читати та змінювати DOM, наприклад додавати елементи, змінювати текст або атрибути.",
    shortAnswer:
      "Об’єктне дерево HTML-документа, з яким JavaScript може взаємодіяти.",
    weight: 2,
    tags: ["browser", "dom", "javascript"],
  },

  "q-general-03": {
    id: "q-general-03",
    category: "Загальні основи",
    difficulty: "junior",
    question: "У чому різниця між DOM і BOM?",
    idealAnswer:
      "DOM представляє HTML-документ і його елементи. BOM (Browser Object Model) описує браузерне середовище: `window`, `location`, `history`, `navigator` та інші об’єкти, пов’язані з браузером.",
    shortAnswer: "DOM — документ і його елементи; BOM — браузерне середовище.",
    weight: 3,
    tags: ["browser", "dom", "bom"],
  },

  "q-general-04": {
    id: "q-general-04",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке CORS?",
    idealAnswer:
      "CORS (Cross-Origin Resource Sharing) — механізм браузера, який контролює доступ вебсторінки до ресурсів іншого origin. Сервер може через HTTP-заголовки дозволити певним origin виконувати такі запити.",
    shortAnswer:
      "Механізм браузера, який контролює cross-origin HTTP-запити через політику сервера.",
    weight: 3,
    tags: ["browser", "network", "cors"],
  },

  "q-general-05": {
    id: "q-general-05",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке npm?",
    idealAnswer:
      "npm — менеджер пакетів для JavaScript/Node.js екосистеми. Він дозволяє встановлювати залежності, керувати версіями пакетів і запускати визначені в `package.json` scripts.",
    shortAnswer:
      "Менеджер пакетів JavaScript, який також використовується для запуску npm scripts.",
    weight: 2,
    tags: ["javascript", "npm", "node"],
  },

  "q-general-06": {
    id: "q-general-06",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Для чого потрібен package.json?",
    idealAnswer:
      "`package.json` містить метадані JavaScript-проєкту, залежності, devDependencies, scripts та інші налаштування. Він дозволяє відновити залежності проєкту та стандартизувати команди запуску.",
    shortAnswer: "Описує JavaScript-проєкт, його залежності та scripts.",
    weight: 2,
    tags: ["npm", "javascript"],
  },

  "q-general-07": {
    id: "q-general-07",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке environment variables?",
    idealAnswer:
      "Environment variables — конфігураційні значення, які передаються застосунку через середовище виконання або файл конфігурації. Їх часто використовують для URL API, режимів роботи та іншої конфігурації. Секретні значення не можна бездумно включати у frontend bundle, оскільки код frontend доступний користувачу.",
    shortAnswer:
      "Зовнішні конфігураційні значення, які використовуються під час запуску або збірки застосунку.",
    weight: 3,
    tags: ["environment", "frontend", "security"],
  },

  "q-general-08": {
    id: "q-general-08",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке HTTP request і response?",
    idealAnswer:
      "HTTP request — повідомлення від клієнта до сервера, яке містить метод, URL, headers і за потреби body. HTTP response — відповідь сервера зі status code, headers і за потреби body.",
    shortAnswer:
      "Request надсилається клієнтом до сервера, response повертається сервером у відповідь.",
    weight: 2,
    tags: ["http", "network"],
  },
};

const QUESTION_INTERVUER = {
  // =========================================================
  // JavaScript: основи
  // =========================================================

  "q-js-01": {
    id: "q-js-01",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між var, let і const?",
    idealAnswer:
      "`var` має функціональну область видимості та може бути повторно оголошена. `let` і `const` мають блочну область видимості. `let` можна переприсвоювати, а `const` — ні. При цьому об’єкти та масиви, оголошені через `const`, можна змінювати всередині.",
    shortAnswer:
      "`var` — функціональна область видимості; `let` і `const` — блочна; `const` не можна переприсвоїти.",
    weight: 2,
    tags: ["javascript", "variables"],
  },

  "q-js-02": {
    id: "q-js-02",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке область видимості (scope)?",
    idealAnswer:
      "Scope визначає, де саме в коді доступна змінна або функція. У JavaScript є глобальна, функціональна та блочна області видимості. `let` і `const` мають блочну область видимості, а `var` — функціональну.",
    shortAnswer: "Scope визначає, де змінна або функція доступна в коді.",
    weight: 2,
    tags: ["javascript", "scope"],
  },

  "q-js-03": {
    id: "q-js-03",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Поясни, що таке замикання (closure).",
    idealAnswer:
      "Замикання виникає, коли внутрішня функція зберігає доступ до змінних зовнішньої функції навіть після завершення її виконання. Функція зберігає посилання на лексичне оточення, у якому була створена.",
    shortAnswer:
      "Внутрішня функція зберігає доступ до змінних зовнішньої функції після її завершення.",
    weight: 4,
    tags: ["javascript", "closure"],
  },

  "q-js-04": {
    id: "q-js-04",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між `==` і `===`?",
    idealAnswer:
      "`==` порівнює значення з можливим неявним приведенням типів. `===` порівнює і значення, і тип без приведення. У більшості випадків рекомендується використовувати `===`, щоб уникати неочікуваних перетворень типів.",
    shortAnswer:
      "`==` може приводити типи, а `===` порівнює і тип, і значення без приведення.",
    weight: 2,
    tags: ["javascript", "operators"],
  },

  "q-js-05": {
    id: "q-js-05",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між `undefined` і `null`?",
    idealAnswer:
      "`undefined` зазвичай означає, що значення не було присвоєне або властивість не існує. `null` — це явне значення, яке означає відсутність значення. Наприклад, функція без `return` повертає `undefined`, а розробник може явно встановити `value = null`.",
    shortAnswer:
      "`undefined` означає відсутність присвоєного значення, а `null` — явно задану відсутність значення.",
    weight: 2,
    tags: ["javascript", "types"],
  },

  "q-js-06": {
    id: "q-js-06",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Які основні типи даних є в JavaScript?",
    idealAnswer:
      "До примітивних типів належать `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` і `null`. Окремо можна виділити об’єкти (`object`), до яких також належать масиви, функції та інші складні структури.",
    shortAnswer:
      "Примітиви: string, number, bigint, boolean, undefined, symbol, null; складний тип — object.",
    weight: 2,
    tags: ["javascript", "types"],
  },

  "q-js-07": {
    id: "q-js-07",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між примітивними типами та об’єктами?",
    idealAnswer:
      "Примітиви є простими значеннями та передаються як значення. Об’єкти є складними структурами й змінюються через посилання на них. Наприклад, якщо дві змінні посилаються на один об’єкт, зміна його властивості буде видима через обидві змінні.",
    shortAnswer:
      "Примітиви передаються як значення, а об’єкти — як посилання на складну структуру.",
    weight: 3,
    tags: ["javascript", "objects"],
  },

  "q-js-08": {
    id: "q-js-08",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке destructuring?",
    idealAnswer:
      "Destructuring дозволяє отримувати значення з масивів або властивості об’єктів і присвоювати їх окремим змінним. Наприклад: `const { name, age } = user` або `const [first, second] = items`.",
    shortAnswer:
      "Синтаксис для зручного вилучення значень з об’єктів і масивів.",
    weight: 2,
    tags: ["javascript", "destructuring"],
  },

  "q-js-09": {
    id: "q-js-09",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Для чого використовуються map, filter і reduce?",
    idealAnswer:
      "`map` створює новий масив, перетворюючи кожен елемент. `filter` створює новий масив лише з елементів, що відповідають умові. `reduce` проходить масив і накопичує одне підсумкове значення.",
    shortAnswer:
      "`map` перетворює елементи, `filter` відбирає їх, `reduce` накопичує результат.",
    weight: 3,
    tags: ["javascript", "arrays"],
  },

  "q-js-10": {
    id: "q-js-10",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між `map()` і `forEach()`?",
    idealAnswer:
      "`map()` створює та повертає новий масив із результатів callback-функції. `forEach()` просто виконує callback для кожного елемента й не створює новий масив. Тому `map` використовують для перетворення даних, а `forEach` — коли потрібно виконати побічну дію.",
    shortAnswer:
      "`map()` повертає новий масив, а `forEach()` лише виконує callback для кожного елемента.",
    weight: 3,
    tags: ["javascript", "arrays"],
  },

  "q-js-11": {
    id: "q-js-11",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що робить spread operator `...`?",
    idealAnswer:
      "Spread розгортає елементи масиву або властивості об’єкта в іншій структурі. Його часто використовують для створення копій та оновлення стану без прямої мутації: `[...items]` або `{ ...user, name: 'John' }`.",
    shortAnswer:
      "Розгортає елементи масиву або властивості об’єкта в іншій структурі.",
    weight: 2,
    tags: ["javascript", "spread"],
  },

  "q-js-12": {
    id: "q-js-12",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке rest operator `...`?",
    idealAnswer:
      "Rest збирає декілька значень в один масив або об’єкт. Наприклад, `function sum(...numbers)` збирає всі аргументи в масив `numbers`. У destructuring він також дозволяє отримати решту властивостей або елементів.",
    shortAnswer: "Rest збирає декілька значень у масив або об’єкт.",
    weight: 2,
    tags: ["javascript", "rest"],
  },

  "q-js-13": {
    id: "q-js-13",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке Promise?",
    idealAnswer:
      "Promise — це об’єкт, який представляє майбутній результат асинхронної операції. Він може перебувати у станах pending, fulfilled або rejected. Результат можна обробляти через `.then()`, `.catch()` і `.finally()`.",
    shortAnswer:
      "Promise представляє майбутній результат асинхронної операції.",
    weight: 3,
    tags: ["javascript", "async"],
  },

  "q-js-14": {
    id: "q-js-14",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "У чому різниця між Promise `.then()` і async/await?",
    idealAnswer:
      "Обидва підходи працюють з Promise. `.then()` використовує callback для обробки результату, а `async/await` дозволяє записувати асинхронний код у більш послідовному стилі. `await` можна використовувати всередині `async`-функції.",
    shortAnswer:
      "`async/await` — зручніший синтаксис роботи з Promise, а `.then()` використовує callback-ланцюжок.",
    weight: 3,
    tags: ["javascript", "async", "promise"],
  },

  "q-js-15": {
    id: "q-js-15",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Для чого потрібні try/catch?",
    idealAnswer:
      "`try/catch` використовується для перехоплення помилок під час виконання коду. Потенційно небезпечний код розміщують у `try`, а обробку помилки — у `catch`. Для асинхронного коду з `await` це дозволяє обробляти відхилені Promise.",
    shortAnswer:
      "`try/catch` дозволяє перехоплювати та обробляти помилки під час виконання.",
    weight: 2,
    tags: ["javascript", "errors"],
  },

  "q-js-16": {
    id: "q-js-16",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке event loop?",
    idealAnswer:
      "Event loop — механізм JavaScript, який дозволяє виконувати асинхронні операції, незважаючи на те, що JavaScript виконує код у головному потоці. Синхронний код виконується через call stack, а завершені асинхронні операції потрапляють у відповідні черги та виконуються, коли stack звільняється.",
    shortAnswer:
      "Механізм, який координує виконання синхронного та асинхронного коду JavaScript.",
    weight: 4,
    tags: ["javascript", "event-loop", "async"],
  },

  "q-js-17": {
    id: "q-js-17",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке callback-функція?",
    idealAnswer:
      "Callback — це функція, яку передають іншій функції як аргумент, щоб викликати її пізніше. Наприклад, callback використовується в `map`, `setTimeout`, обробниках подій і багатьох API JavaScript.",
    shortAnswer: "Функція, передана іншій функції для подальшого виклику.",
    weight: 2,
    tags: ["javascript", "functions"],
  },

  "q-js-18": {
    id: "q-js-18",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке чиста функція (pure function)?",
    idealAnswer:
      "Чиста функція для однакових аргументів завжди повертає однаковий результат і не має побічних ефектів. Вона не змінює зовнішній стан, не мутує аргументи та не залежить від прихованих зовнішніх даних. Чисті функції особливо важливі для reducer-ів.",
    shortAnswer:
      "Функція без побічних ефектів, яка для однакових аргументів завжди повертає однаковий результат.",
    weight: 3,
    tags: ["javascript", "functional-programming"],
  },

  "q-js-19": {
    id: "q-js-19",
    category: "JavaScript основи",
    difficulty: "junior",
    question: "Що таке immutability і чому вона важлива в React?",
    idealAnswer:
      "Immutability означає, що існуючі об’єкти та масиви не змінюються напряму, а замість цього створюються нові значення. React використовує порівняння посилань для визначення змін, тому створення нового об’єкта або масиву допомагає коректно визначати оновлення стану.",
    shortAnswer:
      "Замість мутації існуючих даних створюється нова структура, що допомагає React визначати зміни.",
    weight: 3,
    tags: ["javascript", "react", "immutability"],
  },

  // =========================================================
  // React: основи
  // =========================================================

  "q-react-01": {
    id: "q-react-01",
    category: "React",
    difficulty: "junior",
    question: "Що таке React?",
    idealAnswer:
      "React — бібліотека JavaScript для створення користувацьких інтерфейсів на основі компонентів. Вона дозволяє описувати UI через стан і props та оновлювати необхідні частини інтерфейсу при зміні даних.",
    shortAnswer:
      "React — бібліотека JavaScript для побудови UI на основі компонентів.",
    weight: 2,
    tags: ["react", "concepts"],
  },

  "q-react-02": {
    id: "q-react-02",
    category: "React",
    difficulty: "junior",
    question: "Чому React використовує компонентний підхід?",
    idealAnswer:
      "Компоненти дозволяють розбивати великий інтерфейс на невеликі незалежні частини, які можна повторно використовувати та тестувати. Кожен компонент може мати власний стан і приймати дані через props.",
    shortAnswer:
      "Компоненти розбивають UI на невеликі, повторно використовувані та керовані частини.",
    weight: 2,
    tags: ["react", "components"],
  },

  "q-react-03": {
    id: "q-react-03",
    category: "React",
    difficulty: "junior",
    question: "Що таке React-компонент?",
    idealAnswer:
      "React-компонент — це функція або клас, який описує частину UI та повертає React-елементи. Сучасний React переважно використовує функціональні компоненти та хуки.",
    shortAnswer:
      "Компонент — частина UI, яка описується функцією або класом і повертає React-елементи.",
    weight: 2,
    tags: ["react", "components"],
  },

  "q-react-04": {
    id: "q-react-04",
    category: "React",
    difficulty: "junior",
    question: "Що таке JSX?",
    idealAnswer:
      "JSX — синтаксис, який дозволяє описувати структуру UI у коді JavaScript у вигляді HTML-подібної розмітки. JSX не є HTML і перед виконанням перетворюється на JavaScript-виклики, які створюють React-елементи.",
    shortAnswer:
      "HTML-подібний синтаксис для опису React UI всередині JavaScript.",
    weight: 2,
    tags: ["react", "jsx"],
  },

  "q-react-05": {
    id: "q-react-05",
    category: "React",
    difficulty: "junior",
    question: "Чим JSX відрізняється від HTML?",
    idealAnswer:
      "JSX є синтаксисом JavaScript, а не HTML-документом. У JSX використовуються JavaScript-вирази через `{}`, `className` замість `class`, camelCase для багатьох атрибутів і обов’язкове коректне закриття елементів.",
    shortAnswer:
      "JSX — JavaScript-синтаксис для UI, тому має власні правила та дозволяє використовувати JS-вирази.",
    weight: 2,
    tags: ["react", "jsx"],
  },

  "q-react-06": {
    id: "q-react-06",
    category: "React",
    difficulty: "junior",
    question: "Що таке props?",
    idealAnswer:
      "Props — це вхідні дані компонента, які передаються від батьківського компонента до дочірнього. Props доступні лише для читання і не повинні змінюватися дочірнім компонентом.",
    shortAnswer:
      "Props — вхідні дані, які батьківський компонент передає дочірньому.",
    weight: 2,
    tags: ["react", "props"],
  },

  "q-react-07": {
    id: "q-react-07",
    category: "React",
    difficulty: "junior",
    question: "Що таке state?",
    idealAnswer:
      "State — внутрішні дані компонента, від зміни яких залежить його UI. У функціональних компонентах для роботи зі станом зазвичай використовується `useState` або інші хуки.",
    shortAnswer:
      "State — внутрішні дані компонента, зміна яких може спричинити повторний рендер.",
    weight: 2,
    tags: ["react", "state"],
  },

  "q-react-08": {
    id: "q-react-08",
    category: "React",
    difficulty: "junior",
    question: "У чому різниця між props і state?",
    idealAnswer:
      "Props приходять у компонент ззовні та призначені для передачі даних між компонентами. State належить самому компоненту й може змінюватися через відповідні механізми React.",
    shortAnswer:
      "Props — зовнішні вхідні дані компонента; state — його внутрішній змінюваний стан.",
    weight: 3,
    tags: ["react", "props", "state"],
  },

  "q-react-09": {
    id: "q-react-09",
    category: "React",
    difficulty: "junior",
    question: "Чи можна змінювати props напряму?",
    idealAnswer:
      "Ні. Props є read-only. Якщо компоненту потрібно змінити дані, він має повідомити про це батьківський компонент через callback або працювати зі своїм локальним state.",
    shortAnswer:
      "Ні, props не можна мутувати; для зміни даних використовують state або callback до батьківського компонента.",
    weight: 2,
    tags: ["react", "props"],
  },

  "q-react-10": {
    id: "q-react-10",
    category: "React",
    difficulty: "junior",
    question: "Як передати дані від батьківського компонента до дочірнього?",
    idealAnswer:
      'Дані передають через props. Наприклад: `<User name="Ivan" />`, а всередині компонента отримують `name` через параметри функції.',
    shortAnswer: "Через props.",
    weight: 2,
    tags: ["react", "props"],
  },

  "q-react-11": {
    id: "q-react-11",
    category: "React",
    difficulty: "junior",
    question: "Як передати дані від дочірнього компонента до батьківського?",
    idealAnswer:
      "Зазвичай батьківський компонент передає дочірньому callback через props. Дочірній компонент викликає цю функцію та передає потрібні дані.",
    shortAnswer:
      "Через callback-функцію, яку батьківський компонент передає дочірньому через props.",
    weight: 3,
    tags: ["react", "props", "events"],
  },

  "q-react-12": {
    id: "q-react-12",
    category: "React",
    difficulty: "junior",
    question: "Що таке `children` у React?",
    idealAnswer:
      "`children` — спеціальний prop, який містить елементи, передані між відкриваючим і закриваючим тегами компонента. Наприклад, у `<Card><Button /></Card>` компонент `Card` отримує `<Button />` через `children`.",
    shortAnswer:
      "`children` — спеціальний prop для передачі вкладеного JSX у компонент.",
    weight: 2,
    tags: ["react", "children"],
  },

  "q-react-13": {
    id: "q-react-13",
    category: "React",
    difficulty: "junior",
    question: "Для чого потрібен `key` при рендерингу списків?",
    idealAnswer:
      "`key` дозволяє React стабільно ідентифікувати елементи списку між рендерами. Завдяки цьому React може коректно визначати, які елементи були додані, видалені або переміщені.",
    shortAnswer:
      "`key` допомагає React ідентифікувати елементи списку між рендерами.",
    weight: 3,
    tags: ["react", "lists", "keys"],
  },

  "q-react-14": {
    id: "q-react-14",
    category: "React",
    difficulty: "junior",
    question: "Чому використання index як key може бути проблемою?",
    idealAnswer:
      "Індекс можна використовувати для стабільного списку, який не змінюється. Але якщо елементи додаються, видаляються або сортуються, індекси змінюються, і React може неправильно зіставити елементи та їхній внутрішній стан. Краще використовувати стабільний унікальний ID.",
    shortAnswer:
      "Index як key може бути нестабільним при зміні порядку або складу списку; краще використовувати унікальний ID.",
    weight: 3,
    tags: ["react", "lists", "keys"],
  },

  "q-react-15": {
    id: "q-react-15",
    category: "React",
    difficulty: "junior",
    question: "Як зробити умовний рендеринг у React?",
    idealAnswer:
      "Для умовного рендерингу можна використовувати `if`, тернарний оператор або `&&`. Наприклад: `{isLoading ? <Loader /> : <Content />}` або `{isAdmin && <AdminPanel />}`.",
    shortAnswer: "Через `if`, тернарний оператор або логічний оператор `&&`.",
    weight: 2,
    tags: ["react", "rendering"],
  },

  "q-react-16": {
    id: "q-react-16",
    category: "React",
    difficulty: "junior",
    question: "Як відрендерити масив компонентів у React?",
    idealAnswer:
      "Зазвичай використовують `map`, який повертає JSX для кожного елемента. Кожен елемент списку повинен мати стабільний `key`: `items.map(item => <Item key={item.id} {...item} />)`.",
    shortAnswer:
      "Через `map()` із JSX для кожного елемента та стабільним `key`.",
    weight: 2,
    tags: ["react", "lists"],
  },

  "q-react-17": {
    id: "q-react-17",
    category: "React",
    difficulty: "junior",
    question: "Що відбувається, коли змінюється state?",
    idealAnswer:
      "Оновлення state через setter повідомляє React, що компонент потрібно повторно обробити. React виконує новий render, порівнює результат із попереднім і оновлює необхідні DOM-вузли.",
    shortAnswer:
      "React планує повторний рендер компонента, порівнює результат і оновлює необхідну частину UI.",
    weight: 3,
    tags: ["react", "state", "render"],
  },

  "q-react-18": {
    id: "q-react-18",
    category: "React",
    difficulty: "junior",
    question: "Що таке controlled component?",
    idealAnswer:
      "Controlled component — компонент форми, значення якого контролюється React state. Наприклад, `<input value={name} onChange={e => setName(e.target.value)} />`. Джерелом істини є state React.",
    shortAnswer: "Компонент форми, значення якого контролюється React state.",
    weight: 3,
    tags: ["react", "forms"],
  },

  "q-react-19": {
    id: "q-react-19",
    category: "React",
    difficulty: "junior",
    question: "У чому різниця між controlled та uncontrolled input?",
    idealAnswer:
      "У controlled input значення зберігається в React state та оновлюється через `onChange`. В uncontrolled input значення переважно зберігається самим DOM, а доступ до нього можна отримати через `ref`.",
    shortAnswer:
      "Controlled — значення керується React state; uncontrolled — значення зберігається в DOM.",
    weight: 3,
    tags: ["react", "forms"],
  },

  // =========================================================
  // React Hooks
  // =========================================================

  "q-hooks-01": {
    id: "q-hooks-01",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке Hooks у React?",
    idealAnswer:
      "Hooks — це функції React, які дозволяють функціональним компонентам використовувати state, effects, refs, context та інші можливості React. Приклади: `useState`, `useEffect`, `useRef`, `useContext`.",
    shortAnswer:
      "Функції React, які дозволяють використовувати state та інші можливості у функціональних компонентах.",
    weight: 2,
    tags: ["react", "hooks"],
  },

  "q-hooks-02": {
    id: "q-hooks-02",
    category: "React Hooks",
    difficulty: "junior",
    question: "Для чого використовується `useState`?",
    idealAnswer:
      "`useState` додає локальний стан функціональному компоненту. Він повертає поточне значення state та функцію для його оновлення. Оновлення через setter повідомляє React про необхідність нового рендера.",
    shortAnswer:
      "`useState` дозволяє зберігати та оновлювати локальний стан компонента.",
    weight: 2,
    tags: ["react", "hooks", "useState"],
  },

  "q-hooks-03": {
    id: "q-hooks-03",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що робить `useEffect`?",
    idealAnswer:
      "`useEffect` дозволяє виконувати side effects після рендеру компонента. Наприклад, запити до API, підписки, таймери або синхронізацію з зовнішніми системами.",
    shortAnswer:
      "`useEffect` використовується для side effects, які виконуються після рендеру.",
    weight: 3,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-04": {
    id: "q-hooks-04",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що означає порожній масив залежностей `[]` у useEffect?",
    idealAnswer:
      "Порожній масив залежностей означає, що effect не залежить від значень props або state і запускається після початкового монтування компонента. Cleanup може виконатися при його розмонтуванні.",
    shortAnswer:
      "Effect запускається після початкового монтування, а cleanup — при розмонтуванні.",
    weight: 3,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-05": {
    id: "q-hooks-05",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що станеться, якщо не передати масив залежностей у useEffect?",
    idealAnswer:
      "Якщо dependency array не переданий, effect запускається після кожного завершеного рендера компонента.",
    shortAnswer: "Effect виконується після кожного рендера.",
    weight: 2,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-06": {
    id: "q-hooks-06",
    category: "React Hooks",
    difficulty: "junior",
    question: "Для чого потрібні залежності useEffect?",
    idealAnswer:
      "Dependency array визначає, після яких змін effect має виконуватися повторно. React порівнює залежності між рендерами і запускає effect, якщо залежність змінилася.",
    shortAnswer:
      "Залежності визначають, при зміні яких значень useEffect має виконуватися повторно.",
    weight: 3,
    tags: ["react", "hooks", "useEffect"],
  },

  "q-hooks-07": {
    id: "q-hooks-07",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке cleanup-функція в useEffect?",
    idealAnswer:
      "Cleanup повертається з callback `useEffect` і використовується для очищення side effects: таймерів, підписок, event listeners або інших ресурсів. Вона виконується перед повторним запуском effect при зміні залежностей і при розмонтуванні компонента.",
    shortAnswer:
      "Функція очищення ресурсів, створених effect, перед повторним запуском або розмонтуванням.",
    weight: 3,
    tags: ["react", "hooks", "cleanup"],
  },

  "q-hooks-08": {
    id: "q-hooks-08",
    category: "React Hooks",
    difficulty: "junior",
    question: "Для чого використовується useRef?",
    idealAnswer:
      "`useRef` повертає об’єкт із властивістю `.current`, значення якої зберігається між рендерами. Зміна `.current` сама по собі не викликає повторний рендер. Його часто використовують для доступу до DOM або зберігання мутабельного значення.",
    shortAnswer:
      "Зберігає значення між рендерами без виклику ререндеру та часто використовується для доступу до DOM.",
    weight: 3,
    tags: ["react", "hooks", "refs"],
  },

  "q-hooks-09": {
    id: "q-hooks-09",
    category: "React Hooks",
    difficulty: "junior",
    question: "У чому різниця між useRef і useState?",
    idealAnswer:
      "Значення `useState` використовується під час рендеру, а його оновлення викликає новий рендер. Зміна `.current` у `useRef` не викликає ререндер. Тому state використовують для даних, що впливають на UI, а ref — для значень, які не повинні безпосередньо впливати на UI.",
    shortAnswer: "Оновлення state викликає ререндер, а зміна ref — ні.",
    weight: 3,
    tags: ["react", "hooks", "refs", "state"],
  },

  "q-hooks-10": {
    id: "q-hooks-10",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке useMemo?",
    idealAnswer:
      "`useMemo` кешує результат обчислення між рендерами та повторно обчислює його лише тоді, коли змінюються залежності. Його використовують для дорогих обчислень або стабілізації обчисленого значення, але не варто застосовувати без потреби.",
    shortAnswer:
      "`useMemo` кешує результат обчислення та перераховує його при зміні залежностей.",
    weight: 3,
    tags: ["react", "hooks", "performance"],
  },

  "q-hooks-11": {
    id: "q-hooks-11",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке useCallback?",
    idealAnswer:
      "`useCallback` кешує посилання на функцію між рендерами та створює нову функцію лише при зміні залежностей. Це може бути корисно, коли функція передається в оптимізований дочірній компонент або використовується як залежність іншого hook.",
    shortAnswer: "`useCallback` кешує посилання на функцію між рендерами.",
    weight: 3,
    tags: ["react", "hooks", "performance"],
  },

  "q-hooks-12": {
    id: "q-hooks-12",
    category: "React Hooks",
    difficulty: "junior",
    question: "У чому різниця між useMemo і useCallback?",
    idealAnswer:
      "`useMemo` кешує результат обчислення, а `useCallback` кешує саму функцію. `useMemo(() => value, deps)` повертає значення, а `useCallback(fn, deps)` — функцію.",
    shortAnswer: "`useMemo` кешує значення, `useCallback` — функцію.",
    weight: 3,
    tags: ["react", "hooks", "performance"],
  },

  "q-hooks-13": {
    id: "q-hooks-13",
    category: "React Hooks",
    difficulty: "junior",
    question: "Що таке custom hook?",
    idealAnswer:
      "Custom hook — це JavaScript-функція, назва якої зазвичай починається з `use`, яка використовує інші hooks для інкапсуляції та повторного використання логіки. Наприклад, `useFetch` може містити логіку завантаження даних, loading і error.",
    shortAnswer:
      "Функція з префіксом `use`, яка інкапсулює та повторно використовує React-логіку.",
    weight: 3,
    tags: ["react", "hooks", "custom-hooks"],
  },

  "q-hooks-14": {
    id: "q-hooks-14",
    category: "React Hooks",
    difficulty: "junior",
    question: "Які є Rules of Hooks?",
    idealAnswer:
      "Hooks потрібно викликати лише на верхньому рівні компонента або custom hook — не всередині циклів, умов чи вкладених функцій. Також hooks можна викликати лише з React-компонентів або інших custom hooks. Це дозволяє React зберігати стабільний порядок виклику hooks.",
    shortAnswer:
      "Hooks викликають на верхньому рівні React-компонента або custom hook, не всередині умов і циклів.",
    weight: 4,
    tags: ["react", "hooks", "rules"],
  },

  // =========================================================
  // API / HTTP / Network
  // =========================================================

  "q-api-01": {
    id: "q-api-01",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Як отримати дані з API у React?",
    idealAnswer:
      "Для HTTP-запиту можна використати `fetch` або бібліотеку на кшталт Axios. У функціональному компоненті часто запит виконують у `useEffect`, а результат зберігають у state. Також зазвичай потрібно окремо обробляти loading і error.",
    shortAnswer:
      "Виконати HTTP-запит, зберегти результат у state та окремо обробити loading/error.",
    weight: 3,
    tags: ["react", "api", "fetch"],
  },

  "q-api-02": {
    id: "q-api-02",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Чому API-запит у React часто виконують у useEffect?",
    idealAnswer:
      "Запит до API є side effect, оскільки він взаємодіє із зовнішньою системою. `useEffect` дозволяє виконати цей side effect після рендеру та контролювати, коли саме його повторювати через dependencies.",
    shortAnswer:
      "Тому що HTTP-запит є side effect і має виконуватися поза самим render.",
    weight: 3,
    tags: ["react", "api", "useEffect"],
  },

  "q-api-03": {
    id: "q-api-03",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Як правильно показати loading під час API-запиту?",
    idealAnswer:
      "Зазвичай створюють state `loading`, встановлюють його в `true` перед запитом і в `false` після завершення. У UI за значенням loading показують loader або інший стан завантаження.",
    shortAnswer:
      "Зберігати loading у state та показувати відповідний UI до завершення запиту.",
    weight: 2,
    tags: ["react", "api", "loading"],
  },

  "q-api-04": {
    id: "q-api-04",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Як обробити помилку API-запиту?",
    idealAnswer:
      "Помилку потрібно перехопити через `try/catch` для async/await або `.catch()` для Promise. Її можна зберегти в окремий state `error` і показати користувачу зрозумілий стан помилки.",
    shortAnswer:
      "Перехопити помилку через try/catch або catch Promise та відобразити error state.",
    weight: 2,
    tags: ["react", "api", "errors"],
  },

  "q-api-05": {
    id: "q-api-05",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Що таке REST API?",
    idealAnswer:
      "REST — архітектурний стиль побудови API, що працює з ресурсами через стандартні HTTP-методи та URL. Найчастіше API повертає дані у JSON і використовує stateless-взаємодію між клієнтом і сервером.",
    shortAnswer:
      "Архітектурний стиль API на основі ресурсів, URL і стандартних HTTP-методів.",
    weight: 3,
    tags: ["network", "api", "rest"],
  },

  "q-api-06": {
    id: "q-api-06",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "У чому різниця між GET, POST, PUT, PATCH і DELETE?",
    idealAnswer:
      "`GET` отримує дані, `POST` зазвичай створює ресурс або запускає операцію, `PUT` зазвичай повністю замінює ресурс, `PATCH` частково змінює ресурс, `DELETE` видаляє ресурс.",
    shortAnswer:
      "GET — отримання; POST — створення; PUT — повна заміна; PATCH — часткова зміна; DELETE — видалення.",
    weight: 3,
    tags: ["network", "http"],
  },

  "q-api-07": {
    id: "q-api-07",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Що означають HTTP-коди 200, 201, 400, 401, 403, 404 і 500?",
    idealAnswer:
      "200 — успішний запит; 201 — ресурс створено; 400 — некоректний запит; 401 — потрібна автентифікація або вона не пройдена; 403 — доступ заборонений; 404 — ресурс не знайдено; 500 — внутрішня помилка сервера.",
    shortAnswer:
      "2xx — успіх, 4xx — помилка на стороні клієнта/запиту, 5xx — помилка сервера.",
    weight: 4,
    tags: ["network", "http"],
  },

  "q-api-08": {
    id: "q-api-08",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "Що таке токен-автентифікація?",
    idealAnswer:
      "Після успішної автентифікації сервер може видати токен, який клієнт використовує в наступних запитах для підтвердження своєї автентичності. Наприклад, access token часто передають у заголовку `Authorization: Bearer <token>`.",
    shortAnswer:
      "Клієнт отримує токен після входу та використовує його для автентифікації наступних запитів.",
    weight: 3,
    tags: ["network", "auth", "security"],
  },

  "q-api-09": {
    id: "q-api-09",
    category: "Мережа та бекенд",
    difficulty: "junior",
    question: "У чому різниця між fetch та Axios?",
    idealAnswer:
      "`fetch` — стандартний Web API браузера, який не потребує встановлення бібліотеки. Axios — стороння HTTP-бібліотека з додатковими можливостями, наприклад interceptors, автоматичною роботою з JSON та зручнішою конфігурацією запитів.",
    shortAnswer:
      "`fetch` — вбудований Web API, Axios — стороння бібліотека з додатковими можливостями.",
    weight: 2,
    tags: ["network", "fetch", "axios"],
  },

  // =========================================================
  // TypeScript
  // =========================================================

  "q-ts-01": {
    id: "q-ts-01",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке TypeScript і чим він відрізняється від JavaScript?",
    idealAnswer:
      "TypeScript — надмножина JavaScript, яка додає статичну типізацію. TypeScript-код перевіряється та перетворюється на JavaScript, який може виконуватися в браузері або Node.js. Типізація допомагає виявляти багато помилок ще під час розробки.",
    shortAnswer:
      "TypeScript — надмножина JavaScript зі статичною типізацією, яка компілюється у JavaScript.",
    weight: 3,
    tags: ["typescript", "javascript"],
  },

  "q-ts-02": {
    id: "q-ts-02",
    category: "TypeScript",
    difficulty: "junior",
    question: "У чому різниця між `type` і `interface`?",
    idealAnswer:
      "Обидва використовуються для опису типів. `interface` особливо зручний для опису форми об’єктів і підтримує розширення через `extends`. `type` може описувати не лише об’єкти, а й union, intersection, примітиви та інші складні типи. У багатьох простих випадках вони взаємозамінні.",
    shortAnswer:
      "`interface` зручний для контрактів об’єктів, `type` має ширші можливості для побудови типів.",
    weight: 3,
    tags: ["typescript", "types"],
  },

  "q-ts-03": {
    id: "q-ts-03",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке union type?",
    idealAnswer:
      "Union дозволяє змінній мати одне з кількох визначених значень або типів. Наприклад: `let status: 'loading' | 'success' | 'error'`. Значення повинно відповідати одному з варіантів.",
    shortAnswer:
      "Тип, який дозволяє значенню бути одним із декількох визначених типів або значень.",
    weight: 2,
    tags: ["typescript", "union"],
  },

  "q-ts-04": {
    id: "q-ts-04",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке optional property `?`?",
    idealAnswer:
      "Знак `?` означає, що властивість є необов’язковою. Наприклад, `interface User { name: string; age?: number }` дозволяє створити User без `age`.",
    shortAnswer: "`?` робить властивість необов’язковою.",
    weight: 2,
    tags: ["typescript", "types"],
  },

  "q-ts-05": {
    id: "q-ts-05",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке generics у TypeScript?",
    idealAnswer:
      "Generics дозволяють писати повторно використовуваний код, який працює з різними типами, зберігаючи типобезпеку. Наприклад, `function identity<T>(value: T): T { return value }` працює з різними типами без втрати інформації про тип.",
    shortAnswer:
      "Generics дозволяють створювати універсальний код, який зберігає інформацію про конкретний тип.",
    weight: 3,
    tags: ["typescript", "generics"],
  },

  "q-ts-06": {
    id: "q-ts-06",
    category: "TypeScript",
    difficulty: "junior",
    question: "Що таке `any` і чому його не варто використовувати без потреби?",
    idealAnswer:
      "`any` фактично вимикає перевірку типів для конкретного значення. Це може приховувати помилки та зменшувати користь TypeScript. Краще використовувати конкретні типи, union, generics або `unknown`, коли тип справді невідомий.",
    shortAnswer:
      "`any` вимикає більшість типових перевірок, тому його надмірне використання зменшує користь TypeScript.",
    weight: 3,
    tags: ["typescript", "any"],
  },

  "q-ts-07": {
    id: "q-ts-07",
    category: "TypeScript",
    difficulty: "junior",
    question: "У чому різниця між `unknown` та `any`?",
    idealAnswer:
      "`unknown` також дозволяє зберігати значення невідомого типу, але TypeScript не дозволить виконувати над ним довільні операції без попередньої перевірки типу. `any` таких обмежень не має.",
    shortAnswer:
      "`unknown` вимагає перевірити тип перед використанням, а `any` фактично вимикає ці перевірки.",
    weight: 3,
    tags: ["typescript", "unknown", "any"],
  },

  "q-ts-08": {
    id: "q-ts-08",
    category: "TypeScript",
    difficulty: "junior",
    question: "Як типізувати props React-компонента?",
    idealAnswer:
      "Можна створити `type` або `interface` і використати його як тип props. Наприклад: `type Props = { name: string; age?: number }; function User({ name, age }: Props) { ... }`.",
    shortAnswer:
      "Створити type або interface для props і використати його в типізації компонента.",
    weight: 3,
    tags: ["typescript", "react", "props"],
  },

  // =========================================================
  // HTML / CSS
  // =========================================================

  "q-html-01": {
    id: "q-html-01",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке семантичний HTML?",
    idealAnswer:
      "Семантичний HTML використовує елементи відповідно до їхнього призначення: `header`, `nav`, `main`, `section`, `article`, `footer` тощо. Це покращує структуру документа, доступність і зрозумілість коду.",
    shortAnswer:
      "Використання HTML-елементів відповідно до їхнього змістовного призначення.",
    weight: 2,
    tags: ["html", "accessibility"],
  },

  "q-html-02": {
    id: "q-html-02",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "У чому різниця між div, section, article і main?",
    idealAnswer:
      "`div` — нейтральний контейнер без семантики. `section` — тематичний розділ документа. `article` — самостійний блок контенту, який може існувати окремо. `main` містить основний унікальний контент сторінки.",
    shortAnswer:
      "`div` — нейтральний контейнер; `section` — тематичний розділ; `article` — самостійний контент; `main` — основний контент сторінки.",
    weight: 3,
    tags: ["html", "semantic"],
  },

  "q-css-01": {
    id: "q-css-01",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке специфічність (specificity) у CSS?",
    idealAnswer:
      "Специфічність визначає, яке CSS-правило матиме пріоритет, якщо кілька правил підходять до одного елемента. Загалом селектори з id мають більшу специфічність, ніж класи, атрибути та псевдокласи, а ті, у свою чергу, вищу за селектори тегів.",
    shortAnswer:
      "Механізм визначення пріоритету CSS-селекторів при конфлікті правил.",
    weight: 3,
    tags: ["css", "specificity"],
  },

  "q-css-02": {
    id: "q-css-02",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "У чому різниця між Flexbox і CSS Grid?",
    idealAnswer:
      "Flexbox — одновимірна модель компонування, яка працює переважно з рядком або колонкою. Grid — двовимірна модель, яка одночасно працює з рядками та колонками.",
    shortAnswer: "Flexbox — одновимірне компонування; Grid — двовимірне.",
    weight: 2,
    tags: ["css", "flexbox", "grid"],
  },

  "q-css-03": {
    id: "q-css-03",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке responsive layout?",
    idealAnswer:
      "Responsive layout — підхід до створення інтерфейсу, який адаптується до різних розмірів екрана. Для цього використовують гнучкі одиниці, Flexbox/Grid, media queries, responsive images та інші техніки.",
    shortAnswer:
      "Макет, який адаптується до різних розмірів екрана та пристроїв.",
    weight: 2,
    tags: ["css", "responsive"],
  },

  "q-css-04": {
    id: "q-css-04",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Для чого використовуються media queries?",
    idealAnswer:
      "Media queries дозволяють застосовувати CSS-правила залежно від характеристик пристрою або viewport, найчастіше від його ширини. Вони є основним інструментом responsive design.",
    shortAnswer:
      "Дозволяють застосовувати різні CSS-правила залежно від характеристик viewport або пристрою.",
    weight: 2,
    tags: ["css", "responsive", "media-query"],
  },

  "q-css-05": {
    id: "q-css-05",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "У чому різниця між position: absolute і position: relative?",
    idealAnswer:
      "`relative` залишає елемент у звичайному потоці та дозволяє зміщувати його відносно початкової позиції. `absolute` прибирає елемент зі звичайного потоку та позиціонує його відносно найближчого позиціонованого предка.",
    shortAnswer:
      "`relative` зберігає елемент у потоці, `absolute` — виводить його з потоку та позиціонує відносно предка.",
    weight: 3,
    tags: ["css", "position"],
  },

  "q-css-06": {
    id: "q-css-06",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Для чого використовується z-index?",
    idealAnswer:
      "`z-index` визначає порядок накладання позиціонованих або інших відповідних елементів у stacking context. Елемент із більшим значенням може відображатися поверх елемента з меншим.",
    shortAnswer: "Керує порядком накладання елементів по осі Z.",
    weight: 2,
    tags: ["css", "z-index"],
  },

  "q-css-07": {
    id: "q-css-07",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Що таке CSS-препроцесор, наприклад Sass?",
    idealAnswer:
      "Sass розширює можливості CSS додатковими можливостями, такими як змінні, вкладеність, mixins і функції. Sass-код компілюється у звичайний CSS, який розуміє браузер.",
    shortAnswer:
      "Інструмент, що розширює CSS можливостями на кшталт змінних і mixins та компілюється у CSS.",
    weight: 2,
    tags: ["css", "sass"],
  },

  "q-css-08": {
    id: "q-css-08",
    category: "HTML/CSS основи",
    difficulty: "junior",
    question: "Як зробити компонент адаптивним?",
    idealAnswer:
      "Потрібно використовувати responsive layout: гнучкі розміри, Flexbox або Grid, media queries, відносні одиниці та коректну роботу з контентом. Компонент не повинен залежати від одного фіксованого розміру екрана.",
    shortAnswer:
      "Використовувати гнучкий layout, media queries та розміри, які адаптуються до viewport.",
    weight: 3,
    tags: ["css", "responsive", "components"],
  },

  // =========================================================
  // Git
  // =========================================================

  "q-git-01": {
    id: "q-git-01",
    category: "Git",
    difficulty: "junior",
    question: "Що таке Git?",
    idealAnswer:
      "Git — розподілена система контролю версій, яка дозволяє зберігати історію змін коду, працювати з гілками, об’єднувати зміни та повертатися до попередніх версій.",
    shortAnswer:
      "Система контролю версій для збереження історії змін і роботи з кодом.",
    weight: 2,
    tags: ["git"],
  },

  "q-git-02": {
    id: "q-git-02",
    category: "Git",
    difficulty: "junior",
    question: "У чому різниця між git pull і git fetch?",
    idealAnswer:
      "`git fetch` завантажує нові зміни з remote, але не об’єднує їх із поточною гілкою. `git pull` зазвичай виконує fetch, а потім інтегрує отримані зміни у поточну гілку.",
    shortAnswer:
      "`fetch` лише отримує зміни, а `pull` отримує їх і інтегрує в поточну гілку.",
    weight: 3,
    tags: ["git", "remote"],
  },

  "q-git-03": {
    id: "q-git-03",
    category: "Git",
    difficulty: "junior",
    question: "Що таке merge conflict і як його вирішити?",
    idealAnswer:
      "Merge conflict виникає, коли Git не може автоматично об’єднати зміни, наприклад коли одна й та сама ділянка файлу була змінена по-різному. Потрібно вручну вибрати правильний код, видалити conflict markers, виконати `git add` і завершити merge.",
    shortAnswer:
      "Виникає, коли Git не може автоматично об’єднати зміни; конфлікт вирішують вручну і завершують merge.",
    weight: 3,
    tags: ["git", "merge"],
  },

  "q-git-04": {
    id: "q-git-04",
    category: "Git",
    difficulty: "junior",
    question: "Що таке git commit?",
    idealAnswer:
      "Commit — це зафіксований набір змін у локальній історії Git. Він містить інформацію про зміни та повідомлення, яке описує їх.",
    shortAnswer: "Commit фіксує набір змін у локальній історії Git.",
    weight: 2,
    tags: ["git", "commit"],
  },

  "q-git-05": {
    id: "q-git-05",
    category: "Git",
    difficulty: "junior",
    question: "Для чого потрібні Git branches?",
    idealAnswer:
      "Гілки дозволяють розробляти функціональність або виправлення окремо від основної гілки. Після завершення роботи зміни можна об’єднати через merge або інший workflow.",
    shortAnswer:
      "Гілки ізолюють різні лінії розробки та дозволяють працювати над функціями незалежно.",
    weight: 2,
    tags: ["git", "branches"],
  },

  "q-git-06": {
    id: "q-git-06",
    category: "Git",
    difficulty: "junior",
    question: "Що робить git stash?",
    idealAnswer:
      "`git stash` тимчасово зберігає незакомічені зміни робочої директорії, щоб можна було переключитися на іншу гілку або виконати іншу роботу без створення проміжного commit.",
    shortAnswer:
      "Тимчасово зберігає незакомічені зміни, щоб очистити робочу директорію.",
    weight: 2,
    tags: ["git", "stash"],
  },

  // =========================================================
  // State management / Context / Redux
  // =========================================================

  "q-state-01": {
    id: "q-state-01",
    category: "State Management",
    difficulty: "junior",
    question: "Що таке lifting state up?",
    idealAnswer:
      "Lifting state up — перенесення спільного state до найближчого спільного батьківського компонента, щоб кілька дочірніх компонентів могли працювати з одним джерелом даних через props.",
    shortAnswer:
      "Перенесення спільного state до найближчого спільного батьківського компонента.",
    weight: 3,
    tags: ["react", "state"],
  },

  "q-state-02": {
    id: "q-state-02",
    category: "State Management",
    difficulty: "junior",
    question: "Коли достатньо useState, а коли потрібен глобальний state?",
    idealAnswer:
      "Локальний `useState` достатній, якщо дані потрібні одному компоненту або невеликій частині дерева. Глобальний state або інший shared state management може бути корисним, коли багато віддалених компонентів повинні працювати з одними даними.",
    shortAnswer:
      "useState — для локального стану; глобальний state — коли одні й ті самі дані потрібні багатьом частинам застосунку.",
    weight: 3,
    tags: ["react", "state"],
  },

  "q-state-03": {
    id: "q-state-03",
    category: "State Management",
    difficulty: "junior",
    question: "Що таке Context API?",
    idealAnswer:
      "Context API дозволяє передавати значення через дерево компонентів без необхідності вручну передавати props на кожному проміжному рівні. Контекст створюється через `createContext`, значення надається через Provider і читається через `useContext`.",
    shortAnswer:
      "Механізм передачі даних через дерево компонентів без prop drilling.",
    weight: 3,
    tags: ["react", "context"],
  },

  "q-state-04": {
    id: "q-state-04",
    category: "State Management",
    difficulty: "junior",
    question: "Які можуть бути недоліки Context API?",
    idealAnswer:
      "Якщо значення Context часто змінюється, багато споживачів контексту можуть отримувати оновлення та ререндеритися. Також великий обсяг різнорідного глобального стану може зробити Context складнішим для підтримки.",
    shortAnswer:
      "Часті зміни Context можуть спричиняти зайві ререндери та ускладнювати керування великим глобальним станом.",
    weight: 3,
    tags: ["react", "context", "performance"],
  },

  "q-redux-01": {
    id: "q-redux-01",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке Redux?",
    idealAnswer:
      "Redux — бібліотека для централізованого керування станом. Стан зберігається у store, зміни описуються actions, а reducer-и обчислюють новий стан.",
    shortAnswer:
      "Бібліотека для централізованого та передбачуваного керування станом застосунку.",
    weight: 2,
    tags: ["redux", "state"],
  },

  "q-redux-02": {
    id: "q-redux-02",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке Redux Toolkit?",
    idealAnswer:
      "Redux Toolkit — офіційний рекомендований набір інструментів для написання Redux-коду. Він спрощує створення store, reducer-ів і actions та зменшує кількість шаблонного коду.",
    shortAnswer:
      "Офіційний набір інструментів для простішої та рекомендованої роботи з Redux.",
    weight: 3,
    tags: ["redux", "redux-toolkit"],
  },

  "q-redux-03": {
    id: "q-redux-03",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке store, action, reducer і slice у Redux?",
    idealAnswer:
      "Store містить стан застосунку. Action описує подію або зміну, яку потрібно виконати. Reducer обчислює новий стан на основі поточного state та action. Slice у Redux Toolkit групує state, reducer-и та відповідні actions для певної частини стану.",
    shortAnswer:
      "Store — стан; action — подія; reducer — обчислення нового стану; slice — логічна частина Redux state.",
    weight: 4,
    tags: ["redux", "redux-toolkit"],
  },

  "q-redux-04": {
    id: "q-redux-04",
    category: "Redux",
    difficulty: "junior",
    question: "Опиши потік даних у Redux.",
    idealAnswer:
      "Компонент викликає `dispatch(action)`. Action потрапляє до reducer, який на основі поточного state та action обчислює новий state. Store оновлюється, а компоненти, які підписані на змінену частину стану, отримують нові дані та рендеряться.",
    shortAnswer:
      "dispatch(action) → reducer → новий state у store → оновлення підписаних компонентів.",
    weight: 4,
    tags: ["redux", "data-flow"],
  },

  "q-redux-05": {
    id: "q-redux-05",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке reducer?",
    idealAnswer:
      "Reducer — функція, яка отримує поточний state та action і повертає новий state. Reducer має бути чистим і не повинен виконувати side effects.",
    shortAnswer:
      "Чиста функція, яка на основі state та action обчислює новий state.",
    weight: 3,
    tags: ["redux", "reducer"],
  },

  "q-redux-06": {
    id: "q-redux-06",
    category: "Redux",
    difficulty: "junior",
    question: "Для чого потрібні useSelector і useDispatch?",
    idealAnswer:
      "`useSelector` дозволяє отримати потрібну частину Redux state та підписатися на її зміни. `useDispatch` повертає функцію `dispatch`, через яку компонент відправляє actions у Redux.",
    shortAnswer: "`useSelector` читає state, `useDispatch` відправляє actions.",
    weight: 3,
    tags: ["redux", "hooks"],
  },

  "q-redux-07": {
    id: "q-redux-07",
    category: "Redux",
    difficulty: "junior",
    question: "Для чого потрібен middleware у Redux?",
    idealAnswer:
      "Middleware дозволяє виконувати додаткову логіку між dispatch action та його обробкою reducer-ом. Його використовують, наприклад, для асинхронних операцій, логування або додаткової обробки actions.",
    shortAnswer:
      "Дозволяє додавати логіку між dispatch action і його обробкою reducer-ом.",
    weight: 3,
    tags: ["redux", "middleware"],
  },

  "q-redux-08": {
    id: "q-redux-08",
    category: "Redux",
    difficulty: "junior",
    question: "Що таке selector у Redux?",
    idealAnswer:
      "Selector — функція, яка отримує весь Redux state і повертає потрібну його частину. Наприклад, `useSelector(state => state.user)` отримує user state.",
    shortAnswer: "Функція, яка вибирає потрібну частину Redux state.",
    weight: 2,
    tags: ["redux", "selector"],
  },

  "q-redux-09": {
    id: "q-redux-09",
    category: "Redux",
    difficulty: "junior",
    question: "У чому різниця між Redux і Context API?",
    idealAnswer:
      "Context є вбудованим механізмом React для передачі значень через дерево компонентів. Redux — окремий state management інструмент із централізованим store, actions, reducers і middleware. Context часто достатній для простого shared state, а Redux має більше спеціалізованих інструментів для складнішого стану.",
    shortAnswer:
      "Context — механізм React для передачі даних; Redux — окрема система централізованого керування станом.",
    weight: 3,
    tags: ["redux", "context", "state"],
  },

  // =========================================================
  // React Router
  // =========================================================

  "q-router-01": {
    id: "q-router-01",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке React Router?",
    idealAnswer:
      "React Router — бібліотека для організації клієнтської навігації в React-застосунках. Вона дозволяє пов’язувати URL із компонентами та створювати маршрути без повного перезавантаження сторінки.",
    shortAnswer: "Бібліотека для клієнтської маршрутизації React-застосунку.",
    weight: 2,
    tags: ["react", "router"],
  },

  "q-router-02": {
    id: "q-router-02",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке route?",
    idealAnswer:
      "Route описує відповідність між певним URL-шляхом і компонентом або набором компонентів, які потрібно показати для цього шляху.",
    shortAnswer: "Правило, яке пов’язує URL-шлях із відповідним UI.",
    weight: 2,
    tags: ["react", "router"],
  },

  "q-router-03": {
    id: "q-router-03",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке dynamic route?",
    idealAnswer:
      "Dynamic route містить змінну частину URL. Наприклад, `/users/:id` може відповідати `/users/15` або `/users/42`. Значення параметра можна отримати з router.",
    shortAnswer: "Маршрут зі змінним параметром у URL, наприклад `/users/:id`.",
    weight: 3,
    tags: ["react", "router", "params"],
  },

  "q-router-04": {
    id: "q-router-04",
    category: "React Router",
    difficulty: "junior",
    question: "Чим Link відрізняється від звичайного `<a>`?",
    idealAnswer:
      "React Router `Link` виконує клієнтську навігацію без повного перезавантаження сторінки. Звичайний `<a>` переходить за URL через стандартний механізм браузера і зазвичай перезавантажує документ.",
    shortAnswer:
      "`Link` забезпечує SPA-навігацію без повного перезавантаження сторінки.",
    weight: 3,
    tags: ["react", "router", "navigation"],
  },

  "q-router-05": {
    id: "q-router-05",
    category: "React Router",
    difficulty: "junior",
    question: "Що таке protected route?",
    idealAnswer:
      "Protected route — маршрут, доступ до якого залежить від певної умови, наприклад автентифікації користувача. Якщо користувач не має доступу, його можна перенаправити на сторінку login.",
    shortAnswer:
      "Маршрут, доступ до якого дозволяється лише за певної умови, наприклад після авторизації.",
    weight: 3,
    tags: ["react", "router", "auth"],
  },

  "q-router-06": {
    id: "q-router-06",
    category: "React Router",
    difficulty: "junior",
    question: "Як виконати програмну навігацію в React Router?",
    idealAnswer:
      "Для програмної навігації використовують відповідний navigation hook, наприклад `useNavigate`. Він дозволяє перейти на інший маршрут після події, завершення запиту або іншої логіки.",
    shortAnswer: "Через navigation API React Router, наприклад `useNavigate`.",
    weight: 2,
    tags: ["react", "router", "navigation"],
  },

  // =========================================================
  // Performance
  // =========================================================

  "q-performance-01": {
    id: "q-performance-01",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що таке повторний рендер компонента?",
    idealAnswer:
      "Повторний рендер означає, що React знову виконує компонент, щоб отримати актуальний опис UI на основі нового state або props. Це не означає автоматично повне перемальовування всього DOM.",
    shortAnswer:
      "React повторно виконує компонент для отримання актуального опису UI.",
    weight: 3,
    tags: ["react", "render", "performance"],
  },

  "q-performance-02": {
    id: "q-performance-02",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що може спричинити зайві ререндери?",
    idealAnswer:
      "Причинами можуть бути зміна state, props або context, нестабільні об’єкти та функції, які передаються дочірнім компонентам, а також відсутність необхідної мемоізації в оптимізованих компонентах.",
    shortAnswer:
      "Зміни state/props/context і нестабільні посилання на об’єкти або функції можуть спричиняти зайві ререндери.",
    weight: 3,
    tags: ["react", "performance", "render"],
  },

  "q-performance-03": {
    id: "q-performance-03",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що таке React.memo?",
    idealAnswer:
      "`React.memo` дозволяє мемоізувати функціональний компонент. Якщо його props не змінилися за поверхневим порівнянням, React може пропустити повторний рендер цього компонента.",
    shortAnswer:
      "Мемоізує компонент і дозволяє пропускати його ререндер, якщо props не змінилися.",
    weight: 3,
    tags: ["react", "performance", "memo"],
  },

  "q-performance-04": {
    id: "q-performance-04",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Що таке Virtual DOM?",
    idealAnswer:
      "Virtual DOM — концептуальне представлення UI у пам’яті, яке React використовує для порівняння попереднього та нового дерева елементів. На основі цього порівняння React визначає необхідні зміни реального DOM.",
    shortAnswer:
      "Представлення UI в пам’яті, яке React використовує для визначення необхідних DOM-змін.",
    weight: 3,
    tags: ["react", "virtual-dom"],
  },

  "q-performance-05": {
    id: "q-performance-05",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Чи потрібно використовувати useMemo і useCallback всюди?",
    idealAnswer:
      "Ні. Мемоізація має власну вартість і не завжди дає користь. Її варто використовувати, коли є конкретна причина: дороге обчислення, стабільність посилання для оптимізованого компонента або залежність hook, де це реально впливає на продуктивність.",
    shortAnswer:
      "Ні, мемоізацію слід використовувати за потреби, а не автоматично для кожного значення чи функції.",
    weight: 3,
    tags: ["react", "performance", "hooks"],
  },

  "q-performance-06": {
    id: "q-performance-06",
    category: "Продуктивність React",
    difficulty: "junior",
    question: "Як знайти повільний компонент у React-застосунку?",
    idealAnswer:
      "Для цього можна використовувати React DevTools Profiler та інструменти браузера. Вони дозволяють побачити, які компоненти рендеряться, скільки часу займає render і які зміни могли спричинити оновлення.",
    shortAnswer:
      "Використати React DevTools Profiler та Performance tools браузера.",
    weight: 3,
    tags: ["react", "performance", "devtools"],
  },

  // =========================================================
  // Testing / Accessibility
  // =========================================================

  "q-testing-01": {
    id: "q-testing-01",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що таке unit test?",
    idealAnswer:
      "Unit test перевіряє невелику ізольовану частину коду, наприклад функцію, компонентну логіку або окремий модуль. Мета — перевірити, що конкретна одиниця працює відповідно до очікувань.",
    shortAnswer:
      "Тест, який перевіряє окрему невелику одиницю коду в ізоляції.",
    weight: 2,
    tags: ["testing", "unit-test"],
  },

  "q-testing-02": {
    id: "q-testing-02",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що варто тестувати в React-компоненті?",
    idealAnswer:
      "Потрібно перевіряти поведінку компонента: що користувач бачить потрібний UI, може виконати необхідну дію, а компонент правильно реагує на props, state та помилки. Тести не повинні надмірно залежати від внутрішньої реалізації.",
    shortAnswer:
      "Перш за все поведінку компонента та його реакцію на дії користувача й дані.",
    weight: 3,
    tags: ["testing", "react"],
  },

  "q-testing-03": {
    id: "q-testing-03",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що таке mock у тестуванні?",
    idealAnswer:
      "Mock — заміна реальної залежності контрольованою тестовою реалізацією. Наприклад, замість реального API можна створити mock, який повертає наперед визначені дані, щоб тест був швидким і передбачуваним.",
    shortAnswer:
      "Тестова заміна реальної залежності, яка дозволяє контролювати її поведінку.",
    weight: 3,
    tags: ["testing", "mock"],
  },

  "q-testing-04": {
    id: "q-testing-04",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Що таке accessibility (a11y)?",
    idealAnswer:
      "Accessibility означає створення інтерфейсу, яким можуть користуватися люди з різними можливостями та способами взаємодії. Важливі семантичний HTML, клавіатурна навігація, доступні форми, контраст і правильне використання ARIA там, де воно справді потрібне.",
    shortAnswer:
      "Створення інтерфейсу, доступного для користувачів із різними потребами та способами взаємодії.",
    weight: 3,
    tags: ["accessibility", "html"],
  },

  "q-testing-05": {
    id: "q-testing-05",
    category: "Тестування та доступність",
    difficulty: "junior",
    question: "Чому семантичні HTML-елементи важливі для accessibility?",
    idealAnswer:
      "Семантичні елементи передають браузерам і assistive technologies інформацію про призначення контенту. Наприклад, `button` повідомляє, що елемент є кнопкою, і забезпечує стандартну поведінку клавіатури, тоді як `div` цього не дає автоматично.",
    shortAnswer:
      "Семантика допомагає браузерам і assistive technologies правильно розуміти призначення елементів.",
    weight: 3,
    tags: ["accessibility", "html", "semantic"],
  },

  // =========================================================
  // Практичні React / JavaScript питання
  // =========================================================

  "q-practical-01": {
    id: "q-practical-01",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Що буде виведено після натискання кнопки та чому? `const [count, setCount] = useState(0); const handleClick = () => { setCount(count + 1); setCount(count + 1); setCount(count + 1); };`",
    idealAnswer:
      "У типовій ситуації після одного кліку count збільшиться на 1, а не на 3. Усі три виклики використовують одне й те саме значення `count`, яке було доступне під час поточного render. Для послідовного оновлення потрібно використовувати functional updater: `setCount(prev => prev + 1)`.",
    shortAnswer:
      "Значення збільшиться на 1; для трьох послідовних збільшень треба використати `setCount(prev => prev + 1)`.",
    weight: 4,
    tags: ["react", "useState", "practical"],
  },

  "q-practical-02": {
    id: "q-practical-02",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Що не так із цим кодом? `const [user, setUser] = useState({ name: 'Ivan' }); user.name = 'Petro';`",
    idealAnswer:
      "State мутується напряму, а React не отримує коректного повідомлення про оновлення. Потрібно створити новий об’єкт через setter: `setUser(prev => ({ ...prev, name: 'Petro' }))`.",
    shortAnswer:
      "Не можна мутувати state напряму; потрібно створити новий об’єкт через setter.",
    weight: 3,
    tags: ["react", "state", "immutability", "practical"],
  },

  "q-practical-03": {
    id: "q-practical-03",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Як правильно додати елемент у масив state: `const [items, setItems] = useState([])`?",
    idealAnswer:
      "Потрібно створити новий масив, а не використовувати `push` для мутації існуючого: `setItems(prev => [...prev, newItem])`. Це зберігає принцип immutability.",
    shortAnswer:
      "Використати `setItems(prev => [...prev, newItem])`, а не мутувати масив через push.",
    weight: 3,
    tags: ["react", "state", "arrays", "practical"],
  },

  "q-practical-04": {
    id: "q-practical-04",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як видалити елемент із масиву state, якщо він має id?",
    idealAnswer:
      "Потрібно створити новий масив через `filter`: `setItems(prev => prev.filter(item => item.id !== id))`. `filter` не мутує початковий масив.",
    shortAnswer:
      "Використати `filter`, наприклад `setItems(prev => prev.filter(item => item.id !== id))`.",
    weight: 3,
    tags: ["react", "state", "arrays", "practical"],
  },

  "q-practical-05": {
    id: "q-practical-05",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як реалізувати перемикач стану `isOpen` через useState?",
    idealAnswer:
      "Можна використати functional updater: `setIsOpen(prev => !prev)`. Це безпечно працює навіть коли оновлення state відбуваються послідовно.",
    shortAnswer: "Використати `setIsOpen(prev => !prev)`.",
    weight: 2,
    tags: ["react", "useState", "practical"],
  },

  "q-practical-06": {
    id: "q-practical-06",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Як зробити API-запит у useEffect так, щоб зберігати loading, data та error?",
    idealAnswer:
      "Потрібно створити три state: `loading`, `data`, `error`. Перед запитом встановити loading у true, виконати запит у `try`, записати результат у data, у `catch` записати помилку, а у `finally` встановити loading у false. Для реального застосунку також варто подумати про cleanup або скасування запиту.",
    shortAnswer:
      "Використати окремі state для data/loading/error та обробити запит через try/catch/finally.",
    weight: 4,
    tags: ["react", "api", "useEffect", "practical"],
  },

  "q-practical-07": {
    id: "q-practical-07",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Чому цей useEffect може створити нескінченний цикл? `useEffect(() => { setCount(count + 1); });`",
    idealAnswer:
      "У effect немає dependency array, тому він виконується після кожного рендера. Усередині effect змінюється state, що викликає новий render, після якого effect знову запускається. Це створює цикл.",
    shortAnswer:
      "Effect запускається після кожного рендера і кожного разу змінює state, запускаючи наступний рендер.",
    weight: 4,
    tags: ["react", "useEffect", "state", "practical"],
  },

  "q-practical-08": {
    id: "q-practical-08",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як очистити setInterval у React-компоненті?",
    idealAnswer:
      "Потрібно створити interval у `useEffect`, зберегти його ID та повернути cleanup-функцію з `clearInterval`: `return () => clearInterval(id)`. Це запобігає витокам і роботі таймера після розмонтування компонента.",
    shortAnswer:
      "Створити interval у useEffect і очистити його через `clearInterval` у cleanup.",
    weight: 3,
    tags: ["react", "useEffect", "cleanup", "practical"],
  },

  "q-practical-09": {
    id: "q-practical-09",
    category: "Практичні React питання",
    difficulty: "junior",
    question:
      "Що станеться, якщо передати в дочірній компонент inline-функцію: `<Child onClick={() => handleClick()} />`?",
    idealAnswer:
      "Під час кожного render батьківського компонента створюється нове посилання на функцію. Якщо `Child` оптимізований через `React.memo`, нове посилання може спричинити його повторний рендер. У разі реальної потреби стабільне посилання можна отримати через `useCallback`.",
    shortAnswer:
      "При кожному render створюється нова функція; для memo-компонента це може спричинити зайвий ререндер.",
    weight: 3,
    tags: ["react", "performance", "useCallback", "practical"],
  },

  "q-practical-10": {
    id: "q-practical-10",
    category: "Практичні React питання",
    difficulty: "junior",
    question: "Як відрендерити компонент тільки якщо користувач авторизований?",
    idealAnswer:
      "Можна виконати умовний рендеринг на основі auth state: `{isLoggedIn ? <Dashboard /> : <Login />}`. Якщо використовується router, аналогічну перевірку можна реалізувати через protected route.",
    shortAnswer:
      "Перевірити auth state та умовно відрендерити потрібний компонент або захистити маршрут.",
    weight: 2,
    tags: ["react", "auth", "conditional-rendering", "practical"],
  },

  // =========================================================
  // General Front-End
  // =========================================================

  "q-general-01": {
    id: "q-general-01",
    category: "Загальні основи",
    difficulty: "junior",
    question: "У чому різниця між frontend і backend?",
    idealAnswer:
      "Frontend відповідає за інтерфейс і взаємодію користувача з вебзастосунком та працює переважно в браузері. Backend відповідає за серверну логіку, роботу з базою даних, авторизацію та API.",
    shortAnswer:
      "Frontend — UI та клієнтська логіка; backend — серверна логіка, дані та API.",
    weight: 2,
    tags: ["general", "frontend", "backend"],
  },

  "q-general-02": {
    id: "q-general-02",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке DOM?",
    idealAnswer:
      "DOM (Document Object Model) — об’єктне представлення HTML-документа у вигляді дерева вузлів. JavaScript може читати та змінювати DOM, наприклад додавати елементи, змінювати текст або атрибути.",
    shortAnswer:
      "Об’єктне дерево HTML-документа, з яким JavaScript може взаємодіяти.",
    weight: 2,
    tags: ["browser", "dom", "javascript"],
  },

  "q-general-03": {
    id: "q-general-03",
    category: "Загальні основи",
    difficulty: "junior",
    question: "У чому різниця між DOM і BOM?",
    idealAnswer:
      "DOM представляє HTML-документ і його елементи. BOM (Browser Object Model) описує браузерне середовище: `window`, `location`, `history`, `navigator` та інші об’єкти, пов’язані з браузером.",
    shortAnswer: "DOM — документ і його елементи; BOM — браузерне середовище.",
    weight: 3,
    tags: ["browser", "dom", "bom"],
  },

  "q-general-04": {
    id: "q-general-04",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке CORS?",
    idealAnswer:
      "CORS (Cross-Origin Resource Sharing) — механізм браузера, який контролює доступ вебсторінки до ресурсів іншого origin. Сервер може через HTTP-заголовки дозволити певним origin виконувати такі запити.",
    shortAnswer:
      "Механізм браузера, який контролює cross-origin HTTP-запити через політику сервера.",
    weight: 3,
    tags: ["browser", "network", "cors"],
  },

  "q-general-05": {
    id: "q-general-05",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке npm?",
    idealAnswer:
      "npm — менеджер пакетів для JavaScript/Node.js екосистеми. Він дозволяє встановлювати залежності, керувати версіями пакетів і запускати визначені в `package.json` scripts.",
    shortAnswer:
      "Менеджер пакетів JavaScript, який також використовується для запуску npm scripts.",
    weight: 2,
    tags: ["javascript", "npm", "node"],
  },

  "q-general-06": {
    id: "q-general-06",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Для чого потрібен package.json?",
    idealAnswer:
      "`package.json` містить метадані JavaScript-проєкту, залежності, devDependencies, scripts та інші налаштування. Він дозволяє відновити залежності проєкту та стандартизувати команди запуску.",
    shortAnswer: "Описує JavaScript-проєкт, його залежності та scripts.",
    weight: 2,
    tags: ["npm", "javascript"],
  },

  "q-general-07": {
    id: "q-general-07",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке environment variables?",
    idealAnswer:
      "Environment variables — конфігураційні значення, які передаються застосунку через середовище виконання або файл конфігурації. Їх часто використовують для URL API, режимів роботи та іншої конфігурації. Секретні значення не можна бездумно включати у frontend bundle, оскільки код frontend доступний користувачу.",
    shortAnswer:
      "Зовнішні конфігураційні значення, які використовуються під час запуску або збірки застосунку.",
    weight: 3,
    tags: ["environment", "frontend", "security"],
  },

  "q-general-08": {
    id: "q-general-08",
    category: "Загальні основи",
    difficulty: "junior",
    question: "Що таке HTTP request і response?",
    idealAnswer:
      "HTTP request — повідомлення від клієнта до сервера, яке містить метод, URL, headers і за потреби body. HTTP response — відповідь сервера зі status code, headers і за потреби body.",
    shortAnswer:
      "Request надсилається клієнтом до сервера, response повертається сервером у відповідь.",
    weight: 2,
    tags: ["http", "network"],
  },
};
