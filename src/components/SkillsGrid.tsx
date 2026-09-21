import { useRouter } from "../router";
import { portfolioData } from "../data/portfolioData";
import {
  FolderKanban,
  Lightbulb,
  Cpu,
  Briefcase,
  Layers,
  type LucideIcon,
} from "lucide-react";

const skillCategoryIcons: Record<string, LucideIcon> = {
  project: FolderKanban,
  product: Lightbulb,
  tech: Cpu,
  business: Briefcase,
  domain: Layers,
};

export function SkillsGrid() {
  const { language } = useRouter();
  const skills = portfolioData[language].skills;

  const categories = [
    { key: "project", data: skills.project },
    { key: "product", data: skills.product },
    { key: "tech", data: skills.tech },
    { key: "business", data: skills.business },
    { key: "domain", data: skills.domain },
  ];

  return (
    <div className="skills-categorized-grid">
      {categories.map(({ key, data }) => {
        const Icon = skillCategoryIcons[key] || FolderKanban;

        return (
          <div className="skill-category-card" key={key}>
            <div className="category-header">
              <div className="category-icon-box">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="category-title">{data.title}</h3>
                <span className="category-desc">{data.desc}</span>
              </div>
            </div>

            <div className="category-skills-tags">
              {data.items.map((item, idx) => (
                <span className="skill-pill" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
