import { useRouter } from "../router";

export function BusinessProcessLine() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const steps = [
    {
      num: "01",
      title: isRu ? "Вводная задача" : "Task",
      sub: isRu ? "Неопределённость & скоуп" : "Ambiguity & scope",
    },
    {
      num: "02",
      title: isRu ? "Глубокий ресерч" : "Research",
      sub: isRu ? "Рынок, цены, подрядчики" : "Market, costs, vendors",
    },
    {
      num: "03",
      title: isRu ? "План и решение" : "Decision",
      sub: isRu ? "Оценка рисков & оффер" : "Risk assessment & plan",
    },
    {
      num: "04",
      title: isRu ? "Координация" : "Coordination",
      sub: isRu ? "Управление сторонами" : "Stakeholder alignment",
    },
    {
      num: "05",
      title: isRu ? "Результат" : "Result",
      sub: isRu ? "Измеримый бизнес-итог" : "Measurable outcome",
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
