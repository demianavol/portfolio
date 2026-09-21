export type Language = "ru" | "en";

export const CORE_METRICS = {
  ultyUsers: "1600+",
  experienceYears: "3+ years",
  experienceYearsRu: "3+ года",
  coordinatedBudget: "$100K+",
  supplyUnits: "6000+",
  vendorsAnalyzed: "500+",
  developmentCycle: "~1 year",
  developmentCycleRu: "~1 год",
  b2bSales: "~100,000 ₽",
  b2bContacts: "100+",
  b2bClients: "~10",
  targetMargin: "2x+",
} as const;

export const CV_LINKS = {
  projectRu: "/cv/Demian_Avolstiyniy_Project_Manager_CV_RU.pdf",
  projectEn: "/cv/Demian_Avolstiyniy_Project_Manager_CV_EN.pdf",
  productRu: "/cv/Demian_Avolstiyniy_Product_Manager_CV_RU.pdf",
  productEn: "/cv/Demian_Avolstiyniy_Project_Manager_CV_EN.pdf",
  businessRu: "/cv/Demian_Avolstiyniy_Business_Assistant_CV_RU.pdf",
  businessEn: "/cv/Demian_Avolstiyniy_Project_Manager_CV_EN.pdf",
} as const;

export const CONTACT_INFO = {
  name: "Demian Avolstiyniy",
  nameRu: "Демиан Аволстийный",
  telegramHandle: "@DemianWorkSelf",
  telegramUrl: "https://t.me/DemianWorkSelf",
  email: "yaminaasfak@gmail.com",
  phone: "+7 929 721-45-87",
  phoneDisplay: "+7 (929) 721-45-87",
  whatsappUrl: "https://wa.me/79297214587",
  portfolioUrl: "https://demianavolstiyniy.ru",
  locationRu: "Удалённо · Готов к релокации",
  locationEn: "Remote · Open to relocation",
  englishLevel: "B2 (Working Professional)",
} as const;

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface EcosystemModule {
  id: string;
  title: string;
  summary: string;
  features: string[];
  tag: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  tagline: string;
  period: string;
  metrics: { value: string; label: string }[];
  context: string;
  ownership: string[];
  results: string[];
  techStack?: string[];
  liveUrl?: string;
  previewImage?: string;
}

export const portfolioData = {
  ru: {
    meta: {
      siteName: "Demian Avolstiyniy — Career Portfolio",
      home: {
        title: "Demian Avolstiyniy — Project & Product Manager | Business Operations",
        description:
          `Карьерное портфолио Demian Avolstiyniy: запуск digital- и бизнес-проектов от идеи до результата. Кейсы UltyMyLife (${CORE_METRICS.ultyUsers} users), Dr. Mix, международные поставки $100K+.`,
      },
      project: {
        title: "Demian Avolstiyniy — Project Manager / IT Project Manager",
        description:
          "Портфолио Project Manager: сквозное ведение IT- и кросс-функциональных проектов, координация разработки, снятие блокеров, запуск продуктов в production.",
      },
      product: {
        title: "Demian Avolstiyniy — Product Manager / Product Owner",
        description:
          `Портфолио Product Manager / Product Owner: запуск UltyMyLife (${CORE_METRICS.ultyUsers} пользователей), продуктовая аналитика, роадмапы, приоритизация, монетизация и продуктовые итерации.`,
      },
      business: {
        title: "Demian Avolstiyniy — Business Operations / Business Assistant",
        description:
          "Портфолио Business Operations & Assistant: работа напрямую с собственником, международная логистика $100K+, запуск B2B с нуля, анализ 500+ подрядчиков, AI-автоматизации.",
      },
    },
    nav: {
      brand: "Demian Avolstiyniy",
      project: "Project",
      product: "Product",
      business: "Business",
      about: "О себе",
      contact: "Контакты",
      downloadCv: "Скачать CV",
    },
    hero: {
      name: "Demian Avolstiyniy",
      roles: "Project Manager • Product Manager • Business Operations",
      tagline:
        "Запускаю digital- и бизнес-проекты от неопределённой задачи до работающего результата. Работаю на стыке project management, продукта, технологий, AI и операционного бизнеса.",
      proofBadges: [
        `${CORE_METRICS.ultyUsers} пользователей в своём продукте`,
        `${CORE_METRICS.experienceYearsRu} релевантного опыта`,
        `${CORE_METRICS.coordinatedBudget} бюджет координированных поставок`,
        `${CORE_METRICS.supplyUnits} единиц в международных поставках`,
        `${CORE_METRICS.vendorsAnalyzed} проанализированных подрядчиков`,
        "Резидент IT Park",
        "Technical + AI-first бэкграунд",
      ],
      tracks: [
        {
          id: "project",
          path: "/project",
          badge: "Главное направление",
          title: "Project Manager / IT Project Manager",
          desc: "Эндо-ту-энд управление digital-проектами: координация разработки, контроль дедлайнов, снятие блокеров, декомпозиция и релизы в production.",
          cta: "Смотреть Project Portfolio →",
          metrics: [
            { value: CORE_METRICS.ultyUsers, label: "Users в UltyMyLife" },
            { value: "~1 мес", label: "Запуск Dr. Mix в prod" },
            { value: CORE_METRICS.coordinatedBudget, label: "Проекты поставок" },
          ],
        },
        {
          id: "product",
          path: "/product",
          badge: "Продуктовое развитие",
          title: "Product Manager / Product Owner",
          desc: "Создание продуктов от ценностного предложения до метрик: roadmap, backlog, UX, продуктовая аналитика, монетизация и growth-эксперименты.",
          cta: "Смотреть Product Portfolio →",
          metrics: [
            { value: CORE_METRICS.ultyUsers, label: "Реальных пользователей" },
            { value: "8 модулей", label: "Продуктовая экосистема" },
            { value: "3 шлюза", label: "СБП, Stars, TON" },
          ],
        },
        {
          id: "business",
          path: "/business",
          badge: "Операции и развитие",
          title: "Business Operations / Founder's Associate",
          desc: "Прямая работа с собственником бизнеса: международные поставки, опт с нуля, исследование рынков, переговоры и внедрение AI-автоматизаций.",
          cta: "Смотреть Business Portfolio →",
          metrics: [
            { value: CORE_METRICS.coordinatedBudget, label: "Импорт из Китая" },
            { value: CORE_METRICS.vendorsAnalyzed, label: "Fulfillment база" },
            { value: "3–4 трека", label: "Параллельно в работе" },
          ],
        },
      ],
    },
    projectPage: {
      hero: {
        badge: "Core Specialization",
        title: "Project Manager / IT Project Manager",
        subtitle:
          "Веду digital- и кросс-функциональные проекты от неопределённой задачи до работающего результата. Беру высокий ownership, координирую участников, нахожу скрытые блокеры и довожу работу до production.",
        primaryCta: "Скачать Project Manager CV",
        secondaryCta: "Смотреть кейсы",
        contactCta: "Написать в Telegram",
      },
      whoIAm: {
        eyebrow: "Профиль и стандарты",
        title: "Как я руковожу проектами",
        summary:
          "Я не просто ставлю галочки в таск-трекере. Моя ценность — способность зайти в задачу с высокой степенью неопределённости, самостоятельно провести ресерч, декомпозировать цель на понятные спринты, состыковать разработчиков, дизайнеров, бизнес и подрядчиков, и выдать результат точно в срок.",
        highlights: [
          {
            title: "End-to-End Ownership",
            desc: "Отвечаю за конечный результат проекта целиком, а не за отдельные промежуточные шаги или отчёты.",
          },
          {
            title: "Глубокое понимание Technical Side",
            desc: "Говорю на одном языке с разработчиками: архитектура, базы данных, API, Git, CI/CD, серверная среда, AI-инструменты.",
          },
          {
            title: "Устранение блокеров и конфликтов",
            desc: "Умею вовремя увидеть риск срыва сроков, распутать противоречия между участниками и найти быстрое решение.",
          },
          {
            title: "Гиперзадачность и фокус",
            desc: "Успешно координирую 3–4 параллельных потока задач без потери качества и управляемости.",
          },
        ],
      },
      metrics: [
        {
          value: CORE_METRICS.ultyUsers,
          label: "Пользователей в продукте",
          detail: "UltyMyLife запущен и непрерывно развивается около года",
        },
        {
          value: CORE_METRICS.experienceYearsRu,
          label: "Релевантного опыта",
          detail: "Digital-продукты, e-commerce и операционные бизнес-проекты",
        },
        {
          value: CORE_METRICS.coordinatedBudget,
          label: "Координированные поставки",
          detail: "Международные закупки, таможня, брокеры и склады",
        },
        {
          value: CORE_METRICS.supplyUnits,
          label: "Единиц продукции",
          detail: "Кросс-функциональная логистика и дистрибуция",
        },
        {
          value: CORE_METRICS.vendorsAnalyzed,
          label: "Анализ подрядчиков",
          detail: "Fulfillment-компании: шортлист за 1–2 дня",
        },
        {
          value: "IT Park",
          label: "Резидентство",
          detail: "Личная защита проекта перед экспертной комиссией",
        },
      ],
      howIWorkSteps: [
        { step: "01", name: "Understand Goal", desc: "Выделяю корневую бизнес-цель и критерии приёмки" },
        { step: "02", name: "Research", desc: "Исследую ограничения, технологии, рынок и вводные данные" },
        { step: "03", name: "Break Down", desc: "Декомпозирую эпики на атомарные задачи и user stories" },
        { step: "04", name: "Prioritize", desc: "Формирую прозрачный бэклог по ценности и блокерам" },
        { step: "05", name: "Build / Assign", desc: "Ставлю задачи с чётким DoD или закрываю технически сам" },
        { step: "06", name: "Track Blockers", desc: "Ежедневно отслеживаю затыки и снимаю трение между участниками" },
        { step: "07", name: "Test & Accept", desc: "Лично провожу QA, регресс и проверку сценариев" },
        { step: "08", name: "Release", desc: "Контролирую деплой в production без простоев" },
        { step: "09", name: "Measure", desc: "Смотрю на продуктовые и операционные метрики" },
        { step: "10", name: "Iterate", desc: "Быстро запускаю цикл доработок на основе фактов" },
      ],
      ultyOwnershipList: [
        "Roadmap & Милестоуны",
        "Backlog & Приоритизация",
        "Требования & User Stories",
        "Координация разработчика",
        "Снятие блокеров разработки",
        "QA-тестирование и приёмка",
        "Production-релизы",
        "Платежные интеграции",
        "Продуктовая аналитика",
        "Привлечение пользователей",
        "Монетизация и тарифы",
        "AI-first развитие и доработки",
      ],
    },
    productPage: {
      hero: {
        badge: "Product Management",
        title: "Product Manager / Product Owner",
        subtitle:
          "Запускаю и развиваю digital-продукты от идеи до production, используя пользовательскую обратную связь, продуктовую аналитику и быстрые итерации.",
        primaryCta: "Скачать Product Manager CV",
        secondaryCta: "Изучить экосистему UltyMyLife",
      },
      proofs: [
        { value: CORE_METRICS.ultyUsers, label: "Зарегистрированных пользователей" },
        { value: CORE_METRICS.developmentCycleRu, label: "Непрерывного развития" },
        { value: "8 модулей", label: "Глубокая продуктовая экосистема" },
        { value: "3 шлюза", label: "СБП/ЮKassa, Stars, TON" },
        { value: "IT Park", label: "Резидентство и валидация" },
      ],
      productJourneySteps: [
        {
          stage: "01. Проблема & Исследование",
          text: "Выявил потребность в едином нативном приложении для трекинга жизни без разрыва между 5 разными сервисами.",
        },
        {
          stage: "02. MVP & Первые пользователи",
          text: "Запустил первую рабочую версию, протестировал ключевые сценарии задач и привычек, собрал первый фидбек.",
        },
        {
          stage: "03. Глубокий редизайн #1 и #2",
          text: "Дважды масштабно переработал UX/UI архитектуру на основе реального пользовательского поведения.",
        },
        {
          stage: "04. Монетизация & Платежи",
          text: "Внедрил подписочную модель (1, 3, 12 месяцев) с интеграцией ЮKassa, Telegram Stars и TON.",
        },
        {
          stage: "05. AI-интеграция",
          text: "Добавил встроенный AI-анализ разделов и возможность экспорта данных для персональных рекомендаций.",
        },
        {
          stage: `06. Масштабирование до ${CORE_METRICS.ultyUsers} пользователей`,
          text: "Построил воронку через Telegram Ads, AdsGram, каталоги Mini Apps, SEO/GEO и органический виральный рост.",
        },
      ],
    },
    businessPage: {
      hero: {
        badge: "Business Operations & Executive Support",
        title: "Business Assistant / Business Operations / Founder's Associate",
        subtitle:
          "Могу взять неструктурированную бизнес-задачу, самостоятельно разобраться, найти решение, собрать нужных участников и довести её до измеримого результата.",
        primaryCta: "Скачать Business Assistant CV",
        secondaryCta: "Смотреть бизнес-кейсы",
      },
      workWithFounder: {
        eyebrow: "Опыт работы с собственником",
        title: "1 год 1 месяц в прямом подчинении владельцу бизнеса",
        desc: "Работал как доверенный операционный партнер руководителя торговой компании «Резерв». Вел кросс-функциональные проекты на стыке коммерции, закупок, логистики, IT и автоматизации. Способен автономно двигать 3–4 критических стрима одновременно.",
        keyPillars: [
          {
            title: "Автономия в условиях неопределенности",
            text: "Не требую детальных пошаговых инструкций: беру задачу в виде конечной цели и возвращаюсь с готовым решением.",
          },
          {
            title: "Переговоры и подрядчики",
            text: "Опыт общения с поставщиками из Китая, таможенными брокерами, фулфилмент-операторами и оптовыми B2B-клиентами.",
          },
          {
            title: "AI-first операционная эффективность",
            text: "Автоматизирую рутинные бизнес-процессы через n8n, LLM-сценарии, Google Sheets и кастомные скрипты.",
          },
        ],
      },
    },
    cases: {
      ulty: {
        title: "UltyMyLife",
        role: "Founder / Project & Product Manager",
        tagline: "Telegram Native Ecosystem для задач, привычек, тренировок, сна и личной эффективности",
        status: `Live Product • ${CORE_METRICS.ultyUsers} зарегистрированных пользователей • Около года разработки`,
        overview:
          "Собственный запущенный продукт от нуля до production. На старте core-команда состояла из меня и разработчика. Позже значительную часть дальнейшего технического развития и обновлений я взял на себя с помощью Codex, ChatGPT и современных AI-инструментов. Продукт прошел отбор и стал резидентом IT Park Татарстана.",
        timeline: [
          "Идея и концепция",
          "Планирование & Архитектура",
          "Разработка ядра",
          "Запуск MVP",
          "Бета-тестирование",
          "Production запуск",
          "Подключение монетизации",
          "Первый масштабный редизайн UX",
          "Второй масштабный редизайн системы",
          "Growth и воронка привлечения",
          `${CORE_METRICS.ultyUsers} активных пользователей`,
          "Непрерывное развитие и релизы",
        ],
      },
      drMix: {
        title: "Dr. Mix",
        role: "Full-Stack Developer & Product Builder",
        tagline: "От идеи до первого реального заказа примерно за 1 месяц",
        badge: "Самостоятельная разработка и запуск под ключ",
        context:
          "Бизнес-задача: практически без бюджета своими силами быстро запустить полноценный, работающий канал онлайн-продаж для бренда Dr. Mix.",
        ownershipNote:
          "Я лично полностью спроектировал и запрограммировал продукт (frontend, backend, база данных, интеграции). Я не ставил задачи сторонним разработчикам на этом проекте — всё сделано собственными руками.",
        scope: [
          "Архитектура и планирование продукта",
          "UX/UI дизайн витрины и личного кабинета",
          "Frontend и адаптивная мобильная верстка",
          "Backend на Node.js и работа с базой данных",
          "Интеграция онлайн-оплаты ЮKassa / СБП",
          "Интеграция доставки СДЭК (расчёт, ПВЗ)",
          "Система Telegram-уведомлений о заказах",
          "Панель администратора для управления каталогом",
          "Деплой, настройка сервера, SSL и безопасность",
          "Тестирование, отладка и запуск в production",
        ],
        result:
          "Примерно за 1 месяц: Идея → Полноценная e-commerce система с приемом платежей и доставкой → Первые реальные оплаченные заказы.",
        deliveryPillars: [
          {
            title: "Запуск под ключ за ~1 месяц",
            desc: "От первой идеи до боевого магазина в production с реальными оплаченными заказами.",
          },
          {
            title: "Личная Full-Stack разработка",
            desc: "Frontend, Node.js-бэкенд, база данных, эквайринг ЮKassa, логистика СДЭК и Telegram-оповещения.",
          },
          {
            title: "Zero Budget на агентства",
            desc: "Спроектировал и запрограммировал всё самостоятельно, без сторонних подрядчиков и лишних затрат.",
          },
        ],
        pillars: {
          project: "Ownership + решение технических задач + доставка результата в экстремально сжатые сроки.",
          product: "Понятный путь пользователя, быстрый чекаут, интеграция оплат, трекинг доставки и реальные покупатели.",
          business: "Самостоятельно разобраться, без лишних затрат построить рабочий коммерческий инструмент и запустить его.",
        },
      },
      rezervSupply: {
        title: "REZERV: IT-платформа & Поставки $100K+",
        role: "Project Manager / Operations Coordinator",
        tagline: "Запуск веб-платформы rezerv.biz и сквозная координация импорта из Китая",
        metrics: [
          { value: "rezerv.biz", label: "Запуск B2B/B2C платформы" },
          { value: CORE_METRICS.coordinatedBudget, label: "Сумма поставок из Китая" },
          { value: CORE_METRICS.supplyUnits, label: "Единиц продукции" },
          { value: "7+ сторон", label: "Синхронизация участников" },
        ],
        platformHighlights: [
          "Разделил пользовательские пути для розничных клиентов и оптовых B2B-партнёров",
          "Связал каталог, авторизацию, заказы и операционные процессы компании",
          "Подготовил адаптивный веб-интерфейс и публичный запуск на домене rezerv.biz",
        ],
        stakeholders: [
          "Фабрики в Китае",
          "Таможенные брокеры",
          "Сертификационные органы",
          "Валютный контроль",
          "Логистические операторы",
          "Склады приёмки",
        ],
        conflictCase: {
          title: "Снятие блокера: Брокер vs Закупки",
          story:
            "При оформлении крупной поставки возник острый конфликт между таможенным брокером и отделом закупок из-за разночтений в кодах ТН ВЭД. Риск: простой контейнеров на границе и штрафы. Я оперативно провёл раздельные переговоры, выявил техническую нестыковку в классификации, утвердил единый пакет документов и обеспечил выпуск груза точно в срок без задержек.",
        },
      },
      fulfillmentCase: {
        title: "Анализ рынка фулфилмента (500+ компаний)",
        role: "Operations & Market Research",
        tagline: "Сбор, сегментация и подготовка шортлиста за 1–2 рабочих дня",
        result:
          "В сжатые сроки исследовал и структурировал базу из более 500 fulfillment-компаний. Сегментировал операторов по географии (Юг, СЗФО, Центр, Урал), тарифам, скорости приёмки и техническим интеграциям. Сформировал готовый шортлист проверенных операторов и передал руководителю продаж для финального контрактования.",
      },
      b2bFromZero: {
        title: "Запуск B2B-направления с нуля",
        role: "Business Development & Sales Operations",
        tagline: "Быстрый старт оптового канала без предварительной клиентской базы",
        scope: [
          "Упаковал понятное оптовое коммерческое предложение (оффер)",
          "Создал структурированный интерактивный B2B-каталог в Google Sheets",
          "Настроил продвижение и входящий поток через Avito",
          "Собрал целевую базу потенциальных контрагентов для outbound",
          "Настроил цепочки холодных email-рассылок и автоматизацию",
          "Лично вёл первичные переговоры и доводил до сделок",
        ],
        results: [
          `${CORE_METRICS.b2bContacts} первых холодных контактов`,
          `${CORE_METRICS.b2bClients} первых реальных оптовых клиентов`,
          `${CORE_METRICS.b2bSales} первый тестовый объем продаж`,
        ],
      },
      supplierResearch: {
        title: "Поиск поставщиков: Мишени для луков и арбалетов",
        role: "Procurement & Commercial Research",
        tagline: "Поиск высокомаржинального поставщика с маржинальностью 2x+",
        result:
          "Провел глубокое исследование рынка производителей и дистрибьюторов стрелковых мишеней. Провёл серию переговоров, сравнил условия по себестоимости и качеству материалов. Нашёл поставщика, благодаря которому товар успешно реализовывался на маркетплейсе по цене примерно в 2 раза выше себестоимости даже после вычета всех комиссий площадки и логистики.",
      },
      aiOperations: {
        title: "AI-first автоматизации и процессы",
        role: "AI Operations & Automation",
        tagline: "Практическое внедрение LLM и скриптов в реальные бизнес-задачи",
        details: [
          "Разработка автоматических сценариев на базе n8n и LLM для генерации контента и первичной квалификации лидов",
          "Интеграция Telegram-ботов с Google Sheets для автоматического логирования заявок и аналитики",
          "Использование OpenAI Codex, ChatGPT, Antigravity и других инструментов для ускоренной разработки софта",
          "Исследования рынков, конкурентов и подготовка документации с помощью передовых AI-моделей",
        ],
      },
    },
    ecosystem: [
      {
        id: "tasks",
        title: "Задачи и планирование",
        tag: "Core Workflow",
        iconName: "CheckSquare",
        summary: "Гибкая система организации персональных и командных задач",
        features: [
          "Дедлайны и напоминания",
          "Категории и контекстные теги",
          "Чек-листы и вложенные подзадачи (subtasks)",
          "Сортировка и приоритеты",
          "Матрица Эйзенхауэра (важно / срочно)",
          "Интуитивная группировка и быстрый инбокс",
        ],
      },
      {
        id: "habits",
        title: "Трекер привычек",
        tag: "Retention Loop",
        iconName: "Repeat",
        summary: "Формирование устойчивых ритуалов с гибким управлением",
        features: [
          "Ежедневные привычки и гибкий график",
          "Подзадачи внутри привычек",
          "Система достижений и стриков",
          "Возможность поставить привычку на паузу без сброса прогресса",
          "Отдельный календарь привычек",
          "Наглядный трекинг выполнения и статистика",
        ],
      },
      {
        id: "workouts",
        title: "Тренировочный дневник",
        tag: "Deep Module",
        iconName: "Dumbbell",
        summary: "Полноценный комплекс физической активности и биометрии",
        features: [
          "Дневник силовых тренировок и кардио",
          "База упражнений с правильной техникой",
          "Готовые программы тренировок",
          "Конструктор собственных тренировок и программ",
          "Анализ тренировочного объёма (Volume Load)",
          "Аналитика проработки мышечных групп",
          "Трекинг и динамика замеров тела (вес, объёмы)",
        ],
      },
      {
        id: "sleep",
        title: "Сон & Отдых",
        tag: "Health Data",
        iconName: "Moon",
        summary: "Мониторинг физического и эмоционального самочувствия",
        features: [
          "Фиксация сна (время, качество, фазы пробуждения)",
          "Трекинг самочувствия и уровня энергии в течение дня",
          "Заметки о сонливости и факторах влияния",
          "Возможность добавления кастомных параметров",
          "Анализ корреляций между нагрузкой, сном и состоянием",
        ],
      },
      {
        id: "breathing",
        title: "Дыхание и медитации",
        tag: "Mental Well-being",
        iconName: "Wind",
        summary: "Библиотека ментальных практик для концентрации и снятия стресса",
        features: [
          "Каталог дыхательных техник с интерактивным таймингом",
          "База управляемых медитаций",
          "Классификация практик по сложности",
          "Классификация по цели (фокус, сон, расслабление, энергия)",
          "Аналитика дыхательных и медитативных сессий",
        ],
      },
      {
        id: "mind",
        title: "Mind Training (Тренажер мозга)",
        tag: "Gamification",
        iconName: "Brain",
        summary: "Интерактивные мини-игры для развития когнитивных навыков",
        features: [
          "Тренировка скорости реакции (Speed)",
          "Упражнения на рабочую память (Memory)",
          "Логические задачи (Logic)",
          "Удержание концентрации (Focus)",
          "Таблица лидеров и соревновательный элемент",
        ],
      },
      {
        id: "ai",
        title: "Встроенный AI-анализ",
        tag: "AI Inside",
        iconName: "Sparkles",
        summary: "Персонализированная обработка данных без пустых маркетинговых обещаний",
        features: [
          "Встроенный AI-анализ накопленных данных пользователя",
          "Подготовка и структурированная выгрузка данных для LLM-анализа",
          "Выявление паттернов продуктивности и восстановления",
          "AI-ассистент как рабочий инструмент внутри интерфейса",
        ],
      },
      {
        id: "profile",
        title: "Профиль & Настройки",
        tag: "Platform & Social",
        iconName: "Users",
        summary: "Настройки, онбординг, сообщество и языковая поддержка",
        features: [
          "Список друзей и социальное взаимодействие",
          "Реферальная программа (пригласи 3 друзей → Premium)",
          "Полная локализация: русский и английский интерфейсы",
          "Тонкая настройка звуков и виброотклика (Haptic)",
          "Индивидуальные настройки уведомлений по модулям",
          "Встроенная форма обратной связи и интерактивный онбординг",
        ],
      },
    ],
    analyticsData: {
      title: "Продуктовая аналитика UltyMyLife",
      subtitle:
        "Использую продуктовые данные для принятия обоснованных решений по разработке, а не ради красивых графиков. Не изображаю из себя дата-сайентиста: мой фокус — продуктовая логика и приоритизация.",
      metricsTracked: [
        "Визиты и активность пользователей",
        "Дневная и недельная активность (Activity Patterns)",
        "Время сессий и частота возвратов",
        "Использование отдельных модулей экосистемы",
        "Когортный анализ и удержание (Retention)",
        "Источники привлечения (Channel Attribution)",
        "Объём силовых тренировок и мышечный объём",
        "Динамика замеров тела и физического прогресса",
        "Завершенные дыхательные и медитативные сессии",
        "Корреляции показателей сна и дневного самочувствия",
      ],
    },
    growthData: {
      title: "Growth, привлечение и продвижение",
      subtitle:
        `Сам прошел весь путь от продукта без пользователей до ${CORE_METRICS.ultyUsers} регистраций. Понимаю полный жизненный цикл продукта: от первого креатива до онбординга и удержания.`,
      channels: [
        {
          name: "Telegram Ads & AdsGram",
          desc: "Настройка официальной рекламы в Telegram-каналах и Mini Apps рекламных сетях",
        },
        {
          name: "Каталоги Telegram Mini Apps",
          desc: "Листинг и оптимизация карточек приложения в профильных каталогах",
        },
        {
          name: "Контент и статьи",
          desc: "Публикация экспертных материалов, разборов продукта и кейсов",
        },
        {
          name: "Собственный Landing Page",
          desc: "Создал и запустил отдельный конверсионный веб-лендинг для презентации продукта",
        },
        {
          name: "SEO и GEO (Generative Engine Optimization)",
          desc: "Оптимизация контента под поисковые системы и современные генеративные AI-поисковики",
        },
        {
          name: "Прямой аутрич и комьюнити",
          desc: "Точечное взаимодействие с целевой аудиторией и сбор первичной обратной связи",
        },
      ],
    },
    monetizationData: {
      title: "Архитектура монетизации",
      subtitle:
        "UltyMyLife использует прозрачную подписочную модель с поддержкой как традиционных, так и Web3-методов оплаты.",
      tiers: [
        { period: "1 месяц", desc: "Полный доступ ко всем 8 модулям экосистемы, AI-ассистенту и аналитике" },
        { period: "3 месяца", desc: "Квартальный план: углубленная биометрия, кастомные тренировки и экспорт" },
        { period: "12 месяцев", desc: "Годовой Premium: безлимитный доступ ко всем текущим и будущим модулям" },
      ],
      gateways: [
        { name: "СБП / ЮKassa", desc: "Официальный эквайринг для российских банковских карт и СБП" },
        { name: "Telegram Stars", desc: "Нативная внутриплатформенная валюта экосистемы Telegram" },
        { name: "TON", desc: "Криптовалютные платежи в экосистеме The Open Network" },
      ],
    },
    aiDevelopment: {
      title: "AI-First разработка",
      subtitle:
        "После первоначального запуска вместе с разработчиком я взял на себя существенную часть дальнейшего технического развития продукта с помощью современных AI-инструментов.",
      tools: ["OpenAI Codex", "ChatGPT", "Antigravity", "AI Coding Assistants", "LLM Pipelines"],
      useCases: [
        "Разработка и доработка frontend/backend функционала",
        "Быстрый дебаггинг и устранение ошибок",
        "Продуктовые исследования и анализ архитектурных решений",
        "Формирование технических требований и спецификаций",
        "Написание и адаптация продуктовых текстов и интерфейсных микрокопий",
        "Автоматизация рутинных задач и прототипирование",
      ],
      disclaimer:
        "AI не «заменил команду волшебным образом» — он дал мне рычаг (leverage), позволивший резко сократить зависимость от внешних специалистов, ускорить цикл релизов и быстро воплощать идеи в работающий код.",
    },
    skills: {
      project: {
        title: "Project Management",
        desc: "Управление сроками, скоупом, рисками и поставкой",
        items: [
          "Project Management",
          "Project Planning",
          "Delivery Management",
          "Stakeholder Management",
          "Requirements Management",
          "Cross-functional Coordination",
          "Vendor Management",
          "Risk Management",
          "Process Improvement",
          "Agile / Scrum",
        ],
      },
      product: {
        title: "Product Management",
        desc: "Ценность для пользователя, исследования и развитие",
        items: [
          "Product Management",
          "Product Roadmap",
          "Backlog Management",
          "Prioritization (RICE/WSJF)",
          "Product Analytics",
          "User Flows & Wireframes",
          "Hypothesis Testing",
          "Retention & Churn",
          "Acquisition & Funnels",
          "Monetization Strategy",
          "Go-to-Market (GTM)",
        ],
      },
      tech: {
        title: "Technical & AI Stack",
        desc: "Понимание кода, интеграций и инфраструктуры",
        items: [
          "API & Webhooks",
          "GitHub & Version Control",
          "Frontend & Backend Logic",
          "Databases (SQL & NoSQL)",
          "Telegram Mini Apps (TMA)",
          "n8n & Automations",
          "AI / LLM Orchestration",
          "OpenAI Codex",
          "AI-Assisted Development",
        ],
      },
      business: {
        title: "Business & Operations",
        desc: "Коммерция, логистика, переговоры и аналитика",
        items: [
          "Business Operations",
          "B2B Sales & Outbound",
          "E-commerce & Marketplaces",
          "Research & Analysis",
          "Vendor Research & Shortlisting",
          "Commercial Negotiations",
          "Procurement & Supply Chain",
          "Google Sheets (Advanced)",
          "Notion & YouGile",
        ],
      },
      domain: {
        title: "Domain Knowledge",
        desc: "Специализированные сферы глубокого погружения",
        items: [
          "FinTech & Payments",
          "Crypto & Web3",
          "Telegram Ecosystem",
          "AI Products & Tools",
        ],
      },
    },
    domainDetails: {
      crypto: {
        title: "Crypto / Web3 Domain Knowledge",
        badge: "Дополнительная экспертиза",
        desc: "Глубоко изучил механику крипторынков, CEX-биржи, типы ордеров, структуру стаканов и экосистему TON. Экспертиза обеспечивает мгновенную предметную релевантность для проектов в FinTech, Web3 и iGaming.",
      },
      freelance: {
        title: "Коммерческий технический бэкграунд",
        badge: "Практический опыт",
        desc: "Коммерческий опыт разработки веб-проектов (React, Node.js, PHP, SQL) и моушн-дизайна. Оплаченные клиентские запуски и повторные заказы сформировали инженерную дисциплину и высокие стандарты качества.",
      },
    },
    about: {
      title: "Обо мне",
      lead: "Быстро обучаюсь, беру ответственность и довожу сложные задачи до конца.",
      body: "Мой стиль работы строится на высоком ownership, техническом любопытстве и бизнес-прагматизме. Мне комфортно в условиях неоднозначности: когда нет готовых ответов, я сам провожу исследование, формулирую гипотезы и нахожу самый короткий путь к результату. Активно использую AI-first подход для ускорения работы. Владею английским языком на рабочем уровне B2, открыт к работе в распределённых и международных командах, а также к релокации.",
    },
    contacts: {
      title: "Контакты",
      subtitle: "Есть подходящая роль или задача? Давайте обсудим.",
      telegramText: "Написать в Telegram",
      emailText: "Отправить письмо",
      phoneText: "Позвонить / WhatsApp",
      directTelegram: "@DemianWorkSelf",
    },
  },
  en: {
    meta: {
      siteName: "Demian Avolstiyniy — Career Portfolio",
      home: {
        title: "Demian Avolstiyniy — Project & Product Manager | Business Operations",
        description:
          `Career portfolio of Demian Avolstiyniy: launching digital and business projects from idea to measurable results. UltyMyLife (${CORE_METRICS.ultyUsers} users), Dr. Mix, $100K+ supply coordination.`,
      },
      project: {
        title: "Demian Avolstiyniy — Project Manager / IT Project Manager",
        description:
          "Project Manager portfolio: end-to-end management of digital and cross-functional initiatives, engineering coordination, unblocking teams, and shipping to production.",
      },
      product: {
        title: "Demian Avolstiyniy — Product Manager / Product Owner",
        description:
          `Product Manager / Product Owner portfolio: UltyMyLife (${CORE_METRICS.ultyUsers} users), product analytics, roadmaps, feature prioritization, monetization, and iterative development.`,
      },
      business: {
        title: "Demian Avolstiyniy — Business Operations / Business Assistant",
        description:
          "Business Operations & Founder's Associate portfolio: direct collaboration with company owner, $100K+ international supply chain, B2B from scratch, 500+ vendor analysis, AI automation.",
      },
    },
    nav: {
      brand: "Demian Avolstiyniy",
      project: "Project",
      product: "Product",
      business: "Business",
      about: "About",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      name: "Demian Avolstiyniy",
      roles: "Project Manager • Product Manager • Business Operations",
      tagline:
        "I launch digital and business initiatives from an ambiguous goal to a working production result. Operating at the intersection of project delivery, product strategy, technical problem solving, AI, and business operations.",
      proofBadges: [
        `${CORE_METRICS.ultyUsers} users in own product`,
        `${CORE_METRICS.experienceYears} relevant experience`,
        `${CORE_METRICS.coordinatedBudget} projects coordinated`,
        `${CORE_METRICS.supplyUnits} units in global supply projects`,
        `${CORE_METRICS.vendorsAnalyzed} vendors analyzed`,
        "IT Park resident",
        "Technical + AI-first background",
      ],
      tracks: [
        {
          id: "project",
          path: "/project",
          badge: "Primary Focus",
          title: "Project Manager / IT Project Manager",
          desc: "End-to-end delivery of digital initiatives: engineer coordination, deadline enforcement, blocker removal, task decomposition, and production releases.",
          cta: "View Project Portfolio →",
          metrics: [
            { value: CORE_METRICS.ultyUsers, label: "Users in UltyMyLife" },
            { value: "~1 mo", label: "Dr. Mix idea-to-prod" },
            { value: CORE_METRICS.coordinatedBudget, label: "Supply projects" },
          ],
        },
        {
          id: "product",
          path: "/product",
          badge: "Product Ownership",
          title: "Product Manager / Product Owner",
          desc: "Building products from value proposition to core metrics: roadmapping, backlog grooming, UX workflows, product analytics, monetization, and growth loops.",
          cta: "View Product Portfolio →",
          metrics: [
            { value: CORE_METRICS.ultyUsers, label: "Registered users" },
            { value: "8 modules", label: "Product ecosystem" },
            { value: "3 gateways", label: "Cards, Stars, TON" },
          ],
        },
        {
          id: "business",
          path: "/business",
          badge: "Operations & Growth",
          title: "Business Operations / Founder's Associate",
          desc: "Direct partnership with business owners: global supply chain management, B2B sales from scratch, market research, negotiations, and AI process automation.",
          cta: "View Business Portfolio →",
          metrics: [
            { value: CORE_METRICS.coordinatedBudget, label: "China import stream" },
            { value: CORE_METRICS.vendorsAnalyzed, label: "Fulfillment vendors" },
            { value: "3–4 tracks", label: "Handled simultaneously" },
          ],
        },
      ],
    },
    projectPage: {
      hero: {
        badge: "Core Specialization",
        title: "Project Manager / IT Project Manager",
        subtitle:
          "I lead digital and cross-functional projects from an unclear initial task to a working production result. High ownership, developer coordination, early blocker detection, and reliable delivery.",
        primaryCta: "Download Project Manager CV",
        secondaryCta: "View Cases",
        contactCta: "Chat on Telegram",
      },
      whoIAm: {
        eyebrow: "Mindset & Operating Standard",
        title: "How I Deliver Projects",
        summary:
          "I don't simply move tickets in Jira. My core strength is entering high-ambiguity situations, conducting rapid research, breaking down complex objectives into actionable sprints, aligning engineers, designers, stakeholders, and vendors, and driving initiatives to reliable completion.",
        highlights: [
          {
            title: "End-to-End Ownership",
            desc: "Accountable for the final production outcome, not just checklists or progress reports.",
          },
          {
            title: "Technical Literacy",
            desc: "Fluent with developers: software architecture, databases, APIs, Git workflows, CI/CD, and AI development tools.",
          },
          {
            title: "Blocker & Conflict Resolution",
            desc: "Proactively spotting delivery bottlenecks, mediating friction between cross-functional teams, and finding fast solutions.",
          },
          {
            title: "Multi-Stream Execution",
            desc: "Simultaneously driving 3–4 complex parallel workstreams with rigorous attention to detail.",
          },
        ],
      },
      metrics: [
        {
          value: CORE_METRICS.ultyUsers,
          label: "Product Users",
          detail: "UltyMyLife live and continuously developed for ~1 year",
        },
        {
          value: CORE_METRICS.experienceYears,
          label: "Relevant Experience",
          detail: "Digital products, e-commerce systems, and business operations",
        },
        {
          value: CORE_METRICS.coordinatedBudget,
          label: "Projects Coordinated",
          detail: "Global sourcing, customs brokers, freight carriers, and warehousing",
        },
        {
          value: CORE_METRICS.supplyUnits,
          label: "Units Coordinated",
          detail: "Cross-functional international supply operations",
        },
        {
          value: CORE_METRICS.vendorsAnalyzed,
          label: "Vendors Analyzed",
          detail: "Fulfillment companies evaluated and shortlisted in 1–2 days",
        },
        {
          value: "IT Park",
          label: "Tech Incubator Resident",
          detail: "Personally pitched and defended the project before the evaluation panel",
        },
      ],
      howIWorkSteps: [
        { step: "01", name: "Understand Goal", desc: "Isolate the root business objective and Definition of Done" },
        { step: "02", name: "Research", desc: "Investigate technical constraints, stack options, and dependencies" },
        { step: "03", name: "Break Down", desc: "Decompose epics into atomic tasks and testable user stories" },
        { step: "04", name: "Prioritize", desc: "Establish a transparent backlog based on impact vs effort" },
        { step: "05", name: "Build / Assign", desc: "Provide clear specifications or implement technical parts directly" },
        { step: "06", name: "Track Blockers", desc: "Run daily obstacle tracking and eliminate friction immediately" },
        { step: "07", name: "Test & Accept", desc: "Perform hands-on QA, edge-case testing, and regression runs" },
        { step: "08", name: "Release", desc: "Oversee zero-downtime production deployment" },
        { step: "09", name: "Measure", desc: "Audit real usage telemetry and operational performance" },
        { step: "10", name: "Iterate", desc: "Execute rapid continuous improvement loops based on reality" },
      ],
      ultyOwnershipList: [
        "Product Roadmap & Milestones",
        "Backlog Management & Prioritization",
        "Requirements & User Stories",
        "Developer Coordination",
        "Blocker Resolution",
        "Hands-on Testing & Acceptance",
        "Production Releases",
        "Payment & API Integrations",
        "Product Analytics Tracking",
        "Acquisition & Channels",
        "Monetization Tiers",
        "AI-First Engineering Iterations",
      ],
    },
    productPage: {
      hero: {
        badge: "Product Ownership",
        title: "Product Manager / Product Owner",
        subtitle:
          "Launching and growing digital products from concept to production through data telemetry, direct user feedback loops, and rapid hypothesis testing.",
        primaryCta: "Download Product Manager CV",
        secondaryCta: "Explore UltyMyLife Ecosystem",
      },
      proofs: [
        { value: CORE_METRICS.ultyUsers, label: "Registered Users" },
        { value: CORE_METRICS.developmentCycle, label: "Continuous Development" },
        { value: "8 Modules", label: "Interconnected Product Ecosystem" },
        { value: "3 Gateways", label: "Cards, Telegram Stars, TON" },
        { value: "IT Park", label: "Incubator Residency" },
      ],
      productJourneySteps: [
        {
          stage: "01. Problem Discovery",
          text: "Identified the fragmentation of using 5 disjointed apps for habits, tasks, workouts, and wellbeing.",
        },
        {
          stage: "02. MVP Launch",
          text: "Shipped the first working Telegram Mini App MVP, validating core task and habit tracking routines.",
        },
        {
          stage: "03. UX Redesigns #1 & #2",
          text: "Executed two comprehensive UI/UX overhauls driven by actual user interaction patterns and telemetry.",
        },
        {
          stage: "04. Monetization Engine",
          text: "Integrated subscription tiers (1, 3, 12 months) supporting YooKassa, Telegram Stars, and TON.",
        },
        {
          stage: "05. AI Integration",
          text: "Added built-in AI module analytics and clean data extraction pipelines for personalized insights.",
        },
        {
          stage: `06. Scale to ${CORE_METRICS.ultyUsers} Users`,
          text: "Drove adoption via Telegram Ads, AdsGram, Mini App catalogs, SEO, GEO, and organic referral mechanics.",
        },
      ],
    },
    businessPage: {
      hero: {
        badge: "Business Operations & Founder's Associate",
        title: "Business Assistant / Business Operations / Founder's Associate",
        subtitle:
          "Give me an unclear business problem — I’ll research it, structure it, coordinate the right people, and move it to a measurable result.",
        primaryCta: "Download Business Assistant CV",
        secondaryCta: "Explore Business Cases",
      },
      workWithFounder: {
        eyebrow: "Executive Partnership",
        title: "1 year 1 month working directly with the business owner",
        desc: "Served as an executive operational right hand to the owner of Rezerv Trading Company. Managed cross-functional initiatives spanning commerce, imports, logistics, software development, and process automation. Accustomed to autonomously executing 3–4 high-priority workstreams at once.",
        keyPillars: [
          {
            title: "Autonomy Under Ambiguity",
            desc: "I don't need hand-holding. Give me the target outcome, and I will structure the path, resolve bottlenecks, and deliver.",
          },
          {
            title: "Vendor & Stakeholder Negotiations",
            desc: "Experienced dealing directly with Chinese factories, customs brokers, fulfillment centers, and wholesale B2B partners.",
          },
          {
            title: "AI-First Operational Leverage",
            desc: "Automating manual business workflows with n8n, LLM pipelines, Google Sheets automations, and custom software scripts.",
          },
        ],
      },
    },
    cases: {
      ulty: {
        title: "UltyMyLife",
        role: "Founder / Project & Product Manager",
        tagline: "Telegram Native Ecosystem for tasks, habits, workouts, sleep, and personal productivity",
        status: `Live Product • ${CORE_METRICS.ultyUsers} registered users • ~1 year of continuous development`,
        overview:
          "A live, production product created from scratch. Initially, the core team consisted of myself and a developer. Later on, I personally took over a significant share of technical development and ongoing feature releases using Codex, ChatGPT, and AI-assisted workflows. The product passed rigorous selection and earned residency at IT Park Tatarstan.",
        timeline: [
          "Concept & Value Prop",
          "Architecture Planning",
          "Core Engine Build",
          "MVP Launch",
          "Beta Testing",
          "Production Rollout",
          "Payment Gateway Integration",
          "First Major UX Overhaul",
          "Second Major System Redesign",
          "Growth & Funnel Execution",
          `${CORE_METRICS.ultyUsers} Active Users`,
          "Continuous Delivery & Releases",
        ],
      },
      drMix: {
        title: "Dr. Mix",
        role: "Full-Stack Developer & Product Builder",
        tagline: "From idea to first real order in ~1 month",
        badge: "Built and launched end-to-end personally",
        context:
          "Business challenge: launch a fully functional, production e-commerce channel for Dr. Mix independently, with virtually zero budget and tight timelines.",
        ownershipNote:
          "I personally designed and coded the entire system (frontend, backend, database, third-party integrations). I did NOT manage outside developers on this project — every component was built hands-on.",
        scope: [
          "Product structure & planning",
          "UX/UI design for storefront and customer portal",
          "Responsive frontend built for mobile and desktop",
          "Node.js backend with persistent database storage",
          "YooKassa / SBP online checkout and payment processing",
          "CDEK logistics integration (live rates and pickup points)",
          "Instant Telegram alerts for new orders and inquiries",
          "Admin management dashboard for products and orders",
          "Production deployment, Nginx, SSL, and server security",
          "End-to-end QA, debugging, and live rollout",
        ],
        result:
          "In approximately 1 month: Idea → Fully operational e-commerce platform with automated checkout and delivery → First paid customer orders.",
        pillars: {
          project: "Ownership + technical problem solving + rapid production delivery.",
          product: "Frictionless customer journey, rapid checkout, integrated delivery, and real buyers.",
          business: "Independent research → zero-budget implementation → immediate live commercial channel.",
        },
      },
      rezervSupply: {
        title: "REZERV: IT Platform & $100K+ Supply",
        role: "Project Manager / Operations Coordinator",
        tagline: "rezerv.biz web platform launch and end-to-end import coordination from China",
        metrics: [
          { value: "rezerv.biz", label: "B2B/B2C Web Platform" },
          { value: CORE_METRICS.coordinatedBudget, label: "Import volume coordinated" },
          { value: CORE_METRICS.supplyUnits, label: "Physical units" },
          { value: "7+ groups", label: "Stakeholders aligned" },
        ],
        platformHighlights: [
          "Split user journeys for retail buyers and wholesale partners",
          "Connected catalog, authentication, orders, and company operational flows",
          "Built responsive web UI and launched public release on rezerv.biz domain",
        ],
        stakeholders: [
          "Factories in China",
          "Customs brokers",
          "Certification bodies",
          "Currency control",
          "Logistics operators",
          "Receiving warehouses",
          "Business leadership",
        ],
        conflictCase: {
          title: "Blocker Resolution Case: Customs Broker vs Procurement",
          story:
            "During customs clearance for a major cargo shipment, an acute dispute erupted between the customs broker and the internal procurement manager over discrepancies in import documentation. This threatened immediate border holding fines and delivery failure. I stepped in immediately, held separate alignment sessions with both parties, uncovered the precise commodity code issue (HS code classification), drafted a unified document standard, and cleared the shipment with zero delay.",
        },
      },
      fulfillmentCase: {
        title: "Fulfillment Market Analysis (500+ Operators)",
        role: "Operations & Market Research",
        tagline: "Researched, segmented, and shortlisted in 1–2 days",
        result:
          "Under strict deadlines, compiled and analyzed a database of 500+ fulfillment providers. Segmented providers by regional hubs (South, Northwest, Central, Urals), rates, intake speed, and software integrations. Produced an actionable executive shortlist handed directly to the Head of Sales for fast vendor contracting.",
      },
      b2bFromZero: {
        title: "B2B Wholesale Channel From Scratch",
        role: "Business Development & Sales Operations",
        tagline: "Rapid launch of a wholesale revenue stream with zero pre-existing client base",
        scope: [
          "Packaged a compelling wholesale value proposition and pricing structure",
          "Engineered an interactive B2B product catalog in Google Sheets",
          "Configured inbound lead generation via Avito",
          "Assembled targeted outbound prospect databases",
          "Built automated cold email outreach sequences",
          "Personally conducted commercial negotiations and closed deals",
        ],
        results: [
          `${CORE_METRICS.b2bContacts} cold outbound touches`,
          `${CORE_METRICS.b2bClients} initial paying wholesale clients`,
          `${CORE_METRICS.b2bSales} generated in first test sales`,
        ],
      },
      supplierResearch: {
        title: "Supplier Sourcing: Archery & Crossbow Targets",
        role: "Procurement & Commercial Research",
        tagline: "Discovered high-margin supplier yielding a 2x+ retail margin",
        result:
          "Conducted market research across manufacturers and distributors of sports archery targets. Negotiated wholesale terms, tested material quality, and secured a supplier whose pricing allowed marketplace retail at more than double the landed unit cost, even factoring in all platform commissions and freight.",
      },
      aiOperations: {
        title: "AI-First Automations & Operational Workflows",
        role: "AI Operations & Automation",
        tagline: "Practical deployment of LLM agents and automation scripts for real business tasks",
        details: [
          "Built autonomous n8n workflows with LLM nodes for content creation and lead qualification",
          "Connected Telegram bots directly to Google Sheets for real-time order and event telemetry",
          "Leveraged OpenAI Codex, ChatGPT, Antigravity, and AI tools for rapid software builds",
          "Conducted market research and drafted technical documentation using top AI models",
        ],
      },
    },
    ecosystem: [
      {
        id: "tasks",
        title: "Tasks & Planning",
        tag: "Core Workflow",
        iconName: "CheckSquare",
        summary: "Flexible personal and team task execution system",
        features: [
          "Deadlines and reminder alerts",
          "Context categories and custom tags",
          "Checklists and nested subtasks",
          "Multi-criteria sorting and prioritization",
          "Eisenhower matrix (Urgent vs Important)",
          "Intuitive inbox capturing and grouping",
        ],
      },
      {
        id: "habits",
        title: "Habit Tracker",
        tag: "Retention Loop",
        iconName: "Repeat",
        summary: "Forming lasting behavioral routines with flexible controls",
        features: [
          "Daily routines with custom cadence",
          "Sub-actions nested inside habits",
          "Streak tracking and milestone badges",
          "Pause habit feature without losing streaks",
          "Dedicated habit calendar view",
          "Visual execution tracking and completion rates",
        ],
      },
      {
        id: "workouts",
        title: "Workout Log & Bio-Tracking",
        tag: "Deep Module",
        iconName: "Dumbbell",
        summary: "Comprehensive physical activity and body measurement journal",
        features: [
          "Resistance training and cardio logging",
          "Exercise library with proper technique guidance",
          "Curated workout programs",
          "Custom workout and program builder",
          "Volume load calculation and trends",
          "Muscle group volume distribution analytics",
          "Body measurement tracking (weight, circumferences)",
        ],
      },
      {
        id: "sleep",
        title: "Sleep & Well-being Recovery",
        tag: "Health Data",
        iconName: "Moon",
        summary: "Monitoring physical state and recovery readiness",
        features: [
          "Night metrics (duration, sleep quality, wakefulness)",
          "Daily energy and alertness tracking",
          "Notes on fatigue factors and environment",
          "Custom biometric and state parameter creation",
          "Correlation insights between workload, sleep, and readiness",
        ],
      },
      {
        id: "breathing",
        title: "Breathing & Meditation",
        tag: "Mental Well-being",
        iconName: "Wind",
        summary: "Mental practices for focus, stress regulation, and recovery",
        features: [
          "Interactive pacing breathwork library",
          "Guided audio/text meditation collection",
          "Practices categorized by difficulty",
          "Categorized by intent (focus, sleep, anxiety, energy)",
          "Session telemetry and completion analytics",
        ],
      },
      {
        id: "mind",
        title: "Mind Training (Cognitive Games)",
        tag: "Gamification",
        iconName: "Brain",
        summary: "Interactive micro-challenges testing cognitive performance",
        features: [
          "Reaction speed challenges (Speed)",
          "Working memory training (Memory)",
          "Deductive problem solving (Logic)",
          "Attentional stamina (Focus)",
          "Community leaderboards and benchmarks",
        ],
      },
      {
        id: "ai",
        title: "Integrated AI Analysis",
        tag: "AI Inside",
        iconName: "Sparkles",
        summary: "Data-driven user assistance without marketing fluff",
        features: [
          "Native AI analysis of accumulated user habits and workouts",
          "Structured data packaging and export for external LLM querying",
          "Pattern recognition in recovery and productivity cycles",
          "Pragmatic AI copilot integrated into workflow views",
        ],
      },
      {
        id: "profile",
        title: "Profile & Settings",
        tag: "Platform & Social",
        iconName: "Users",
        summary: "Preferences, onboarding, community, and language controls",
        features: [
          "Friends list and peer interactions",
          "Referral program (Invite 3 friends → Unlock Premium)",
          "Dual language support (Russian and English)",
          "Granular audio and haptic feedback toggles",
          "Individual notification channels per module",
          "Built-in feedback submission and interactive onboarding",
        ],
      },
    ],
    analyticsData: {
      title: "UltyMyLife Product Analytics",
      subtitle:
        "I leverage product analytics to make rational feature decisions, not for decorative charts. I don't pose as a data scientist: my focus is product telemetry and prioritization.",
      metricsTracked: [
        "Visits and active user cohorts",
        "Daily and weekly activity patterns",
        "Session duration and return cadence",
        "Feature adoption across all 8 modules",
        "Cohort retention and drop-off analysis",
        "Acquisition channel attribution",
        "Workout tonnage and muscle group volume",
        "Body metrics progression over time",
        "Breathing and mindfulness session completions",
        "Sleep quality vs daily alertness correlations",
      ],
    },
    growthData: {
      title: "Growth & Acquisition Channels",
      subtitle:
        `Took the product from zero users to ${CORE_METRICS.ultyUsers} organic registrations. I understand the complete product lifecycle from first ad impression to onboarding retention.`,
      channels: [
        {
          name: "Telegram Ads & AdsGram",
          desc: "Targeted campaigns across relevant Telegram channels and Mini App ad networks",
        },
        {
          name: "Telegram Mini Apps Directories",
          desc: "Listing optimization and category placement across curated app catalogs",
        },
        {
          name: "Articles & Editorial Content",
          desc: "Publishing deep-dive teardowns, product updates, and case studies",
        },
        {
          name: "Custom Landing Page",
          desc: "Designed, coded, and deployed a high-converting web landing page for the app",
        },
        {
          name: "SEO & Generative Engine Optimization (GEO)",
          desc: "Optimizing structured content for traditional search and modern AI assistants",
        },
        {
          name: "Direct Community Outreach",
          desc: "High-touch interactions with early adopters for immediate user feedback",
        },
      ],
    },
    monetizationData: {
      title: "Monetization Architecture",
      subtitle:
        "UltyMyLife employs a straightforward subscription model with support for both conventional payment rails and Web3 native methods.",
      tiers: [
        { period: "1 Month", desc: "Monthly flexibility for active users" },
        { period: "3 Months", desc: "Optimal habit-formation duration" },
        { period: "12 Months", desc: "Annual tier for committed long-term progress" },
      ],
      gateways: [
        { name: "SBP / YooKassa", desc: "Official processing for Russian cards and instant SBP transfers" },
        { name: "Telegram Stars", desc: "Native in-app currency of the Telegram ecosystem" },
        { name: "TON", desc: "Cryptocurrency checkout on The Open Network blockchain" },
      ],
    },
    aiDevelopment: {
      title: "AI-First Engineering",
      subtitle:
        "Following initial work with a developer, I took on a substantial share of ongoing technical development using modern AI coding tools.",
      tools: ["OpenAI Codex", "ChatGPT", "Antigravity", "AI Coding Assistants", "LLM Pipelines"],
      useCases: [
        "Frontend & backend feature engineering",
        "Rapid bug isolation and resolution",
        "Technical architecture and dependency research",
        "Drafting clear engineering specifications",
        "Writing and iterating on UI microcopy",
        "Automating developer tasks and prototyping",
      ],
      disclaimer:
        "AI did not 'replace human engineering magically' — it provided severe operational leverage, reducing external dependencies and accelerating release velocity.",
    },
    skills: {
      project: {
        title: "Project Management",
        desc: "Scope, timelines, risk mitigation, and delivery",
        items: [
          "Project Management",
          "Project Planning",
          "Delivery Management",
          "Stakeholder Management",
          "Requirements Management",
          "Cross-functional Coordination",
          "Vendor Management",
          "Risk Management",
          "Process Improvement",
          "Agile / Scrum",
        ],
      },
      product: {
        title: "Product Management",
        desc: "User value, roadmapping, and iterative growth",
        items: [
          "Product Management",
          "Product Roadmap",
          "Backlog Management",
          "Prioritization (RICE/WSJF)",
          "Product Analytics",
          "User Flows & Wireframes",
          "Hypothesis Testing",
          "Retention & Churn",
          "Acquisition & Funnels",
          "Monetization Strategy",
          "Go-to-Market (GTM)",
        ],
      },
      tech: {
        title: "Technical & AI Stack",
        desc: "Code literacy, APIs, and infrastructure",
        items: [
          "API & Webhooks",
          "GitHub & Version Control",
          "Frontend & Backend Logic",
          "Databases (SQL & NoSQL)",
          "Telegram Mini Apps (TMA)",
          "n8n & Automations",
          "AI / LLM Orchestration",
          "OpenAI Codex",
          "AI-Assisted Development",
        ],
      },
      business: {
        title: "Business & Operations",
        desc: "Commerce, supply chain, negotiations, and research",
        items: [
          "Business Operations",
          "B2B Sales & Outbound",
          "E-commerce & Marketplaces",
          "Research & Analysis",
          "Vendor Research & Shortlisting",
          "Commercial Negotiations",
          "Procurement & Supply Chain",
          "Google Sheets (Advanced)",
          "Notion & YouGile",
        ],
      },
      domain: {
        title: "Domain Knowledge",
        desc: "Specialized fields with self-directed depth",
        items: [
          "FinTech & Payments",
          "Crypto & Web3",
          "Telegram Ecosystem",
          "AI Products & Tools",
        ],
      },
    },
    domainDetails: {
      crypto: {
        title: "Crypto / Web3 Domain Knowledge",
        badge: "Specialized Depth",
        desc: "Deep practical study of cryptocurrency markets, CEX order books, execution mechanics, and the TON ecosystem. Delivers immediate domain fluency for FinTech, Web3, and iGaming product teams.",
      },
      freelance: {
        title: "Commercial Technical Background",
        badge: "Hands-on Experience",
        desc: "Commercial freelance track record building full-stack web solutions (React, Node.js, PHP, SQL) and motion design. Verified client deliveries established strong engineering discipline and delivery quality.",
      },
    },
    about: {
      title: "About Me",
      lead: "Fast learner, relentless ownership, and driving complex initiatives to the finish line.",
      body: "My execution style is grounded in extreme ownership, technical curiosity, and commercial pragmatism. I thrive in high-ambiguity environments where ready answers don't exist: I do the research, form hypotheses, and find the most direct path to production. I actively apply an AI-first workflow for maximum velocity. Fluent in working-level English (B2), open to distributed global teams and relocation.",
    },
    contacts: {
      title: "Contact",
      subtitle: "Have an open role or project that matches? Let's connect.",
      telegramText: "Message on Telegram",
      emailText: "Send an Email",
      phoneText: "Call / WhatsApp",
      directTelegram: "@DemianWorkSelf",
    },
  },
} as const;
