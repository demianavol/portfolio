const formatPrice = new Intl.NumberFormat("ru-RU").format;
const priceMode = document.body.dataset.priceMode || "retail";
const isWholesaleMode = priceMode === "wholesale";
const isDrMixPage = document.body.dataset.page === "dr-mix";
const isScoutMiniPage = document.body.dataset.page === "scout-mini";
const themeStorageKey = "rezerv-theme";
const authLinks = document.querySelectorAll("[data-auth-link]");

const state = {
  category: "all",
  search: "",
};

const quote = new Map();

let catalog = {
  contacts: {},
  categories: [],
  products: [],
};

let guideCategories = [];
let categoryMap = new Map();
let currentUser = null;

const productGrid = document.querySelector("#productGrid");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const clearFilters = document.querySelector("#clearFilters");
const resultCount = document.querySelector("#resultCount");
const skuCount = document.querySelector("#skuCount");
const categoryCount = document.querySelector("#categoryCount");
const avgRating = document.querySelector("#avgRating");
const quoteBar = document.querySelector("#quoteBar");
const quoteCount = document.querySelector("#quoteCount");
const quoteTotal = document.querySelector("#quoteTotal");
const quoteTextarea = document.querySelector("#quoteTextarea");
const leadForm = document.querySelector("#leadForm");
const formNote = document.querySelector("#formNote");
const themeToggle = document.querySelector("#themeToggle");
const paymentForm = document.querySelector("#paymentForm");
const paymentNote = document.querySelector("#paymentNote");
const paymentPrice = document.querySelector("[data-payment-price]");
const paymentSubmit = document.querySelector("[data-payment-submit]");
const paymentStatus = document.querySelector("[data-payment-status]");
const paymentAuth = document.querySelector("[data-payment-auth]");
const paymentLogin = document.querySelector("[data-payment-login]");
const paymentRegister = document.querySelector("[data-payment-register]");
const paymentCard = document.querySelector("#payment");
const marketplaceCard = document.querySelector("[data-marketplace-card]");
const promoCard = document.querySelector("[data-promo-card]");
const promoCode = document.querySelector("[data-promo-code]");
const promoNote = document.querySelector("[data-promo-note]");
const promoAuth = document.querySelector("[data-promo-auth]");
const authModal = document.querySelector("[data-auth-modal]");
const authModalTabs = authModal?.querySelectorAll("[data-auth-modal-tab]") || [];
const authModalForms = authModal?.querySelectorAll("[data-auth-modal-form]") || [];
const authModalNote = authModal?.querySelector("[data-auth-modal-note]");
const authModalCloseButtons = authModal?.querySelectorAll("[data-auth-close]") || [];

let paymentConfigState = null;
let drMixContentState = null;
const drMixPromoCode = "DRMIX10";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readStoredTheme() {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Theme persistence is optional for browsers that block localStorage.
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;

  if (!themeToggle) return;
  const isDark = nextTheme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Включить светлую тему" : "Включить темную тему");
  themeToggle.title = isDark ? "Светлая тема" : "Темная тема";
}

function plural(value, one, few, many) {
  const mod10 = value % 10;
  const mod100 = value % 100;

  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function money(value) {
  const number = Number(value);
  return Number.isFinite(number) ? formatPrice(number) : "0";
}

function updatePaymentTotal() {
  if (!paymentForm || !paymentPrice) return;

  const price = Number(paymentConfigState?.product?.priceRub);
  if (!Number.isFinite(price) || price <= 0) {
    paymentPrice.textContent = "Цена настраивается";
    return;
  }

  const quantity = Math.max(1, Number.parseInt(paymentForm.elements.quantity?.value || "1", 10) || 1);
  paymentPrice.textContent = `${money(price * quantity)} ₽`;
}

function setPaymentDisabled(disabled, message = "") {
  if (!paymentForm) return;

  [...paymentForm.elements].forEach((element) => {
    element.disabled = Boolean(disabled);
  });
  if (paymentNote && message) paymentNote.textContent = message;
}

function setPaymentStatus(text, state = "pending") {
  if (!paymentStatus) return;
  paymentStatus.textContent = text;
  paymentStatus.classList.remove("pending", "ready", "error");
  paymentStatus.classList.add(state);
}

function renderPromoState() {
  if (!promoCard) return;
  const isLoggedIn = Boolean(currentUser);
  promoCard.classList.toggle("is-unlocked", isLoggedIn);
  if (promoCode) promoCode.textContent = isLoggedIn ? drMixPromoCode : "••••••";
  if (promoNote) {
    promoNote.textContent = isLoggedIn
      ? "Промокод открыт. Используйте его при покупке на маркетплейсе или сообщите менеджеру."
      : "Войдите или зарегистрируйтесь, чтобы увидеть промокод.";
  }
  if (promoAuth) promoAuth.hidden = isLoggedIn;
}

function setMarketplaceMode(enabled) {
  if (marketplaceCard) marketplaceCard.hidden = !enabled;
  if (paymentCard) paymentCard.classList.toggle("marketplace-mode", Boolean(enabled));
  if (enabled) {
    if (paymentAuth) paymentAuth.hidden = true;
    if (paymentForm) paymentForm.hidden = true;
  }
}

function paymentReturnUrl() {
  return `${window.location.pathname || "/dr-mix.html"}#payment`;
}

function updatePaymentAuthLinks() {
  const returnQuery = encodeURIComponent(paymentReturnUrl());
  if (paymentLogin) {
    paymentLogin.href = authModal ? "#auth" : `auth.html?return=${returnQuery}`;
    paymentLogin.dataset.authMode = "login";
  }
  if (paymentRegister) {
    paymentRegister.href = authModal ? "#auth" : `auth.html?mode=register&return=${returnQuery}`;
    paymentRegister.dataset.authMode = "register";
  }
}

function syncPaymentAuthState() {
  if (!paymentForm) return Boolean(currentUser);

  const isLoggedIn = Boolean(currentUser);
  renderPromoState();
  updatePaymentAuthLinks();
  if (paymentAuth) paymentAuth.hidden = isLoggedIn;
  paymentForm.hidden = !isLoggedIn;

  if (isLoggedIn) {
    if (paymentForm.elements.name && !paymentForm.elements.name.value) {
      paymentForm.elements.name.value = currentUser.name || "";
    }
    if (paymentForm.elements.email && !paymentForm.elements.email.value && currentUser.email !== "admin") {
      paymentForm.elements.email.value = currentUser.email || "";
    }
  }

  return isLoggedIn;
}

async function initPayment() {
  renderPromoState();
  if (!paymentForm && !marketplaceCard) return;

  setPaymentStatus("Проверяем", "pending");
  setPaymentDisabled(true, "Проверяем подключение оплаты...");

  try {
    const response = await fetch("/api/payments/config", { cache: "no-store" });
    if (!response.ok) throw new Error("Payment config unavailable");
    paymentConfigState = await response.json();
    updatePaymentTotal();

    if (!paymentConfigState.available) {
      setMarketplaceMode(true);
      setPaymentStatus("Ожидает ключи", "pending");
      setPaymentDisabled(
        true,
        "Оплата на сайте пока скрыта. Используйте Ozon или Wildberries.",
      );
      return;
    }

    setMarketplaceMode(false);
    if (!syncPaymentAuthState()) {
      setPaymentDisabled(true, "");
      return;
    }

    setPaymentStatus("Оплата активна", "ready");
    setPaymentDisabled(false, "Оплата подключена через ЮKassa.");
  } catch {
    setMarketplaceMode(true);
    setPaymentStatus("Ошибка проверки", "error");
    setPaymentDisabled(true, "Оплата на сайте временно скрыта. Используйте Ozon или Wildberries.");
  }
}

async function showReturnedOrderStatus() {
  if (!paymentNote) return;

  const orderId = new URLSearchParams(window.location.search).get("order");
  if (!orderId) return;

  paymentNote.textContent = "Проверяем статус оплаты...";

  try {
    const response = await fetch(`/api/orders/${encodeURIComponent(orderId)}`, { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.order) throw new Error("Order unavailable");

    const order = data.order;
    if (order.paid || order.status === "succeeded") {
      paymentNote.textContent = `Оплата получена. Номер заказа: ${order.id.slice(0, 8)}.`;
    } else if (order.status === "canceled") {
      paymentNote.textContent = "Платёж отменён или не прошёл. Можно попробовать оплатить ещё раз.";
    } else {
      paymentNote.textContent = `Статус заказа: ${order.status}. Если деньги списались, статус обновится после уведомления ЮKassa.`;
    }

    document.querySelector("#payment")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    paymentNote.textContent = "Не удалось проверить статус заказа. Напишите нам, если оплата уже прошла.";
  }
}

function productCategory(product) {
  return categoryMap.get(product.categoryId) || {
    id: product.categoryId,
    name: "Категория",
    examples: "",
    imageUrl: "",
  };
}

function categoryInitials(name) {
  const letters = String(name || "REZERV")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  return letters.toUpperCase() || "R";
}

function imageForProduct(product) {
  const category = productCategory(product);
  return product.imageUrl || category.imageUrl || "";
}

function currentPrice(product) {
  const price = isWholesaleMode ? product.wholesalePrice : product.retailPrice;
  return Number.isFinite(Number(price)) ? Number(price) : 0;
}

function discount(product) {
  if (!product.oldPrice || !product.retailPrice) return null;
  return Math.round((1 - product.retailPrice / product.oldPrice) * 100);
}

function productBadges(product) {
  const badges = [];
  const productDiscount = discount(product);

  if (isWholesaleMode) badges.push(`<span class="badge wholesale">опт</span>`);
  if (productDiscount) badges.push(`<span class="badge sale">-${productDiscount}%</span>`);
  if (Number.isFinite(Number(product.stock)) && Number(product.stock) <= 3) {
    badges.push(`<span class="badge low">мало</span>`);
  }

  return badges.join("");
}

async function requestJson(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: options.body ? { "Content-Type": "application/json", ...(options.headers || {}) } : options.headers,
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Ошибка запроса");
  return data;
}

async function fetchSession() {
  if (window.location.protocol === "file:") return null;

  try {
    const data = await requestJson("/api/auth/session");
    return data.user || null;
  } catch {
    return null;
  }
}

async function fetchCatalog(adminMode = false) {
  const sources = window.location.protocol === "file:"
    ? ["data/catalog.json"]
    : adminMode
      ? ["/api/admin/catalog", "/api/catalog", "data/catalog.json"]
      : ["/api/catalog", "data/catalog.json"];

  for (const source of sources) {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (response.ok) return response.json();
    } catch {
      // Try the next source.
    }
  }

  throw new Error("Не удалось загрузить каталог");
}

async function fetchGuideCategories(adminMode = false) {
  const sources = window.location.protocol === "file:"
    ? ["data/categories.json"]
    : adminMode
      ? ["/api/admin/categories", "/api/categories", "data/categories.json"]
      : ["/api/categories", "data/categories.json"];

  for (const source of sources) {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (response.ok) return response.json();
    } catch {
      // Try the next source.
    }
  }

  return [];
}

async function fetchDrMixContent() {
  if (!isDrMixPage) return null;
  const sources = window.location.protocol === "file:"
    ? ["data/dr-mix-content.json"]
    : ["/api/dr-mix/content", "data/dr-mix-content.json"];

  for (const source of sources) {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (response.ok) return response.json();
    } catch {
      // Static HTML remains the fallback.
    }
  }

  return null;
}

function setText(selector, value, root = document) {
  const node = root.querySelector(selector);
  if (!node || value === undefined || value === null) return;
  node.textContent = String(value);
}

function setHeading(selector, title, accent) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = `${escapeHtml(title || "")}${accent ? ` <span>${escapeHtml(accent)}</span>` : ""}`;
}

function setVideo(video, media) {
  if (!video || !media) return;
  if (media.poster !== undefined) video.poster = media.poster || "";
  const source = video.querySelector("source");
  if (source && media.src !== undefined) {
    source.src = media.src || "";
    video.load();
    video.play?.().catch(() => {});
  }
}

function renderHeroContent(contentData) {
  const hero = contentData.hero || {};
  setText(".dr-hero .eyebrow", hero.eyebrow);
  const heroTitle = document.querySelector(".dr-hero-copy h1");
  if (heroTitle && Array.isArray(hero.titleLines)) {
    heroTitle.innerHTML = hero.titleLines.map((line) => `<span>${escapeHtml(line)}</span>`).join(" ");
  }
  setText(".dr-hero-copy > p:not(.eyebrow)", hero.description);

  const heroNode = document.querySelector(".dr-hero");
  if (heroNode && hero.backgroundImage) {
    heroNode.style.setProperty("--dr-hero-image", `url("${hero.backgroundImage}")`);
  }

  const proofs = document.querySelector(".dr-proof-strip");
  if (proofs && Array.isArray(hero.proofs)) {
    proofs.innerHTML = hero.proofs.map((proof) => `<span>${escapeHtml(proof)}</span>`).join("");
  }

  const heroActions = document.querySelectorAll(".dr-hero-actions a");
  if (heroActions[0] && hero.primaryCta) heroActions[0].textContent = hero.primaryCta;
  if (heroActions[1] && hero.secondaryCta) heroActions[1].textContent = hero.secondaryCta;

  const metricGrid = document.querySelector(".dr-metric-grid");
  if (metricGrid && Array.isArray(hero.metrics)) {
    metricGrid.innerHTML = hero.metrics
      .map((item) => `<div class="dr-metric"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`)
      .join("");
  }
}

function renderStoryContent(contentData) {
  const story = contentData.story || {};
  setText(".dr-story-head .eyebrow", story.eyebrow);
  setText(".dr-story-head h2", story.title);
  setText(".dr-story-head .dr-lead", story.lead);

  const existingSteps = [...document.querySelectorAll("[data-story-step]")];
  (story.steps || []).forEach((step, index) => {
    const node = existingSteps[index];
    if (!node) return;
    setText("span", step.number, node);
    setText("h2", step.title, node);
    setText("p", step.text, node);
  });

  const images = [...document.querySelectorAll(".dr-photo-stack img")];
  (story.images || []).forEach((image, index) => {
    const node = images[index];
    if (!node) return;
    if (image.src !== undefined) node.src = image.src;
    if (image.alt !== undefined) node.alt = image.alt;
  });
}

function renderVideoContent(contentData) {
  const videos = contentData.videos || {};
  setText(".dr-video-layout .eyebrow", videos.eyebrow);
  setText(".dr-video-layout h2", videos.title);
  setText(".dr-video-layout .dr-lead", videos.lead);
  setVideo(document.querySelector(".dr-video-frame video"), videos.main);

  const cards = [...document.querySelectorAll(".dr-video-card")];
  (videos.items || []).forEach((item, index) => {
    const card = cards[index];
    if (!card) return;
    setVideo(card.querySelector("video"), item);
    setText("strong", item.title, card);
  });
}

function renderProductContent(contentData) {
  const product = contentData.product || {};
  setText("#product .eyebrow", product.eyebrow);
  setHeading("#product .dr-split h2", product.title, product.accent);
  setText("#product .dr-lead", product.lead);

  const specs = document.querySelector("#product .dr-specs");
  if (specs && Array.isArray(product.specs)) {
    specs.innerHTML = product.specs
      .map((spec) => `<div><dt>${escapeHtml(spec.label)}</dt><dd>${escapeHtml(spec.value)}</dd></div>`)
      .join("");
  }

  const featureGrid = document.querySelector("#product .dr-feature-grid");
  if (featureGrid && Array.isArray(product.features)) {
    featureGrid.innerHTML = product.features
      .map((feature) => `<article class="dr-feature"><h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.text)}</p></article>`)
      .join("");
  }
}

function renderKitContent(contentData) {
  const kit = contentData.kit || {};
  setText("#kit .eyebrow", kit.eyebrow);
  setText("#kit h2", kit.title);
  setText("#kit .dr-lead", kit.lead);

  const kitList = document.querySelector("#kit .dr-kit-list");
  if (kitList && Array.isArray(kit.items)) {
    kitList.innerHTML = kit.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  }

  const trust = document.querySelector("#kit .dr-kit-trust");
  if (trust && Array.isArray(kit.trust)) {
    trust.innerHTML = kit.trust
      .map((item) => `<span><strong>${escapeHtml(item.value)}</strong> ${escapeHtml(item.label)}</span>`)
      .join("");
  }
}

function renderDeliveryContent(contentData) {
  const delivery = contentData.delivery || {};
  setText("#delivery .eyebrow", delivery.eyebrow);
  setHeading("#delivery .section-head h2", delivery.title, delivery.accent);
  setText("#delivery .dr-lead", delivery.lead);

  const cards = document.querySelector("#delivery .dr-delivery-grid");
  if (cards) {
    const deliveryCards = Array.isArray(delivery.cards) ? delivery.cards : [];
    cards.innerHTML = `
      ${deliveryCards
        .map(
          (card) => `
            <article class="dr-delivery-card">
              <span>${escapeHtml(card.number)}</span>
              <h3>${escapeHtml(card.title)}</h3>
              <p>${escapeHtml(card.text)}</p>
              <a class="secondary-btn" href="#payment">${escapeHtml(card.button || "Выбрать при оплате")}</a>
            </article>
          `,
        )
        .join("")}
      <article class="dr-delivery-card dr-delivery-card-wide">
        <span>03</span>
        <h3>Что указать для СДЭК</h3>
        <div class="dr-delivery-data">
          ${(delivery.cdekData || []).map((item) => `<strong>${escapeHtml(item)}</strong>`).join("")}
        </div>
      </article>
      <article class="dr-delivery-card dr-delivery-card-wide">
        <span>04</span>
        <h3>${escapeHtml(delivery.checkTitle || "Проверка при получении")}</h3>
        <p>${escapeHtml(delivery.checkText || "")}</p>
      </article>
    `;
  }
}

function renderStatsContent(contentData) {
  const stats = contentData.stats || {};
  setText(".dr-stats-section .eyebrow", stats.eyebrow);
  setHeading(".dr-stats-section h2", stats.title, stats.accent);
  const grid = document.querySelector(".dr-stats-grid");
  if (grid && Array.isArray(stats.items)) {
    grid.innerHTML = stats.items
      .map((item) => `<article><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`)
      .join("");
  }
}

function renderComparisonContent(contentData) {
  const comparison = contentData.comparison || {};
  setText("#comparison .eyebrow", comparison.eyebrow);
  setHeading("#comparison .section-head h2", comparison.title, comparison.accent);
  setText("#comparison .dr-lead", comparison.lead);

  const table = document.querySelector(".dr-comparison-table");
  if (table && Array.isArray(comparison.headers) && Array.isArray(comparison.rows)) {
    table.innerHTML = `
      <thead>
        <tr>${comparison.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${comparison.rows
          .map((row) => {
            const [first, ...cells] = row;
            return `<tr><th>${escapeHtml(first)}</th>${cells.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`;
          })
          .join("")}
      </tbody>
    `;
  }
}

function renderTestimonialsContent(contentData) {
  const testimonials = contentData.testimonials || {};
  setText("#testimonials .eyebrow", testimonials.eyebrow);
  setHeading("#testimonials .section-head h2", testimonials.title, testimonials.accent);
  const grid = document.querySelector(".dr-testimonial-grid");
  if (grid && Array.isArray(testimonials.items)) {
    grid.innerHTML = testimonials.items
      .map(
        (item) => `
          <article>
            <div class="dr-testimonial-head">
              <span class="dr-testimonial-avatar" aria-hidden="true">${escapeHtml(item.avatar)}</span>
              <span class="dr-testimonial-stars">${escapeHtml(item.stars)}</span>
            </div>
            <p>${escapeHtml(item.text)}</p>
            <strong>${escapeHtml(item.role)}</strong>
          </article>
        `,
      )
      .join("");
  }
}

function renderFaqContent(contentData) {
  const faq = contentData.faq || {};
  setText("#faq .eyebrow", faq.eyebrow);
  setHeading("#faq h2", faq.title, faq.accent);
  const list = document.querySelector(".dr-faq-list");
  if (list && Array.isArray(faq.items)) {
    list.innerHTML = faq.items
      .map(
        (item, index) => `
          <details ${index === 0 ? "open" : ""}>
            <summary>${escapeHtml(item.question)}</summary>
            <p>${escapeHtml(item.answer)}</p>
          </details>
        `,
      )
      .join("");
  }
}

function phoneHref(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits ? `tel:+${digits}` : "#contacts";
}

function renderContactsContent(contentData) {
  const contacts = contentData.contacts || {};
  setText("#contacts .eyebrow", contacts.eyebrow);
  setText("#contacts .quote-copy h2", contacts.title);
  setText("#contacts .quote-copy > p:not(.eyebrow)", contacts.lead);
  setText("#contacts .dr-contact-summary span", contacts.eyebrow);
  setText("#contacts .dr-contact-summary strong", contacts.title);
  const links = document.querySelector(".dr-contact-links");
  if (links) {
    links.innerHTML = [
      contacts.phone ? `<a href="${escapeHtml(phoneHref(contacts.phone))}"><span>Рабочий телефон</span><strong>${escapeHtml(contacts.phone)}</strong></a>` : "",
      contacts.email ? `<a href="mailto:${escapeHtml(contacts.email)}"><span>Почта</span><strong>${escapeHtml(contacts.email)}</strong></a>` : "",
      contacts.telegramUrl ? `<a href="${escapeHtml(contacts.telegramUrl)}" target="_blank" rel="noopener"><span>Telegram</span><strong>${escapeHtml(contacts.telegramLabel || "Telegram")}</strong></a>` : "",
      contacts.vkUrl ? `<a href="${escapeHtml(contacts.vkUrl)}" target="_blank" rel="noopener"><span>VK</span><strong>${escapeHtml(contacts.vkLabel || "VK")}</strong></a>` : "",
      contacts.whatsappUrl ? `<a href="${escapeHtml(contacts.whatsappUrl)}" target="_blank" rel="noopener"><span>WhatsApp</span><strong>${escapeHtml(contacts.whatsappLabel || "Написать")}</strong></a>` : "",
      `<a href="#payment"><span>Оплата</span><strong>Выбрать доставку</strong></a>`,
    ]
      .filter(Boolean)
      .join("");
  }

  const support = contentData.support || {};
  const supportTitle = document.querySelector(".dr-support-panel strong");
  if (supportTitle && support.title) supportTitle.textContent = support.title;
  const supportPanel = document.querySelector(".dr-support-panel");
  if (supportPanel && Array.isArray(support.links)) {
    supportPanel.innerHTML = `<strong>${escapeHtml(support.title || "Поддержка")}</strong>${support.links
      .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
      .join("")}`;
  }
}

function renderPaymentContent(contentData) {
  const payment = contentData.payment || {};
  const phoneHint = paymentForm?.querySelector(".field-hint");
  if (phoneHint && payment.phoneHint !== undefined) phoneHint.textContent = payment.phoneHint;

  const deliverySelect = paymentForm?.elements.delivery;
  if (deliverySelect && Array.isArray(payment.deliveryOptions)) {
    deliverySelect.innerHTML = payment.deliveryOptions
      .map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label || item.value)}</option>`)
      .join("");
  }

  const comment = paymentForm?.elements.comment;
  if (comment && payment.commentPlaceholder !== undefined) comment.placeholder = payment.commentPlaceholder;
  if (paymentSubmit && payment.submitLabel) paymentSubmit.textContent = payment.submitLabel;
}

function applyDrMixContent(contentData) {
  if (!isDrMixPage || !contentData) return;
  drMixContentState = contentData;
  renderHeroContent(contentData);
  renderStoryContent(contentData);
  renderVideoContent(contentData);
  renderProductContent(contentData);
  renderKitContent(contentData);
  renderDeliveryContent(contentData);
  renderStatsContent(contentData);
  renderComparisonContent(contentData);
  renderTestimonialsContent(contentData);
  renderFaqContent(contentData);
  renderContactsContent(contentData);
  renderPaymentContent(contentData);
}

function isAdminMode() {
  return currentUser?.role === "admin";
}

function renderAuthLinks() {
  if (!authLinks.length) return;

  authLinks.forEach((link) => {
    if (!currentUser) {
      link.textContent = "Войти";
      link.href = authModal ? "#auth" : `auth.html?return=${encodeURIComponent(`${window.location.pathname}${window.location.hash}`)}`;
      link.dataset.authMode = "login";
      link.classList.remove("admin-active");
      return;
    }

    link.textContent = isAdminMode() ? "Админ" : "Кабинет";
    link.href = isAdminMode() ? "admin.html" : "#payment";
    delete link.dataset.authMode;
    link.classList.toggle("admin-active", isAdminMode());
  });

  document.body.classList.toggle("admin-mode", isAdminMode());
}

function setAuthModalMode(mode) {
  if (!authModal) return;
  const nextMode = mode === "register" ? "register" : "login";
  authModal.dataset.mode = nextMode;
  if (authModalNote) authModalNote.textContent = "";

  authModalTabs.forEach((tab) => {
    const isActive = tab.dataset.authModalTab === nextMode;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  authModalForms.forEach((form) => {
    const isActive = form.dataset.authModalForm === nextMode;
    form.hidden = !isActive;
    form.classList.toggle("active", isActive);
  });
}

function openAuthModal(mode = "login") {
  if (!authModal) return false;
  setAuthModalMode(mode);
  authModal.hidden = false;
  document.body.classList.add("auth-modal-open");

  window.requestAnimationFrame(() => {
    authModal.classList.add("is-open");
    const activeInput = authModal.querySelector(".dr-auth-form.active input");
    activeInput?.focus({ preventScroll: true });
  });

  return true;
}

function closeAuthModal() {
  if (!authModal || authModal.hidden) return;
  authModal.classList.remove("is-open");
  document.body.classList.remove("auth-modal-open");
  window.setTimeout(() => {
    if (!authModal.classList.contains("is-open")) authModal.hidden = true;
  }, 180);
}

async function completeAuthModal(user) {
  currentUser = user || null;
  renderAuthLinks();
  syncPaymentAuthState();
  closeAuthModal();

  if (paymentForm) {
    await initPayment();
    if (window.location.hash === "#payment") {
      document.getElementById("payment")?.scrollIntoView({ block: "start" });
    }
  }
}

function setupAuthModal() {
  if (!authModal) return;

  authModalTabs.forEach((tab) => {
    tab.addEventListener("click", () => setAuthModalMode(tab.dataset.authModalTab));
  });

  authModalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeAuthModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !authModal.hidden) closeAuthModal();
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-auth-link], [data-payment-login], [data-payment-register], [data-promo-auth]");
    if (!trigger) return;

    if (trigger.hasAttribute("data-auth-link") && currentUser) {
      return;
    }

    event.preventDefault();
    openAuthModal(trigger.dataset.authMode || (trigger.hasAttribute("data-payment-register") ? "register" : "login"));
  });

  authModalForms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const mode = form.dataset.authModalForm === "register" ? "register" : "login";
      const submit = form.querySelector("button[type='submit']");
      const formData = new FormData(form);

      if (authModalNote) authModalNote.textContent = mode === "register" ? "Создаем аккаунт..." : "Входим...";
      if (submit) submit.disabled = true;

      try {
        if (mode === "register") {
          const ageConfirmed = formData.get("ageConfirmed") === "on";
          const personalDataConsent = formData.get("personalDataConsent") === "on";
          const marketingConsent = formData.get("marketingConsent") === "on";

          if (!ageConfirmed) throw new Error("Подтвердите, что вам есть 18 лет.");
          if (!personalDataConsent) throw new Error("Для регистрации нужно согласие на обработку персональных данных.");

          const data = await requestJson("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              password: formData.get("password"),
              ageConfirmed,
              personalDataConsent,
              marketingConsent,
            }),
          });
          if (authModalNote) authModalNote.textContent = "Аккаунт создан.";
          form.reset();
          await completeAuthModal(data.user);
          return;
        }

        const data = await requestJson("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        });
        if (authModalNote) authModalNote.textContent = "Вход выполнен.";
        form.reset();
        await completeAuthModal(data.user);
      } catch (error) {
        if (authModalNote) {
          authModalNote.textContent =
            error.message === "Too many requests"
              ? "Слишком много попыток. Подождите немного и попробуйте снова."
              : error.message || "Не удалось выполнить действие.";
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
}

function setupContactDisclosure() {
  const details = document.querySelector("#contacts .dr-contact-disclosure");
  const summary = details?.querySelector(".dr-contact-summary");
  const content = details?.querySelector(".quote-layout");
  if (!details || !summary || !content) return;

  summary.addEventListener("click", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    const isOpen = details.open;
    const startHeight = isOpen ? content.scrollHeight : 0;
    const endHeight = isOpen ? 0 : content.scrollHeight;

    if (!isOpen) details.open = true;
    content.style.overflow = "hidden";
    content.style.height = `${startHeight}px`;
    content.style.opacity = isOpen ? "1" : "0";
    content.style.transform = isOpen ? "translateY(0)" : "translateY(-8px)";

    const animation = content.animate(
      [
        { height: `${startHeight}px`, opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(-8px)" },
        { height: `${endHeight}px`, opacity: isOpen ? 0 : 1, transform: isOpen ? "translateY(-8px)" : "translateY(0)" },
      ],
      { duration: 260, easing: "cubic-bezier(.2, .75, .2, 1)" },
    );

    animation.onfinish = () => {
      if (isOpen) details.open = false;
      content.style.height = "";
      content.style.opacity = "";
      content.style.overflow = "";
      content.style.transform = "";
    };
  });
}

setupAuthModal();
setupContactDisclosure();

function rebuildCategoryMap() {
  categoryMap = new Map(catalog.categories.map((category) => [category.id, category]));
}

function renderContactLists() {
  const lists = document.querySelectorAll("[data-contact-list]");
  if (!lists.length) return;

  const { email, phone, telegram } = catalog.contacts || {};
  const telegramHandle = String(telegram || "").replace(/^@/, "");
  const phoneDigits = String(phone || "").replace(/[^\d+]/g, "");
  const items = [
    email
      ? `<a href="mailto:${escapeHtml(email)}"><span>Email</span><strong>${escapeHtml(email)}</strong></a>`
      : "",
    phone
      ? `<a href="tel:${escapeHtml(phoneDigits)}"><span>Телефон</span><strong>${escapeHtml(phone)}</strong></a>`
      : "",
    telegram
      ? `<a href="https://t.me/${escapeHtml(telegramHandle)}"><span>Telegram</span><strong>${escapeHtml(telegram)}</strong></a>`
      : "",
  ].filter(Boolean);

  lists.forEach((list) => {
    list.innerHTML = items.join("");
  });
}

function renderGuide() {
  document.querySelectorAll(".category-guide").forEach((guide) => {
    const categories = guideCategories.length ? guideCategories : catalog.categories;

    guide.innerHTML = categories
      .map((category, index) => {
        const image = category.imageUrl || "";
        const linkedCategory = category.categoryId || category.id;
        const adminEdit = isAdminMode()
          ? `<button class="admin-edit-btn guide-edit-btn" type="button" data-edit-category="${escapeHtml(category.id)}">Редактировать</button>`
          : "";
        return `
          <article class="guide-card ${isAdminMode() ? "is-editable" : ""}" role="button" tabindex="0" data-guide-card="${escapeHtml(category.id)}" data-category-link="${escapeHtml(linkedCategory)}" style='--guide-image: url("${escapeHtml(image)}")'>
            <span class="guide-thumb" aria-hidden="true"></span>
            <span class="guide-number">${String(index + 1).padStart(2, "0")}</span>
            ${adminEdit}
            <h3>${escapeHtml(category.name)}</h3>
            <span class="guide-examples">${escapeHtml(category.examples || "Смотреть товары")}</span>
            <span class="guide-action">Открыть</span>
          </article>
        `;
      })
      .join("");
  });
}

function renderFilters() {
  if (!categoryFilters) return;

  const counts = catalog.products.reduce((map, product) => {
    map.set(product.categoryId, (map.get(product.categoryId) || 0) + 1);
    return map;
  }, new Map());

  const categories = [
    { id: "all", name: "Все", count: catalog.products.length },
    ...catalog.categories
      .filter((category) => counts.has(category.id))
      .map((category) => ({ ...category, count: counts.get(category.id) || 0 })),
  ];

  categoryFilters.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-chip ${state.category === category.id ? "active" : ""}" data-category="${escapeHtml(category.id)}" type="button">${escapeHtml(category.name)}<span>${category.count}</span></button>`,
    )
    .join("");
}

function filteredProducts() {
  const query = state.search.trim().toLowerCase();

  return catalog.products.filter((product) => {
    const category = productCategory(product);
    const categoryMatch = state.category === "all" || product.categoryId === state.category;
    const queryMatch =
      !query ||
      [product.name, category.name, category.examples].some((value) =>
        String(value || "").toLowerCase().includes(query),
      );

    return categoryMatch && queryMatch;
  });
}

function renderProducts() {
  if (!productGrid || !resultCount) return;

  const visibleProducts = filteredProducts();
  const unit = isWholesaleMode
    ? plural(visibleProducts.length, "вид товара", "вида товаров", "видов товаров")
    : plural(visibleProducts.length, "товар", "товара", "товаров");
  resultCount.textContent = `${visibleProducts.length} ${unit}`;

  if (!visibleProducts.length) {
    productGrid.innerHTML = `<div class="empty-state">По этим фильтрам товаров нет.</div>`;
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const category = productCategory(product);
      const rating = product.rating
        ? `${Number(product.rating).toFixed(1)} / ${money(product.reviews || 0)} отзывов`
        : "Рейтинг уточняется";
      const stock = Number.isFinite(Number(product.stock)) ? `${money(product.stock)} шт.` : "Остаток уточнить";
      const productPrice = currentPrice(product);
      const oldPrice = isWholesaleMode
        ? `<span class="old-price price-note">розн. ${money(product.retailPrice)} ₽</span>`
        : product.oldPrice
          ? `<span class="old-price">${money(product.oldPrice)} ₽</span>`
          : "";
      const inQuote = quote.has(product.id);
      const image = imageForProduct(product);
      const adminEdit = isAdminMode()
        ? `<button class="admin-edit-btn" type="button" data-edit-product="${escapeHtml(product.id)}">Редактировать</button>`
        : "";

      return `
        <article class="product-card ${isAdminMode() ? "is-editable" : ""}" data-product-card="${escapeHtml(product.id)}">
          <div class="product-image" style='--thumb: url("${escapeHtml(image)}")' data-initial="${escapeHtml(categoryInitials(category.name))}">
            <div class="badge-row">${productBadges(product)}</div>
            ${adminEdit}
          </div>
          <div class="product-body">
            <span class="product-store">REZERV / ${escapeHtml(category.name)}</span>
            <h3 class="product-title">${escapeHtml(product.name)}</h3>
            <div class="price-line">
              <span class="price">${isWholesaleMode ? "от " : ""}${money(productPrice)} ₽</span>
              ${oldPrice}
            </div>
            <div class="product-meta">
              <span>${escapeHtml(rating)}</span>
              <span>${escapeHtml(stock)}</span>
            </div>
            <button class="add-btn ${inQuote ? "added" : ""}" type="button" data-add="${escapeHtml(product.id)}">
              ${inQuote ? "В заявке" : "В заявку"}
            </button>
            <button class="detail-link" type="button" data-detail-product="${escapeHtml(product.id)}">Подробнее</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderStats() {
  if (skuCount) skuCount.textContent = catalog.products.length;
  if (categoryCount) categoryCount.textContent = guideCategories.length || catalog.categories.length;

  const ratings = catalog.products.filter((product) => product.rating).map((product) => Number(product.rating));
  const average = ratings.length ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0;
  if (avgRating) avgRating.textContent = average ? average.toFixed(1) : "—";
}

function productDescription(product) {
  if (product.description) return product.description;

  const category = productCategory(product);
  const parts = [
    `Категория: ${category.name}.`,
    isWholesaleMode
      ? "Оптовая цена указана как стартовая, финальная цена зависит от объема партии."
      : "Розничная цена указана для поштучного заказа.",
    Number.isFinite(Number(product.stock))
      ? `Текущий ориентир по остатку: ${money(product.stock)} шт.`
      : "Остаток нужно уточнить перед заказом.",
  ];

  return parts.join(" ");
}

function updateQuote() {
  const items = [...quote.values()];
  const total = items.reduce((sum, product) => sum + currentPrice(product), 0);

  if (quoteCount) quoteCount.textContent = items.length;
  if (quoteTotal) quoteTotal.textContent = `${isWholesaleMode ? "от " : ""}${money(total)} ₽`;
  quoteBar?.classList.toggle("visible", items.length > 0);
  if (!quoteTextarea) return;

  quoteTextarea.value = items
    .map(
      (product, index) =>
        `${index + 1}. ${product.name} - ${isWholesaleMode ? "от " : ""}${money(currentPrice(product))} ₽`,
    )
    .join("\n");
}

function renderAll() {
  rebuildCategoryMap();
  renderAuthLinks();
  renderContactLists();
  renderGuide();
  renderStats();
  renderFilters();
  renderProducts();
  updateQuote();
}

function categoryOptions(selectedId) {
  return catalog.categories
    .map(
      (category) =>
        `<option value="${escapeHtml(category.id)}" ${category.id === selectedId ? "selected" : ""}>${escapeHtml(category.name)}</option>`,
    )
    .join("");
}

function guideCategoryOptions(selectedId) {
  return [
    `<option value="" ${selectedId ? "" : "selected"}>Не привязывать к фильтру</option>`,
    ...catalog.categories.map(
      (category) =>
        `<option value="${escapeHtml(category.id)}" ${category.id === selectedId ? "selected" : ""}>${escapeHtml(category.name)}</option>`,
    ),
  ].join("");
}

function ensureGuideCategoryEditor() {
  let modal = document.querySelector("#guideCategoryEditModal");
  if (modal) return modal;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="modal-backdrop" id="guideCategoryEditModal" hidden>
        <form class="product-edit-modal" id="guideCategoryEditForm">
          <div class="modal-head">
            <div>
              <p class="eyebrow">Админ</p>
              <h2>Редактировать направление</h2>
            </div>
            <button class="icon-btn" type="button" data-close-category-editor>Закрыть</button>
          </div>
          <input type="hidden" name="id" />
          <div class="edit-preview large" data-category-modal-preview></div>
          <div class="edit-fields product-fields">
            <label class="wide">
              <span>Название</span>
              <input name="name" required />
            </label>
            <label class="wide">
              <span>Подпись</span>
              <input name="examples" />
            </label>
            <label>
              <span>Фильтр каталога при клике</span>
              <select name="categoryId"></select>
            </label>
            <label class="wide">
              <span>Фото URL</span>
              <input name="imageUrl" />
            </label>
            <label>
              <span>Загрузить фото</span>
              <input name="imageFile" type="file" accept="image/*" />
            </label>
          </div>
          <button class="primary-btn wide" type="submit">Сохранить направление</button>
          <p class="form-note" data-category-editor-note role="status"></p>
        </form>
      </div>
    `,
  );
  return document.querySelector("#guideCategoryEditModal");
}

function ensureProductEditor() {
  let modal = document.querySelector("#productEditModal");
  if (modal) return modal;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="modal-backdrop" id="productEditModal" hidden>
        <form class="product-edit-modal" id="productEditForm">
          <div class="modal-head">
            <div>
              <p class="eyebrow">Админ</p>
              <h2>Редактировать товар</h2>
            </div>
            <button class="icon-btn" type="button" data-close-editor>Закрыть</button>
          </div>
          <input type="hidden" name="id" />
          <div class="edit-preview large" data-modal-preview></div>
          <div class="edit-fields product-fields">
            <label class="wide">
              <span>Название</span>
              <input name="name" required />
            </label>
            <label>
              <span>Категория</span>
              <select name="categoryId"></select>
            </label>
            <label>
              <span>Розница, ₽</span>
              <input name="retailPrice" type="number" min="0" />
            </label>
            <label>
              <span>Опт, ₽</span>
              <input name="wholesalePrice" type="number" min="0" />
            </label>
            <label>
              <span>Старая цена, ₽</span>
              <input name="oldPrice" type="number" min="0" />
            </label>
            <label>
              <span>Остаток</span>
              <input name="stock" type="number" min="0" />
            </label>
            <label>
              <span>Рейтинг</span>
              <input name="rating" type="number" min="0" max="5" step="0.1" />
            </label>
            <label>
              <span>Отзывы</span>
              <input name="reviews" type="number" min="0" />
            </label>
            <label class="wide">
              <span>Фото URL</span>
              <input name="imageUrl" />
            </label>
            <label>
              <span>Загрузить фото</span>
              <input name="imageFile" type="file" accept="image/*" />
            </label>
            <label class="check-field">
              <input name="visible" type="checkbox" />
              <span>Показывать на сайте</span>
            </label>
          </div>
          <button class="primary-btn wide" type="submit">Сохранить карточку</button>
          <p class="form-note" data-editor-note role="status"></p>
        </form>
      </div>
    `,
  );
  return document.querySelector("#productEditModal");
}

function ensureProductDetail() {
  let modal = document.querySelector("#productDetailModal");
  if (modal) return modal;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="modal-backdrop" id="productDetailModal" hidden>
        <article class="product-detail-modal">
          <button class="detail-close icon-btn" type="button" data-close-detail>Закрыть</button>
          <div class="detail-media" data-detail-media></div>
          <div class="detail-content">
            <p class="eyebrow" data-detail-category></p>
            <h2 data-detail-title></h2>
            <p class="detail-description" data-detail-description></p>
            <dl class="detail-specs">
              <div>
                <dt>Цена</dt>
                <dd data-detail-price></dd>
              </div>
              <div>
                <dt>Розница</dt>
                <dd data-detail-retail></dd>
              </div>
              <div>
                <dt>Остаток</dt>
                <dd data-detail-stock></dd>
              </div>
              <div>
                <dt>Рейтинг</dt>
                <dd data-detail-rating></dd>
              </div>
            </dl>
            <button class="primary-btn" type="button" data-detail-add>Добавить в заявку</button>
          </div>
        </article>
      </div>
    `,
  );
  return document.querySelector("#productDetailModal");
}

function openProductDetail(productId) {
  const product = catalog.products.find((item) => item.id === productId);
  if (!product) return;

  const category = productCategory(product);
  const modal = ensureProductDetail();
  modal.dataset.productId = product.id;
  modal.querySelector("[data-detail-media]").style.setProperty("--detail-image", `url("${imageForProduct(product)}")`);
  modal.querySelector("[data-detail-category]").textContent = `REZERV / ${category.name}`;
  modal.querySelector("[data-detail-title]").textContent = product.name;
  modal.querySelector("[data-detail-description]").textContent = productDescription(product);
  modal.querySelector("[data-detail-price]").textContent = `${isWholesaleMode ? "от " : ""}${money(currentPrice(product))} ₽`;
  modal.querySelector("[data-detail-retail]").textContent = product.retailPrice ? `${money(product.retailPrice)} ₽` : "по запросу";
  modal.querySelector("[data-detail-stock]").textContent = Number.isFinite(Number(product.stock))
    ? `${money(product.stock)} шт.`
    : "уточнить";
  modal.querySelector("[data-detail-rating]").textContent = product.rating
    ? `${Number(product.rating).toFixed(1)} / ${money(product.reviews || 0)} отзывов`
    : "уточняется";
  modal.hidden = false;
  window.rezervTrack?.("product_view", {
    productId: product.id,
    article: product.article || "",
    name: product.name,
    categoryId: product.categoryId,
    price: currentPrice(product),
  });
}

function toNullableNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function openGuideCategoryEditor(categoryId) {
  if (!isAdminMode()) return;

  const category = guideCategories.find((item) => item.id === categoryId);
  if (!category) return;

  const modal = ensureGuideCategoryEditor();
  const form = modal.querySelector("#guideCategoryEditForm");
  const preview = modal.querySelector("[data-category-modal-preview]");
  form.elements.id.value = category.id;
  form.elements.name.value = category.name || "";
  form.elements.examples.value = category.examples || "";
  form.elements.categoryId.innerHTML = guideCategoryOptions(category.categoryId || "");
  form.elements.imageUrl.value = category.imageUrl || "";
  preview.style.setProperty("--preview", `url("${category.imageUrl || ""}")`);
  modal.hidden = false;
  form.elements.name.focus();
}

function openProductEditor(productId) {
  if (!isAdminMode()) return;

  const product = catalog.products.find((item) => item.id === productId);
  if (!product) return;

  const modal = ensureProductEditor();
  const form = modal.querySelector("#productEditForm");
  const preview = modal.querySelector("[data-modal-preview]");
  form.elements.id.value = product.id;
  form.elements.name.value = product.name || "";
  form.elements.categoryId.innerHTML = categoryOptions(product.categoryId);
  form.elements.retailPrice.value = product.retailPrice ?? "";
  form.elements.wholesalePrice.value = product.wholesalePrice ?? "";
  form.elements.oldPrice.value = product.oldPrice ?? "";
  form.elements.stock.value = product.stock ?? "";
  form.elements.rating.value = product.rating ?? "";
  form.elements.reviews.value = product.reviews ?? "";
  form.elements.imageUrl.value = product.imageUrl || "";
  form.elements.visible.checked = product.visible !== false;
  preview.style.setProperty("--preview", `url("${imageForProduct(product)}")`);
  modal.hidden = false;
  form.elements.name.focus();
}

async function uploadAdminImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("/api/admin/upload", {
    method: "POST",
    credentials: "same-origin",
    body: formData,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Не удалось загрузить фото");
  return data.url;
}

async function saveGuideCategoryFromModal(form) {
  const note = form.querySelector("[data-category-editor-note]");
  const category = guideCategories.find((item) => item.id === form.elements.id.value);
  if (!category) return;

  try {
    note.textContent = "Сохраняю...";
    const file = form.elements.imageFile.files?.[0];
    const imageUrl = file ? await uploadAdminImage(file) : form.elements.imageUrl.value.trim();

    Object.assign(category, {
      name: form.elements.name.value.trim(),
      examples: form.elements.examples.value.trim(),
      categoryId: form.elements.categoryId.value,
      imageUrl,
    });

    guideCategories = await requestJson("/api/admin/categories", {
      method: "PUT",
      body: JSON.stringify(guideCategories),
    });
    ensureGuideCategoryEditor().hidden = true;
    renderGuide();
  } catch (error) {
    note.textContent = error.message || "Не удалось сохранить направление.";
  }
}

async function saveProductFromModal(form) {
  const note = form.querySelector("[data-editor-note]");
  const product = catalog.products.find((item) => item.id === form.elements.id.value);
  if (!product) return;

  try {
    note.textContent = "Сохраняю...";
    const file = form.elements.imageFile.files?.[0];
    const imageUrl = file ? await uploadAdminImage(file) : form.elements.imageUrl.value.trim();

    Object.assign(product, {
      name: form.elements.name.value.trim(),
      categoryId: form.elements.categoryId.value,
      retailPrice: toNullableNumber(form.elements.retailPrice.value) || 0,
      wholesalePrice: toNullableNumber(form.elements.wholesalePrice.value) || 0,
      oldPrice: toNullableNumber(form.elements.oldPrice.value),
      stock: toNullableNumber(form.elements.stock.value),
      rating: toNullableNumber(form.elements.rating.value),
      reviews: toNullableNumber(form.elements.reviews.value),
      imageUrl,
      visible: form.elements.visible.checked,
    });

    catalog = await requestJson("/api/admin/catalog", {
      method: "PUT",
      body: JSON.stringify(catalog),
    });
    quote.delete(product.id);
    ensureProductEditor().hidden = true;
    renderAll();
  } catch (error) {
    note.textContent = error.message || "Не удалось сохранить карточку.";
  }
}

applyTheme(isDrMixPage ? "light" : isScoutMiniPage ? "dark" : readStoredTheme() || document.documentElement.dataset.theme || "light");

themeToggle?.addEventListener("click", () => {
  if (isDrMixPage || isScoutMiniPage) return;
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  writeStoredTheme(nextTheme);
});

categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  renderFilters();
  renderProducts();
});

document.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-category]");
  if (editButton) {
    event.preventDefault();
    openGuideCategoryEditor(editButton.dataset.editCategory);
    return;
  }

  const link = event.target.closest("[data-category-link]");
  if (!link) return;
  const catalogSection = document.querySelector("#catalog");
  if (!catalogSection || !categoryFilters) return;

  event.preventDefault();
  state.category = link.dataset.categoryLink;
  renderFilters();
  renderProducts();
  catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-category-link]");
  if (!card) return;
  event.preventDefault();
  card.click();
});

searchInput?.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

clearFilters?.addEventListener("click", () => {
  state.category = "all";
  state.search = "";
  if (searchInput) searchInput.value = "";
  renderFilters();
  renderProducts();
});

productGrid?.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-product]");
  if (editButton) {
    event.preventDefault();
    openProductEditor(editButton.dataset.editProduct);
    return;
  }

  const detailButton = event.target.closest("[data-detail-product]");
  if (detailButton) {
    event.preventDefault();
    openProductDetail(detailButton.dataset.detailProduct);
    return;
  }

  const button = event.target.closest("[data-add]");
  if (!button && isAdminMode()) {
    const card = event.target.closest("[data-product-card]");
    if (card) openProductEditor(card.dataset.productCard);
    return;
  }

  if (!button) {
    const card = event.target.closest("[data-product-card]");
    if (card) openProductDetail(card.dataset.productCard);
    return;
  }

  if (!button) return;

  const product = catalog.products.find((item) => item.id === button.dataset.add);
  if (!product) return;

  if (quote.has(product.id)) {
    quote.delete(product.id);
    window.rezervTrack?.("quote_remove", {
      productId: product.id,
      article: product.article || "",
      name: product.name,
      categoryId: product.categoryId,
      price: currentPrice(product),
    });
  } else {
    quote.set(product.id, product);
    window.rezervTrack?.("quote_add", {
      productId: product.id,
      article: product.article || "",
      name: product.name,
      categoryId: product.categoryId,
      price: currentPrice(product),
    });
  }

  updateQuote();
  renderProducts();
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-category-editor]")) {
    ensureGuideCategoryEditor().hidden = true;
  }

  if (event.target.closest("[data-close-editor]")) {
    ensureProductEditor().hidden = true;
  }

  if (event.target.closest("[data-close-detail]")) {
    ensureProductDetail().hidden = true;
  }

  const detailAdd = event.target.closest("[data-detail-add]");
  if (detailAdd) {
    const modal = ensureProductDetail();
    const product = catalog.products.find((item) => item.id === modal.dataset.productId);
    if (product) {
      quote.set(product.id, product);
      window.rezervTrack?.("quote_add", {
        productId: product.id,
        article: product.article || "",
        name: product.name,
        categoryId: product.categoryId,
        price: currentPrice(product),
        source: "product_detail",
      });
      updateQuote();
      renderProducts();
      modal.hidden = true;
      document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

document.addEventListener("submit", (event) => {
  const categoryForm = event.target.closest("#guideCategoryEditForm");
  if (categoryForm) {
    event.preventDefault();
    saveGuideCategoryFromModal(categoryForm);
    return;
  }

  const form = event.target.closest("#productEditForm");
  if (!form) return;
  event.preventDefault();
  saveProductFromModal(form);
});

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (formNote) formNote.textContent = "Отправляем заявку...";

  const formData = new FormData(leadForm);
  const payload = {
    name: formData.get("name"),
    contact: formData.get("contact"),
    format: formData.get("format") || (isWholesaleMode ? "Оптовая закупка" : "Розница"),
    products: quoteTextarea?.value || formData.get("products") || "",
    page: document.body.dataset.page || "",
    priceMode,
  };

  try {
    window.rezervTrack?.("lead_submit", {
      format: payload.format,
      priceMode: payload.priceMode,
      productCount: quote.size,
    });
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Lead was not saved");
    window.rezervTrack?.("lead_success", {
      format: payload.format,
      priceMode: payload.priceMode,
      productCount: quote.size,
    });
    if (formNote) formNote.textContent = "Заявка отправлена. Мы свяжемся с вами по указанному контакту.";
    leadForm.reset();
    quote.clear();
    updateQuote();
    renderProducts();
  } catch {
    if (formNote) {
      formNote.textContent = "Не удалось отправить заявку. Напишите нам напрямую по телефону, email или Telegram из блока контактов.";
    }
  }
});

paymentForm?.elements.quantity?.addEventListener("change", updatePaymentTotal);

paymentForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!paymentConfigState?.available) {
    if (paymentNote) {
      paymentNote.textContent = "Оплата на сайте пока не активирована. Напишите нам через форму вопроса.";
    }
    return;
  }

  const formData = new FormData(paymentForm);
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const delivery = String(formData.get("delivery") || "").trim();
  const comment = String(formData.get("comment") || "").trim();
  const orderComment = [delivery ? `Доставка: ${delivery}` : "", comment].filter(Boolean).join("\n");

  if (!email && !phone) {
    if (paymentNote) paymentNote.textContent = "Укажите email или телефон для электронного чека.";
    return;
  }

  if (paymentNote) paymentNote.textContent = "Создаем платеж в ЮKassa...";
  if (paymentSubmit) paymentSubmit.disabled = true;

  try {
    window.rezervTrack?.("payment_start", {
      productId: paymentConfigState.product?.id || "dr-mix",
      quantity: formData.get("quantity"),
      provider: "yookassa",
    });

    const response = await fetch("/api/payments/yookassa/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email,
        phone,
        quantity: formData.get("quantity"),
        comment: orderComment,
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.confirmationUrl) throw new Error(data.error || "Payment was not created");

    window.rezervTrack?.("payment_redirect", {
      orderId: data.order?.id || "",
      provider: "yookassa",
    });
    window.location.href = data.confirmationUrl;
  } catch (error) {
    if (paymentNote) paymentNote.textContent = error.message || "Не удалось создать платеж. Напишите нам через форму вопроса.";
    if (paymentSubmit) paymentSubmit.disabled = false;
  }
});

Promise.resolve()
  .then(async () => {
    currentUser = await fetchSession();
    const [catalogData, categoryData, drMixContentData] = await Promise.all([
      fetchCatalog(isAdminMode()),
      fetchGuideCategories(isAdminMode()),
      fetchDrMixContent(),
    ]);
    return { catalogData, categoryData, drMixContentData };
  })
  .then(({ catalogData, categoryData, drMixContentData }) => {
    catalog = {
      contacts: catalogData.contacts || {},
      categories: Array.isArray(catalogData.categories) ? catalogData.categories : [],
      products: Array.isArray(catalogData.products) ? catalogData.products : [],
    };
    guideCategories = Array.isArray(categoryData) ? categoryData : [];
    applyDrMixContent(drMixContentData);
    renderAll();
    return initPayment();
  })
  .then(showReturnedOrderStatus)
  .catch(() => {
    renderContactLists();
    syncPaymentAuthState();
    if (productGrid) {
      productGrid.innerHTML = `<div class="empty-state">Каталог не загрузился. Запустите backend через <strong>node server.js</strong>.</div>`;
    }
  });
