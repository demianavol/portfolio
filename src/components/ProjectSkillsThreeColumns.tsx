import { useRouter } from "../router";
import { FolderKanban, Cpu, Briefcase, Check } from "lucide-react";

export function ProjectSkillsThreeColumns() {
  const { language } = useRouter();
  const isRu = language === "ru";

  const columns = [
    {
      key: "project",
      icon: FolderKanban,
      title: isRu ? "PROJECT" : "PROJECT",
      subtitle: isRu ? "Управление поставкой & стейкхолдеры" : "Delivery & Stakeholders",
      skills: isRu
        ? [
            "Project Delivery & сквозной запуск",
            "Управление стейкхолдерами и зависимостями",
            "Декомпозиция требований и скоупа",
            "Управление рисками и снятие блокеров",
            "Спринты, бэклог и приоритизация",
          ]
        : [
            "Project Delivery & End-to-End Execution",
            "Stakeholder & Dependency Alignment",
            "Requirements & Scope Decomposition",
            "Risk Mitigation & Fast Unblocking",
            "Sprint Planning & Backlog Prioritization",
          ],
    },
    {
      key: "tech",
      icon: Cpu,
      title: isRu ? "TECH" : "TECH",
      subtitle: isRu ? "Инженерная база & Архитектура" : "Engineering & Architecture",
      skills: isRu
        ? [
            "REST API, Webhooks & Архитектура",
            "Git, GitHub & версионирование",
            "Реляционные базы данных & SQL",
            "Telegram Mini Apps & Bots",
            "AI-assisted dev & автоматизация (n8n)",
          ]
        : [
            "REST APIs, Webhooks & Architecture",
            "Git, GitHub & Version Control",
            "Relational Databases & SQL Modeling",
            "Telegram Mini Apps & Bots",
            "AI-Assisted Dev & Automations (n8n)",
          ],
    },
    {
      key: "business",
      icon: Briefcase,
      title: isRu ? "BUSINESS" : "BUSINESS",
      subtitle: isRu ? "Операции, Анализ & Переговоры" : "Operations & Procurement",
      skills: isRu
        ? [
            "Операционный менеджмент & E-commerce",
            "B2B-воронки и коммерческие процессы",
            "Оценка и контрактация подрядчиков (500+)",
            "Коммерческие переговоры и условия",
            "Юнит-экономика и защита роадмапа",
          ]
        : [
            "Operations Management & E-commerce",
            "B2B Funnels & Commercial Workflows",
            "Vendor Benchmarking & Contracts (500+)",
            "Commercial Negotiations & Margin Defense",
            "Unit Economics & Roadmap Defense",
          ],
    },
  ];

  return (
    <div className="project-skills-three-cols">
      {columns.map((col) => {
        const Icon = col.icon;
        return (
          <div key={col.key} className="project-skills-column-card">
            <div className="col-header">
              <div className="col-icon-wrap">
                <Icon size={18} />
              </div>
              <div>
                <h3 className="col-title">{col.title}</h3>
                <span className="col-subtitle">{col.subtitle}</span>
              </div>
            </div>

            <div className="col-divider" />

            <ul className="col-skills-list">
              {col.skills.map((skill, idx) => (
                <li key={idx} className="col-skill-item">
                  <Check size={14} className="skill-check-icon" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
