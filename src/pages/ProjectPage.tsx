import { useRouter } from "../router";
import { CV_LINKS, CONTACT_INFO } from "../data/portfolioData";
import { ProjectProofMetrics } from "../components/ProjectProofMetrics";
import { UltyProductStory } from "../components/UltyProductStory";
import { StakeholderMap } from "../components/StakeholderMap";
import { ProjectProcessLine } from "../components/ProjectProcessLine";
import { ProjectSkillsThreeColumns } from "../components/ProjectSkillsThreeColumns";
import { DomainAndTech } from "../components/DomainAndTech";
import { DesktopBrowserMockup } from "../components/DesktopBrowserMockup";
import { ProjectContactApple } from "../components/ProjectContactApple";
import { FileText, Send, ArrowDown } from "lucide-react";

export function ProjectPage() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const cvHref = language === "en" ? CV_LINKS.projectEn : CV_LINKS.projectRu;
  const cvLabel = isRu ? "Скачать CV (PDF)" : "Download CV (PDF)";

  return (
    <div className="project-page-root">
      {/* ------------------------------------------------------------------
          1. HERO SECTION (Edge-to-edge #0B0B0C, Apple-like visual hierarchy)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="hero">
        <div className="project-content-container">
          <div className="hero-apple-grid">
            {/* Left: Typography, Narrative & Core Tools */}
            <div className="hero-narrative-col">
              <div className="hero-eyebrow-row">
                <span className="hero-eyebrow-pill">
                  <span className="hero-pulse-dot" />
                  <span>PROJECT MANAGER / IT PROJECT MANAGER</span>
                </span>
                <span className="hero-domain-pill">Digital · IT · AI · Operations</span>
                <span className="hero-location-pill">
                  {isRu ? "Удалённо · Готов к релокации" : "Remote · Open to relocation"}
                </span>
              </div>

              <h1 className="hero-apple-title">
                <span className="hero-name-line">Demian Avolstiyniy</span>
                <span className="hero-role-line">
                  {isRu ? "Project Manager для digital и технических продуктов" : "Project Manager for digital & technical products"}
                </span>
              </h1>

              <p className="hero-apple-statement">
                {isRu
                  ? "Сквозное ведение digital- и технических продуктов: беру ответственность за поставку от задачи до работающего production-релиза, снимаю блокеры и синхронизирую инженерию с бизнесом."
                  : "End-to-end delivery of digital and technical products: taking ownership from requirements to reliable production release, clearing blockers, and bridging engineering with business."}
              </p>

              {/* Action Buttons: Primary White + Secondary Transparent */}
              <div className="hero-actions-row">
                <a href="#cases" className="apple-btn apple-btn-primary">
                  <span>{isRu ? "Смотреть проекты" : "View Projects"}</span>
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

              {/* Compact Core Tools Block at Upper Level */}
              <div className="hero-core-tools-container">
                <span className="core-tools-lead">{isRu ? "Core tools:" : "Core tools:"}</span>
                <div className="core-tools-pills-row">
                  <span className="core-tool-pill">Notion</span>
                  <span className="core-tool-pill">YouGile</span>
                  <span className="core-tool-pill">Google Sheets</span>
                  <span className="core-tool-pill">GitHub</span>
                  <span className="core-tool-pill">n8n</span>
                  <span className="core-tool-pill">REST API</span>
                  <span className="core-tool-pill">Codex</span>
                  <span className="core-tool-pill">ChatGPT</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Visual with 3 Distinct Proof Badges */}
            <div className="hero-visual-col">
              <div className="hero-profile-surface">
                <div className="profile-img-wrap">
                  <img
                    src="/profile-photo.png"
                    alt="Demian Avolstiyniy — IT Project Manager"
                    className="hero-profile-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 3 Floating Facts (Deduplicated, Distinct Proofs) */}
                <div className="floating-fact-badge fact-exp">
                  <strong className="fact-val">3+</strong>
                  <span className="fact-lbl">{isRu ? "года в IT & проектах" : "years relevant experience"}</span>
                </div>

                <div className="floating-fact-badge fact-users">
                  <strong className="fact-val">1600+</strong>
                  <span className="fact-lbl">{isRu ? "юзеров в своём продукте" : "users in own product"}</span>
                </div>

                <div className="floating-fact-badge fact-itpark">
                  <strong className="fact-val">Ownership</strong>
                  <span className="fact-lbl">{isRu ? "Сквозной delivery до релиза" : "End-to-end delivery"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. PROOF METRICS (Edge-to-edge #111113, Minimalist Rail)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt proof-metrics-edge-wrap">
        <div className="project-content-container">
          <ProjectProofMetrics />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. ULTYMYLIFE — FLAGSHIP PRODUCT STORY (Edge-to-edge #0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="cases">
        <div className="project-content-container">
          <UltyProductStory />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. DR. MIX — HIGH-VELOCITY TECHNICAL DELIVERY (Edge-to-edge #111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="dr-mix">
        <div className="project-content-container">
          <div className="drmix-clean-layout">
            <div className="case-meta-header">
              <span className="case-eyebrow-pill">
                {isRu ? "Личная инженерная реализация • Скорость & Запуск" : "Solo Full-Stack Build • Speed & Delivery"}
              </span>
              <span className="case-meta-pill">E-commerce • Live</span>
            </div>

            <div className="drmix-header-row">
              <div>
                <h2 className="clean-case-title">DR. MIX</h2>
                <p className="clean-case-tagline">
                  {isRu
                    ? "Скоростной запуск e-commerce под ключ: от ТЗ до работающих онлайн-заказов за ~1 месяц без сторонних агентств."
                    : "Rapid turnkey e-commerce launch: from requirements to live customer orders in ~1 month without agency spend."}
                </p>
              </div>
            </div>

            {/* Quick Project Facts Grid (Point 7: Compact, Scannable, Replaces Long Prose) */}
            <div className="drmix-quick-facts-grid">
              <div className="quick-fact-card">
                <span className="quick-fact-lbl aligned-card-sublabel">{isRu ? "Сроки / Timeline" : "Timeline"}</span>
                <strong className="quick-fact-val">~1 {isRu ? "месяц" : "month"}</strong>
                <span className="quick-fact-sub">{isRu ? "От идеи до первых заказов" : "From zero to live orders"}</span>
              </div>
              <div className="quick-fact-card">
                <span className="quick-fact-lbl aligned-card-sublabel">{isRu ? "Команда / Team" : "Team"}</span>
                <strong className="quick-fact-val">Solo</strong>
                <span className="quick-fact-sub">{isRu ? "Full-stack разработка и запуск" : "Full-stack build & launch"}</span>
              </div>
              <div className="quick-fact-card">
                <span className="quick-fact-lbl aligned-card-sublabel">{isRu ? "Бюджет / Budget" : "Budget"}</span>
                <strong className="quick-fact-val">{isRu ? "Минимальный" : "Limited"}</strong>
                <span className="quick-fact-sub">{isRu ? "$0 затрат на агентства" : "$0 agency spend"}</span>
              </div>
              <div className="quick-fact-card quick-fact-stack-card">
                <span className="quick-fact-lbl aligned-card-sublabel">{isRu ? "Стек / Stack" : "Stack"}</span>
                <div className="quick-fact-stack-chips">
                  <span className="stack-pill">GitHub</span>
                  <span className="stack-pill">Node.js</span>
                  <span className="stack-pill">PostgreSQL</span>
                  <span className="stack-pill">ЮKassa</span>
                  <span className="stack-pill">СДЭК API</span>
                  <span className="stack-pill">Telegram API</span>
                </div>
              </div>
            </div>

            {/* Large Screenshot / Browser Mockup with Single Explicit CTA */}
            <div className="drmix-mockup-wrapper">
              <DesktopBrowserMockup
                landingUrl="https://dr-mix.ru/"
                siteDomain="dr-mix.ru"
                buttonLabel={isRu ? "Открыть dr-mix.ru ↗" : "Open dr-mix.ru ↗"}
                imageSrc="/previews/drmix-preview.png"
                imageAlt="Dr. Mix Production Preview"
                directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. REZERV — CROSS-FUNCTIONAL SUPPLY & STAKEHOLDER CASE (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="rezerv">
        <div className="project-content-container">
          <div className="rezerv-clean-layout">
            <div className="case-meta-header">
              <span className="case-eyebrow-pill">
                {isRu ? "Кросс-функциональные проекты • ВЭД & Платформа" : "Cross-Functional Projects • Supply & Web"}
              </span>
              <span className="case-meta-pill">B2B / B2C & Global Supply</span>
            </div>

            <div className="rezerv-header-row">
              <div>
                <h2 className="clean-case-title">
                  {isRu ? "Кросс-функциональные проекты в Rezerv" : "Cross-Functional Projects at Rezerv"}
                </h2>
                <p className="clean-case-tagline">
                  {isRu
                    ? "Сквозное управление цепочкой поставок $100K+ и запуск платформы rezerv.biz: синхронизация 7 сторон без срывов сроков."
                    : "End-to-end management of $100K+ supply and platform launch: 7 stakeholders aligned with zero delays."}
                </p>
              </div>
            </div>

            {/* Proof Numbers */}
            <div className="rezerv-proof-numbers">
              <div className="proof-box">
                <strong className="proof-val">$100K+</strong>
                <span className="proof-lbl aligned-card-sublabel">{isRu ? "Международные поставки" : "International supply"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">6000+</strong>
                <span className="proof-lbl aligned-card-sublabel">{isRu ? "Единиц продукции доставлено" : "Units delivered"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">7 сторон</strong>
                <span className="proof-lbl aligned-card-sublabel">{isRu ? "Сквозная синхронизация" : "Cross-functional hub"}</span>
              </div>
            </div>

            {/* Compact Stakeholder Map */}
            <div className="rezerv-stakeholder-section">
              <StakeholderMap />
            </div>

            {/* 4 Mini-Cases (Clean, Compact, Aligned Baseline) */}
            <div className="rezerv-mini-cases-row">
              <div className="mini-case-cell">
                <span className="cell-tag aligned-card-sublabel">{isRu ? "Логистика" : "Warehousing"}</span>
                <strong className="cell-title">{isRu ? "500+ фулфилментов" : "500+ Warehouses"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "База подрядчиков, методология оценки тарифов и шортлист за 1–2 дня."
                    : "Benchmarked 500+ partners; established rapid 1–2 day shortlists."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag aligned-card-sublabel">{isRu ? "B2B продажи" : "B2B Channel"}</span>
                <strong className="cell-title">{isRu ? "B2B с нуля" : "B2B From Zero"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Упаковка оптового предложения, интерактивный прайс, привлечение клиентов и первые контракты."
                    : "Wholesale packaging, interactive catalog, customer acquisition, and first commercial contracts."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag aligned-card-sublabel">{isRu ? "Закупки" : "Sourcing"}</span>
                <strong className="cell-title">{isRu ? "Поиск фабрики (2x+ маржа)" : "Supplier Sourcing"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Прямой производитель с себестоимостью <50% с учётом логистики."
                    : "Sourced direct manufacturer enabling 2x+ gross margin after freight."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag aligned-card-sublabel">{isRu ? "Блокеры" : "Unblocking"}</span>
                <strong className="cell-title">{isRu ? "Таможенный кейс ТН ВЭД" : "Customs Clearance"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Выверил документацию, снял спор брокера и таможни день-в-день без штрафов."
                    : "Reconciled HS classifications and released cargo same-day without fees."}
                </p>
              </div>
            </div>

            {/* Platform Showcase & Single CTA */}
            <div className="rezerv-preview-flow">
              <DesktopBrowserMockup
                landingUrl="https://rezerv.biz/"
                siteDomain="rezerv.biz"
                buttonLabel={isRu ? "Открыть rezerv.biz ↗" : "Open rezerv.biz ↗"}
                imageSrc="/previews/rezerv-preview.png"
                imageAlt="REZERV Platform Preview"
                directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. HOW I MANAGE PROJECTS — 6-STAGE SEQUENCE LINE (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="process">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Методология" : "Delivery Sequence"}</span>
            <h2 className="section-main-heading">{isRu ? "Как я веду проекты" : "How I Manage Projects"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Прозрачный сквозной цикл поставки: от неструктурированной задачи до измеримого результата."
                : "Transparent delivery lifecycle from ambiguous goals to dependable results."}
            </p>
          </div>

          <ProjectProcessLine />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. SKILLS — 3 BALANCED COLUMNS (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="skills">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Компетенции" : "Capabilities"}</span>
            <h2 className="section-main-heading">{isRu ? "Практические навыки" : "Practical Skills"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Сбалансированная триада: управление поставкой, инженерная грамотность и бизнес-ориентированность."
                : "Balanced triad: delivery leadership, engineering literacy, and commercial execution."}
            </p>
          </div>

          <ProjectSkillsThreeColumns />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8. ADDITIONAL EXPERIENCE — SECONDARY & CALM (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="domain">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Бэкграунд" : "Background"}</span>
            <h2 className="section-main-heading">{isRu ? "Дополнительный опыт" : "Additional Experience"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Практический фундамент в смежных областях: погружение в Web3/FinTech и коммерческая веб-разработка."
                : "Practical foundation in adjacent areas: Web3/FinTech understanding and commercial web build."}
            </p>
          </div>

          <DomainAndTech />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          9. WHY ME — 4 PROOF PILLARS (#0B0B0C)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">Summary for Hiring Managers</span>
            <h2 className="section-main-heading">
              {isRu ? "Почему я принесу результат в вашу команду" : "Why I Deliver Immediate Impact"}
            </h2>
          </div>

          <div className="why-me-four-grid">
            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "Полный Ownership" : "End-to-End Ownership"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Отвечаю за конечный работающий продукт, а не за промежуточные отчёты. Автономно довожу задачи до релиза."
                  : "Accountable for the final shipped product. Highly autonomous, proactive, and resilient."}
              </p>
            </div>

            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "Техническая грамотность" : "Technical Literacy"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Сам пишу код, понимаю архитектуру API, БД и вебхуков. Разработчикам легко и прозрачно работать со мной."
                  : "Fluent with code and system architectures; engineering teams communicate with ease."}
              </p>
            </div>

            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "AI & Скорость" : "AI Velocity"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Ежедневно использую передовые LLM-инструменты для прототипирования, тестирования и автоматизации рутины."
                  : "Daily mastery of AI developer tools for faster prototyping, triage, and multi-fold velocity."}
              </p>
            </div>

            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "Спокойствие в кризисе" : "Calm Under Pressure"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Спортивная дисциплина: быстро снимаю блокеры, не паникую при непредвиденных сбоях и держу фокус на результате."
                  : "Sports discipline: resolving blockers rationally, maintaining cadence, and shipping on schedule."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          10. CONTACT — APPLE PRO STATEMENT & ACTIONS (#111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="contact">
        <div className="project-content-container">
          <ProjectContactApple />
        </div>
      </section>
    </div>
  );
}
