import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useRouter } from "../router";
import { portfolioData, type Language } from "../data/portfolioData";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const { currentPath, language, setLanguage } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = portfolioData[language].nav;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPastThreshold = window.scrollY > 20;
          setScrolled((prev) => (prev !== isPastThreshold ? isPastThreshold : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru");
  };

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        {/* Brand */}
        <Link to="/" className="site-brand" aria-label="Demian Avolstiyniy Home">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">Demian Avolstiyniy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link
            to="/project"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            <span className="nav-item-indicator" />
            {t.project}
          </Link>
          <Link
            to="/product"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            <span className="nav-item-indicator" />
            {t.product}
          </Link>
          <Link
            to="/business"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            <span className="nav-item-indicator" />
            {t.business}
          </Link>
          <Link to="#about" className="nav-item">
            {t.about}
          </Link>
          <Link to="#contact" className="nav-item">
            {t.contact}
          </Link>
        </nav>

        {/* Right actions: Lang toggle + Telegram CTA */}
        <div className="header-actions">
          <button
            type="button"
            className="lang-btn"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={`Switch to ${language === "ru" ? "English" : "Russian"}`}
          >
            <Globe size={15} aria-hidden="true" />
            <span>{language.toUpperCase()}</span>
          </button>

          <a
            href="https://t.me/DemianWorkSelf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta-btn"
          >
            <span>Telegram</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer via portal to avoid any transform/filter clipping from parent header */}
      {mobileMenuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="mobile-drawer-portal" role="dialog" aria-modal="true">
            <div className="mobile-drawer-links">
              <Link
                to="/project"
                className="mobile-nav-item"
                activeClassName="mobile-nav-item-active"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="mobile-nav-label">
                  <strong>{t.project}</strong>
                  <small>Project Manager / IT PM</small>
                </div>
                <span className="mobile-arrow">→</span>
              </Link>

              <Link
                to="/product"
                className="mobile-nav-item"
                activeClassName="mobile-nav-item-active"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="mobile-nav-label">
                  <strong>{t.product}</strong>
                  <small>Product Manager / Owner</small>
                </div>
                <span className="mobile-arrow">→</span>
              </Link>

              <Link
                to="/business"
                className="mobile-nav-item"
                activeClassName="mobile-nav-item-active"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="mobile-nav-label">
                  <strong>{t.business}</strong>
                  <small>Business Operations / Associate</small>
                </div>
                <span className="mobile-arrow">→</span>
              </Link>

              <div className="mobile-drawer-divider" />

              <Link
                to="#about"
                className="mobile-sublink"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.about}
              </Link>
              <Link
                to="#contact"
                className="mobile-sublink"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.contact}
              </Link>

              <div className="mobile-drawer-footer">
                <button
                  type="button"
                  className="mobile-lang-btn"
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                >
                  <Globe size={16} />
                  <span>{language === "ru" ? "English version" : "Русская версия"}</span>
                </button>

                <a
                  href="https://t.me/DemianWorkSelf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Telegram: @DemianWorkSelf
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
