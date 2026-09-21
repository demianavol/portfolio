import { ExternalLink, Globe, Lock } from "lucide-react";

interface DesktopBrowserMockupProps {
  landingUrl: string;
  siteDomain?: string;
  buttonLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  directLinkLabel?: string;
}

export function DesktopBrowserMockup({
  landingUrl,
  siteDomain = "ultymylife.com",
  buttonLabel = "Открыть сайт UltyMyLife",
  imageSrc = "/previews/ultymylife-preview.png",
  imageAlt = "UltyMyLife Live Production Platform",
  directLinkLabel = "Прямая ссылка:",
}: DesktopBrowserMockupProps) {
  return (
    <div className="desktop-browser-container">
      {/* macOS Window Frame */}
      <div className="browser-window-frame">
        {/* Window Chrome / Titlebar */}
        <div className="browser-window-header">
          {/* Traffic light buttons */}
          <div className="browser-traffic-lights" aria-hidden="true">
            <span className="traffic-dot dot-red" />
            <span className="traffic-dot dot-yellow" />
            <span className="traffic-dot dot-green" />
          </div>

          {/* Browser Address Bar */}
          <div className="browser-address-bar">
            <Lock size={12} className="address-lock-icon" />
            <span className="address-domain">{siteDomain}</span>
            <span className="address-badge">LIVE</span>
          </div>
        </div>

        {/* Browser Content Screen — Fully Clickable Preview */}
        <a
          href={landingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="browser-screen-link"
          title={buttonLabel}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="browser-screen-image"
            loading="lazy"
            decoding="async"
          />
          <div className="browser-screen-overlay">
            <span className="apple-browser-hover-link">
              <span>{buttonLabel}</span>
              <ExternalLink size={14} />
            </span>
          </div>
        </a>
      </div>

      {/* Single Explicit External CTA under the frame */}
      <div className="browser-action-row single-cta-row">
        <a
          href={landingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="apple-browser-action-btn"
        >
          <span>{buttonLabel}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
