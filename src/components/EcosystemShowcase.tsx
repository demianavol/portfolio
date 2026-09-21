import { useState } from "react";
import { useRouter } from "../router";
import { portfolioData } from "../data/portfolioData";
import {
  CheckSquare,
  Repeat,
  Dumbbell,
  Moon,
  Wind,
  Brain,
  Sparkles,
  Users,
  CheckCircle2,
  type LucideIcon,
  ExternalLink,
} from "lucide-react";

const moduleIcons: Record<string, LucideIcon> = {
  tasks: CheckSquare,
  habits: Repeat,
  workouts: Dumbbell,
  sleep: Moon,
  breathing: Wind,
  mind: Brain,
  ai: Sparkles,
  profile: Users,
};

const moduleScreenshots: Record<string, string> = {
  tasks: "/product/tasks.jpg",
  habits: "/product/habits.jpg",
  workouts: "/product/training.jpg",
  sleep: "/product/sleep.jpg",
  breathing: "/product/recovery.jpg",
  mind: "/product/mental.jpg",
  ai: "/product/ai.jpg",
  profile: "/product/home.jpg",
};

export function EcosystemShowcase() {
  const { language } = useRouter();
  const modules = portfolioData[language].ecosystem;
  const [selectedId, setSelectedId] = useState<string>(modules[0].id);

  const selectedModule = modules.find((m) => m.id === selectedId) || modules[0];
  const SelectedIcon = moduleIcons[selectedModule.id] || Sparkles;
  const currentScreenshot = moduleScreenshots[selectedModule.id] || "/product/home.jpg";

  return (
    <div className="ecosystem-container">
      {/* 8 Module Selector Tabs */}
      <div className="ecosystem-nav-list" role="tablist" aria-label="Ecosystem Modules">
        {modules.map((mod) => {
          const Icon = moduleIcons[mod.id] || Sparkles;
          const isSelected = mod.id === selectedId;

          return (
            <button
              key={mod.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`ecosystem-tab-btn ${isSelected ? "active" : ""}`}
              onClick={() => setSelectedId(mod.id)}
            >
              <div className="tab-icon-wrap">
                <Icon size={18} />
              </div>
              <div className="tab-text">
                <span className="tab-title">{mod.title}</span>
                <span className="tab-tag">{mod.tag}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel with Real Screenshot */}
      <div className="ecosystem-detail-card" role="tabpanel">
        <div className="ecosystem-detail-grid">
          {/* Features Column */}
          <div className="detail-info-col">
            <div className="detail-header">
              <div className="detail-badge-row">
                <span className="module-tag-badge">{selectedModule.tag}</span>
                <span className="module-status-badge">Telegram Native UI</span>
              </div>
              <div className="detail-title-wrap">
                <div className="detail-icon-circle">
                  <SelectedIcon size={24} />
                </div>
                <div>
                  <h3 className="detail-title">{selectedModule.title}</h3>
                  <p className="detail-summary">{selectedModule.summary}</p>
                </div>
              </div>
            </div>

            <div className="detail-divider" />

            <div className="detail-features-grid">
              {selectedModule.features.map((feat, idx) => (
                <div className="feature-item" key={idx}>
                  <CheckCircle2 size={16} className="feature-check" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="module-cta-wrap mt-4">
              <a
                href="https://demianavol.github.io/ultymylife-landing/"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary compact-btn module-live-link"
              >
                <span>{language === "ru" ? "Смотреть модуль на сайте" : "View module live"}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Screenshot Column */}
          <div className="detail-screenshot-col">
            <div className="module-screenshot-frame">
              <img
                src={currentScreenshot}
                alt={`${selectedModule.title} — Real App Screenshot`}
                className="module-screenshot-img"
                loading="lazy"
                decoding="async"
              />
              <div className="screenshot-caption">
                <span>{selectedModule.title}</span>
                <small>
                  {language === "ru" ? "Реальный экран из UltyMyLife" : "Production UI from UltyMyLife"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
