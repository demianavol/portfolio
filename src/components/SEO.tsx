import { useEffect } from "react";
import { useRouter } from "../router";
import { portfolioData, CONTACT_INFO } from "../data/portfolioData";

export function SEO() {
  const { currentPath, language } = useRouter();
  const data = portfolioData[language];

  useEffect(() => {
    let metaConfig: { title: string; description: string } = data.meta.home;
    if (currentPath === "/project") metaConfig = data.meta.project;
    else if (currentPath === "/product") metaConfig = data.meta.product;
    else if (currentPath === "/business") metaConfig = data.meta.business;

    const fullUrl = `https://demianavolstiyniy.ru${currentPath === "/" ? "" : currentPath}`;

    // Title
    document.title = metaConfig.title;

    // Helper for meta tags
    const setMeta = (nameAttr: "name" | "property", key: string, content: string) => {
      let elem = document.querySelector<HTMLMetaElement>(`meta[${nameAttr}="${key}"]`);
      if (!elem) {
        elem = document.createElement("meta");
        elem.setAttribute(nameAttr, key);
        document.head.appendChild(elem);
      }
      elem.setAttribute("content", content);
    };

    setMeta("name", "description", metaConfig.description);
    setMeta("property", "og:title", metaConfig.title);
    setMeta("property", "og:description", metaConfig.description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", "https://demianavolstiyniy.ru/profile-photo.png");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", metaConfig.title);
    setMeta("name", "twitter:description", metaConfig.description);
    setMeta("name", "twitter:image", "https://demianavolstiyniy.ru/profile-photo.png");

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // JSON-LD Structured Data
    const schemaId = "demian-schema-ld";
    let scriptElem = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptElem) {
      scriptElem = document.createElement("script");
      scriptElem.id = schemaId;
      scriptElem.type = "application/ld+json";
      document.head.appendChild(scriptElem);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://demianavolstiyniy.ru/#person",
          name: "Demian Avolstiyniy",
          alternateName: "Демиан Аволстийный",
          jobTitle: [
            "Project Manager",
            "IT Project Manager",
            "Product Manager",
            "Business Operations Manager",
            "Founder's Associate",
          ],
          url: "https://demianavolstiyniy.ru",
          image: "https://demianavolstiyniy.ru/profile-photo.png",
          sameAs: ["https://t.me/DemianWorkSelf"],
          knowsAbout: [
            "Project Management",
            "IT Project Management",
            "Product Management",
            "Telegram Mini Apps",
            "E-commerce",
            "Supply Chain & International Logistics",
            "AI Automation",
            "FinTech & Web3",
          ],
          worksFor: {
            "@type": "Organization",
            name: "UltyMyLife",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://demianavolstiyniy.ru/#website",
          url: "https://demianavolstiyniy.ru",
          name: "Demian Avolstiyniy Portfolio",
          publisher: {
            "@id": "https://demianavolstiyniy.ru/#person",
          },
        },
      ],
    };

    scriptElem.textContent = JSON.stringify(structuredData);
  }, [currentPath, language, data]);

  return null;
}
