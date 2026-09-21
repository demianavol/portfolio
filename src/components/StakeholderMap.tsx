import { useState } from "react";
import { useRouter } from "../router";
import { ChevronDown, ChevronUp, ArrowRight, ArrowLeft } from "lucide-react";

export function StakeholderMap() {
  const { language } = useRouter();
  const isRu = language === "ru";
  const [showDetails, setShowDetails] = useState(false);

  const leftStakeholders = [
    { id: "suppliers", label: isRu ? "Фабрики (Китай)" : "Suppliers (CN)" },
    { id: "brokers", label: isRu ? "Таможенные брокеры" : "Customs Brokers" },
    { id: "certification", label: isRu ? "Сертификация" : "Certification Bodies" },
    { id: "accounting", label: isRu ? "Валютный контроль" : "FX & Bank Compliance" },
  ];

  const rightStakeholders = [
    { id: "customs", label: isRu ? "Таможня (ФТС)" : "Customs Authorities" },
    { id: "carriers", label: isRu ? "Транспорт & Логистика" : "Carriers & Freight" },
    { id: "warehouse", label: isRu ? "Склады приёмки" : "Warehouse Hubs" },
  ];

  return (
    <div className="stakeholder-map-wrapper">
      {/* Header Eyebrow & Title */}
      <div className="stakeholder-header-meta">
        <span className="stakeholder-eyebrow-badge">CROSS-FUNCTIONAL STAKEHOLDER MAP</span>
        <h3 className="stakeholder-map-title">
          {isRu ? "7 сторон под сквозным управлением оператора" : "7 Stakeholders Under End-to-End Coordination"}
        </h3>
      </div>

      <div className="stakeholder-diagram-compact">
        {/* Left Stakeholders */}
        <div className="stakeholder-col-compact stakeholder-col-left">
          {leftStakeholders.map((s) => (
            <div key={s.id} className="stakeholder-node-compact">
              <span className="node-title">{s.label}</span>
              <ArrowRight size={13} className="node-dir-arrow desktop-only" />
            </div>
          ))}
        </div>

        {/* Center PM Hub */}
        <div className="stakeholder-center-hub-compact">
          <div className="hub-box">
            <span className="hub-badge">COORDINATION HUB</span>
            <strong className="hub-name">Demian Avolstiyniy</strong>
            <span className="hub-author">
              {isRu ? "Project & Business Operations" : "Project & Operations Operator"}
            </span>
            <span className="hub-sublabel">
              {isRu ? "Сквозная синхронизация & устранение блокеров" : "Single point of alignment & unblocking"}
            </span>
          </div>
        </div>

        {/* Right Stakeholders */}
        <div className="stakeholder-col-compact stakeholder-col-right">
          {rightStakeholders.map((s) => (
            <div key={s.id} className="stakeholder-node-compact">
              <ArrowLeft size={13} className="node-dir-arrow desktop-only" />
              <span className="node-title">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Single Calm One-Liner Summary */}
      <p className="stakeholder-summary-line">
        {isRu
          ? "Сквозная координация зависимостей, графиков, валютных платежей и блокеров между всеми 7 сторонами без простоев."
          : "End-to-end coordination of dependencies, schedules, FX payments, and blockers across all 7 stakeholders without downtime."}
      </p>

      {/* Expandable Details Toggle */}
      <div className="stakeholder-expand-wrap">
        <button
          type="button"
          className="text-ghost-toggle-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>
            {showDetails
              ? (isRu ? "Скрыть детали ответственности" : "Hide stakeholder breakdown")
              : (isRu ? "Подробнее о зоне ответственности" : "View stakeholder breakdown")}
          </span>
          {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showDetails && (
          <div className="stakeholder-expanded-content animate-fade-in">
            <p>
              {isRu
                ? "Вёл постоянную синхронизацию 7 сторон: выверял технические спецификации с фабриками, устранял разногласия между брокером и таможней по кодам ТН ВЭД (груз выпущен день-в-день без штрафов за простой), контролировал график движения контейнеров и приёмку 6000+ единиц товара на склады без расхождений."
                : "Continuous alignment across 7 stakeholders: reconciled specs with factories, resolved acute HS-code disputes between brokers and customs officers (same-day release with zero demurrage), and supervised multimodal transit and intake of 6,000+ units with zero inventory loss."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
