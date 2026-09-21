import { useState } from "react";
import { useRouter } from "../router";
import { CONTACT_INFO, CV_LINKS } from "../data/portfolioData";
import { Send, Mail, FileText, Copy, Check, ArrowUpRight } from "lucide-react";

interface ProjectContactAppleProps {
  eyebrow?: string;
  statement?: string;
  sub?: string;
  cvHref?: string;
  cvLabel?: string;
  hideCv?: boolean;
  extraActions?: React.ReactNode;
}

export function ProjectContactApple({
  eyebrow,
  statement,
  sub,
  cvHref: customCvHref,
  cvLabel: customCvLabel,
  hideCv,
  extraActions,
}: ProjectContactAppleProps = {}) {
  const { language } = useRouter();
  const isRu = language === "ru";
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const defaultCvHref = isRu ? CV_LINKS.projectRu : CV_LINKS.projectEn;
  const cvHref = customCvHref || defaultCvHref;
  const defaultCvLabel = isRu ? "Скачать CV (PDF)" : "Download CV (PDF)";
  const cvLabel = customCvLabel || defaultCvLabel;

  const finalEyebrow = eyebrow || (isRu ? "Связь и сотрудничество" : "Get In Touch");
  const finalStatement =
    statement ||
    (isRu
      ? "Ищете Project Manager, который возьмёт ответственность за результат?"
      : "Looking for a Project Manager who can own the result?");
  const finalSub =
    sub ||
    (isRu
      ? "Открыт к предложениям на ключевые роли в сильных digital- и продуктовых командах."
      : "Open to key project and delivery management roles in high-standard engineering teams.");

  return (
    <div className="project-contact-apple-container">
      <div className="contact-apple-inner">
        {/* Big Final Statement */}
        <span className="contact-apple-eyebrow">{finalEyebrow}</span>
        <h2 className="contact-apple-statement">{finalStatement}</h2>
        <p className="contact-apple-sub">{finalSub}</p>

        {/* Primary White Button + Secondary Neutral Actions */}
        <div className="contact-apple-actions">
          {/* Primary CTA (Apple White with Dark Text) */}
          <a
            href={CONTACT_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-cta-primary"
          >
            <Send size={16} />
            <span>{isRu ? "Написать в Telegram" : "Message on Telegram"}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Secondary CV Download */}
          {!hideCv && (
            <a
              href={cvHref}
              download
              className="apple-cta-secondary"
            >
              <FileText size={16} />
              <span>{cvLabel}</span>
            </a>
          )}

          {extraActions}

          {/* Email Copy Action */}
          <button
            type="button"
            className="apple-cta-secondary email-copy-trigger"
            onClick={copyEmail}
            title={isRu ? "Скопировать email" : "Copy email address"}
          >
            {copiedEmail ? <Check size={16} /> : <Mail size={16} />}
            <span>{copiedEmail ? (isRu ? "Email скопирован!" : "Email copied!") : CONTACT_INFO.email}</span>
          </button>
        </div>

        {/* Quiet Meta Footer */}
        <div className="contact-apple-meta">
          <span>📍 {isRu ? CONTACT_INFO.locationRu : CONTACT_INFO.locationEn}</span>
          <span className="meta-separator">·</span>
          <span>⚡ {isRu ? "Готов к быстрому старту" : "Ready for immediate impact"}</span>
          <span className="meta-separator">·</span>
          <span>🌐 English {CONTACT_INFO.englishLevel}</span>
        </div>
      </div>
    </div>
  );
}
