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
    ulty: string;
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
    { kind: "phone", label: "Телефон", value: "PHONE", href: "tel:PHONE" },
    { kind: "email", label: "Почта", value: "EMAIL", href: "mailto:EMAIL" },
    { kind: "telegram", label: "Telegram", value: "TELEGRAM_URL", href: "TELEGRAM_URL" },
    { kind: "whatsapp", label: "WhatsApp", value: "WHATSAPP_URL", href: "WHATSAPP_URL" },
    { kind: "linkedin", label: "LinkedIn", value: "LINKEDIN_URL", href: "LINKEDIN_URL" },
  ],
  en: [
    { kind: "phone", label: "Phone", value: "PHONE", href: "tel:PHONE" },
    { kind: "email", label: "Email", value: "EMAIL", href: "mailto:EMAIL" },
    { kind: "telegram", label: "Telegram", value: "TELEGRAM_URL", href: "TELEGRAM_URL" },
    { kind: "whatsapp", label: "WhatsApp", value: "WHATSAPP_URL", href: "WHATSAPP_URL" },
    { kind: "linkedin", label: "LinkedIn", value: "LINKEDIN_URL", href: "LINKEDIN_URL" },
  ],
} satisfies Record<Language, Contact[]>;

export const profiles: Record<Language, Profile> = {
  ru: {
    identity: {
      name: "Демиан",
      location: "Россия, большие города / теплые страны / удаленно / релокация",
      title: "Операции, ИИ и продуктовые системы",
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
      name: "FULL_NAME",
      location: "Remote / relocation-ready: South Europe, UAE, SEA",
      title: "AI Operations & Product Builder",
      availability: "AI Operations, e-commerce, import, product ownership",
    },
    hero: {
      eyebrow: "AI-assisted operator building practical systems",
      headline: "AI Operations & Product Builder",
      subheadline:
        "I work across operations, commerce, marketplaces, sales, AI implementation, websites, software prototypes, agents, and automated outreach. I learn quickly, understand human behavior, and adapt fast to new business contexts.",
      signals: [
        { title: "Operations", text: "I turn loose tasks into clear steps and finished outcomes." },
        { title: "Commerce", text: "Marketplaces, retail, wholesale, sales, meetings, and daily execution." },
        { title: "AI agents", text: "AI tools, automated outreach, agent flows, and business integrations." },
        { title: "Web and software", text: "Websites, prototypes, catalogs, and internal tools with AI-assisted execution." },
        { title: "Psychology", text: "A practical understanding of people, motivation, communication, and behavior." },
        { title: "Learning", text: "Fast learning, new domains, and calm adaptation to unfamiliar tasks." },
      ],
      proofPoints: [
        {
          stat: "2025-2026",
          label: "operations close to leadership",
          detail:
            "Marketplaces, wholesale, import from China, AI processes, and daily business execution.",
        },
        {
          stat: "200+",
          label: "test-stage active users",
          detail:
            "UltyMyLife as a Telegram Mini App: tasks, habits, workouts, sleep, and mental fitness.",
        },
        {
          stat: "$100K+",
          label: "logistics context",
          detail:
            "Coordinated import workflows, China suppliers, customs brokers, and documentation for larger cargo batches.",
        },
      ],
    },
    timeline: [
      {
        period: "2021-2025",
        label: "Technical college",
        title: "Programmer diploma",
        description:
          "Built algorithmic logic, software architecture awareness, and the ability to translate business objectives into technical language for developers.",
        metrics: ["Algorithmic thinking", "Software architecture", "Technical communication"],
        targetId: "education",
        cta: "Learn more",
      },
      {
        period: "2025-2026",
        label: "Rezerv / business operations",
        title: "Operations Coordinator / Executive Assistant",
        description:
          "Operating at Rezerv, a trading and manufacturing company, handling a wide task flow alongside the owner: marketplaces, wholesale, foreign trade, procurement, AI automation, and daily execution.",
        metrics: ["Operations", "B2B and Avito", "Import workflows"],
        targetId: "current-role",
        cta: "Learn more",
      },
      {
        period: "Current",
        label: "AI Operations",
        title: "Custom agents, lead generation, and AI-assisted web build",
        description:
          "Designs AI agents for calling, outreach, and first-stage B2B communication, while using AI copilots for websites, documentation, research, and faster operating cycles.",
        metrics: ["AI lead generation", "Prompt Engineering", "OpenAI Codex"],
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
        title: "Business Assistant / Operations Coordinator",
        organization: "Rezerv Trading & Manufacturing Company | Naberezhnye Chelny",
        period: "2025-2026",
        summary:
          "A broad operating role close to the owner across e-commerce, wholesale, foreign trade, import, marketing support, and AI automation. The work requires fast context switching, ownership, and execution discipline.",
        bullets: [
          {
            title: "Operational execution",
            text: "Managed a wide operational task pool alongside the owner: marketplaces, wholesale sales, foreign trade, procurement, process ownership, and daily execution.",
          },
          {
            title: "AI agents for sales",
            text: "Designed and configured AI agents for automated calls, messenger outreach, and email sequences to accelerate the first B2B sales cycle.",
          },
          {
            title: "Wholesale Avito channel",
            text: "Created and packaged a wholesale sales channel on Avito from scratch, built dynamic wholesale price lists, and handled B2B negotiations.",
          },
          {
            title: "China import coordination",
            text: "Coordinated supply chains from China, worked with customs brokers, and prepared documentation for cargo batches above $100K.",
          },
          {
            title: "AI-assisted catalog website",
            text: "Using AI copilots and OpenAI Codex, independently built and launched a technology-driven catalog website, reducing classic development costs.",
          },
        ],
      },
    ],
    projects: [
      {
        name: "UltyMyLife",
        type: "Co-founder / Product Owner / Life OS",
        description:
          "A Telegram Mini App and personal operating system that connects tasks, habits, workout diaries, sleep, and mental fitness. I own product architecture, user logic, roadmap, and translation of business requirements into technical specs for the technical partner.",
        impact: [
          "Designed product architecture and user flows from zero to MVP.",
          "Led the product side of a 10-month development cycle with a technical partner.",
          "Reached a test-stage base of 200+ active users and managed iterations through feedback.",
        ],
        caseStudy: [
          {
            title: "Idea",
            text: "Build one personal system for tasks, habits, workouts, sleep, and practical self-management.",
          },
          {
            title: "My role",
            text: "Own product logic, user flows, screen structure, roadmap, and technical task descriptions for the developer.",
          },
          {
            title: "Built so far",
            text: "Reached an MVP, tested with 200+ active users, and continued product iterations through feedback.",
          },
          {
            title: "Next focus",
            text: "Improve product value, habit mechanics, progress metrics, and the dedicated project landing page.",
          },
        ],
        link: "ULTYMYLIFE_URL",
      },
      {
        name: "E-commerce Catalog Website",
        type: "AI-assisted technical build",
        description:
          "Created a technology-driven catalog website for a trading business with marketplace-style pages, assortment structure, commercial content, and AI-assisted implementation.",
        impact: [
          "Used AI copilots to move from idea to working pages faster.",
          "Structured product information into a cleaner sales surface.",
          "Improved the visual layer of a traditional trading workflow.",
        ],
      },
      {
        name: "AI Workflow & Agent Setup",
        type: "Automation / Productivity Systems",
        description:
          "Configured AI assistants and agent-like workflows for lead generation, calling, outreach, research, drafting, process support, site generation, and task decomposition.",
        impact: [
          "Reduced friction in repetitive business tasks.",
          "Improved speed of testing ideas and producing working drafts.",
          "Built practical fluency across several leading AI tools.",
        ],
      },
      {
        name: "Brand Attention Experiments",
        type: "Marketing / Team Identity",
        description:
          "Created branded T-shirt concepts with a team logo and name to support visibility, attention, and internal identity.",
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
      ulty: "UltyMyLife",
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
      ulty: "UltyMyLife",
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
      visualEyebrow: "How I create value",
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
        title: "Business execution across e-commerce, import, and AI",
        current: "Current",
      },
      ulty: {
        eyebrow: "Major case study",
        title: "UltyMyLife: founder-led Life OS product",
        intro:
          "A parallel founder track that turns personal discipline into a structured software ecosystem.",
        link: "Future landing",
        modules: ["Tasks", "Habits", "Workouts", "Routines", "Metrics", "Roadmap"],
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
        eyebrow: "Selected work",
        title: "Projects that show execution range",
        intro:
          "A portfolio of practical work: product ownership, commerce websites, admin tools, AI-assisted building, business systems, marketing signals, and operational problem solving.",
        link: "Open placeholder",
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
