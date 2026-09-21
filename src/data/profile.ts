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
  previewImage?: string;
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
          stat: "1 год 1 мес.",
          label: "рядом с собственником",
          detail:
            "Работал напрямую с собственником торговой компании: сайты, маркетплейсы, B2B, логистика, импорт и автоматизация.",
        },
        {
          stat: "ИИ",
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
        period: "Август 2025 — Август 2026",
        label: "Резерв / бизнес-операции",
        title: "Бизнес-помощник руководителя",
        description:
          "Работал напрямую с собственником компании «Резерв»: развивал сайты, маркетплейсы, B2B, логистику, импортные поставки и внутреннюю автоматизацию.",
        metrics: ["2 коммерческих сайта", "500+ fulfillment-компаний", "$100K+ импорт", "B2B и маркетплейсы"],
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
        title: "Основатель UltyMyLife",
        description:
          "Основатель UltyMyLife — Telegram Native Ecosystem для задач, привычек, физических и ментальных тренировок, сна, дыхания, медитаций и личного прогресса.",
        metrics: ["~1 год разработки", "1600+ пользователей", "Резидент IT Park"],
        targetId: "ulty",
        cta: "Подробнее",
      },
    ],
    roles: [
      {
        title: "Бизнес-помощник руководителя",
        organization: "Торговая компания «Резерв»",
        period: "Август 2025 — Август 2026",
        summary:
          "Работал напрямую с собственником и развивал внутренние IT-решения, автоматизацию, маркетплейсы, логистику, B2B-направление и операционные процессы бизнеса.",
        bullets: [
          {
            title: "Dr. Mix и REZERV",
            text: "Самостоятельно разработал два коммерческих сайта: каталог, корзина, авторизация, личный кабинет, админ-панель, заказы, промокоды, UTM-метки, отзывы и мобильная версия.",
          },
          {
            title: "Логистика и Telegram-заказы",
            text: "Интегрировал СДЭК, Магнит Маркет и Яндекс Доставку: выбор ПВЗ, статусы и передача данных на склад. Создал Telegram-систему уведомлений сотрудников и покупателей.",
          },
          {
            title: "AI-маркетолог",
            text: "Создал сценарий на n8n и LLM: запрос приходит через Telegram, AI генерирует контент, сохраняет результат в Google Sheets и отправляет его пользователю.",
          },
          {
            title: "B2B и маркетплейсы",
            text: "Развил оптовое направление на Avito с нуля, работал с Ozon и Wildberries, исследовал рынок и конкурентов, готовил коммерческие предложения и вёл переговоры.",
          },
          {
            title: "500+ fulfillment-компаний",
            text: "Исследовал и сравнил более 500 операторов, провёл первичные переговоры и помог закрыть логистику в Южном, Северо-Западном, Центральном и Уральском регионах.",
          },
          {
            title: "Импорт и инфраструктура",
            text: "Участвовал в поставках из Китая стоимостью $100K+, работал с документами и грузами. Настроил GitHub, версии и откаты, HTTPS/TLS, Cloudflare и базовую защиту сайтов.",
          },
        ],
      },
    ],
    projects: [
      {
        name: "UltyMyLife",
        type: "Собственный продукт",
        description:
          "Telegram Native Ecosystem для задач, привычек, физических и ментальных тренировок, сна, дыхания, медитаций и личного прогресса. Прошёл путь от идеи до работающего MVP.",
        impact: [
          "Около года непрерывной разработки, 1600+ зарегистрированных пользователей.",
          "Резидент IT Park Татарстана после отбора в бизнес-инкубатор.",
          "ЮKassa, TON и Telegram Stars; privacy policy, terms и юридическая проработка для РФ.",
          "Privacy-first аналитика, AI-анализ модулей, маркетинговый и support-агенты.",
        ],
        caseStudy: [
          {
            title: "Продукт",
            text: "Единая система внутри Telegram: задачи, привычки, тренировки, сон, дыхание, медитации и прогресс.",
          },
          {
            title: "Основатель",
            text: "Сформировал УТП, архитектуру, сценарии, roadmap и backlog; переводил продуктовые идеи в технические требования.",
          },
          {
            title: "MVP и редизайн",
            text: "Запустил работающий MVP и за 2 месяца полностью переработал интерфейс на основе обратной связи пользователей.",
          },
          {
            title: "Legal и платежи",
            text: "Подготовил юридические документы и подключил ЮKassa, TON и Telegram Stars.",
          },
          {
            title: "AI и аналитика",
            text: "Развиваю AI-анализ разделов, маркетингового и support-агентов; собираю только минимальные зашифрованные метрики.",
          },
          {
            title: "Следующий этап",
            text: "Проверяю гипотезы удержания и мотивации, готовлю продукт к монетизации, масштабированию и SEO/GEO-продвижению.",
          },
        ],
        link: "https://demianavol.github.io/ultymylife-landing/",
        previewImage: "previews/ultymylife-preview.png",
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
        link: "https://dr-mix.ru/",
        previewImage: "previews/drmix-preview.png",
      },
      {
        name: "REZERV / опт и розница",
        type: "Коммерческий сайт и B2B-витрина",
        description:
          "Сайт торговой компании REZERV с отдельными сценариями для розничных покупателей и B2B-партнёров, каталогом, заказами и прямой коммуникацией.",
        impact: [
          "Разделил пользовательские пути для розницы и оптовых закупок.",
          "Связал каталог, авторизацию, заказы и операционные процессы компании.",
          "Подготовил адаптивный интерфейс и публичный запуск на собственном домене.",
        ],
        link: "https://rezerv.biz/",
        previewImage: "previews/rezerv-preview.png",
      },
      {
        name: "ИИ-процессы и агенты",
        type: "Автоматизация / системы продуктивности",
        description:
          "Настраивал ИИ-ассистентов и агентные сценарии для маркетинга, исследований, написания текстов, поддержки процессов, генерации сайтов и декомпозиции задач.",
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
        title: "Программирование и прототипы",
        level: 78,
        items: ["React", "Node.js", "GitHub", "Лендинги", "Рабочие прототипы"],
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
        title: "Практическая разработка с ИИ",
        period: "React / Node / Codex",
        description:
          "Собираю интерфейсы, лендинги, прототипы и рабочие сценарии через код и ИИ-инструменты, быстро довожу идею до проверяемой версии.",
        tags: ["AI-assisted coding", "React", "Node.js"],
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
        title: "Большой город и международный трек",
        text: "Хочу расти в большом городе или зарубежной среде, где есть сильные команды, быстрый темп, новые продукты и международный контекст.",
      },
      {
        title: "Программирование и ИИ-агенты",
        text: "Хочу программировать, собирать ИИ-агентов, автоматизации и приложения, которые превращают идеи в работающие инструменты.",
      },
      {
        title: "Универсальная роль",
        text: "Мне интересна многофункциональная роль: быстро разбираться, соединять продукт, код, ИИ и бизнес-задачи, а не сидеть в одной узкой функции.",
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
          stat: "1 yr 1 mo.",
          label: "close to the owner",
          detail:
            "Worked directly with the owner of a trading company across websites, marketplaces, B2B, logistics, imports and automation.",
        },
        {
          stat: "AI",
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
        period: "Aug 2025 — Aug 2026",
        label: "Rezerv / business operations",
        title: "Executive Business Assistant",
        description:
          "Worked directly with the owner of Rezerv across websites, marketplaces, B2B, logistics, imports and internal automation.",
        metrics: ["2 commercial websites", "500+ fulfillment companies", "$100K+ imports", "B2B and marketplaces"],
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
        title: "Founder of UltyMyLife",
        description:
          "Founder of UltyMyLife, a Telegram Native Ecosystem for tasks, habits, physical and mental training, sleep, breathing, meditation and personal progress.",
        metrics: ["~1-year build cycle", "1600+ registered users", "IT Park resident"],
        targetId: "ulty",
        cta: "Learn more",
      },
    ],
    roles: [
      {
        title: "Executive Business Assistant",
        organization: "Rezerv Trading Company",
        period: "Aug 2025 — Aug 2026",
        summary:
          "Worked directly with the owner on internal IT solutions, automation, marketplaces, logistics, B2B and day-to-day business operations.",
        bullets: [
          {
            title: "Dr. Mix and REZERV",
            text: "Built two commercial websites with catalogs, carts, authentication, customer accounts, admin panels, orders, promo codes, UTM tracking, reviews and responsive layouts.",
          },
          {
            title: "Logistics and Telegram orders",
            text: "Integrated CDEK, Magnit Market and Yandex Delivery with pickup points, order statuses and warehouse handoff, plus Telegram notifications for staff and customers.",
          },
          {
            title: "AI marketing workflow",
            text: "Built an n8n and LLM workflow: requests arrive through Telegram, AI generates content, saves it to Google Sheets and sends the result back to the user.",
          },
          {
            title: "B2B and marketplaces",
            text: "Built the wholesale Avito channel from scratch, worked with Ozon and Wildberries, researched markets and competitors, prepared proposals and led B2B negotiations.",
          },
          {
            title: "500+ fulfillment companies",
            text: "Researched and compared more than 500 operators, held initial negotiations and helped cover the South, Northwest, Central and Ural regions of Russia.",
          },
          {
            title: "Imports and infrastructure",
            text: "Supported imports from China worth $100K+, including suppliers, logistics and documents. Set up GitHub versioning and rollback, HTTPS/TLS, Cloudflare and baseline security.",
          },
        ],
      },
    ],
    projects: [
      {
        name: "UltyMyLife",
        type: "Own product",
        description:
          "A Telegram Native Ecosystem for tasks, habits, physical and mental training, sleep, breathing, meditation and personal progress. I took it from idea to a working MVP.",
        impact: [
          "Approximately 1 year of continuous development, 1600+ registered users.",
          "Resident of IT Park Tatarstan after selection by its business incubator.",
          "YooKassa, TON and Telegram Stars, plus privacy policy, terms and legal work for Russia.",
          "Privacy-first analytics, AI module analysis, marketing and support agents.",
        ],
        caseStudy: [
          {
            title: "Product",
            text: "One Telegram-native system for tasks, habits, training, sleep, breathing, meditation and progress.",
          },
          {
            title: "Founder",
            text: "Defined the value proposition, architecture, user journeys, roadmap and backlog, translating product ideas into technical requirements.",
          },
          {
            title: "MVP and redesign",
            text: "Launched a working MVP and completed a two-month interface redesign driven by user feedback.",
          },
          {
            title: "Legal and payments",
            text: "Prepared legal documents and connected YooKassa, TON and Telegram Stars.",
          },
          {
            title: "AI and analytics",
            text: "Developing AI analysis, marketing and support agents while collecting only minimal encrypted product metrics.",
          },
          {
            title: "Next stage",
            text: "Testing retention and motivation hypotheses and preparing monetization, scaling and SEO/GEO growth.",
          },
        ],
        link: "https://demianavol.github.io/ultymylife-landing/",
        previewImage: "previews/ultymylife-preview.png",
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
        link: "https://dr-mix.ru/",
        previewImage: "previews/drmix-preview.png",
      },
      {
        name: "REZERV / retail and wholesale",
        type: "Commercial website and B2B storefront",
        description:
          "A trading company website with separate journeys for retail customers and B2B partners, covering catalog, orders and direct commercial communication.",
        impact: [
          "Separated retail and wholesale purchasing journeys.",
          "Connected catalog, authentication, orders and operational workflows.",
          "Prepared a responsive interface and public launch on a dedicated domain.",
        ],
        link: "https://rezerv.biz/",
        previewImage: "previews/rezerv-preview.png",
      },
      {
        name: "AI processes and agents",
        type: "Automation / Productivity Systems",
        description:
          "Configured AI assistants and agent scenarios for marketing, research, writing, process support, site generation and task decomposition.",
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
        title: "Programming & prototypes",
        level: 78,
        items: ["React", "Node.js", "GitHub", "Landing pages", "Working prototypes"],
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
        title: "Practical AI-assisted development",
        period: "React / Node / Codex",
        description:
          "I build interfaces, landing pages, prototypes and working scenarios through code and AI tools, moving ideas into testable versions quickly.",
        tags: ["AI-assisted coding", "React", "Node.js"],
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
        title: "Big city and international track",
        text: "I want to grow in a major city or global environment with strong teams, fast pace, new products and international context.",
      },
      {
        title: "Programming and AI agents",
        text: "I want to code, build AI agents, automations and applications that turn ideas into working tools.",
      },
      {
        title: "Universal role",
        text: "I am interested in a multifunctional role: learning fast and connecting product, code, AI and business tasks instead of staying in one narrow lane.",
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
      visualInputs: ["Код", "ИИ-агенты", "Продукт", "Команды", "Метрики"],
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
        current: "Завершённый опыт",
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
          "Хочу расти в сильной команде: программировать, собирать ИИ-агентов, запускать идеи и пробовать международный трек в большом городе или за рубежом.",
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
      visualInputs: ["Code", "AI agents", "Product", "Teams", "Metrics"],
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
        current: "Completed role",
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
          "I want to grow in a strong team: code, build AI agents, launch ideas and try an international track in a major city or abroad.",
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
