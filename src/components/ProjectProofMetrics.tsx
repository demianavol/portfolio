import { useRouter } from "../router";
import { CORE_METRICS } from "../data/portfolioData";

export function ProjectProofMetrics() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const metrics = [
    {
      value: CORE_METRICS.ultyUsers,
      label: isRu ? "Пользователей в своём продукте" : "Users in own product",
      detail: "UltyMyLife Ecosystem",
    },
    {
      value: isRu ? CORE_METRICS.experienceYearsRu : CORE_METRICS.experienceYears,
      label: isRu ? "Опыта в проектах и IT" : "Years relevant experience",
      detail: isRu ? "Digital & операции" : "Digital & operations",
    },
    {
      value: CORE_METRICS.coordinatedBudget,
      label: isRu ? "Бюджет поставок и проектов" : "Projects coordinated",
      detail: isRu ? "Сквозной импорт" : "International logistics",
    },
    {
      value: CORE_METRICS.supplyUnits,
      label: isRu ? "Единиц в цепочке поставок" : "Units in international supply",
      detail: isRu ? "Синхронизация 7+ сторон" : "7+ stakeholder groups",
    },
    {
      value: CORE_METRICS.vendorsAnalyzed,
      label: isRu ? "Подрядчиков и фабрик в базе" : "Vendors & factories analyzed",
      detail: isRu ? "Шортлист за 1–2 дня" : "Shortlisted in 1–2 days",
    },
    {
      value: "IT Park",
      label: isRu ? "Статус резидента" : "Official Incubator Resident",
      detail: isRu ? "Защита бизнес-модели" : "Defended business case",
    },
  ];

  return (
    <div className="project-proof-metrics-container">
      <div className="proof-metrics-grid-minimal">
        {metrics.map((item, idx) => (
          <div key={idx} className="proof-metric-item">
            <span className="proof-metric-val">{item.value}</span>
            <strong className="proof-metric-lbl">{item.label}</strong>
            <span className="proof-metric-det">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
