import { Link, useRouter } from "../router";
import { portfolioData, CONTACT_INFO, CV_LINKS } from "../data/portfolioData";
import { Send, ArrowUp } from "lucide-react";

export function Footer() {
  const { language } = useRouter();
  const t = portfolioData[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <span className="brand-dot" />
            <strong>Demian Avolstiyniy</strong>
          </div>
          <p className="footer-desc">
            {language === "ru"
              ? "Project Manager • Product Manager • Business Operations. Довожу сложные digital- и бизнес-проекты до результата."
              : "Project Manager • Product Manager • Business Operations. Driving digital and operational initiatives to production."}
          </p>
          <div className="footer-socials">
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Telegram"
            >
              <Send size={16} />
              <span>@DemianWorkSelf</span>
            </a>
          </div>
        </div>

        <div className="footer-nav-col">
          <span className="footer-col-title">{language === "ru" ? "Направления" : "Portfolios"}</span>
          <ul className="footer-links">
            <li>
              <Link to="/project">{language === "ru" ? "Project Manager" : "Project Manager"}</Link>
            </li>
            <li>
              <Link to="/product">{language === "ru" ? "Product Manager" : "Product Manager"}</Link>
            </li>
            <li>
              <Link to="/business">{language === "ru" ? "Business Operations" : "Business Operations"}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-cv-col">
          <span className="footer-col-title">{language === "ru" ? "Резюме (CV)" : "Curriculum Vitae"}</span>
          <ul className="footer-links">
            <li>
              <a href={CV_LINKS.projectRu} download>
                {language === "ru" ? "Project Manager CV (RU)" : "Project Manager CV (RU)"}
              </a>
            </li>
            <li>
              <a href={CV_LINKS.projectEn} download>
                {language === "ru" ? "Project Manager CV (EN)" : "Project Manager CV (EN)"}
              </a>
            </li>
            <li>
              <a href={CV_LINKS.productRu} download>
                {language === "ru" ? "Product Manager CV" : "Product Manager CV"}
              </a>
            </li>
            <li>
              <a href={CV_LINKS.businessRu} download>
                {language === "ru" ? "Business Assistant CV" : "Business Assistant CV"}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} Demian Avolstiyniy. {language === "ru" ? "Все права защищены." : "All rights reserved."}
          </span>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>{language === "ru" ? "Наверх" : "Back to top"}</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
