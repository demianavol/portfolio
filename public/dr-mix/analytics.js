(() => {
  const storageKey = "rezerv-analytics-session";
  const endpoint = "/api/events";
  let lastEventKey = "";
  let lastEventAt = 0;

  function sessionId() {
    try {
      const current = localStorage.getItem(storageKey);
      if (current) return current;
      const next = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      localStorage.setItem(storageKey, next);
      return next;
    } catch {
      return "";
    }
  }

  function pageName() {
    return document.body?.dataset.page || document.documentElement.dataset.mode || location.pathname;
  }

  function priceMode() {
    return document.body?.dataset.priceMode || document.documentElement.dataset.mode || "";
  }

  function send(type, meta = {}) {
    if (location.protocol === "file:") return;

    const eventKey = `${type}:${meta.href || ""}:${meta.source || ""}:${location.pathname}:${location.hash}`;
    const now = Date.now();
    if (eventKey === lastEventKey && now - lastEventAt < 900) return;
    lastEventKey = eventKey;
    lastEventAt = now;

    const payload = {
      type,
      meta,
      sessionId: sessionId(),
      page: pageName(),
      path: location.pathname,
      url: location.href,
      referrer: document.referrer,
      title: document.title,
      priceMode: priceMode(),
    };
    const body = JSON.stringify(payload);

    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([body], { type: "application/json" });
        if (navigator.sendBeacon(endpoint, blob)) return;
      }
    } catch {
      // Fall through to fetch.
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }

  function trackClick(event) {
    const target = event.target.closest("a, button");
    if (!target) return;

    const href = target.getAttribute("href") || "";
    const text = (target.textContent || target.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 80);

    if (target.matches(".marketplace-ozon, .marketplace-wb")) {
      send("marketplace_click", {
        marketplace: target.matches(".marketplace-ozon") ? "ozon" : "wildberries",
        href,
        text,
      });
      return;
    }

    if (href === "#marketplaces" || target.matches(".dr-mobile-cta, .header-cta")) {
      send("buy_click", { href, text });
      return;
    }

    if (href.startsWith("tel:") || href.startsWith("mailto:") || href.includes("t.me/")) {
      send("contact_click", { href, text });
    }
  }

  window.rezervTrack = send;

  function trackMarketplaceHash(source) {
    if (location.hash !== "#marketplaces") return;
    send("buy_click", {
      href: "#marketplaces",
      source,
      text: "Переход к блоку покупки",
    });
  }

  if (document.getElementById("root")) {
    // React storefront sends virtual page views from rezerv-app.jsx.
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      send("page_view");
      trackMarketplaceHash("page_load");
    });
  } else {
    send("page_view");
    trackMarketplaceHash("page_load");
  }

  document.addEventListener("click", trackClick, { capture: true });
  window.addEventListener("hashchange", () => trackMarketplaceHash("hashchange"));
})();
