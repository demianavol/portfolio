import { useState } from "react";
import { useRouter } from "../router";
import { CORE_METRICS, CV_LINKS, CONTACT_INFO } from "../data/portfolioData";
import { StakeholderMap } from "../components/StakeholderMap";
import { DesktopBrowserMockup } from "../components/DesktopBrowserMockup";
import { BusinessProcessLine } from "../components/BusinessProcessLine";
import { DomainAndTech } from "../components/DomainAndTech";
import { ProjectContactApple } from "../components/ProjectContactApple";
import {
  FileText,
  Send,
  ArrowDown,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Package,
  TrendingUp,
  Search,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function BusinessPage() {
  const { language } = useRouter();
  const isRu = language === "ru";
  const [showDrMixDetails, setShowDrMixDetails] = useState(false);

  const cvHref = isRu ? CV_LINKS.businessRu : CV_LINKS.projectEn;
  const cvLabel = isRu ? "Скачать Business CV (PDF)" : "Download Business CV (PDF)";

  const proofMetrics = [
    {
      value: CORE_METRICS.coordinatedBudget,
      label: isRu ? "Импортных поставок" : "Supply projects",
      detail: isRu ? "Закупки из Китая ($100K+)" : "Direct China sourcing",
    },
    {
      value: CORE_METRICS.supplyUnits,
      label: isRu ? "Единиц продукции" : "Units coordinated",
      detail: isRu ? "Синхронизация 7+ сторон" : "Multi-modal logistics",
    },
    {
      value: CORE_METRICS.vendorsAnalyzed,
      label: isRu ? "Подрядчиков в базе" : "Vendors analyzed",
      detail: isRu ? "Fulfillment за 1–2 дня" : "Shortlisted in 1–2 days",
    },
    {
      value: "3–4",
      label: isRu ? "Параллельных стрима" : "Parallel workstreams",
      detail: isRu ? "Одновременно в работе" : "Simultaneous execution",
    },
    {
      value: "1 год 1 мес",
      label: isRu ? "С собственником бизнеса" : "Side-by-side with owner",
      detail: isRu ? "Прямое доверие и автономия" : "Direct trust & autonomy",
    },
  ];

  const funnelSteps = isRu
    ? ["Оффер", "B2B Каталог", "Avito поток", "Целевая база", "Аутрич", "Первые клиенты"]
    : ["Wholesale Offer", "Product Catalog", "Inbound Funnel", "Prospect Base", "Cold Outreach", "First Customers"];

  return (
    <div className="business-page-root">
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
                  <span>BUSINESS OPERATIONS / FOUNDER'S ASSOCIATE</span>
                </span>
                <span className="hero-location-pill">
                  {isRu ? "Удалённо · Готов к релокации" : "Remote · Open to relocation"}
                </span>
              </div>

              <h1 className="hero-apple-title">
                <span className="hero-name-line">Demian Avolstiyniy</span>
                <span className="hero-role-line">
                  {isRu
                    ? "Беру неструктурированные задачи и довожу до результата"
                    : "Business Operations & Founder's Associate"}
                </span>
              </h1>

              <p className="hero-apple-statement">
                {isRu
                  ? "Беру неструктурированные бизнес-задачи, быстро разбираюсь в контексте, нахожу решение и довожу работу до результата."
                  : "Taking ambiguous business objectives, rapidly researching the domain, structuring the execution path, and driving the initiative to measurable results."}
              </p>

              {/* Action Buttons */}
              <div className="hero-actions-row">
                <a href="#rezerv" className="apple-btn apple-btn-primary">
                  <span>{isRu ? "Смотреть бизнес-кейсы" : "View Business Cases"}</span>
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
                    alt="Demian Avolstiyniy — Business Operations"
                    className="hero-profile-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 3 Floating Facts */}
                <div className="floating-fact-badge fact-exp">
                  <strong className="fact-val">1 г 1 м</strong>
                  <span className="fact-lbl">{isRu ? "с собственником компании" : "side-by-side with owner"}</span>
                </div>

                <div className="floating-fact-badge fact-users">
                  <strong className="fact-val">$100K+</strong>
                  <span className="fact-lbl">{isRu ? "поставки & логистика" : "supply & logistics"}</span>
                </div>

                <div className="floating-fact-badge fact-itpark">
                  <strong className="fact-val">500+</strong>
                  <span className="fact-lbl">{isRu ? "подрядчиков в базе" : "vendors analyzed"}</span>
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
          3. WORKING DIRECTLY WITH THE BUSINESS OWNER (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="owner-partnership">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Операционное партнерство" : "Executive Partnership"}</span>
            <h2 className="section-main-heading">
              {isRu ? "Прямая работа с собственником бизнеса" : "Working Directly with the Business Owner"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? "1 год 1 месяц в прямом подчинении владельцу торговой компании «Резерв». Принимал задачи напрямую, вел несколько направлений и решал блокеры."
                : "1 year 1 month operating as an executive right hand to the owner of Rezerv Trading Company. High autonomy, cross-functional execution, and zero hand-holding."}
            </p>
          </div>

          <BusinessProcessLine />

          <div className="owner-pillars-grid" style={{ marginTop: 36 }}>
            <div className="owner-pillar-card">
              <span className="owner-pillar-num">01</span>
              <h3 className="owner-pillar-title">{isRu ? "Автономия в неопределенности" : "Autonomy Under Ambiguity"}</h3>
              <p className="owner-pillar-text">
                {isRu
                  ? "Не требую пошаговых инструкций: принимаю задачу в виде конечной цели, самостоятельно исследую контекст и прихожу с готовым решением."
                  : "I don't need micromanagement: I take the target outcome, research constraints, and return with a structured solution."}
              </p>
            </div>

            <div className="owner-pillar-card">
              <span className="owner-pillar-num">02</span>
              <h3 className="owner-pillar-title">{isRu ? "Переговоры & Подрядчики" : "Vendor Negotiations"}</h3>
              <p className="owner-pillar-text">
                {isRu
                  ? "Лично вёл диалог с фабриками в Китае, таможенными брокерами, фулфилмент-операторами и оптовыми B2B-клиентами без посредников."
                  : "Direct communications with Chinese manufacturers, customs brokers, fulfillment hubs, and wholesale B2B accounts."}
              </p>
            </div>

            <div className="owner-pillar-card">
              <span className="owner-pillar-num">03</span>
              <h3 className="owner-pillar-title">{isRu ? "AI-First скорость" : "AI-First Velocity"}</h3>
              <p className="owner-pillar-text">
                {isRu
                  ? "Автоматизирую рутинные процессы через n8n, LLM-сценарии, скрипты и Google Sheets, экономя десятки рабочих часов команды."
                  : "Automating manual business workflows with n8n, LLM pipelines, Google Sheets automations, and custom scripts."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. REZERV — $100K+ SUPPLY & STAKEHOLDER COORDINATION (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="rezerv">
        <div className="project-content-container">
          <div className="rezerv-clean-layout">
            <div className="case-meta-header">
              <span className="case-eyebrow-pill">
                {isRu ? "Главный операционный кейс" : "Flagship Operations Case"}
              </span>
              <span className="case-meta-pill">Global Supply & Platform Launch</span>
            </div>

            <div className="rezerv-header-row">
              <div>
                <h2 className="clean-case-title">
                  {isRu ? "Кросс-функциональные проекты в Rezerv" : "Cross-Functional Projects at Rezerv"}
                </h2>
                <p className="clean-case-tagline">
                  {isRu
                    ? "Запуск веб-платформы rezerv.biz и сквозная координация импорта $100K+ с синхронизацией 7+ сторон."
                    : "Launch of rezerv.biz platform and end-to-end coordination of $100K+ supply across 7+ stakeholders."}
                </p>
              </div>

              <a
                href="https://rezerv.biz/"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-quiet-link-btn"
              >
                <span>rezerv.biz</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Proof Numbers */}
            <div className="rezerv-proof-numbers">
              <div className="proof-box">
                <strong className="proof-val">$100K+</strong>
                <span className="proof-lbl">{isRu ? "Международные проекты" : "International projects"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">6000+</strong>
                <span className="proof-lbl">{isRu ? "Единиц продукции доставлено" : "Units delivered"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">3–4</strong>
                <span className="proof-lbl">{isRu ? "Параллельных стрима работы" : "Parallel workstreams"}</span>
              </div>
            </div>

            {/* Stakeholder Map (3-Second Rule) */}
            <div className="rezerv-stakeholder-section">
              <StakeholderMap />
            </div>

            {/* 4 Mini-Cases */}
            <div className="rezerv-mini-cases-row">
              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "B2B Продажи" : "B2B Channel"}</span>
                <strong className="cell-title">{isRu ? "B2B с нуля" : "B2B From Zero"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Упаковка оптового оффера, интерактивный прайс, первые 100+ контактов и клиенты."
                    : "Structured wholesale offer, catalog, initial 100+ contacts, and first clients."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "Логистика" : "Warehousing"}</span>
                <strong className="cell-title">{isRu ? "500+ фулфилментов" : "500+ Warehouses"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Исследование рынка, сегментация по географии/тарифам и шортлист за 1–2 дня."
                    : "Benchmarked 500+ providers; established rapid 1–2 day shortlists."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "Закупки" : "Sourcing"}</span>
                <strong className="cell-title">{isRu ? "Поиск фабрики (2x+ маржа)" : "Supplier Sourcing"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Прямой производитель мишеней с себестоимостью <50% с учётом логистики."
                    : "Sourced direct manufacturer enabling 2x+ gross margin after freight."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "Блокеры" : "Unblocking"}</span>
                <strong className="cell-title">{isRu ? "Таможенный кейс ТН ВЭД" : "Customs Clearance"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Снял спор брокера и таможни день-в-день без штрафов за простой."
                    : "Reconciled HS classifications and released cargo same-day without fees."}
                </p>
              </div>
            </div>

            {/* Platform Showcase */}
            <div className="rezerv-preview-flow">
              <DesktopBrowserMockup
                landingUrl="https://rezerv.biz/"
                siteDomain="rezerv.biz"
                buttonLabel={isRu ? "Открыть сайт rezerv.biz" : "Open rezerv.biz"}
                imageSrc="/previews/rezerv-preview.png"
                imageAlt="REZERV Platform Preview"
                directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. B2B FROM ZERO DEEP DIVE (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="b2b-case">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Развитие продаж" : "Sales Operations"}</span>
            <h2 className="section-main-heading">{isRu ? "Запуск B2B-канала с нуля" : "Built a B2B Channel from Zero"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Упаковал оптовое предложение, настроил входящие и исходящие каналы, довел до первых продаж."
                : "Packaged a wholesale proposition, established lead funnels, and closed initial commercial deals."}
            </p>
          </div>

          <div className="b2b-funnel-row">
            {funnelSteps.map((step, idx) => (
              <div key={idx} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span className="funnel-step-chip">
                  <CheckCircle2 size={14} style={{ color: "#38BDF8" }} />
                  <span>{step}</span>
                </span>
                {idx < funnelSteps.length - 1 && <span className="funnel-step-arrow">→</span>}
              </div>
            ))}
          </div>

          <div className="drmix-three-proofs" style={{ marginTop: 20 }}>
            <div className="proof-box">
              <strong className="proof-val">100+</strong>
              <span className="proof-lbl">{isRu ? "Холодных B2B-контактов" : "Cold outbound touches"}</span>
            </div>
            <div className="proof-box">
              <strong className="proof-val">~10</strong>
              <span className="proof-lbl">{isRu ? "Первых реальных клиентов" : "Initial wholesale buyers"}</span>
            </div>
            <div className="proof-box">
              <strong className="proof-val">~100,000 ₽</strong>
              <span className="proof-lbl">{isRu ? "Первые оптовые заказы" : "First test batch sales"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. DR. MIX — BUSINESS PROBLEM SOLVING (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="dr-mix">
        <div className="project-content-container">
          <div className="drmix-clean-layout">
            <div className="case-meta-header">
              <span className="case-eyebrow-pill">
                {isRu ? "Решение бизнес-задачи под ключ" : "Turnkey Business Problem Solving"}
              </span>
              <span className="case-meta-pill">~1 Month Velocity</span>
            </div>

            <div className="drmix-header-row">
              <div>
                <h2 className="clean-case-title">DR. MIX</h2>
                <p className="clean-case-tagline">
                  {isRu
                    ? "Задача: без бюджета запустить коммерческий канал онлайн-продаж. Решение: исследование, разработка и запуск под ключ за ~1 месяц."
                    : "Task: establish a production online sales channel with zero external agency budget in ~1 month."}
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
                <strong className="proof-val">Zero Budget</strong>
                <span className="proof-lbl">{isRu ? "Без затрат на агентства" : "Zero agency spend"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">{isRu ? "Реальные заказы" : "Real orders"}</strong>
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
                imageAlt="Dr. Mix Storefront"
                directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. AI & AUTOMATIONS IN OPERATIONS (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="ai-ops">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Автоматизация" : "AI Leverage"}</span>
            <h2 className="section-main-heading">
              {isRu ? "AI-автоматизации и операционная эффективность" : "AI Operations & Automation"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? "Использую AI для сокращения ручной рутины и ускорения бизнес-процессов: n8n, LLM, Telegram-боты и таблицы."
                : "I use AI to reduce manual work and move faster: n8n pipelines, LLMs, Telegram bots, and automated sheets."}
            </p>
          </div>

          <div className="ai-ops-clean-card">
            <div className="ai-ops-grid">
              <div className="ai-ops-item">
                <Sparkles size={16} />
                <span>{isRu ? "Сценарии n8n + LLM для обработки лидов и контента" : "n8n + LLM workflows for lead triage and content"}</span>
              </div>
              <div className="ai-ops-item">
                <Sparkles size={16} />
                <span>{isRu ? "Интеграция Telegram-ботов с Google Sheets для логирования" : "Telegram bots connected to Google Sheets telemetry"}</span>
              </div>
              <div className="ai-ops-item">
                <Sparkles size={16} />
                <span>{isRu ? "Исследование рынков и конкурентов с помощью передовых LLM" : "Rapid market research and competitor audits using LLMs"}</span>
              </div>
              <div className="ai-ops-item">
                <Sparkles size={16} />
                <span>{isRu ? "Автоматическое извлечение задач из митингов и заметок" : "Automated task extraction from meetings and transcripts"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8. ULTYMYLIFE — FOUNDER MINDSET (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt">
        <div className="project-content-container">
          <div className="feedback-proof-card">
            <div className="feedback-proof-stats">
              <div className="feedback-proof-box">
                <span className="feedback-proof-val">{CORE_METRICS.ultyUsers}</span>
                <span className="feedback-proof-lbl">{isRu ? "Пользователей" : "Users"}</span>
              </div>
              <div className="feedback-proof-box">
                <span className="feedback-proof-val">IT Park</span>
                <span className="feedback-proof-lbl">{isRu ? "Резидентство" : "Residency"}</span>
              </div>
            </div>

            <div className="feedback-proof-message">
              <strong style={{ color: "#F5F5F7", display: "block", marginBottom: 4 }}>
                {isRu ? "UltyMyLife: Опыт создания стартапа от А до Я" : "UltyMyLife: Founder Mindset & Execution"}
              </strong>
              {isRu
                ? "Создание UltyMyLife доказало способность действовать как основатель: самостоятельно закрывал разработку, маркетинг, аналитику, юридические оферты, платежи (ЮKassa, Stars, TON), поддержку пользователей и защиту бизнес-модели перед экспертами IT Park."
                : "Building UltyMyLife proved my ability to operate with a founder mindset: handling product engineering, acquisition, legal terms, payments, customer support, and pitching the business before the IT Park incubator panel."}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          9. SKILLS — 3 BALANCED COLUMNS (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="skills">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Компетенции" : "Capabilities"}</span>
            <h2 className="section-main-heading">{isRu ? "Операционные навыки" : "Operations Capabilities"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Сбалансированная триада: операционный менеджмент, работа со стейкхолдерами и технический инструментарий."
                : "Balanced triad: business operations, stakeholder coordination, and technical tooling."}
            </p>
          </div>

          <div className="project-skills-three-cols">
            {/* Column 1: OPERATIONS */}
            <div className="skill-col-card">
              <div className="skill-col-header">
                <span className="skill-col-eyebrow">OPERATIONS</span>
                <h3 className="skill-col-title">{isRu ? "Операции & Процессы" : "Operations & Execution"}</h3>
              </div>
              <ul className="skill-bullet-list">
                <li>{isRu ? "Business Operations & регламенты" : "Business Operations & SOPs"}</li>
                <li>{isRu ? "Сквозная координация проектов" : "End-to-End Project Coordination"}</li>
                <li>{isRu ? "Устранение операционных блокеров" : "Operational Blocker Resolution"}</li>
                <li>{isRu ? "Оптимизация издержек и процессов" : "Process & Cost Optimization"}</li>
                <li>{isRu ? "Управление 3–4 параллельными треками" : "Managing 3–4 Parallel Workstreams"}</li>
              </ul>
            </div>

            {/* Column 2: STAKEHOLDERS */}
            <div className="skill-col-card">
              <div className="skill-col-header">
                <span className="skill-col-eyebrow">PEOPLE & B2B</span>
                <h3 className="skill-col-title">{isRu ? "Стейкхолдеры & Переговоры" : "Stakeholders & B2B"}</h3>
              </div>
              <ul className="skill-bullet-list">
                <li>{isRu ? "Координация участников (7+ сторон)" : "Stakeholder Alignment (7+ groups)"}</li>
                <li>{isRu ? "Оценка и контрактация подрядчиков (500+)" : "Vendor Evaluation & Shortlisting (500+)"}</li>
                <li>{isRu ? "Коммерческие переговоры и условия" : "Commercial Negotiations & Terms"}</li>
                <li>{isRu ? "B2B продажи и холодный аутрич" : "B2B Outbound & Account Sourcing"}</li>
                <li>{isRu ? "Снабжение и международная логистика" : "Procurement & Global Supply Chain"}</li>
              </ul>
            </div>

            {/* Column 3: TOOLS & TECH */}
            <div className="skill-col-card">
              <div className="skill-col-header">
                <span className="skill-col-eyebrow">TOOLS & TECH</span>
                <h3 className="skill-col-title">{isRu ? "Инструменты & AI" : "Tooling & Automation"}</h3>
              </div>
              <ul className="skill-bullet-list">
                <li>{isRu ? "Google Sheets (продвинутый анализ)" : "Google Sheets (Advanced Modeling)"}</li>
                <li>{isRu ? "Notion & YouGile таск-системы" : "Notion & YouGile Task Systems"}</li>
                <li>{isRu ? "n8n сценарии & Webhooks" : "n8n Automation Pipelines & Webhooks"}</li>
                <li>{isRu ? "AI & LLM для операционных задач" : "AI & LLM Workflows for Operations"}</li>
                <li>{isRu ? "Telegram-боты & интеграции" : "Telegram Bots & Data Integrations"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          10. DOMAIN & TECH BACKGROUND (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="domain">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Бэкграунд" : "Background"}</span>
            <h2 className="section-main-heading">{isRu ? "Дополнительный опыт" : "Additional Experience"}</h2>
          </div>

          <DomainAndTech />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          11. CONTACT (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="contact">
        <div className="project-content-container">
          <ProjectContactApple
            eyebrow={isRu ? "Связь и сотрудничество" : "Get In Touch"}
            statement={
              isRu
                ? "Нужен человек, способный взять ответственность за неструктурированную бизнес-задачу?"
                : "Need someone who can take ownership of an unclear business problem?"
            }
            sub={
              isRu
                ? "Открыт к предложениям на позиции Business Operations, Business Assistant или Founder's Associate."
                : "Open to key Business Operations, Business Assistant, and Founder's Associate roles."
            }
            cvHref={cvHref}
            cvLabel={cvLabel}
          />
        </div>
      </section>
    </div>
  );
}
