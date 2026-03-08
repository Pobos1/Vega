"use client";

import { useState } from "react";
import { BookOpen, Filter, Search, X } from "lucide-react";

type Scenario = {
  id: number;
  title: string;
  age: string;
  goal: string;
  intro: string;
  mainPart: string;
  reflection: string;
  keyTakeaway: string;
  topic: string;
  duration: string;
  tools: string[];
};

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Народные праздники России",
    age: "5–7 класс",
    goal: "Познакомить учащихся с традиционными народными праздниками России и их значением.",
    intro:
      "Учитель демонстрирует интерактивную карту России и просит детей вспомнить, какие праздники они знают. На доске (Jamboard) появляется облако слов с их ответами.",
    mainPart:
      "1) Просмотр короткого ролика на YouTube о Масленице и Троице.\n2) Работа в группах: каждая группа получает праздник и заполняет онлайн-таблицу в Google Docs (символы, даты, традиции).\n3) Проведение онлайн-викторины в Kahoot по содержанию ролика и таблиц.\n4) Создание общей интерактивной доски в Padlet с изображениями и краткими подписями о праздниках.",
    reflection:
      "Ученики заходят в Mentimeter и отвечают на вопрос: «Какой праздник показался вам самым интересным и почему?» Результаты обсуждаются фронтально.",
    keyTakeaway:
      "Русские народные праздники помогают хранить традиции и объединяют людей разных поколений.",
    topic: "Традиции и праздники",
    duration: "40–45 минут",
    tools: ["YouTube", "Google Docs", "Kahoot", "Jamboard", "Padlet", "Mentimeter"],
  },
  {
    id: 2,
    title: "Русская кухня: от борща до блинов",
    age: "6–8 класс",
    goal: "Расширить представления учащихся о традиционных блюдах русской кухни и их истории.",
    intro:
      "На экране демонстрируются фотографии блюд русской кухни в презентации Google Slides. Учитель предлагает определить, какие блюда они знают.",
    mainPart:
      "1) Просмотр короткого YouTube‑ролика о русской кухне.\n2) Работа в парах: ученики получают доступ к Google Maps и отмечают регионы происхождения разных блюд.\n3) Создание инфографики о выбранном блюде в Canva (ингредиенты, история, интересные факты).\n4) Обсуждение созданных работ через демонстрацию экрана или общий доступ к папке.",
    reflection:
      "Онлайн-опрос в Google Forms с вопросами «Что нового вы узнали о русской кухне?» и «Какое блюдо вы хотели бы приготовить?»",
    keyTakeaway:
      "Русская кухня отражает историю и природные особенности разных регионов России.",
    topic: "Русская кухня",
    duration: "40–45 минут",
    tools: ["YouTube", "Google Slides", "Google Maps", "Canva", "Google Forms"],
  },
  {
    id: 3,
    title: "Русские народные сказки в цифровом формате",
    age: "4–6 класс",
    goal: "Научить детей анализировать образы героев русских народных сказок, используя цифровые инструменты.",
    intro:
      "Учитель показывает обложки известных сказок на интерактивной доске и просит детей угадать названия. Создаётся короткое голосование в Mentimeter.",
    mainPart:
      "1) Чтение фрагментов сказок (онлайн‑версия в библиотеке, например, ЛитРес:Школа или аналогичной).\n2) Ученики в группах создают «облако слов» в Mentimeter по характеристикам главного героя.\n3) В сервисе Jamboard классу предлагается распределить персонажей по категориям: положительные/отрицательные/волшебные помощники.\n4) Создание мини‑комикса по мотивам сказки в Canva или Pixton (по выбору учителя).",
    reflection:
      "Короткие устные выступления: каждый учащийся называет один цифровой инструмент, который помог ему лучше понять сказку.",
    keyTakeaway:
      "Цифровые инструменты помогают увидеть знакомые сказки по‑новому и глубже понять характеры героев.",
    topic: "Литература и сказки",
    duration: "30–35 минут",
    tools: ["Mentimeter", "Jamboard", "Canva"],
  },
  {
    id: 4,
    title: "Города Золотого кольца России",
    age: "7–9 класс",
    goal: "Познакомить учащихся с городами Золотого кольца и их культурным наследием.",
    intro:
      "На экране открывается Google Maps с маршрутом Золотого кольца. Учитель задаёт вопрос: «Кто был в одном из этих городов?»",
    mainPart:
      "1) Ученики в группах получают по одному городу и находят достопримечательности с помощью Google Maps и Википедии.\n2) Каждая группа создаёт интерактивную карту или презентацию в сервисе Thinglink или Google Slides.\n3) Для проверки знаний проводится онлайн‑викторина в Quizizz с вопросами по городам.\n4) Краткие устные «экскурсии» по созданным презентациям.",
    reflection:
      "В Padlet ученики размещают одну фотографию (или картинку) города, который им понравился больше всего, и короткий комментарий почему.",
    keyTakeaway:
      "Города Золотого кольца помогают понять историю России через архитектуру и культурные памятники.",
    topic: "География и города",
    duration: "45–50 минут",
    tools: ["Google Maps", "Wikipedia", "Google Slides", "Quizizz", "Padlet"],
  },
  {
    id: 5,
    title: "Герои Великой Отечественной войны",
    age: "8–9 класс",
    goal: "Сформировать уважительное отношение к подвигу участников Великой Отечественной войны.",
    intro:
      "Учитель показывает короткий фрагмент документального YouTube‑ролика и задаёт вопрос: «Что для вас значит слово 'подвиг'?» Ответы фиксируются в облаке слов Mentimeter.",
    mainPart:
      "1) Работа в группах с использованием онлайн‑архива (например, «Память народа» или аналогичного ресурса).\n2) Ученики выбирают героя и заполняют карточку в Google Docs (биография, подвиг, цитаты).\n3) Создание цифровой Доски Памяти в Padlet: каждая группа размещает фото героя и краткий текст.\n4) Обсуждение этики работы с историческими источниками и фотографиями.",
    reflection:
      "Анонимный опрос в Google Forms: «Что вас больше всего тронуло на уроке?» и «Почему важно помнить о героях войны?»",
    keyTakeaway:
      "Память о героях войны помогает сохранять историческую правду и формировать гражданскую позицию.",
    topic: "История",
    duration: "45–50 минут",
    tools: ["YouTube", "Mentimeter", "Google Docs", "Padlet", "Google Forms"],
  },
  {
    id: 6,
    title: "Русский балет как символ культуры",
    age: "7–9 класс",
    goal: "Познакомить учащихся с русским балетом как важной частью мировой культуры.",
    intro:
      "Короткий фрагмент балета (YouTube, например, «Лебединое озеро»). Учитель задаёт вопросы: «Что вы почувствовали? Какие ассоциации возникли?»",
    mainPart:
      "1) Мини‑лекция с презентацией в Google Slides о зарождении русского балета.\n2) Работа в группах: ученики получают ссылку на онлайн‑ресурс (официальные сайты театров, виртуальные музеи) и заполняют таблицу в Google Sheets (композитор, хореограф, театр).\n3) Создание простой инфографики в Canva «3 факта о русском балете, которые меня удивили».\n4) Коллективное обсуждение: чем отличается сценическое искусство от записи на экране.",
    reflection:
      "В сервисе Mentimeter ученики выбирают одно слово, которым они охарактеризуют русский балет после урока.",
    keyTakeaway:
      "Русский балет — это сочетание высокой техники, музыки и национальных традиций, известное во всём мире.",
    topic: "Искусство",
    duration: "40–45 минут",
    tools: ["YouTube", "Google Slides", "Google Sheets", "Canva", "Mentimeter"],
  },
  {
    id: 7,
    title: "Современная молодёжная культура в России",
    age: "9–11 класс",
    goal: "Понять особенности современной молодёжной культуры в России и её связи с традиционными ценностями.",
    intro:
      "Онлайн‑опрос в Google Forms: «Какие элементы современной молодёжной культуры вам ближе всего (музыка, мода, хобби и т.д.)?» Результаты выводятся на экран.",
    mainPart:
      "1) Работа с новостными сайтами и социальными сетями (по выбору учителя, в безопасном режиме) — поиск примеров молодёжных инициатив.\n2) Ученики создают цифровой плакат в Canva «Молодёжные проекты, которыми можно гордиться».\n3) Обсуждение в формате онлайн‑дискуссии на платформе Padlet или аналогичной: публикуются тезисы «за» и «против» влияния интернета на молодёжь.\n4) Фиксация аргументов в совместном документе Google Docs.",
    reflection:
      "Короткая письменная рефлексия в Google Docs: «Что я могу сделать, чтобы внести позитивный вклад в молодёжную культуру?»",
    keyTakeaway:
      "Современная молодёжная культура в России многогранна и сочетает в себе новые формы самовыражения и традиционные ценности.",
    topic: "Современная культура",
    duration: "45–50 минут",
    tools: ["Google Forms", "Canva", "Padlet", "Google Docs"],
  },
  {
    id: 8,
    title: "Русская иконопись: взгляд сквозь века",
    age: "8–11 класс",
    goal: "Познакомить учащихся с особенностями русской иконописи и её символикой.",
    intro:
      "Виртуальный тур по музею (например, с использованием ресурса Google Arts & Culture). Учитель просит детей описать, что их удивило.",
    mainPart:
      "1) Учащиеся получают интерактивные карточки с фрагментами икон (созданные в LearningApps или аналогичном сервисе).\n2) В группах они сопоставляют элементы икон с их символическим значением, фиксируя результаты в Google Docs.\n3) Создание цифровой галереи в Padlet: каждая группа выбирает одну икону и делает к ней краткий аудиокомментарий (можно записать через смартфон и прикрепить файл).\n4) Обсуждение этических норм при демонстрации религиозного искусства.",
    reflection:
      "В Mentimeter ученики отвечают на вопрос: «Что главное вы унесёте с собой после знакомства с иконописью?»",
    keyTakeaway:
      "Русская иконопись — это не только произведение искусства, но и духовный текст, который требует внимательного и уважительного отношения.",
    topic: "Искусство",
    duration: "40–45 минут",
    tools: ["Google Arts & Culture", "LearningApps", "Google Docs", "Padlet", "Mentimeter"],
  },
  {
    id: 9,
    title: "Фольклор народов России",
    age: "5–7 класс",
    goal: "Показать многообразие фольклора народов России и найти общие мотивы.",
    intro:
      "Учитель включает аудиофрагменты народных песен разных регионов России (через YouTube или другой источник) и предлагает угадать, из какой части страны может быть эта песня.",
    mainPart:
      "1) Ученики получают тексты малых фольклорных форм (загадки, пословицы, скороговорки) в общем документе Google Docs.\n2) В группах они распределяют примеры по темам (о труде, о природе, о семье) с помощью цветового кодирования.\n3) Создание интерактивной викторины в Kahoot или Quizizz на основе собранных примеров.\n4) Демонстрация результатов и совместное обсуждение, какие ценности повторяются у разных народов.",
    reflection:
      "Онлайн‑стикеры в Jamboard: каждый пишет одну пословицу или выражение, которое ему запомнилось, и поясняет почему.",
    keyTakeaway:
      "Фольклор народов России показывает общие ценности и уважение к труду, семье и природе, несмотря на культурные различия.",
    topic: "Фольклор",
    duration: "30–35 минут",
    tools: ["YouTube", "Google Docs", "Kahoot", "Quizizz", "Jamboard"],
  },
  {
    id: 10,
    title: "Музыка народов России",
    age: "6–8 класс",
    goal: "Познакомить учащихся с музыкальными традициями разных народов России и научить различать характерные особенности.",
    intro:
      "Учитель включает несколько коротких музыкальных фрагментов (YouTube-плейлист) с народными мелодиями разных регионов и предлагает детям описать настроение каждой композиции.",
    mainPart:
      "1) Ученики получают ссылки на онлайн-подборки народной музыки (YouTube, аудиотеки).\\n2) В группах заполняют таблицу в Google Sheets: регион, инструменты, темп, настроение.\\n3) В сервисе Jamboard создают визуальную карту ассоциаций к каждой мелодии (цвет, образ, движение).\\n4) Группы готовят мини-презентации в Google Slides о выбранной мелодии и её особенностях.",
    reflection:
      "В Mentimeter ученики выбирают, какая мелодия показалась им наиболее близкой и почему, затем обсуждают ответы в классе.",
    keyTakeaway:
      "Музыка народов России отражает природу, быт и характер людей, живущих в разных регионах страны.",
    topic: "Фольклор",
    duration: "40–45 минут",
    tools: ["YouTube", "Google Sheets", "Jamboard", "Google Slides", "Mentimeter"],
  },
  {
    id: 11,
    title: "Русские пословицы в современной жизни",
    age: "5–7 класс",
    goal: "Помочь учащимся увидеть актуальность русских пословиц и поговорок в современной жизни.",
    intro:
      "На экране появляется интерактивная презентация с несколькими пословицами без объяснения. Учитель просит детей попробовать догадаться, о чём каждая пословица.",
    mainPart:
      "1) В общем документе Google Docs ученики получают список пословиц и подбирают к ним современные жизненные ситуации.\\n2) В сервисе LearningApps или аналогичном создаётся задание на сопоставление пословицы и иллюстрации.\\n3) Группы придумывают короткие сценки и записывают их в формате видеоролика (при наличии возможности) или описывают в Google Slides.\\n4) Просмотр и обсуждение работ, поиск общих тем и ценностей.",
    reflection:
      "Онлайн-опрос в Google Forms: «Какая пословица больше всего подходит к вашей жизни сейчас и почему?»",
    keyTakeaway:
      "Пословицы помогают коротко и метко выразить важные жизненные наблюдения, которые не теряют актуальности со временем.",
    topic: "Фольклор",
    duration: "40–45 минут",
    tools: ["Google Docs", "LearningApps", "Google Slides", "Google Forms"],
  },
  {
    id: 12,
    title: "Русская архитектура: от избы до небоскрёба",
    age: "7–9 класс",
    goal: "Показать развитие русской архитектуры и связь между традиционными и современными формами застройки.",
    intro:
      "Учитель демонстрирует подборку фотографий русских деревянных изб, храмов и современных городских кварталов в презентации Google Slides и задаёт вопрос: «Что общего и что различного вы видите?»",
    mainPart:
      "1) Виртуальная прогулка по улицам российских городов через режим просмотра улиц в Google Maps.\\n2) Ученики делают скриншоты понравившихся зданий и вставляют их в общий документ или презентацию в Google Slides.\\n3) В сервисе Canva создают коллаж «Традиционное и современное» с короткими подписями.\\n4) Обсуждение, как сохраняются элементы народной архитектуры в современных постройках.",
    reflection:
      "В Padlet учащиеся размещают изображение здания, которое им особенно запомнилось, и объясняют, что именно в нём их привлекло.",
    keyTakeaway:
      "Архитектура России сочетает традиции и современные решения, отражая историю и сегодняшнюю жизнь страны.",
    topic: "Искусство",
    duration: "45–50 минут",
    tools: ["Google Maps", "Google Slides", "Canva", "Padlet"],
  },
  {
    id: 13,
    title: "Культура чтения в России: от библиотеки до букстаграма",
    age: "8–11 класс",
    goal: "Осмыслить традиции чтения в России и современные цифровые форматы популяризации книг.",
    intro:
      "Учитель показывает статистику чтения подростков (в виде инфографики или слайда) и задаёт вопрос: «Как вы обычно узнаёте о новых книгах?»",
    mainPart:
      "1) Ученики исследуют онлайн-каталоги библиотек и книжных сервисов (ЛитРес, электронные библиотеки) и выбирают одну книгу о России или российском авторе.\\n2) В Google Docs составляют краткую аннотацию и список причин, почему её стоит прочитать.\\n3) В Canva создают цифровой «букстаграм-пост» — обложку с цитатой и хэштегами.\\n4) Организуется виртуальная выставка работ на Padlet или в общем слайд-шоу.",
    reflection:
      "В Mentimeter ученики отвечают на вопрос: «Какой формат знакомства с книгами вам ближе — традиционный или цифровой, и почему?»",
    keyTakeaway:
      "Традиционные и цифровые форматы чтения могут дополнять друг друга и помогать сохранять интерес к книгам.",
    topic: "Литература и сказки",
    duration: "45–50 минут",
    tools: ["Google Docs", "Canva", "Padlet", "Mentimeter"],
  },
  {
    id: 14,
    title: "Природные богатства России и их сохранение",
    age: "6–8 класс",
    goal: "Сформировать представление о природном разнообразии России и важности его охраны.",
    intro:
      "Учитель показывает интерактивную карту заповедников и национальных парков России (через официальные сайты или Google Maps) и задаёт вопрос: «Какие природные объекты вы уже знаете?»",
    mainPart:
      "1) Группы выбирают один заповедник или национальный парк и собирают о нём информацию с помощью Википедии и официальных сайтов.\\n2) В Google Slides создают мини-презентацию с фотографиями, описанием животных и растений, правилами поведения.\\n3) Проводится онлайн-викторина в Quizizz или Kahoot по запомнившимся фактам.\\n4) Обсуждение, какие шаги каждый может предпринять для защиты природы.",
    reflection:
      "Онлайн-опрос в Google Forms: «Что нового вы узнали о природе России?» и «Какой заповедник вы бы хотели посетить?»",
    keyTakeaway:
      "Природные богатства России уникальны и требуют бережного отношения и ответственности от каждого.",
    topic: "География и города",
    duration: "40–45 минут",
    tools: ["Google Maps", "Wikipedia", "Google Slides", "Quizizz", "Kahoot", "Google Forms"],
  },
  {
    id: 15,
    title: "Кино о России: взгляд режиссёра и зрителя",
    age: "9–11 класс",
    goal: "Научить учащихся критически воспринимать фильмы о России и замечать культурные смыслы.",
    intro:
      "Учитель предлагает ученикам вспомнить фильмы или сериалы о России, которые они смотрели, и фиксирует ответы в виде облака слов в Mentimeter.",
    mainPart:
      "1) Просмотр фрагментов из одного-двух фильмов/документальных проектов о России (через лицензионные платформы или трейлеры на YouTube).\\n2) В Google Docs ученики заполняют таблицу: тема фильма, образ России, какие ценности подчеркиваются.\\n3) В Padlet создаётся стена с рецензиями: каждый размещает краткий отзыв и оценку фильма.\\n4) Обсуждение, чем взгляд режиссёра может отличаться от взгляда зрителя.",
    reflection:
      "Короткая письменная рефлексия в Google Docs: «Какой фильм о России вы бы посоветовали другу и почему?»",
    keyTakeaway:
      "Кинематограф помогает по-новому взглянуть на страну и её культуру, но требует внимательного и осознанного восприятия.",
    topic: "Современная культура",
    duration: "45–50 минут",
    tools: ["YouTube", "Mentimeter", "Google Docs", "Padlet"],
  },
  {
    id: 16,
    title: "Цифровые карты памяти: семейные истории о России",
    age: "5–7 класс",
    goal: "Связать личные семейные истории учеников с историей и культурой России.",
    intro:
      "Учитель предлагает детям вспомнить семейные традиции, праздники, поездки по России и делится своим небольшим примером, показывая фотографии в презентации.",
    mainPart:
      "1) Ученики приносят (или находят в семейных чатах) цифровые фотографии, связанные с поездками по России, семейными праздниками, памятными местами.\\n2) В Padlet создаётся общая «Цифровая карта памяти класса», где каждый размещает своё фото с кратким описанием.\\n3) В Google Maps при желании отмечаются города и места, связанные с историями учеников.\\n4) Обсуждение, как личные истории помогают понять историю и культуру страны в целом.",
    reflection:
      "В Mentimeter ученики отвечают на вопрос: «Какую семейную историю о России вы запомнили больше всего и почему?»",
    keyTakeaway:
      "История страны складывается из множества личных семейных историй, которые важно сохранять и передавать.",
    topic: "Традиции и праздники",
    duration: "40–45 минут",
    tools: ["Padlet", "Google Maps", "Mentimeter"],
  },
];

const topics = [
  "Все темы",
  "Традиции и праздники",
  "Русская кухня",
  "Литература и сказки",
  "География и города",
  "История",
  "Искусство",
  "Современная культура",
  "Фольклор",
];

const ages = [
  "Любой возраст",
  "4–6 класс",
  "5–7 класс",
  "6–8 класс",
  "7–9 класс",
  "8–9 класс",
  "8–11 класс",
  "9–11 класс",
];

const durations = [
  "Любое время",
  "30–35 минут",
  "40–45 минут",
  "45–50 минут",
];

const toolsOptions = [
  "Любые инструменты",
  "Kahoot",
  "Quizizz",
  "Mentimeter",
  "Padlet",
  "Jamboard",
  "YouTube",
  "Google Docs",
  "Google Slides",
  "Google Maps",
  "Google Forms",
  "Canva",
  "LearningApps",
];

export default function Page() {
  const [selectedTopic, setSelectedTopic] = useState("Все темы");
  const [selectedAge, setSelectedAge] = useState("Любой возраст");
  const [selectedDuration, setSelectedDuration] = useState("Любое время");
  const [selectedTool, setSelectedTool] = useState("Любые инструменты");
  const [results, setResults] = useState<Scenario[]>(scenarios);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleSearch = () => {
    const filtered = scenarios.filter((scenario) => {
      const topicMatch =
        selectedTopic === "Все темы" || scenario.topic === selectedTopic;
      const ageMatch =
        selectedAge === "Любой возраст" || scenario.age === selectedAge;
      const durationMatch =
        selectedDuration === "Любое время" ||
        scenario.duration === selectedDuration;
      const toolMatch =
        selectedTool === "Любые инструменты" ||
        scenario.tools.some((t) =>
          t.toLowerCase().includes(selectedTool.toLowerCase())
        );

      return topicMatch && ageMatch && durationMatch && toolMatch;
    });

    setResults(filtered);
    setHasSearched(true);
  };

  const hasNoResults = hasSearched && results.length === 0;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        <header className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sky-700">
              <BookOpen className="h-7 w-7" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Школьный проект
              </p>
            </div>
            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Сценарии уроков о культуре России
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
              Подберите готовый сценарий урока по теме, возрасту и цифровым
              инструментам. Все материалы можно адаптировать под ваши условия.
            </p>
          </div>
        </header>

        <section className="mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-4 flex items-center gap-2 text-slate-800">
            <Filter className="h-5 w-5 text-sky-700" />
            <h2 className="text-base font-semibold sm:text-lg">
              Настройте подбор сценариев
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 sm:text-sm">
                Тема
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="h-10 rounded-md border border-slate-300 bg-white px-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 sm:text-sm">
                Возраст / класс
              </label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="h-10 rounded-md border border-slate-300 bg-white px-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                {ages.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 sm:text-sm">
                Время урока
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="h-10 rounded-md border border-slate-300 bg-white px-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                {durations.map((dur) => (
                  <option key={dur} value={dur}>
                    {dur}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-700 sm:text-sm">
                Цифровые инструменты
              </label>
              <select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="h-10 rounded-md border border-slate-300 bg-white px-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                {toolsOptions.map((tool) => (
                  <option key={tool} value={tool}>
                    {tool}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-slate-500 sm:text-sm">
              Фильтрация по точному/частичному совпадению темы, возраста,
              времени и упоминания инструмента в сценарии.
            </p>
            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
            >
              <Search className="h-4 w-4" />
              <span>Найти</span>
            </button>
          </div>
        </section>

        <section aria-label="Результаты подбора">
          {hasNoResults ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-6 text-sm text-amber-900">
              <p className="font-semibold">Сценарии не найдены.</p>
              <p className="mt-1">
                Попробуйте изменить настройки — выберите другую тему, возраст,
                время или уберите ограничение по инструментам.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  Найдено сценариев: {results.length}
                </h2>
                <p className="text-xs text-slate-500 sm:text-sm">
                  Нажмите «Подробнее», чтобы увидеть полный конспект.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((scenario) => (
                  <article
                    key={scenario.id}
                    className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {scenario.title}
                      </h3>
                    </div>
                    <p className="mb-1 text-xs font-medium text-sky-700">
                      {scenario.topic}
                    </p>
                    <p className="mb-1 text-xs text-slate-600">
                      <span className="font-semibold">Возраст:</span>{" "}
                      {scenario.age}
                    </p>
                    <p className="mb-1 text-xs text-slate-600">
                      <span className="font-semibold">Время:</span>{" "}
                      {scenario.duration}
                    </p>
                    <p className="mb-3 line-clamp-3 text-xs text-slate-700">
                      {scenario.goal}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
                      <p className="text-[11px] text-slate-500">
                        Инструменты: {scenario.tools.slice(0, 3).join(", ")}
                        {scenario.tools.length > 3 ? "…" : ""}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedScenario(scenario)}
                        className="inline-flex items-center justify-center rounded-md border border-sky-600 px-3 py-1 text-xs font-medium text-sky-700 transition hover:bg-sky-50"
                      >
                        Подробнее
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        {selectedScenario && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 px-4 py-8 sm:items-center">
            <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="flex items-start justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sky-700">
                    <BookOpen className="h-4 w-4" />
                    Сценарий урока
                  </p>
                  <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                    {selectedScenario.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    {selectedScenario.age} · {selectedScenario.duration} ·{" "}
                    {selectedScenario.topic}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedScenario(null)}
                  className="ml-2 rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Закрыть"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[70vh] space-y-4 overflow-y-auto px-4 py-4 text-sm text-slate-800 sm:px-5 sm:py-5">
                <section>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Цель
                  </h4>
                  <p className="mt-1 whitespace-pre-line">
                    {selectedScenario.goal}
                  </p>
                </section>

                <section>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Как начать (вступление)
                  </h4>
                  <p className="mt-1 whitespace-pre-line">
                    {selectedScenario.intro}
                  </p>
                </section>

                <section>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Основная часть (с цифровыми инструментами)
                  </h4>
                  <p className="mt-1 whitespace-pre-line">
                    {selectedScenario.mainPart}
                  </p>
                </section>

                <section>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Рефлексия
                  </h4>
                  <p className="mt-1 whitespace-pre-line">
                    {selectedScenario.reflection}
                  </p>
                </section>

                <section>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Главный вывод
                  </h4>
                  <p className="mt-1 whitespace-pre-line">
                    {selectedScenario.keyTakeaway}
                  </p>
                </section>

                <section>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Используемые цифровые инструменты
                  </h4>
                  <p className="mt-1 text-sm">
                    {selectedScenario.tools.join(", ")}
                  </p>
                </section>
              </div>

              <div className="flex justify-end border-t border-slate-200 px-4 py-3 sm:px-5">
                <button
                  type="button"
                  onClick={() => setSelectedScenario(null)}
                  className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-200"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
