import { useRouter } from "../router";
import { portfolioData } from "../data/portfolioData";
import { Coins, Terminal, Check } from "lucide-react";

export function DomainAndTech() {
  const { language } = useRouter();
  const t = portfolioData[language].domainDetails;

  const cryptoTopics =
    language === "ru"
      ? [
          "CEX & биржевые стаканы",
          "Типы ордеров (Limit, Market, Stop)",
          "Экосистема TON & Mini Apps",
          "FinTech & Web3 домен",
        ]
      : [
          "CEX & Order Book Dynamics",
          "Order Types (Limit, Market, Stop)",
          "TON Ecosystem & Mini Apps",
          "FinTech & Web3 Domain",
        ];

  const freelanceTools =
    language === "ru"
      ? [
          "React, TypeScript & Node.js",
          "PHP, SQL & Реляционные БД",
          "No-Code & автоматизации",
          "Motion & визуальный дизайн",
        ]
      : [
          "React, TypeScript & Node.js",
          "PHP, SQL & Databases",
          "No-Code & Automations",
          "Motion & Visual Design",
        ];

  return (
    <div className="domain-tech-grid">
      {/* Crypto / Web3 */}
      <div className="domain-card crypto-card">
        <div className="domain-card-header">
          <div className="domain-icon-box crypto-icon">
            <Coins size={22} />
          </div>
          <div>
            <span className="eyebrow-pill">{t.crypto.badge}</span>
            <h3 className="domain-title">{t.crypto.title}</h3>
          </div>
        </div>
        <p className="domain-text">{t.crypto.desc}</p>

        <div className="domain-topics-list">
          {cryptoTopics.map((topic, idx) => (
            <div className="topic-chip" key={idx}>
              <Check size={14} className="text-lime" />
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Freelance & Tech Background */}
      <div className="domain-card tech-card">
        <div className="domain-card-header">
          <div className="domain-icon-box tech-icon">
            <Terminal size={22} />
          </div>
          <div>
            <span className="eyebrow-pill">{t.freelance.badge}</span>
            <h3 className="domain-title">{t.freelance.title}</h3>
          </div>
        </div>
        <p className="domain-text">{t.freelance.desc}</p>

        <div className="domain-topics-list">
          {freelanceTools.map((tool, idx) => (
            <div className="topic-chip" key={idx}>
              <Check size={14} className="text-cyan" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
