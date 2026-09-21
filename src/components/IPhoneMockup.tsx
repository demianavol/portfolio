import { useState } from "react";
import { ExternalLink, Sparkles, Smartphone } from "lucide-react";

interface IPhoneMockupProps {
  landingUrl: string;
  buttonLabel: string;
}

export function IPhoneMockup({ landingUrl, buttonLabel }: IPhoneMockupProps) {
  const [activeScreen, setActiveScreen] = useState<"ulty" | "command">("ulty");

  const screens = {
    ulty: {
      image: "/previews/ultymylife-preview.png",
      title: "UltyMyLife App UI",
      desc: "Telegram Native Ecosystem",
    },
    command: {
      image: "/hero-command-center.png",
      title: "Command Center",
      desc: "Architecture & Data Flows",
    },
  };

  return (
    <div className="iphone-showcase-container">
      {/* Screen selector tabs */}
      <div className="iphone-screen-tabs">
        <button
          type="button"
          className={`iphone-tab-pill ${activeScreen === "ulty" ? "active" : ""}`}
          onClick={() => setActiveScreen("ulty")}
        >
          <Smartphone size={14} />
          <span>Интерфейс UltyMyLife</span>
        </button>
        <button
          type="button"
          className={`iphone-tab-pill ${activeScreen === "command" ? "active" : ""}`}
          onClick={() => setActiveScreen("command")}
        >
          <Sparkles size={14} />
          <span>Система & Архитектура</span>
        </button>
      </div>

      {/* iPhone Device Frame */}
      <div className="iphone-frame">
        <div className="iphone-bezel">
          {/* Dynamic Island */}
          <div className="iphone-island">
            <span className="island-camera" />
          </div>

          {/* Screen Content */}
          <div className="iphone-screen">
            <img
              src={screens[activeScreen].image}
              alt={screens[activeScreen].title}
              className="iphone-screen-img"
              loading="lazy"
            />
          </div>

          {/* Home indicator bar */}
          <div className="iphone-home-bar" />
        </div>
      </div>

      {/* Big Clickable Action Button */}
      <div className="iphone-action-wrap">
        <a
          href={landingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button primary iphone-open-btn"
        >
          <span>{buttonLabel}</span>
          <ExternalLink size={16} />
        </a>
        <small className="iphone-action-hint">
          Прямая ссылка: demianavol.github.io/ultymylife-landing
        </small>
      </div>
    </div>
  );
}
