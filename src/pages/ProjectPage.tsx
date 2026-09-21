import { useState } from "react";
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
import {
  FileText,
  Send,
  ArrowDown,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function ProjectPage() {
  const { language } = useRouter();
  const isRu = language === "ru";
  const [showDrMixDetails, setShowDrMixDetails] = useState(false);

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
            {/* Left: Typography & One Dominant Narrative */}
            <div className="hero-narrative-col">
              <div className="hero-eyebrow-row">
                <span className="hero-eyebrow-pill">
                  <span className="hero-pulse-dot" />
                  <span>PROJECT MANAGER / IT PROJECT MANAGER</span>
                </span>
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
                  ? "Веду digital- и кросс-функциональные проекты от неопределённой задачи до работающего production-результата."
                  : "Leading digital and cross-functional initiatives from ambiguous goals to dependable production software."}
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
            </div>

            {/* Right: Calm Profile Visual with 3 Floating Proof Facts */}
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

                {/* 3 Floating Facts */}
                <div className="floating-fact-badge fact-exp">
                  <strong className="fact-val">3+</strong>
                  <span className="fact-lbl">{isRu ? "года опыта в IT & проектах" : "years relevant experience"}</span>
                </div>

                <div className="floating-fact-badge fact-users">
                  <strong className="fact-val">1600+</strong>
                  <span className="fact-lbl">{isRu ? "юзеров в своём продукте" : "users in own product"}</span>
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
          4. DR. MIX — STREAMLINED HIGH-IMPACT CASE (Edge-to-edge #111113)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="dr-mix">
        <div className="project-content-container">
          <div className="drmix-clean-layout">
            <div className="case-meta-header">
              <span className="case-eyebrow-pill">
                {isRu ? "Личная инженерная реализация" : "Solo Full-Stack Build"}
              </span>
              <span className="case-meta-pill">E-commerce • Live</span>
            </div>

            <div className="drmix-header-row">
              <div>
                <h2 className="clean-case-title">DR. MIX</h2>
                <p className="clean-case-tagline">
                  {isRu
                    ? "От идеи до первых реальных заказов примерно за 1 месяц."
                    : "From idea to first real orders in ~1 month."}
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

            {/* Level 1: 3 Proof Facts Directly Below Headline */}
            <div className="drmix-three-proofs">
              <div className="proof-box">
                <strong className="proof-val">~1 {isRu ? "месяц" : "month"}</strong>
                <span className="proof-lbl">{isRu ? "Сроки реализации" : "Velocity"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">Solo execution</strong>
                <span className="proof-lbl">{isRu ? "Без подрядчиков" : "Zero agency spend"}</span>
              </div>
              <div className="proof-box">
                <strong className="proof-val">{isRu ? "Реальные заказы" : "Real orders"}</strong>
                <span className="proof-lbl">{isRu ? "Боевая коммерция" : "Live production"}</span>
              </div>
            </div>

            {/* Large Screenshot / Browser Mockup */}
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

            {/* Integrations Structured Badges */}
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
                    ? (isRu ? "Скрыть технические детали" : "Hide technical details")
                    : (isRu ? "Посмотреть детали архитектуры" : "View architecture details")}
                </span>
                {showDrMixDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showDrMixDetails && (
                <div className="drmix-expanded-text animate-fade-in">
                  <p>
                    {isRu
                      ? "Спроектировал каталог и корзину, разработал Node.js-бэкенд, связал эквайринг ЮKassa с проверкой криптографической подписи вебхуков, интегрировал расчёт тарифов СДЭК и реализовал мгновенные Telegram-оповещения о заказах."
                      : "Designed catalog & checkout, developed Node.js backend, integrated YooKassa payments with webhook signatures, cached CDEK logistics calculations, and set up instant order dispatches to Telegram."}
                  </p>
                </div>
              )}
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
                {isRu ? "Кросс-функциональные проекты" : "Cross-Functional Projects"}
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

            {/* Compact Stakeholder Map */}
            <div className="rezerv-stakeholder-section">
              <StakeholderMap />
            </div>

            {/* 4 Mini-Cases (Clean & Compact) */}
            <div className="rezerv-mini-cases-row">
              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "Логистика" : "Warehousing"}</span>
                <strong className="cell-title">{isRu ? "500+ фулфилментов" : "500+ Warehouses"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "База подрядчиков, методология оценки тарифов и шортлист за 1–2 дня."
                    : "Benchmarked 500+ partners; established rapid 1–2 day shortlists."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "B2B продажи" : "B2B Channel"}</span>
                <strong className="cell-title">{isRu ? "B2B с нуля" : "B2B From Zero"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Упаковка оптового предложения, интерактивный прайс, первые продажи."
                    : "Structured wholesale offer, catalog, initial commercial sales."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "Закупки" : "Sourcing"}</span>
                <strong className="cell-title">{isRu ? "Поиск фабрики (2x+ маржа)" : "Supplier Sourcing"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Прямой производитель с себестоимостью <50% с учётом логистики."
                    : "Sourced direct manufacturer enabling 2x+ gross margin after freight."}
                </p>
              </div>

              <div className="mini-case-cell">
                <span className="cell-tag">{isRu ? "Блокеры" : "Unblocking"}</span>
                <strong className="cell-title">{isRu ? "Таможенный кейс ТН ВЭД" : "Customs Clearance"}</strong>
                <p className="cell-desc">
                  {isRu
                    ? "Выверил документацию, снял спор брокера и таможни день-в-день без штрафов."
                    : "Reconciled HS classifications and released cargo same-day without fees."}
                </p>
              </div>
            </div>

            {/* Platform Showcase & CTA (Strict Normal Flow, Zero Overlap) */}
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
