import { useRouter } from "../router";

export function ProductProcessLine() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const steps = [
    {
      num: "01",
      title: isRu ? "Наблюдение" : "Observe",
      sub: isRu ? "User flows & паттерны" : "User flows & patterns",
    },
    {
      num: "02",
      title: isRu ? "Замер данных" : "Measure",
      sub: isRu ? "Воронки и когорты" : "Funnels & cohorts",
    },
    {
      num: "03",
      title: isRu ? "Поиск трения" : "Find Friction",
      sub: isRu ? "Точки оттока & боли" : "Drop-offs & churn",
    },
    {
      num: "04",
      title: isRu ? "Приоритизация" : "Prioritize",
      sub: isRu ? "RICE / Impact vs Effort" : "RICE / Impact vs Effort",
    },
    {
      num: "05",
      title: isRu ? "Релиз фичи" : "Build & Release",
      sub: isRu ? "Быстрая доставка в прод" : "Fast ship to production",
    },
    {
      num: "06",
      title: isRu ? "Повторный замер" : "Measure Again",
      sub: isRu ? "Валидация гипотезы" : "Validate hypothesis",
    },
  ];

  return (
    <div className="apple-process-flow">
      <div className="process-flow-track">
        {steps.map((step, idx) => (
          <div key={idx} className="process-flow-step">
            <div className="flow-step-connector">
              <span className="flow-step-num">{step.num}</span>
              {idx < steps.length - 1 && <span className="flow-step-line" aria-hidden="true" />}
            </div>
            <div className="flow-step-content">
              <strong className="flow-step-title">{step.title}</strong>
              <span className="flow-step-sub">{step.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
