import { useRouter } from "../router";

export function ProjectProcessLine() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const steps = [
    {
      num: "01",
      title: isRu ? "Понять задачу" : "Understand",
      sub: isRu ? "Цели и ограничения" : "Goal & constraints",
    },
    {
      num: "02",
      title: isRu ? "Структурировать" : "Structure",
      sub: isRu ? "Скоуп и зависимости" : "Scope & dependencies",
    },
    {
      num: "03",
      title: isRu ? "Расставить приоритеты" : "Prioritize",
      sub: isRu ? "Ценность и срочность" : "Impact & urgency",
    },
    {
      num: "04",
      title: isRu ? "Организовать работу" : "Execute",
      sub: isRu ? "Команда и деливери" : "People & delivery",
    },
    {
      num: "05",
      title: isRu ? "Снять блокеры" : "Unblock",
      sub: isRu ? "Риски и коммуникация" : "Risks & communication",
    },
    {
      num: "06",
      title: isRu ? "Довести до результата" : "Deliver",
      sub: isRu ? "Тесты и приёмка" : "Test & delivery",
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
