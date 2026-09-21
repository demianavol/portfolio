import { Link, useRouter } from "../router";
import { CORE_METRICS, CV_LINKS, CONTACT_INFO } from "../data/portfolioData";
import { ProjectProofMetrics } from "../components/ProjectProofMetrics";
import { ProjectContactApple } from "../components/ProjectContactApple";
import {
  ArrowRight,
  ArrowDown,
  ExternalLink,
  ShieldCheck,
  Send,
  FileText,
} from "lucide-react";

export function HomePage() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const directions = [
    {
      num: "01",
      id: "project",
      title: isRu ? "Project Manager" : "Project Manager",
      role: isRu ? "IT Project Manager / Technical PM" : "IT Project Manager / Technical PM",
      desc: isRu
        ? "Сквозное управление digital-проектами: координация разработки, контроль дедлайнов, устранение блокеров и надёжные релизы в production."
        : "End-to-end delivery of digital initiatives: engineering coordination, deadline control, blocker resolution, and zero-downtime releases.",
      chips: isRu
        ? ["Delivery Management", "Stakeholder Alignment", "Декомпозиция скоупа", "Technical Literacy"]
        : ["Delivery Management", "Stakeholder Alignment", "Scope Breakdown", "Technical Literacy"],
      path: "/project",
      cta: isRu ? "Открыть Project Portfolio →" : "Open Project Portfolio →",
      isPrimary: true,
    },
    {
      num: "02",
      id: "product",
      title: isRu ? "Product Manager" : "Product Manager",
      role: isRu ? "Product Owner / Digital Products" : "Product Owner / Digital Products",
      desc: isRu
        ? "Развитие продуктов через пользовательские сценарии, данные, приоритизацию и быстрые итерации от идеи до монетизации."
        : "Product evolution driven by user journeys, analytics, prioritization, and rapid iterations from concept to monetization.",
      chips: isRu
        ? ["Product Analytics", "User Flows & JTBD", "RICE Prioritization", "Retention & Growth"]
        : ["Product Analytics", "User Flows & JTBD", "RICE Prioritization", "Retention & Growth"],
      path: "/product",
      cta: isRu ? "Открыть Product Portfolio →" : "Open Product Portfolio →",
      isPrimary: false,
    },
    {
      num: "03",
      id: "business",
      title: isRu ? "Business Operations" : "Business Operations",
      role: isRu ? "Business Assistant / Founder's Associate" : "Business Assistant / Founder's Associate",
      desc: isRu
        ? "Работа напрямую с собственником бизнеса: неструктурированные задачи, международная логистика, B2B-воронка с нуля и AI-автоматизация."
        : "Direct partnership with business owners: resolving ambiguity, $100K+ supply chain, B2B wholesale from scratch, and AI automation.",
      chips: isRu
        ? ["High Ownership", "B2B Sales from Zero", "Vendor Negotiations", "AI & Automations"]
        : ["High Ownership", "B2B Sales from Zero", "Vendor Negotiations", "AI & Automations"],
      path: "/business",
      cta: isRu ? "Открыть Business Portfolio →" : "Open Business Portfolio →",
      isPrimary: false,
    },
  ];

  const teasers = [
    {
      badge: isRu ? "Собственный продукт • 1600+ users" : "Proprietary Product • 1600+ users",
      title: "UltyMyLife",
      tagline: isRu
        ? "Мультимодульная Telegram-экосистема из 8 разделов, запущенная с нуля и непрерывно развивавшаяся около года."
        : "8-module Telegram Native ecosystem built from scratch and continuously evolved for ~1 year.",
      proof: isRu ? "1600+ пользователей · Резидент IT Park" : "1,600+ users · IT Park Resident",
      linkPath: "/product",
      linkText: isRu ? "Изучить продуктовый кейс →" : "Explore Product Case →",
    },
    {
      badge: isRu ? "E-commerce • Solo Build" : "E-commerce • Solo Build",
      title: "Dr. Mix",
      tagline: isRu
        ? "Полноценный интернет-магазин с каталогом, эквайрингом ЮKassa, доставкой СДЭК и Telegram-оповещениями за ~1 месяц."
        : "Production e-commerce storefront with YooKassa checkout, CDEK logistics, and Telegram alerts built in ~1 month.",
      proof: isRu ? "От идеи до первых заказов за ~1 мес" : "Idea to real orders in ~1 mo",
      linkPath: "/project#dr-mix",
      linkText: isRu ? "Смотреть кейс запуска →" : "View Launch Case →",
    },
    {
      badge: isRu ? "Международные поставки $100K+" : "International Supply $100K+",
      title: "REZERV",
      tagline: isRu
        ? "Запуск платформы rezerv.biz и сквозная координация импорта из Китая с синхронизацией 7+ сторон без сбоев."
        : "Launch of rezerv.biz platform and multi-party coordination of $100K+ supply across 7+ stakeholders.",
      proof: isRu ? "6000+ единиц · 7 групп стейкхолдеров" : "6,000+ units · 7 stakeholder groups",
      linkPath: "/business#rezerv",
      linkText: isRu ? "Смотреть бизнес-кейс →" : "View Business Case →",
    },
  ];

  return (
    <div className="home-page-root">
      {/* ------------------------------------------------------------------
          1. HERO SECTION (Edge-to-edge #0B0B0C, Apple Pro Dark rhythm)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="hero">
        <div className="project-content-container">
          <div className="hero-apple-grid">
            {/* Left: Headline & Concise Narrative */}
            <div className="hero-narrative-col">
              <div className="hero-eyebrow-row">
                <span className="hero-eyebrow-pill">
                  <span className="hero-pulse-dot" />
                  <span>PROJECT · PRODUCT · BUSINESS OPERATIONS</span>
                </span>
                <span className="hero-location-pill">
                  {isRu ? "Удалённо · Готов к релокации" : "Remote · Open to relocation"}
                </span>
              </div>

              <h1 className="hero-apple-title">
                <span className="hero-name-line">Demian Avolstiyniy</span>
                <span className="hero-role-line">
                  {isRu
                    ? "Project Manager • Product Manager • Operations"
                    : "Project Manager • Product Manager • Operations"}
                </span>
              </h1>

              <p className="hero-apple-statement">
                {isRu
                  ? "Запускаю digital- и бизнес-проекты от идеи до работающего результата — на стыке управления, продукта, технологий, AI и operations."
                  : "Launching digital and business initiatives from ambiguous concepts to dependable production results — at the intersection of delivery, product, technical engineering, AI, and operations."}
              </p>

              {/* Action Buttons: 3 Tracks */}
              <div className="hero-actions-row">
                <Link to="/project" className="apple-btn apple-btn-primary">
                  <span>{isRu ? "Project Portfolio" : "Project Portfolio"}</span>
                  <ArrowRight size={15} />
                </Link>

                <Link to="/product" className="apple-btn apple-btn-secondary">
                  <span>{isRu ? "Product Portfolio" : "Product Portfolio"}</span>
                  <ArrowRight size={15} />
                </Link>

                <Link to="/business" className="apple-btn apple-btn-ghost">
                  <span>{isRu ? "Business Portfolio" : "Business Portfolio"}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: Calm Profile Visual with 3 Floating Proof Facts */}
            <div className="hero-visual-col">
              <div className="hero-profile-surface">
                <div className="profile-img-wrap">
                  <img
                    src="/profile-photo.png"
                    alt="Demian Avolstiyniy"
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
                  <strong className="fact-val">{CORE_METRICS.ultyUsers}</strong>
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
          2. KEY PROOF METRICS (Edge-to-edge #111113, Minimalist Rail)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt proof-metrics-edge-wrap">
        <div className="project-content-container">
          <ProjectProofMetrics />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. THREE CAREER TRACKS (Core Gateway 01 / 02 / 03)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="tracks">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Направления работы" : "Specialized Portfolios"}</span>
            <h2 className="section-main-heading">
              {isRu ? "Выберите профиль под вашу задачу" : "Select the Role for Your Team"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? "Каждая страница раскрывает проверенный опыт, артефакты и методологию под конкретный профиль."
                : "Each portfolio page presents verifiable case studies, metrics, and operating methodology tailored to the role."}
            </p>
          </div>

          <div className="home-tracks-three-grid">
            {directions.map((dir) => (
              <div
                key={dir.id}
                className={`track-tier-card ${dir.isPrimary ? "primary-track" : ""}`}
              >
                <div>
                  <div className="track-tier-top">
                    <span className="track-tier-num">{dir.num}</span>
                    {dir.isPrimary && (
                      <span className="track-priority-pill">
                        {isRu ? "Ключевой фокус" : "Primary Focus"}
                      </span>
                    )}
                  </div>

                  <h3 className="track-tier-name">{dir.title}</h3>
                  <div className="track-tier-role">{dir.role}</div>
                  <p className="track-tier-desc">{dir.desc}</p>

                  <div className="track-tier-chips">
                    {dir.chips.map((chip, cIdx) => (
                      <span key={cIdx} className="track-tier-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={dir.path}
                  className={`apple-btn track-tier-btn ${
                    dir.isPrimary ? "apple-btn-primary" : "apple-btn-secondary"
                  }`}
                >
                  <span>{dir.cta}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. SELECTED WORK TEASERS (Proof Before Prose)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="cases">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Реальные кейсы" : "Selected Work"}</span>
            <h2 className="section-main-heading">
              {isRu ? "Проекты в production" : "Production Work"}
            </h2>
            <p className="section-main-sub">
              {isRu
                ? "Не концепты в Figma, а работающие системы с реальными пользователями, заказами и логистикой."
                : "Live production environments with users, orders, and cross-functional operations."}
            </p>
          </div>

          <div className="home-selected-teasers-grid">
            {teasers.map((t, idx) => (
              <div key={idx} className="teaser-case-card">
                <div>
                  <div className="teaser-header">
                    <span className="teaser-badge">{t.badge}</span>
                  </div>
                  <h3 className="teaser-title">{t.title}</h3>
                  <p className="teaser-tagline">{t.tagline}</p>
                </div>

                <div>
                  <div className="teaser-proof-pill">{t.proof}</div>
                  <Link to={t.linkPath} className="teaser-action-link">
                    <span>{t.linkText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. ABOUT (Compact Mindset Pillars)
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-main" id="about">
        <div className="project-content-container">
          <div className="section-narrative-header">
            <span className="section-eyebrow-text">{isRu ? "Принципы" : "Operating Mindset"}</span>
            <h2 className="section-main-heading">{isRu ? "Как я работаю" : "How I Operate"}</h2>
            <p className="section-main-sub">
              {isRu
                ? "Высокий ownership, инженерная грамотность и комфорт в условиях неопределенности."
                : "High ownership, engineering literacy, and comfort navigating ambiguous goals."}
            </p>
          </div>

          <div className="why-me-four-grid">
            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "Полный Ownership" : "End-to-End Ownership"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Отвечаю за конечный работающий результат целиком, а не за промежуточные отчёты."
                  : "Accountable for the final shipped outcome, not just checklists or progress reports."}
              </p>
            </div>

            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "Технический майндсет" : "Technical Literacy"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Сам пишу код, понимаю базы данных, API и вебхуки. Быстро нахожу общий язык с инженерами."
                  : "Fluent with code, databases, APIs, and webhooks; engineers communicate with ease."}
              </p>
            </div>

            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "AI-First скорость" : "AI-First Velocity"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Ежедневно использую передовые LLM и AI-инструменты для сокращения рутины и ускорения релизов."
                  : "Daily leverage of modern AI dev tools for rapid prototyping and multi-fold velocity."}
              </p>
            </div>

            <div className="why-me-item">
              <strong className="why-me-val">{isRu ? "Работа в неопределенности" : "Thrive in Ambiguity"}</strong>
              <p className="why-me-sub">
                {isRu
                  ? "Самостоятельно нахожу решения без пошаговых инструкций. Спортивная дисциплина, English B2."
                  : "Self-directed problem solver requiring zero hand-holding under vague requirements. English B2."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. FINAL CONTACT & CV SELECTION
          ------------------------------------------------------------------ */}
      <section className="project-edge-section section-bg-alt" id="contact">
        <div className="project-content-container">
          <ProjectContactApple
            eyebrow={isRu ? "Связь и сотрудничество" : "Get In Touch"}
            statement={
              isRu
                ? "Готовы обсудить проект или ключевую роль?"
                : "Looking for a key addition to your team?"
            }
            sub={
              isRu
                ? "Выберите подходящий профиль, напишите в Telegram или скачайте резюме."
                : "Select the role that fits, message me on Telegram, or download a specialized CV."
            }
            cvHref={isRu ? CV_LINKS.projectRu : CV_LINKS.projectEn}
            cvLabel={isRu ? "Project CV (PDF)" : "Project CV (PDF)"}
            extraActions={
              <>
                <a
                  href={isRu ? CV_LINKS.productRu : CV_LINKS.projectEn}
                  download
                  className="apple-cta-secondary"
                  title="Product Manager CV"
                >
                  <FileText size={16} />
                  <span>{isRu ? "Product CV (PDF)" : "Product CV (PDF)"}</span>
                </a>
                <a
                  href={isRu ? CV_LINKS.businessRu : CV_LINKS.projectEn}
                  download
                  className="apple-cta-secondary"
                  title="Business Assistant CV"
                >
                  <FileText size={16} />
                  <span>{isRu ? "Business CV (PDF)" : "Business CV (PDF)"}</span>
                </a>
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}
