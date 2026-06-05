export type Language = "ru" | "en";

export type TimelineItem = {
  period: string;
  label: string;
  title: string;
  description: string;
  metrics: string[];
  targetId: string;
  cta: string;
};

export type TitledText = {
  title: string;
  text: string;
};

export type Role = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  bullets: TitledText[];
};

export type Project = {
  name: string;
  type: string;
  description: string;
  impact: string[];
  caseStudy?: TitledText[];
  link?: string;
};

export type SkillGroup = {
  title: string;
  level: number;
  items: string[];
};

export type Tool = {
  name: string;
  category: string;
};

export type Contact = {
  kind: "phone" | "email" | "telegram" | "whatsapp" | "linkedin";
  label: string;
  value: string;
  href: string;
};

export type EducationItem = {
  title: string;
  period: string;
  description: string;
  tags: string[];
};

export type Profile = {
  identity: {
    name: string;
    location: string;
    title: string;
    availability: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    signals: TitledText[];
    proofPoints: {
      stat: string;
      label: string;
      detail: string;
    }[];
  };
  timeline: TimelineItem[];
  roles: Role[];
  projects: Project[];
  skills: SkillGroup[];
  tools: Tool[];
  achievements: TitledText[];
  education: EducationItem[];
  workStyle: TitledText[];
  contacts: Contact[];
};

export type UiCopy = {
  nav: {
    timeline: string;
    projects: string;
    role: string;
    ulty: string;
    ai: string;
    skills: string;
    education: string;
    contact: string;
  };
  aria: {
    primaryNavigation: string;
    backToTop: string;
    proofPoints: string;
    ultyModules: string;
    languageSwitcher: string;
  };
  hero: {
    timelineCta: string;
    contactCta: string;
    visualEyebrow: string;
    portraitLabel: string;
    portraitHudTop: string;
    portraitHudBottom: string;
    visualTitle: string;
    visualIntro: string;
    visualInputsTitle: string;
    visualInputs: string[];
    visualCoreTitle: string;
    visualCoreItems: string[];
    visualOutputsTitle: string;
    visualOutputs: string[];
  };
  sections: {
    timeline: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    role: {
      eyebrow: string;
      title: string;
      current: string;
    };
    ulty: {
      eyebrow: string;
      title: string;
      intro: string;
      link: string;
      modules: string[];
    };
    skills: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    tools: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      intro: string;
      link: string;
    };
    liveProjects: {
      eyebrow: string;
      title: string;
      intro: string;
      open: string;
      preview: string;
    };
    achievements: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    education: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    workStyle: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
    };
  };
  footer: string;
};

const sharedContacts = {
  ru: [
    { kind: "phone", label: "Телефон", value: "+7 929 721-45-87", href: "tel:+79297214587" },
    { kind: "email", label: "Почта", value: "yaminaasfak@gmail.com", href: "mailto:yaminaasfak@gmail.com" },
    { kind: "telegram", label: "Telegram", value: "@demianworkself", href: "https://t.me/demianworkself" },
    { kind: "whatsapp", label: "WhatsApp", value: "+7 929 721-45-87", href: "https://wa.me/79297214587" },
  ],
  en: [
    { kind: "phone", label: "Phone", value: "+7 929 721-45-87", href: "tel:+79297214587" },
    { kind: "email", label: "Email", value: "yaminaasfak@gmail.com", href: "mailto:yaminaasfak@gmail.com" },
    { kind: "telegram", label: "Telegram", value: "@demianworkself", href: "https://t.me/demianworkself" },
    { kind: "whatsapp", label: "WhatsApp", value: "+7 929 721-45-87", href: "https://wa.me/79297214587" },
  ],
} satisfies Record<Language, Contact[]>;

export const profiles: Record<Language, Profile> = {
  ru: {
    identity: {
      name: "Демиан",
      location: "Россия, большие города / теплые страны / удаленно / релокация",
      title: "универсальный специалист",
      availability: "ИИ, онлайн-торговля, операционка, программирование, управление, внедрение гипотез",
    },
    hero: {
      eyebrow: "Для работодателей: беру сложные задачи и довожу до результата",
      headline: "Демиан - универсальный специалист",
      subheadline:
        "Я работаю с разными задачами: операционка, коммерция, маркетплейсы, продажи и встречи. Внедряю ИИ, собираю сайты, софты, агентов и автоматические рассылки. Хорошо понимаю психологию, быстро обучаюсь и открыт к новым направлениям.",
      signals: [
        { title: "Операционка", text: "Беру хаотичные задачи, раскладываю на шаги и довожу до результата." },
        { title: "Коммерция", text: "Маркетплейсы, розница, опт, продажи, встречи и ежедневное сопровождение." },
        { title: "ИИ и агенты", text: "Внедряю нейросети, автоматические рассылки, агентов и рабочие сценарии для бизнеса." },
        { title: "Сайты и софты", text: "Собираю сайты, прототипы, каталоги и инструменты через ИИ и техническую логику." },
        { title: "Психология", text: "Понимаю людей, мотивацию, коммуникацию и поведение в рабочих задачах." },
        { title: "Рост", text: "Быстро обучаюсь, открыт к новым сферам и спокойно захожу в незнакомые задачи." },
      ],
      proofPoints: [
        {
          stat: "10 мес.",
          label: "рядом с собственником",
          detail:
            "Закрываю операционные задачи в торговом бизнесе: площадки, опт, закупки, ВЭД, документы и ежедневное исполнение.",
        },
        {
          stat: "Нейросети",
          label: "плотная работа каждый день",
          detail:
            "Использую ChatGPT, Claude, Codex, Cursor, Gemini и другие инструменты для сайтов, автоматизаций, текстов, исследований и гипотез.",
        },
        {
          stat: "UltyMyLife",
          label: "собственный продукт в Telegram",
          detail:
            "Создал масштабный продукт внутри Telegram: задачи, привычки, тренировки, сон и личная эффективность в одной системе.",
        },
      ],
    },
    timeline: [
      {
        period: "2021-2025",
        label: "Технический колледж",
        title: "Диплом по специальности «Программист»",
        description:
          "Освоил базу программирования, набрал технические навыки и полезные связи, участвовал в соревнованиях по баскетболу, параллельно изучал ИИ, психологию, бизнес и монтаж.",
        metrics: ["Алгоритмическое мышление", "Архитектура ПО", "Технический язык"],
        targetId: "education",
        cta: "Подробнее",
      },
      {
        period: "2025-2026",
        label: "Резерв / бизнес-операции",
        title: "Операционный координатор / помощник руководителя",
        description:
          "Работаю в торговой компании «Резерв»: продажи и поставки товаров из Китая, торговые площадки, оптовое направление, ВЭД, закупки, ИИ-автоматизация и ежедневное исполнение.",
        metrics: ["Розница", "ИИ-агенты", "Сайты", "Юр. дела", "Операционка", "Коммерция", "Встречи", "Маркетинг"],
        targetId: "current-role",
        cta: "Подробнее",
      },
      {
        period: "Сейчас",
        label: "ИИ-операции",
        title: "ИИ-агенты, привлечение клиентов и сайты с помощью ИИ",
        description:
          "Создаю сайты, агентов, софты, автоматические рассылки и интегрирую ИИ в бизнес: от идеи, сценария и структуры до рабочего инструмента.",
        metrics: ["Сайты", "Агенты", "Софты", "Авторассылки", "Интеграция ИИ"],
        targetId: "ai-tools",
        cta: "Подробнее",
      },
      {
        period: "Параллельный трек",
        label: "Опыт основателя",
        title: "Владелец продукта UltyMyLife",
        description:
          "Сооснователь и владелец продукта UltyMyLife: мини-приложение в Telegram и экосистема управления жизнью для задач, привычек, дневника тренировок, сна и ментального фитнеса.",
        metrics: ["10 месяцев разработки", "200+ активных пользователей", "Первая версия и обратная связь"],
        targetId: "ulty",
        cta: "Подробнее",
      },
    ],
    roles: [
      {
        title: "Операционный координатор / помощник руководителя",
        organization: "Торговая компания «Резерв»",
        period: "2025-2026",
        summary:
          "Я работаю рядом с собственником и закрываю задачи, которые напрямую влияют на продажи и поставки товаров из Китая: торговые площадки, опт, закупки, ВЭД, документы, ИИ-автоматизация и сайт-каталог.",
        bullets: [
          {
            title: "Операционное исполнение",
            text: "Беру задачи от руководителя, раскладываю их на шаги, довожу до результата и держу в фокусе сроки, документы, площадки и коммерческие процессы.",
          },
          {
            title: "ИИ-агенты для продаж",
            text: "Настраиваю сценарии для автоматического прозвона, рассылок в мессенджерах и почте, чтобы ускорять первичный контакт с корпоративными клиентами.",
          },
          {
            title: "Оптовый канал на Avito",
            text: "С нуля упаковал оптовое направление: карточки, коммерческую подачу, динамические прайс-листы и переговоры с клиентами.",
          },
          {
            title: "Импорт из Китая",
            text: "Координирую поставщиков, брокеров, документы и логистику для крупных партий, где важны сроки, себестоимость и контроль рисков.",
          },
          {
            title: "Dr. Mix и торговая витрина",
            text: "Собрал коммерческий сайт с лендингом, каталогом, заявками, админкой, аналитикой и рабочими страницами для розницы, опта и операций.",
          },
        ],
      },
    ],
    projects: [
      {
        name: "UltyMyLife",
        type: "Собственный продукт",
        description:
          "Telegram-продукт для задач, привычек, тренировок и сна. Я спроектировал логику, сценарии и довел первую версию до тестирования.",
        impact: [
          "Архитектура и сценарии продукта с нуля.",
          "10 месяцев разработки вместе с техническим партнером.",
          "200+ пользователей в тестировании и развитие по обратной связи.",
        ],
        caseStudy: [
          {
            title: "Идея",
            text: "Единая система для задач, привычек, тренировок, сна и восстановления внутри Telegram.",
          },
          {
            title: "Моя роль",
            text: "Проектирую логику, сценарии, экраны и понятные задачи для разработки.",
          },
          {
            title: "Что уже сделано",
            text: "Первая версия работает, продукт протестирован на 200+ пользователях.",
          },
          {
            title: "Что развиваю дальше",
            text: "Улучшаю механику привычек, метрики прогресса и подробную страницу проекта.",
          },
        ],
        link: "ultymylife/index.html",
      },
      {
        name: "Dr. Mix / торговый веб-проект",
        type: "Лендинг, каталог, админка и операционная система",
        description:
          "Коммерческий веб-проект для продукта Dr. Mix: лендинг, каталог, заявки, клиентский центр, админка, аналитика и подготовка к деплою.",
        impact: [
          "Сделал не одну страницу, а полноценную структуру: витрина, заказы, обращения, аналитика, админка и контентные страницы.",
          "Реализовал Node.js-сервер, хранение заявок и событий, работу с админским паролем, публичными страницами и закрытыми разделами.",
          "Подготовил деплой-документацию для Ubuntu, Nginx, PM2, HTTPS и платежной интеграции ЮKassa.",
        ],
        link: "dr-mix/index.html",
      },
      {
        name: "ИИ-процессы и агенты",
        type: "Автоматизация / системы продуктивности",
        description:
          "Настраивал ИИ-ассистентов и агентные сценарии для привлечения клиентов, прозвона, рассылок, исследований, написания текстов, поддержки процессов, генерации сайтов и декомпозиции задач.",
        impact: [
          "Снизил трение в повторяющихся бизнес-задачах.",
          "Ускорил тестирование идей и подготовку рабочих черновиков.",
          "Собрал практическую насмотренность и навык работы с несколькими ведущими ИИ-инструментами.",
        ],
      },
      {
        name: "Брендовые эксперименты",
        type: "Маркетинг / идентичность команды",
        description:
          "Создал концепции фирменных футболок с логотипом и названием команды для усиления узнаваемости, внимания и внутренней идентичности.",
        impact: [
          "Связал операционную работу с практическим маркетинговым мышлением.",
          "Проверил бренд-сигналы за пределами карточек и страниц торговых площадок.",
          "Подготовил материалы, которые делают бизнес заметнее.",
        ],
      },
    ],
    skills: [
      {
        title: "ИИ-операции",
        level: 95,
        items: ["Индивидуальные ИИ-агенты", "Работа с запросами к ИИ", "Привлечение клиентов с ИИ", "Сайты с помощью ИИ"],
      },
      {
        title: "Онлайн-торговля и площадки",
        level: 88,
        items: ["Wildberries", "Ozon", "Avito", "Оптовый канал", "Ассортимент"],
      },
      {
        title: "Управление продуктом",
        level: 84,
        items: ["Архитектура продукта", "Список задач", "Дорожная карта", "Пользовательские сценарии", "Запуск первой версии"],
      },
      {
        title: "Импорт и опт",
        level: 78,
        items: ["Китай", "Таможенные брокеры", "Документы", "$100K+ грузы", "Оптовые продажи"],
      },
      {
        title: "Маркетинг и метрики",
        level: 74,
        items: ["Корпоративные переговоры", "Привлечение клиентов", "Метрики", "Коммерческий контент", "Excel"],
      },
      {
        title: "Языки",
        level: 72,
        items: ["Английский B2", "Русский родной", "Китайский начальный", "Готовность к релокации"],
      },
    ],
    tools: [
      { name: "ChatGPT", category: "ИИ-помощник" },
      { name: "Claude", category: "ИИ-помощник" },
      { name: "OpenAI Codex", category: "Разработка с ИИ" },
      { name: "Cursor", category: "Разработка с ИИ" },
      { name: "Gemini", category: "Исследования с ИИ" },
      { name: "Gamma", category: "Презентации" },
      { name: "Antigravity", category: "Разработка с ИИ" },
      { name: "Notion", category: "База знаний" },
      { name: "YouGile", category: "Командные процессы" },
      { name: "Obsidian", category: "Система мышления" },
      { name: "Miro", category: "Архитектура" },
      { name: "GitHub", category: "Контроль версий" },
      { name: "Excel", category: "Анализ данных" },
      { name: "Zenmoney", category: "Финансовый учет" },
    ],
    achievements: [
      {
        title: "Структурирую хаос",
        text: "Перевожу широкие запросы руководства в понятные задачи, последовательность действий и готовые результаты.",
      },
      {
        title: "Ускоряю продажи через ИИ",
        text: "Настраиваю агентов, рассылки и сценарии первичного контакта, чтобы быстрее выходить на корпоративных клиентов.",
      },
      {
        title: "Собираю сайты и прототипы",
        text: "Использую ИИ-помощников и техническую базу, чтобы быстро превращать идею в рабочую страницу или первую версию продукта.",
      },
      {
        title: "Мыслю как владелец продукта",
        text: "Смотрю на задачи через пользу для пользователя, бизнес-результат, скорость проверки гипотез и качество исполнения.",
      },
      {
        title: "Быстро учусь",
        text: "Открыт к новым задачам, быстро разбираюсь в инструментах и хочу расти в командах, где ценят системность и инициативу.",
      },
    ],
    education: [
      {
        title: "Диплом технического колледжа: программист",
        period: "2021-2025",
        description:
          "Техническая база: алгоритмическая логика, понимание архитектуры ПО и способность переводить бизнес-цели на язык разработчиков.",
        tags: ["Алгоритмы", "Архитектура ПО", "Техническая коммуникация"],
      },
      {
        title: "Когнитивный профиль",
        period: "ПИФ-тест: 87 процентилей",
        description:
          "Высокий уровень социального интеллекта, абстрактного мышления и системного решения проблем в условиях гиперзадачности.",
        tags: ["Абстрактное мышление", "Социальный интеллект", "Гиперзадачность"],
      },
      {
        title: "Языки и международный фокус",
        period: "Английский B2 / русский родной",
        description:
          "Английский на свободном рабочем уровне для коммуникации, переговоров и международного контекста. Русский - родной.",
        tags: ["Английский B2", "Переговоры", "Удаленно / релокация"],
      },
      {
        title: "Командная синергия",
        period: "Спорт и лидерство",
        description:
          "Многолетний опыт командных видов спорта и соревнований: стрессоустойчивость, синхронизация с командой и лидерство под нагрузкой.",
        tags: ["Баскетбол", "Лидерство", "Стрессоустойчивость"],
      },
    ],
    workStyle: [
      {
        title: "Сферы интереса",
        text: "ИИ в операциях, разработка приложений, торговые площадки, ВЭД, продуктовые системы и личная эффективность.",
      },
      {
        title: "Тип личности",
        text: "INTJ / ENTJ: люблю системность, факты, метрики, сильную структуру и задачи, где нужно думать на несколько шагов вперед.",
      },
      {
        title: "Обучение и рост",
        text: "Я открыт к новым задачам, быстро обучаюсь и хочу расти в командах, где ценят системность, инициативу и практический результат.",
      },
    ],
    contacts: sharedContacts.ru,
  },
  en: {
    identity: {
      name: "Демиан",
      location: "Russia, major cities / warm countries / remote / relocation",
      title: "versatile specialist",
      availability: "AI, online commerce, operations, programming, management, hypothesis testing",
    },
    hero: {
      eyebrow: "For employers: I take complex tasks and drive them to results",
      headline: "Demian - versatile specialist",
      subheadline:
        "I work with different tasks: operations, commerce, marketplaces, sales and meetings. I implement AI, build websites, software prototypes, agents and automated outreach. I understand psychology, learn quickly and stay open to new directions.",
      signals: [
        { title: "Operations", text: "I take chaotic tasks, split them into clear steps and bring them to a result." },
        { title: "Commerce", text: "Marketplaces, retail, wholesale, sales, meetings and daily support." },
        { title: "AI and agents", text: "I implement neural networks, automated outreach, agents and working business scenarios." },
        { title: "Sites and software", text: "I build websites, prototypes, catalogs and tools through AI and technical logic." },
        { title: "Psychology", text: "I understand people, motivation, communication and behavior in work tasks." },
        { title: "Growth", text: "I learn quickly, stay open to new fields and enter unfamiliar tasks calmly." },
      ],
      proofPoints: [
        {
          stat: "10 mo.",
          label: "close to the owner",
          detail:
            "Closing operational tasks in a trading business: platforms, wholesale, procurement, foreign trade, documents and daily execution.",
        },
        {
          stat: "Neural nets",
          label: "dense daily work",
          detail:
            "Using ChatGPT, Claude, Codex, Cursor, Gemini and other tools for websites, automation, texts, research and hypotheses.",
        },
        {
          stat: "UltyMyLife",
          label: "own Telegram product",
          detail:
            "Created a large product inside Telegram: tasks, habits, workouts, sleep and personal effectiveness in one system.",
        },
      ],
    },
    timeline: [
      {
        period: "2021-2025",
        label: "Technical college",
        title: "Programmer diploma",
        description:
          "Studied the programming foundation, built technical skills and useful connections, played in basketball competitions, and studied AI, psychology, business and editing in parallel.",
        metrics: ["Algorithmic thinking", "Software architecture", "Technical communication"],
        targetId: "education",
        cta: "Learn more",
      },
      {
        period: "2025-2026",
        label: "Rezerv / business operations",
        title: "Operations Coordinator / Executive Assistant",
        description:
          "Working in the trading company Rezerv: sales and supplies from China, marketplaces, wholesale, foreign trade, procurement, AI automation and daily execution.",
        metrics: ["Retail", "AI agents", "Websites", "Legal tasks", "Operations", "Commerce", "Meetings", "Marketing"],
        targetId: "current-role",
        cta: "Learn more",
      },
      {
        period: "Current",
        label: "AI Operations",
        title: "AI agents, customer acquisition and websites with AI",
        description:
          "I create websites, agents, software prototypes, automated outreach and integrate AI into business: from idea, scenario and structure to a working tool.",
        metrics: ["Websites", "Agents", "Software", "Automated outreach", "AI integration"],
        targetId: "ai-tools",
        cta: "Learn more",
      },
      {
        period: "Parallel track",
        label: "Founder experience",
        title: "UltyMyLife product owner",
        description:
          "Co-founder and Product Owner of UltyMyLife: a Telegram Mini App and Life OS ecosystem for tasks, habits, workout diaries, sleep, and mental fitness.",
        metrics: ["10-month build cycle", "200+ active users", "MVP and feedback"],
        targetId: "ulty",
        cta: "Learn more",
      },
    ],
    roles: [
      {
        title: "Operations Coordinator / Executive Assistant",
        organization: "Rezerv Trading Company",
        period: "2025-2026",
        summary:
          "I work close to the owner and close tasks that directly affect sales and supply from China: marketplaces, wholesale, procurement, foreign trade, documents, AI automation and the catalog website.",
        bullets: [
          {
            title: "Operational execution",
            text: "I take tasks from the manager, break them down, bring them to a result and keep deadlines, documents, platforms and commercial processes in focus.",
          },
          {
            title: "AI agents for sales",
            text: "I configure scenarios for automated calls, messenger outreach and email sequences to speed up first contact with corporate clients.",
          },
          {
            title: "Wholesale Avito channel",
            text: "I packaged the wholesale direction from scratch: listings, commercial positioning, dynamic price lists and customer negotiations.",
          },
          {
            title: "China import coordination",
            text: "I coordinate suppliers, brokers, documents and logistics for large batches where timing, cost and risk control matter.",
          },
          {
            title: "Dr. Mix and trading storefront",
            text: "I built a commercial website with a landing page, catalog, requests, admin panel, analytics and working pages for retail, wholesale and operations.",
          },
        ],
      },
    ],
    projects: [
      {
        name: "UltyMyLife",
        type: "Own product",
        description:
          "A Telegram product for tasks, habits, workouts and sleep. I designed the logic, scenarios and brought the first version to testing.",
        impact: [
          "Product architecture and scenarios from scratch.",
          "10 months of development together with a technical partner.",
          "200+ users in testing and development through feedback.",
        ],
        caseStudy: [
          {
            title: "Idea",
            text: "One system for tasks, habits, workouts, sleep and recovery inside Telegram.",
          },
          {
            title: "My role",
            text: "I design logic, scenarios, screens and clear tasks for development.",
          },
          {
            title: "Built so far",
            text: "The first version works, and the product has been tested with 200+ users.",
          },
          {
            title: "Next focus",
            text: "I am improving habit mechanics, progress metrics and the detailed project page.",
          },
        ],
        link: "ultymylife/index.html",
      },
      {
        name: "Dr. Mix / trading web project",
        type: "Landing page, catalog, admin panel and operating system",
        description:
          "Commercial web project for Dr. Mix: landing page, catalog, requests, customer center, admin panel, analytics and deployment preparation.",
        impact: [
          "Built not one page, but a complete structure: storefront, orders, requests, analytics, admin panel and content pages.",
          "Implemented a Node.js server, request and event storage, admin password flow, public pages and closed sections.",
          "Prepared deployment documentation for Ubuntu, Nginx, PM2, HTTPS and YooKassa payment integration.",
        ],
        link: "dr-mix/index.html",
      },
      {
        name: "AI processes and agents",
        type: "Automation / Productivity Systems",
        description:
          "Configured AI assistants and agent scenarios for customer acquisition, calls, outreach, research, writing, process support, site generation and task decomposition.",
        impact: [
          "Reduced friction in repetitive business tasks.",
          "Improved speed of testing ideas and producing working drafts.",
          "Built practical fluency across several leading AI tools.",
        ],
      },
      {
        name: "Brand experiments",
        type: "Marketing / Team Identity",
        description:
          "Created branded T-shirt concepts with team logo and name to strengthen recognition, attention and internal identity.",
        impact: [
          "Connected operations work with practical marketing thinking.",
          "Explored brand signals beyond marketplace listings.",
          "Built materials that make the business more recognizable.",
        ],
      },
    ],
    skills: [
      {
        title: "AI Operations",
        level: 95,
        items: ["Custom AI agents", "Prompt Engineering", "AI lead generation", "AI-assisted web builds"],
      },
      {
        title: "E-commerce & Marketplaces",
        level: 88,
        items: ["Wildberries", "Ozon", "Avito", "Wholesale channel", "Assortment operations"],
      },
      {
        title: "Product Ownership",
        level: 84,
        items: ["Product architecture", "Backlog", "Roadmap", "User flows", "MVP launch"],
      },
      {
        title: "Import & Wholesale",
        level: 78,
        items: ["China sourcing", "Customs brokers", "Documentation", "$100K+ cargo", "Wholesale sales"],
      },
      {
        title: "Marketing & Metrics",
        level: 74,
        items: ["B2B negotiations", "Lead generation", "Metrics", "Commercial content", "MS Excel"],
      },
      {
        title: "Languages",
        level: 72,
        items: ["English B2", "Russian native", "Chinese beginner", "Relocation focus"],
      },
    ],
    tools: [
      { name: "ChatGPT", category: "AI copilot" },
      { name: "Claude", category: "AI copilot" },
      { name: "OpenAI Codex", category: "AI coding" },
      { name: "Cursor", category: "AI coding" },
      { name: "Gemini", category: "AI research" },
      { name: "Gamma", category: "Presentations" },
      { name: "Antigravity", category: "AI development" },
      { name: "Notion", category: "Knowledge systems" },
      { name: "YouGile", category: "Agile workflow" },
      { name: "Obsidian", category: "Thinking system" },
      { name: "Miro", category: "Architecture" },
      { name: "GitHub", category: "Version control" },
      { name: "MS Excel", category: "Data analysis" },
      { name: "Zenmoney", category: "Finance tracking" },
    ],
    achievements: [
      {
        title: "Structure chaos",
        text: "Turn broad leadership requests into clear tasks, process steps, and finished outputs.",
      },
      {
        title: "Speed up sales with AI",
        text: "Configure agents, outreach flows, and first-contact scenarios for B2B sales.",
      },
      {
        title: "Build sites and prototypes",
        text: "Use AI copilots and a technical foundation to move ideas into working pages and MVPs faster.",
      },
      {
        title: "Think like a product owner",
        text: "Evaluate work through user value, business outcome, speed of testing, and execution quality.",
      },
      {
        title: "Learn fast",
        text: "Open to new tasks and teams that value systems thinking, initiative, and practical results.",
      },
    ],
    education: [
      {
        title: "Technical college diploma: Programmer",
        period: "2021-2025",
        description:
          "Technical foundation in algorithmic logic, software architecture awareness, and translating business goals into developer-ready language.",
        tags: ["Algorithms", "Software architecture", "Technical communication"],
      },
      {
        title: "Cognitive profile",
        period: "PIF test: 87th percentile",
        description:
          "High social intelligence, abstract thinking, and systematic problem solving under multi-task pressure.",
        tags: ["Abstract thinking", "Social intelligence", "High task load"],
      },
      {
        title: "Languages and global focus",
        period: "English B2 / Russian native",
        description:
          "Working-level English for communication, negotiations, and international context. Russian native.",
        tags: ["English B2", "Negotiations", "Remote / relocation"],
      },
      {
        title: "Team synergy",
        period: "Sports and leadership",
        description:
          "Long-term team sports and competition experience: stress resistance, team synchronization, and leadership under pressure.",
        tags: ["Basketball", "Leadership", "Stress resistance"],
      },
    ],
    workStyle: [
      {
        title: "Interests",
        text: "AI in operations, app development, marketplaces, import workflows, product systems, and personal productivity.",
      },
      {
        title: "Personality type",
        text: "INTJ / ENTJ: systems, facts, metrics, clear structure, and long-range thinking.",
      },
      {
        title: "Learning and growth",
        text: "I am open to new responsibilities, learn quickly, and want to grow in teams that value initiative and execution.",
      },
    ],
    contacts: sharedContacts.en,
  },
};

export const uiCopy: Record<Language, UiCopy> = {
  ru: {
    nav: {
      timeline: "Путь",
      projects: "Проекты",
      role: "Роль",
      ulty: "UltyMyLife",
      ai: "ИИ",
      skills: "Навыки",
      education: "Образование",
      contact: "Контакты",
    },
    aria: {
      primaryNavigation: "Основная навигация",
      backToTop: "Вернуться наверх",
      proofPoints: "Профессиональные подтверждения",
      ultyModules: "Модули продукта UltyMyLife",
      languageSwitcher: "Переключатель языка",
    },
    hero: {
      timelineCta: "Смотреть карьерный путь",
      contactCta: "Связаться",
      visualEyebrow: "Профиль",
      portraitLabel: "Фото профиля",
      portraitHudTop: "Личный слой",
      portraitHudBottom: "Движок исполнения",
      visualTitle: "Из хаоса задач - в управляемую систему",
      visualIntro:
        "Мой фокус не в красивых панелях, а в том, чтобы связать бизнес, ИИ и продуктовую логику в понятный цикл исполнения.",
      visualInputsTitle: "Входящий поток",
      visualInputs: ["Торговые площадки", "Опт", "Импорт", "Маркетинг", "Метрики"],
      visualCoreTitle: "ИИ и операции",
      visualCoreItems: ["Декомпозиция задач", "ИИ-агенты", "Документация", "Контроль исполнения"],
      visualOutputsTitle: "Результат",
      visualOutputs: ["Меньше рутины", "Быстрее гипотезы", "Понятнее процессы"],
    },
    sections: {
      timeline: {
        eyebrow: "Карьерная система",
        title: "Моя дорожная карта",
        intro:
          "Это не узкая должностная инструкция, а накапливающийся операционный трек: техническая база, бизнес-исполнение, усиление через ИИ и управление продуктом.",
      },
      role: {
        eyebrow: "Операционная роль",
        title: "Операции, продажи и ИИ-автоматизация в торговом бизнесе",
        current: "Сейчас",
      },
      ulty: {
        eyebrow: "Ключевой кейс",
        title: "UltyMyLife: моя система управления жизнью",
        intro:
          "Мой продуктовый проект показывает работодателю, как я думаю о продукте: от идеи и сценариев до первой версии, тестирования и развития.",
        link: "Открыть лендинг UltyMyLife",
        modules: ["Идея", "Моя роль", "Первая версия", "Пользователи", "Метрики", "Развитие"],
      },
      skills: {
        eyebrow: "Матрица навыков",
        title: "Практические навыки для систем, которым нужно двигаться",
        intro:
          "Главная ценность в комбинации: операционное мышление, продуктовая структура, усиление через ИИ и коммерческий контекст.",
      },
      tools: {
        eyebrow: "ИИ-инструменты",
        title: "Уверенная работа с современными ИИ-системами",
        intro:
          "Инструменты используются не для декора, а для исследований, помощи в разработке, автоматизации, документации, презентаций и бизнес-исполнения.",
      },
      projects: {
        eyebrow: "Проекты",
        title: "Проекты, которые показывают широту исполнения",
        intro:
          "Практическое портфолио: продуктовые кейсы, торговые веб-проекты, админки, автоматизация, ИИ-инструменты, маркетинг и операционное решение задач.",
        link: "Открыть ссылку",
      },
      liveProjects: {
        eyebrow: "Живые проекты",
        title: "Можно открыть и посмотреть, что уже собрано",
        intro:
          "Не только описание опыта: ниже реальные страницы проектов. Превью показывают интерфейс внутри портфолио, а кнопка открывает сайт отдельно.",
        open: "Открыть проект",
        preview: "Превью сайта",
      },
      achievements: {
        eyebrow: "Рабочие стандарты",
        title: "Как я работаю с задачами",
        intro: "Я полезен там, где много неопределенности: нужно быстро разобраться, собрать структуру и довести задачу до результата.",
      },
      education: {
        eyebrow: "Образование и профиль",
        title: "Техническая база, языки и устойчивость",
        intro:
          "Фундамент не только в дипломе: техническое мышление, когнитивный профиль, английский B2 и командный опыт под нагрузкой.",
      },
      workStyle: {
        eyebrow: "Интересы и рабочий стиль",
        title: "Куда я хочу расти",
        intro:
          "Меня интересуют задачи на стыке бизнеса, ИИ, продукта и операций. Я быстро учусь и хочу развиваться в командах, где важен практический результат.",
      },
      contact: {
        eyebrow: "Контакты",
        title: "Давайте строить полезные системы",
        intro:
          "Открыт к международным ролям и коллаборациям, где ИИ, операции и продуктовая работа должны давать измеримый результат.",
      },
    },
    footer: "Портфолио для международных возможностей",
  },
  en: {
    nav: {
      timeline: "Timeline",
      projects: "Projects",
      role: "Role",
      ulty: "UltyMyLife",
      ai: "AI",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    aria: {
      primaryNavigation: "Primary navigation",
      backToTop: "Back to top",
      proofPoints: "Professional proof points",
      ultyModules: "UltyMyLife product modules",
      languageSwitcher: "Language switcher",
    },
    hero: {
      timelineCta: "View Career Timeline",
      contactCta: "Contact Me",
      visualEyebrow: "Profile",
      portraitLabel: "Profile photo",
      portraitHudTop: "Personal layer",
      portraitHudBottom: "Execution engine",
      visualTitle: "From task chaos to an operating system",
      visualIntro:
        "The point is not a decorative dashboard. It is connecting business, AI, and product logic into a clear execution loop.",
      visualInputsTitle: "Input flow",
      visualInputs: ["Marketplaces", "Wholesale", "Import", "Marketing", "Metrics"],
      visualCoreTitle: "AI + Operations layer",
      visualCoreItems: ["Task decomposition", "AI agents", "Documentation", "Execution control"],
      visualOutputsTitle: "Output",
      visualOutputs: ["Less routine", "Faster hypotheses", "Clearer processes"],
    },
    sections: {
      timeline: {
        eyebrow: "Career system",
        title: "A timeline built around ownership",
        intro:
          "The path is not a narrow job description. It is a compounding operating track: technical foundation, business execution, AI leverage, and product ownership.",
      },
      role: {
        eyebrow: "Operating role",
        title: "Operations, sales and AI automation in a trading business",
        current: "Current",
      },
      ulty: {
        eyebrow: "Key case",
        title: "UltyMyLife: my life management system",
        intro:
          "My product project shows employers how I think about products: from idea and scenarios to the first version, testing and development.",
        link: "Open UltyMyLife landing",
        modules: ["Idea", "My role", "First version", "Users", "Metrics", "Development"],
      },
      skills: {
        eyebrow: "Capability matrix",
        title: "Practical skills for systems that need to move",
        intro:
          "The strongest value is the combination: operator judgment, product structure, AI leverage, and commercial context.",
      },
      tools: {
        eyebrow: "AI toolchain",
        title: "Comfortable working with modern AI systems",
        intro:
          "The tools are not decoration. They are used for research, coding assistance, automation, documentation, presentations, and business execution.",
      },
      projects: {
        eyebrow: "Projects",
        title: "Projects that show execution range",
        intro:
          "A portfolio of practical work: product ownership, commerce websites, admin tools, AI-assisted building, business systems, marketing signals, and operational problem solving.",
        link: "Open link",
      },
      liveProjects: {
        eyebrow: "Live work",
        title: "Open the actual pages",
        intro:
          "This portfolio includes real project surfaces, not only text. Preview them here or open each project in a separate tab.",
        open: "Open project",
        preview: "Website preview",
      },
      achievements: {
        eyebrow: "Operating standards",
        title: "How I create leverage",
        intro: "The common thread is simple: convert pressure into structure, and structure into output.",
      },
      education: {
        eyebrow: "Education and profile",
        title: "Technical base, languages, and resilience",
        intro:
          "The foundation is broader than a diploma: technical thinking, cognitive profile, English B2, and team experience under pressure.",
      },
      workStyle: {
        eyebrow: "Interests and work style",
        title: "Where I want to grow",
        intro:
          "I am interested in work across business, AI, product, and operations, and I learn quickly when practical results matter.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's build useful systems",
        intro:
          "Open to international roles and collaborations where AI, operations, and product execution need to work together.",
      },
    },
    footer: "Portfolio built for global opportunities",
  },
};
