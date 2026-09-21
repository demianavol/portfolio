import { useState } from "react";
import { useRouter } from "../router";
import { portfolioData, CONTACT_INFO, CV_LINKS } from "../data/portfolioData";
import { Send, Mail, Phone, FileText, ArrowUpRight, Copy, Check } from "lucide-react";

interface ContactSectionProps {
  defaultCvType?: "project" | "product" | "business";
}

export function ContactSection({ defaultCvType = "project" }: ContactSectionProps) {
  const { language } = useRouter();
  const t = portfolioData[language].contacts;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getCvUrl = () => {
    if (defaultCvType === "product") return CV_LINKS.productRu;
    if (defaultCvType === "business") return CV_LINKS.businessRu;
    return language === "en" ? CV_LINKS.projectEn : CV_LINKS.projectRu;
  };

  const getCvLabel = () => {
    if (defaultCvType === "product") {
      return language === "ru" ? "Скачать Product Manager CV" : "Download Product Manager CV";
    }
    if (defaultCvType === "business") {
      return language === "ru" ? "Скачать Business Assistant CV" : "Download Business Assistant CV";
    }
    return language === "ru" ? "Скачать Project Manager CV (RU)" : "Download Project Manager CV (EN)";
  };

  return (
    <section className="contact-block section" id="contact">
      <div className="contact-card-modern">
        <div className="contact-header">
          <span className="eyebrow-pill">{language === "ru" ? "Связь и сотрудничество" : "Get In Touch"}</span>
          <h2 className="contact-title">{t.title}</h2>
          <p className="contact-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact-methods-grid">
          {/* Telegram Primary Card */}
          <a
            href={CONTACT_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card telegram-channel"
          >
            <div className="channel-icon-wrap">
              <Send size={22} />
            </div>
            <div className="channel-content">
              <span className="channel-kind">Telegram (Fastest response)</span>
              <strong className="channel-value">{CONTACT_INFO.telegramHandle}</strong>
            </div>
            <ArrowUpRight size={18} className="channel-arrow" />
          </a>

          {/* Email Card */}
          <div className="contact-channel-card email-channel">
            <div className="channel-icon-wrap">
              <Mail size={22} />
            </div>
            <div className="channel-content">
              <span className="channel-kind">Email</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="channel-value">
                {CONTACT_INFO.email}
              </a>
            </div>
            <button
              type="button"
              className="copy-btn"
              onClick={copyEmail}
              aria-label="Copy email to clipboard"
              title="Copy email"
            >
              {copiedEmail ? <Check size={16} className="text-lime" /> : <Copy size={16} />}
            </button>
          </div>

          {/* Phone / WhatsApp */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card phone-channel"
          >
            <div className="channel-icon-wrap">
              <Phone size={22} />
            </div>
            <div className="channel-content">
              <span className="channel-kind">WhatsApp & Phone</span>
              <strong className="channel-value">{CONTACT_INFO.phoneDisplay}</strong>
            </div>
            <ArrowUpRight size={18} className="channel-arrow" />
          </a>

          {/* CV Download Card */}
          <a
            href={getCvUrl()}
            download
            className="contact-channel-card cv-channel"
          >
            <div className="channel-icon-wrap">
              <FileText size={22} />
            </div>
            <div className="channel-content">
              <span className="channel-kind">Resume / Curriculum Vitae</span>
              <strong className="channel-value">{getCvLabel()}</strong>
            </div>
            <ArrowUpRight size={18} className="channel-arrow" />
          </a>
        </div>

        {/* Quick info row */}
        <div className="contact-meta-footer">
          <span>📍 {language === "ru" ? CONTACT_INFO.locationRu : CONTACT_INFO.locationEn}</span>
          <span>⚡ {language === "ru" ? "Открыт к предложениям" : "Available for key roles"}</span>
          <span>🌐 English {CONTACT_INFO.englishLevel}</span>
        </div>
      </div>
    </section>
  );
}
