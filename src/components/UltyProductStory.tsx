import { useState } from "react";
import { useRouter } from "../router";
import { EcosystemShowcase } from "./EcosystemShowcase";
import { DesktopBrowserMockup } from "./DesktopBrowserMockup";
import { ChevronDown, ChevronUp } from "lucide-react";

export function UltyProductStory() {
  const { language } = useRouter();
  const isRu = language === "ru";
  const [showEcosystemDetails, setShowEcosystemDetails] = useState(false);

  const journeySteps = [
    { label: isRu ? "Идея" : "Idea" },
    { label: "MVP" },
    { label: "Beta" },
    { label: "Production" },
    { label: isRu ? "Монетизация" : "Monetization" },
    { label: isRu ? "Редизайн" : "Redesign" },
    { label: isRu ? "Рост" : "Growth" },
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

  return (
    <div className="ulty-story-flow">
      {/* SUB-SECTION A: INTRO + SCREENSHOT + 3 PROOFS */}
      <div className="ulty-story-intro">
        <div className="ulty-intro-header">
          <div className="ulty-eyebrow-row">
            <span className="itpark-credibility-pill">
              <span className="itpark-dot" />
              <span>{isRu ? "Официальный резидент IT Park" : "Selected IT Park Resident"}</span>
            </span>
            <span className="section-eyebrow-text">
              {isRu ? "Собственный B2C-продукт" : "Proprietary B2C Product"}
            </span>
          </div>
          <h2 className="ulty-main-heading">UltyMyLife</h2>
          <p className="ulty-intro-tagline">
            {isRu
              ? "B2C-экосистема для ежедневной дисциплины: 8 модулей, Telegram Mini App и веб-платформа под ключ."
              : "B2C habit & discipline ecosystem: 8 modules across Telegram Mini App and desktop web."}
          </p>
        </div>

        {/* Large Product Screenshot Mockup */}
        <div className="ulty-large-screenshot">
          <DesktopBrowserMockup
            landingUrl="https://demianavol.github.io/ultymylife-landing/"
            siteDomain="ultymylife.com"
            buttonLabel={isRu ? "Открыть UltyMyLife ↗" : "Open UltyMyLife ↗"}
            imageSrc="/previews/ultymylife-preview.png"
            imageAlt="UltyMyLife Live Production Platform"
            directLinkLabel={isRu ? "Прямая ссылка:" : "Direct link:"}
          />
        </div>

        {/* 3 Proof Points (Clean Typography, Zero Heavy Chrome) */}
        <div className="ulty-three-proofs">
          <div className="proof-point">
            <strong className="proof-val">1600+</strong>
            <span className="proof-lbl aligned-card-sublabel">{isRu ? "Пользователей в продукте" : "Registered users"}</span>
          </div>
          <div className="proof-point">
            <strong className="proof-val">~1 год</strong>
            <span className="proof-lbl aligned-card-sublabel">{isRu ? "Непрерывной разработки" : "Continuous development"}</span>
          </div>
          <div className="proof-point">
            <strong className="proof-val">8 модулей</strong>
            <span className="proof-lbl aligned-card-sublabel">{isRu ? "Боевой production-релиз" : "Live production release"}</span>
          </div>
        </div>
      </div>

      {/* WHAT I OWNED (3-Column Typography Matrix) */}
      <div className="ulty-story-ownership">
        <div className="sub-section-title-wrap">
          <h3 className="sub-section-title">{isRu ? "Зона ответственности" : "What I Owned"}</h3>
        </div>

        <div className="ownership-typography-matrix">
          <div className="ownership-col">
            <h4 className="col-heading">{isRu ? "Strategy" : "Strategy"}</h4>
            <ul className="clean-typography-list">
              <li>{isRu ? "Продуктовое видение" : "Product vision"}</li>
              <li>{isRu ? "Квартальные и спринт-роадмапы" : "Quarterly & sprint roadmaps"}</li>
              <li>{isRu ? "Приоритизация бэклога" : "Backlog prioritization"}</li>
            </ul>
          </div>

          <div className="ownership-col">
            <h4 className="col-heading">{isRu ? "Delivery" : "Delivery"}</h4>
            <ul className="clean-typography-list">
              <li>{isRu ? "Координация разработки" : "Developer coordination"}</li>
              <li>{isRu ? "Снятие технических блокеров" : "Blocker removal"}</li>
              <li>{isRu ? "Приёмочное QA и релизы" : "Acceptance QA & deploys"}</li>
            </ul>
          </div>

          <div className="ownership-col">
            <h4 className="col-heading">{isRu ? "Growth" : "Growth"}</h4>
            <ul className="clean-typography-list">
              <li>{isRu ? "Аналитика воронок и ретеншн" : "Funnels & retention"}</li>
              <li>{isRu ? "Каналы привлечения" : "Acquisition channels"}</li>
              <li>{isRu ? "Платежи (ЮKassa, Stars, TON)" : "Monetization gateways"}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* JOURNEY TIMELINE */}
      <div className="ulty-story-journey">
        <div className="sub-section-title-wrap">
          <h3 className="sub-section-title">{isRu ? "Эволюция продукта" : "Product Journey"}</h3>
        </div>

        <div className="journey-flow-track">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="journey-step-pill">
              <span className="step-num">0{idx + 1}</span>
              <span className="step-name">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT ECOSYSTEM */}
      <div className="ulty-story-ecosystem">
        <div className="ecosystem-header-bar">
          <div>
            <div className="sub-section-title-wrap">
              <h3 className="sub-section-title">{isRu ? "Экосистема продукта" : "Product Ecosystem"}</h3>
            </div>
            <p className="ecosystem-intro-sub">
              {isRu
                ? "8 взаимосвязанных модулей Telegram Mini App под единой дизайн-системой."
                : "8 interconnected Telegram Mini App modules built under a single design system."}
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

        {/* Quiet Modules Strip */}
        <div className="modules-chips-row">
          {modulesList.map((m) => (
            <div key={m.id} className="module-chip-item">
              <span className="module-chip-dot" />
              <span>{m.name}</span>
            </div>
          ))}
        </div>

        {/* Collapsible Full Interactive Showcase with 100% Uncropped Screenshots */}
        {showEcosystemDetails && (
          <div className="ecosystem-accordion-body animate-fade-in mt-4">
            <EcosystemShowcase />
          </div>
        )}
      </div>
    </div>
  );
}
