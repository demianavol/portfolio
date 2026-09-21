import { useState } from "react";
import { useRouter } from "../router";
import { CORE_METRICS, CV_LINKS, CONTACT_INFO } from "../data/portfolioData";
import { DesktopBrowserMockup } from "../components/DesktopBrowserMockup";
import { EcosystemShowcase } from "../components/EcosystemShowcase";
import { ProductProcessLine } from "../components/ProductProcessLine";
import { DomainAndTech } from "../components/DomainAndTech";
import { ProjectContactApple } from "../components/ProjectContactApple";
import {
  FileText,
  Send,
  ArrowDown,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Target,
  CheckCircle2,
  Users,
  Repeat,
  DollarSign,
} from "lucide-react";

export function ProductPage() {
  const { language } = useRouter();
  const isRu = language === "ru";
  const [showDrMixDetails, setShowDrMixDetails] = useState(false);
  const [showEcosystemDetails, setShowEcosystemDetails] = useState(false);

  const cvHref = isRu ? CV_LINKS.productRu : CV_LINKS.projectEn;
  const cvLabel = isRu ? "Скачать Product CV (PDF)" : "Download Product CV (PDF)";

  const proofMetrics = [
    {
      value: CORE_METRICS.ultyUsers,
      label: isRu ? "Пользователей в продукте" : "Users in own product",
      detail: "UltyMyLife Ecosystem",
    },
    {
      value: isRu ? CORE_METRICS.developmentCycleRu : CORE_METRICS.developmentCycle,
      label: isRu ? "Непрерывных итераций" : "Continuous iteration",
      detail: isRu ? "От идеи до масштабирования" : "Concept to production scale",
    },
    {
      value: "8 модулей",
      label: isRu ? "Продуктовая экосистема" : "Product ecosystem",
      detail: isRu ? "Единый профиль пользователя" : "Unified user profile",
    },
    {
      value: "3 шлюза",
      label: isRu ? "Платежные рельсы" : "Payment rails",
      detail: isRu ? "СБП, Stars, TON" : "Cards, Stars, TON",
    },
    {
      value: "IT Park",
      label: isRu ? "Резидентство и питч" : "Incubator residency",
      detail: isRu ? "Защита бизнес-модели" : "Defended unit economics",
    },
  ];

  const productJourneySteps = [
    { label: isRu ? "Идея" : "Idea" },
    { label: "MVP" },
    { label: "Beta" },
    { label: "Production" },
    { label: isRu ? "Монетизация" : "Monetization" },
    { label: isRu ? "Редизайн #1-2" : "Redesign" },
    { label: isRu ? "Аналитика & Рост" : "Growth & Data" },
    { label: isRu ? "Непрерывные релизы" : "Continuous Dev" },
  ];

  const modulesList = [
    { id: "tasks", name: isRu ? "Задачи & Фокус" : "Tasks & Focus" },
    { id: "habits", name: isRu ? "Привычки" : "Habits" },
    { id: "workouts", name: isRu ? "Тренировки" : "Workouts" },
    { id: "sleep", name: isRu ? "Сон & Отдых" : "Sleep & Rest" },
    { id: "recovery", name: isRu ? "Дыхание" : "Breathing" },
    { id: "mind", name: isRu ? "Ментальные игры" : "Mind Games" },
    { id: "ai", name: isRu ? "ИИ-анализ" : "AI Telemetry" },
    { id: "profile", name: isRu ? "Профиль & Настройки" : "Profile" },
  ];

  const telemetryChips = isRu
    ? [
        "Активность и дневные визиты (DAU / WAU patterns)",
        "Время сессий и частота возвратов в приложение",
        "Популярность и глубина каждого из 8 модулей",
        "Когортный анализ и удержание (Retention & Churn)",
        "Атрибуция каналов привлечения (Attribution)",
        "Силовой тренировочный объём (Volume Load)",
        "Динамика биометрии и замеров тела",
        "Завершённость дыхательных и медитативных сессий",
      ]
    : [
        "Daily active usage & activity patterns (DAU / WAU)",
        "Session duration and return cadence",
        "Feature adoption across all 8 modules",
        "Cohort retention & drop-off funnels",
        "Acquisition channel attribution",
        "Workout tonnage & muscle volume load",
        "Biometric progression and body measurements",
        "Breathing & meditation session completions",
      ];

  const growthChannels = isRu
    ? [
        { name: "Telegram Ads & AdsGram", desc: "Таргетированная реклама в тематических Telegram-каналах и Mini Apps сетях." },
        { name: "Каталоги Telegram Mini Apps", desc: "Листинг, оптимизация карточек и ключевых слов в профильных каталогах." },
        { name: "Контент & Разборы", desc: "Публикация продуктовых кейсов и экспертных статей для органического охвата." },
        { name: "Web Landing Page", desc: "Собственный адаптивный веб-лендинг для презентации возможностей и онбординга." },
        { name: "SEO & GEO Оптимизация", desc: "Оптимизация под поисковые системы и современные генеративные AI-поисковики." },
        { name: "Прямой аутрич & Комьюнити", desc: "Сбор первичного фидбека и точечное взаимодействие с ранними адептами." },
      ]
    : [
        { name: "Telegram Ads & AdsGram", desc: "Targeted campaigns across relevant Telegram channels and Mini App ad networks." },
        { name: "Mini App Curated Catalogs", desc: "Listing optimization, feature highlights, and category ranking in app directories." },
        { name: "Content & Case Teardowns", desc: "Publishing detailed product updates and workflow breakdowns for organic reach." },
        { name: "Dedicated Web Landing", desc: "High-converting web presentation page for app discovery and onboarding." },
        { name: "SEO & Generative Engine (GEO)", desc: "Structured data optimization for search engines and generative AI answers." },
        { name: "Direct Outreach & Community", desc: "High-touch feedback collection and proactive engagement with early adopters." },
      ];

  return (
    <div className="product-page-root">
      {/* ------------------------------------------------------------------
          1. HERO SECTION (Edge-to-edge #0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="hero">
        <div className="project-content-container">
          <div className="hero-apple-grid">
            {/* Left: Typography & One Dominant Narrative */}
            <div className="hero-narrative-col">
              <div className="hero-eyebrow-row">
                <span className="hero-eyebrow-pill">
                  <span className="hero-pulse-dot" />
                  <span>PRODUCT MANAGER / PRODUCT OWNER</span>
                </span>
                <span className="hero-location-pill">
                  {isRu ? "Удалённо · Готов к релокации" : "Remote · Open to relocation"}
                </span>
              </div>

              <h1 className="hero-apple-title">
                <span className="hero-name-line">Demian Avolstiyniy</span>
                <span className="hero-role-line">
                  {isRu
                    ? "Развиваю digital-продукты от идеи до production"
                    : "Product Manager & Product Owner"}
                </span>
              </h1>

              <p className="hero-apple-statement">
                {isRu
                  ? "Развиваю digital-продукты от идеи до production — через пользовательские сценарии, данные, приоритизацию и быстрые итерации."
                  : "Evolving digital products from concept to production — through user workflows, data telemetry, backlog prioritization, and rapid continuous iterations."}
              </p>

              {/* Action Buttons */}
              <div className="hero-actions-row">
                <a href="#cases" className="apple-btn apple-btn-primary">
                  <span>{isRu ? "Смотреть продуктовый кейс" : "View Product Case"}</span>
                  <ArrowDown size={15} />
                </a>

                <a href={cvHref} download className="apple-btn apple-btn-secondary">
                  <FileText size={15} />
                  <span>{cvLabel}</span>
                </a>

                <a
                  href={CONTACT_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn apple-btn-ghost"
                >
                  <Send size={14} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Right: Profile Visual with 3 Floating Proof Facts */}
            <div className="hero-visual-col">
              <div className="hero-profile-surface">
                <div className="profile-img-wrap">
                  <img
                    src="/profile-photo.png"
                    alt="Demian Avolstiyniy — Product Manager"
                    className="hero-profile-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 3 Floating Facts */}
                <div className="floating-fact-badge fact-exp">
                  <strong className="fact-val">{CORE_METRICS.ultyUsers}</strong>
                  <span className="fact-lbl">{isRu ? "пользователей в продукте" : "registered users"}</span>
                </div>

                <div className="floating-fact-badge fact-users">
                  <strong className="fact-val">~1 год</strong>
                  <span className="fact-lbl">{isRu ? "непрерывного развития" : "continuous iterations"}</span>
                </div>

                <div className="floating-fact-badge fact-itpark">
                  <strong className="fact-val">IT Park</strong>
                  <span className="fact-lbl">{isRu ? "Официальный резидент" : "Incubator Resident"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. PROOF METRICS (Edge-to-edge #111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt proof-metrics-edge-wrap">
        <div className="project-content-container">
          <div className="project-proof-metrics-container">
            <div className="proof-metrics-grid-minimal" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {proofMetrics.map((item, idx) => (
                <div key={idx} className="proof-metric-item">
                  <span className="proof-metric-val">{item.value}</span>
                  <strong className="proof-metric-lbl">{item.label}</strong>
                  <span className="proof-metric-det">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. ULTYMYLIFE — FLAGSHIP PRODUCT CASE (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="cases">
        <div className="project-content-container">
          <div className="ulty-story-flow">
            {/* Intro & Mockup */}
            <div className="ulty-story-intro">
              <div className="case-meta-header">
                <span className="case-eyebrow-pill">
                  {isRu ? "Флагманский продуктовый кейс" : "Flagship Product Case"}
                </span>
                <span className="case-meta-pill">Founder & Product Manager • Live</span>
              </div>

              <div className="ulty-intro-header">
                <h2 className="ulty-main-heading">UltyMyLife</h2>
                <p className="ulty-intro-tagline">
                  {isRu
                    ? "Создал и развил мультимодульный продукт от идеи до работающей системы с 1600+ зарегистрированными пользователями."
                    : "Built and evolved a multi-module Telegram product from idea to a live system used by 1,600+ people."}
                </p>
              </div>

              {/* Product Mockup */}
              <div className="ulty-large-screenshot">
                <DesktopBrowserMockup
                  landingUrl="https://demianavol.github.io/ultymylife-landing/"
                  siteDomain="ultymylife.com"
                  buttonLabel={isRu ? "Открыть сайт ultymylife.com" : "Open ultymylife.com"}
                  imageSrc="/previews/ultymylife-preview.png"
                  imageAlt="UltyMyLife Live Production Platform"
                  directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
                />
              </div>

              {/* 3 Proof Points */}
              <div className="ulty-three-proofs">
                <div className="proof-point">
                  <strong className="proof-val">{CORE_METRICS.ultyUsers}</strong>
                  <span className="proof-lbl">{isRu ? "Зарегистрированных пользователей" : "Registered users"}</span>
                </div>
                <div className="proof-point">
                  <strong className="proof-val">~1 год</strong>
                  <span className="proof-lbl">{isRu ? "Непрерывных продуктовых релизов" : "Continuous release cycles"}</span>
                </div>
                <div className="proof-point">
                  <strong className="proof-val">8 модулей</strong>
                  <span className="proof-lbl">{isRu ? "Единая архитектура ценности" : "Unified value architecture"}</span>
                </div>
              </div>
            </div>

            {/* Product Journey */}
            <div className="ulty-story-journey">
              <div className="sub-section-title-wrap">
                <h3 className="sub-section-title">{isRu ? "Эволюция продукта" : "Product Journey"}</h3>
              </div>

              <div className="journey-flow-track">
                {productJourneySteps.map((step, idx) => (
                  <div key={idx} className="journey-step-pill">
                    <span className="step-num">0{idx + 1}</span>
                    <span className="step-name">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Ecosystem (8 Modules) */}
            <div className="ulty-story-ecosystem">
              <div className="ecosystem-header-bar">
                <div>
                  <div className="sub-section-title-wrap">
                    <h3 className="sub-section-title">{isRu ? "Экосистема продукта: 8 модулей" : "Product Ecosystem: 8 Modules"}</h3>
                  </div>
                  <p className="ecosystem-intro-sub">
                    {isRu
                      ? "Задачи, привычки, тренировки, сон, дыхание, ментальные игры, ИИ-анализ и профиль."
                      : "Tasks, habits, workouts, sleep, breathwork, mind training, AI telemetry, and profile."}
                  </p>
                </div>

                <button
                  type="button"
                  className="apple-quiet-toggle-btn"
                  onClick={() => setShowEcosystemDetails(!showEcosystemDetails)}
                >
                  <span>
                    {showEcosystemDetails
                      ? (isRu ? "Скрыть интерактивный обзор" : "Hide interactive preview")
                      : (isRu ? "Открыть обзор 8 модулей со скриншотами" : "Explore 8 modules with screenshots")}
                  </span>
                  {showEcosystemDetails ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>

              {/* Quiet Chips Strip */}
              <div className="modules-chips-row">
                {modulesList.map((m) => (
                  <div key={m.id} className="module-chip-item">
                    <span className="module-chip-dot" />
                    <span>{m.name}</span>
                  </div>
                ))}
              </div>

              {/* Collapsible Interactive Showcase */}
              {showEcosystemDetails && (
                <div className="ecosystem-accordion-body animate-fade-in mt-4">
                  <EcosystemShowcase />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. PRODUCT ANALYTICS (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="analytics">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Телеметрия" : "Product Telemetry"}</span>
            <h2 className="section-main-heading">{isRu ? "Продуктовая аналитика" : "Product Analytics"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Использую данные, чтобы понимать, что улучшать дальше. Фокус — продуктовая логика и приоритизация."
                : "I use data to decide what to improve next. My focus is product telemetry, user retention, and prioritization."}
            </p>
          </div>

          <div className="product-analytics-grid">
            <div className="analytics-card">
              <h3 className="analytics-card-title">{isRu ? "Что я отслеживаю" : "Telemetry Tracked"}</h3>
              <p className="analytics-card-sub">
                {isRu
                  ? "Сквозные продуктовые метрики по всей экосистеме:"
                  : "Core behavioral metrics across all ecosystem loops:"}
              </p>

              <div className="analytics-chips-wall">
                {telemetryChips.map((chip, idx) => (
                  <div key={idx} className="analytics-chip-tag">
                    <TrendingUp size={15} />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="analytics-card">
              <h3 className="analytics-card-title">{isRu ? "Принцип работы с данными" : "Decision Principle"}</h3>
              <p className="analytics-card-sub">
                {isRu ? "Data-informed, а не декоративные дашборды" : "Data-informed, not vanity dashboards"}
              </p>

              <div className="analytics-philosophy-box">
                <div className="analytics-philosophy-lead">
                  {isRu ? "Проверка гипотез и отсечение лишнего" : "Hypothesis Validation"}
                </div>
                <p className="analytics-philosophy-text">
                  {isRu
                    ? "Данные служат для проверки гипотез: какие модули дают высокий retention, где пользователи сталкиваются с трением, какие сценарии используются ежедневно. Если фича не востребована — мы её упрощаем или убираем, сохраняя чистоту продукта."
                    : "Data validates hypotheses: which modules drive retention, where users drop off, and which routines provide daily value. Unused features are simplified or removed rather than over-engineered."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. PRODUCT DECISION MAKING — 6-STEP SEQUENCE (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="decision-process">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Методология" : "Operating Sequence"}</span>
            <h2 className="section-main-heading">
              {isRu ? "Как я принимаю продуктовые решения" : "How I Make Product Decisions"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? "Цикл непрерывного улучшения: от наблюдения за пользователями до замера результата."
                : "Continuous improvement loop: from observing user behavior to measuring impact."}
            </p>
          </div>

          <ProductProcessLine />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. USER FEEDBACK & ITERATION PROOF (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt">
        <div className="project-content-container">
          <div className="feedback-proof-card">
            <div className="feedback-proof-stats">
              <div className="feedback-proof-box">
                <span className="feedback-proof-val">~30</span>
                <span className="feedback-proof-lbl">{isRu ? "Тестеров на запуске" : "Early testers"}</span>
              </div>
              <div className="feedback-proof-box">
                <span className="feedback-proof-val">25+</span>
                <span className="feedback-proof-lbl">{isRu ? "Разобранных инпутов" : "Feedback inputs"}</span>
              </div>
            </div>

            <div className="feedback-proof-message">
              <strong style={{ color: "#F5F5F7", display: "block", marginBottom: 4 }}>
                {isRu ? "Фидбек → Решение → Итерация" : "Feedback → Decision → Iteration"}
              </strong>
              {isRu
                ? "Лично проводил качественные интервью с пользователями. Например, выявил демотивацию при сбросе стрика привычек и внедрил функцию «Пауза привычки», снизив отток пользователей на второй неделе."
                : "Conducted user interviews directly. Discovered streak demotivation in daily habits and implemented a 'Pause Habit' mechanic, curbing week-2 churn."}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. GROWTH & ACQUISITION (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="growth">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Привлечение" : "Growth & Channels"}</span>
            <h2 className="section-main-heading">
              {isRu ? "Каналы привлечения и дистрибуции" : "Growth & Acquisition Channels"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? `Работал на стыке продукта и дистрибуции: от первого креатива до ${CORE_METRICS.ultyUsers} регистраций.`
                : `Operated across product and acquisition: from initial marketing assets to ${CORE_METRICS.ultyUsers} registrations.`}
            </p>
          </div>

          <div className="growth-channels-grid">
            {growthChannels.map((ch, idx) => (
              <div key={idx} className="growth-channel-box">
                <strong className="growth-channel-name">{ch.name}</strong>
                <p className="growth-channel-desc">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8. MONETIZATION ARCHITECTURE (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="monetization">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Экономика" : "Monetization"}</span>
            <h2 className="section-main-heading">
              {isRu ? "Архитектура монетизации" : "Monetization Architecture"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? "Подписочная модель с поддержкой традиционных и Web3-методов оплаты."
                : "Subscription model supporting both traditional cards and Web3 native rails."}
            </p>
          </div>

          <div className="monetization-clean-layout">
            <div className="monetization-tiers-row">
              <div className="tier-clean-box">
                <span className="tier-clean-period">{isRu ? "1 месяц" : "1 Month"}</span>
                <p className="tier-clean-desc">
                  {isRu ? "Полный доступ ко всем модулям и AI" : "Full access to all 8 modules & AI"}
                </p>
              </div>
              <div className="tier-clean-box">
                <span className="tier-clean-period">{isRu ? "3 месяца" : "3 Months"}</span>
                <p className="tier-clean-desc">
                  {isRu ? "Оптимальный цикл закрепления привычек" : "Optimal habit retention duration"}
                </p>
              </div>
              <div className="tier-clean-box">
                <span className="tier-clean-period">{isRu ? "12 месяцев" : "12 Months"}</span>
                <p className="tier-clean-desc">
                  {isRu ? "Годовой план для долгосрочного прогресса" : "Annual plan for dedicated users"}
                </p>
              </div>
            </div>

            <div className="gateways-clean-list">
              <div className="gateway-clean-item">
                <strong className="gateway-clean-name">ЮKassa / СБП</strong>
                <span className="gateway-clean-desc">{isRu ? "Банковские карты РФ и быстрые переводы СБП" : "Cards & instant bank transfers"}</span>
              </div>
              <div className="gateway-clean-item">
                <strong className="gateway-clean-name">Telegram Stars</strong>
                <span className="gateway-clean-desc">{isRu ? "Нативная цифровая валюта внутри Telegram" : "Native in-app Telegram currency"}</span>
              </div>
              <div className="gateway-clean-item">
                <strong className="gateway-clean-name">TON</strong>
                <span className="gateway-clean-desc">{isRu ? "Криптовалютные платежи в сети The Open Network" : "Web3 cryptocurrency checkout"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          9. DR. MIX — E-COMMERCE PRODUCT LAUNCH (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="dr-mix">
        <div className="project-content-container">
          <div className="drmix-clean-layout">
            <div className="case-meta-header">
              <span className="case-eyebrow-pill">
                {isRu ? "Продуктовый запуск e-commerce" : "E-Commerce Product Launch"}
              </span>
              <span className="case-meta-pill">Live Production</span>
            </div>

            <div className="drmix-header-row">
              <div>
                <h2 className="clean-case-title">DR. MIX</h2>
                <p className="clean-case-tagline">
                  {isRu
                    ? "Конверсионный путь покупателя: от каталога и чекаута до оплат и доставки за ~1 месяц."
                    : "Shopper journey: frictionless catalog, checkout, YooKassa payments, and logistics in ~1 month."}
                </p>
              </div>

              <a
                href="https://dr-mix.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-quiet-link-btn"
              >
                <span>dr-mix.ru</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* 3 Proofs */}
            <div className="drmix-three-proofs">
              <div className="proof-box">
                <strong className="proof-val">~1 {isRu ? "месяц" : "month"}</strong>
                <span className="proof-lbl">{isRu ? "Сроки реализации" : "Velocity"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">{isRu ? "Быстрый чекаут" : "Fast checkout"}</strong>
                <span className="proof-lbl">{isRu ? "Без лишних шагов" : "Frictionless UX"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">{isRu ? "Реальные заказы" : "Live orders"}</strong>
                <span className="proof-lbl">{isRu ? "Боевая коммерция" : "Immediate revenue"}</span>
              </div>
            </div>

            {/* Browser Mockup */}
            <div className="drmix-mockup-wrapper">
              <DesktopBrowserMockup
                landingUrl="https://dr-mix.ru/"
                siteDomain="dr-mix.ru"
                buttonLabel={isRu ? "Открыть сайт dr-mix.ru" : "Open dr-mix.ru"}
                imageSrc="/previews/drmix-preview.png"
                imageAlt="Dr. Mix Production Preview"
                directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
              />
            </div>

            {/* Integrations Badges */}
            <div className="drmix-integrations-row">
              <span className="integrations-lead">{isRu ? "Стек & Интеграции:" : "Stack & Integrations:"}</span>
              <div className="drmix-integrations-chips">
                <span className="drmix-chip">YooKassa</span>
                <span className="drmix-chip">CDEK API</span>
                <span className="drmix-chip">Retail CRM</span>
                <span className="drmix-chip">Telegram Bot API</span>
                <span className="drmix-chip">Node.js</span>
                <span className="drmix-chip">GitHub</span>
              </div>
            </div>

            {/* Expandable Architecture Details Toggle */}
            <div className="drmix-details-accordion">
              <button
                type="button"
                className="text-ghost-toggle-btn"
                onClick={() => setShowDrMixDetails(!showDrMixDetails)}
              >
                <span>
                  {showDrMixDetails
                    ? (isRu ? "Скрыть продуктовые детали" : "Hide product details")
                    : (isRu ? "Посмотреть детали продуктового сценария" : "View customer journey details")}
                </span>
                {showDrMixDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showDrMixDetails && (
                <div className="drmix-expanded-text animate-fade-in">
                  <p>
                    {isRu
                      ? "Спроектировал весь путь покупателя: от первого входа на посадочную страницу до выбора товара, оформления заказа без обязательной сложной регистрации, оплаты через ЮKassa/СБП, выбора ближайшего пункта выдачи СДЭК и мгновенных Telegram-оповещений."
                      : "Engineered the entire shopper funnel: landing page discovery, frictionless cart checkout without mandatory registration, YooKassa payments, CDEK logistics pickup selection, and automated Telegram order dispatches."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          10. SKILLS — 3 BALANCED COLUMNS (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="skills">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Компетенции" : "Capabilities"}</span>
            <h2 className="section-main-heading">{isRu ? "Продуктовые навыки" : "Product Capabilities"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Сбалансированная триада: продуктовое мышление, инженерная грамотность и бизнес-прагматизм."
                : "Balanced triad: product discovery, technical fluency, and commercial execution."}
            </p>
          </div>

          <div className="project-skills-three-cols">
            {/* Column 1: PRODUCT */}
            <div className="skill-col-card">
              <div className="skill-col-header">
                <span className="skill-col-eyebrow">PRODUCT</span>
                <h3 className="skill-col-title">{isRu ? "Продукт & Пользователи" : "Product & Discovery"}</h3>
              </div>
              <ul className="skill-bullet-list">
                <li>{isRu ? "Roadmap, Backlog & приоритизация (RICE)" : "Roadmaps, Backlog & Prioritization (RICE)"}</li>
                <li>{isRu ? "User Flows, сценарии & CJM" : "User Flows, Scenarios & CJM"}</li>
                <li>{isRu ? "Продуктовая аналитика & воронки" : "Product Analytics & Funnel Telemetry"}</li>
                <li>{isRu ? "Тестирование гипотез & качественный фидбек" : "Hypothesis Testing & User Feedback Loops"}</li>
                <li>{isRu ? "Retention, Churn & активация пользователей" : "Retention, Churn & User Activation"}</li>
              </ul>
            </div>

            {/* Column 2: TECH */}
            <div className="skill-col-card">
              <div className="skill-col-header">
                <span className="skill-col-eyebrow">TECH</span>
                <h3 className="skill-col-title">{isRu ? "Технический стек & AI" : "Technical & AI Stack"}</h3>
              </div>
              <ul className="skill-bullet-list">
                <li>{isRu ? "REST API, Webhooks & Архитектура" : "REST API, Webhooks & Architecture"}</li>
                <li>{isRu ? "Git, GitHub & версионирование" : "Git, GitHub & Version Control"}</li>
                <li>{isRu ? "Реляционные базы данных & SQL" : "Relational Databases & SQL"}</li>
                <li>{isRu ? "Telegram Mini Apps & Bots" : "Telegram Mini Apps & Native Bots"}</li>
                <li>{isRu ? "AI-assisted dev & автоматизация (n8n)" : "AI-Assisted Dev & Automation (n8n)"}</li>
              </ul>
            </div>

            {/* Column 3: BUSINESS */}
            <div className="skill-col-card">
              <div className="skill-col-header">
                <span className="skill-col-eyebrow">BUSINESS</span>
                <h3 className="skill-col-title">{isRu ? "Бизнес & Growth" : "Commercial & Growth"}</h3>
              </div>
              <ul className="skill-bullet-list">
                <li>{isRu ? "Подписочная модель & монетизация" : "Subscription Models & Monetization Tiers"}</li>
                <li>{isRu ? "Каналы привлечения & AdsGram/TG Ads" : "Acquisition Channels & AdsGram/TG Ads"}</li>
                <li>{isRu ? "E-commerce & коммерческие процессы" : "E-commerce & Commercial Operations"}</li>
                <li>{isRu ? "Оценка ценности фич & юнит-экономика" : "Feature Value Valuation & Unit Economics"}</li>
                <li>{isRu ? "Защита продукта перед инкубатором (IT Park)" : "Product Defense before Incubator (IT Park)"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          11. DOMAIN & TECH BACKGROUND (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="domain">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Бэкграунд" : "Background"}</span>
            <h2 className="section-main-heading">{isRu ? "Дополнительный опыт" : "Additional Experience"}</h2>
          </div>

          <DomainAndTech />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          12. CONTACT (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="contact">
        <div className="project-content-container">
          <ProjectContactApple
            eyebrow={isRu ? "Связь и сотрудничество" : "Get In Touch"}
            statement={
              isRu
                ? "Ищете Product Manager, который может довести идею до работающего продукта?"
                : "Looking for a Product Manager who turns ideas into live products?"
            }
            sub={
              isRu
                ? "Открыт к продуктовым предложениям в сильных командах. Готов к быстрому старту."
                : "Open to product roles in ambitious teams. Ready for immediate impact."
            }
            cvHref={cvHref}
            cvLabel={cvLabel}
          />
        </div>
      </section>
    </div>
  );
}
