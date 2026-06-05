/* global React, ReactDOM, HomePage, CatalogPage, ProductPage, CartPage, AccountPage, Header, Footer, QuickView, ProductEditorModal, AppCtx */
const { useState, useEffect, useMemo, useCallback } = React;

function App() {
  const [mode, setModeRaw] = useState(() => document.documentElement.dataset.mode || "retail");
  const [route, setRoute] = useState({ name: "home" });
  const [catalog, setCatalog] = useState(window.REZERV_DATA);
  const [currentUser, setCurrentUser] = useState(null);
  const [backendError, setBackendError] = useState("");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [quick, setQuick] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [guideCategories, setGuideCategories] = useState([]);

  // Tweaks
  const defaults = window.REZERV_TWEAK_DEFAULTS;
  const [tweaks, setTweak] = window.useTweaks(defaults);

  // Apply tweaks to root
  useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme || "light";
    document.documentElement.dataset.density = tweaks.density || "comfortable";
    try { localStorage.setItem("rezerv-tweaks", JSON.stringify(tweaks)); } catch {}
  }, [tweaks]);

  const requestJson = useCallback(async (path, options = {}) => {
    const response = await fetch(path, {
      credentials: "same-origin",
      headers: options.body ? { "Content-Type": "application/json", ...(options.headers || {}) } : options.headers,
      ...options,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Ошибка запроса");
    return data;
  }, []);

  useEffect(() => {
    let alive = true;

    async function boot() {
      if (window.location.protocol === "file:") return;

      try {
        const [catalogData, directionData, sessionData] = await Promise.all([
          fetch("/api/catalog", { cache: "no-store", credentials: "same-origin" }).then((r) => {
            if (!r.ok) throw new Error("Каталог недоступен");
            return r.json();
          }),
          fetch("/api/categories", { cache: "no-store", credentials: "same-origin" }).then((r) => {
            if (!r.ok) return [];
            return r.json();
          }).catch(() => []),
          requestJson("/api/auth/session"),
        ]);

        if (!alive) return;
        window.REZERV_DATA = catalogData;
        setCatalog(catalogData);
        setGuideCategories(directionData.length ? directionData : catalogData.categories || []);
        setCurrentUser(sessionData.user || null);
        setBackendError("");
      } catch (error) {
        if (!alive) return;
        setBackendError(error.message || "Бэкенд недоступен, показаны резервные данные.");
      }
    }

    boot();
    return () => { alive = false; };
  }, [requestJson]);

  const setMode = useCallback((m) => {
    setModeRaw(m);
    document.documentElement.dataset.mode = m;
    window.rezervTrack?.("mode_change", { mode: m });
  }, []);

  const go = useCallback((r) => {
    setRoute(r);
    setTimeout(() => {
      if (r.scrollTo) {
        const el = document.getElementById(r.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 30);
  }, []);

  useEffect(() => {
    window.rezervTrack?.("page_view", {
      route: route.name,
      productId: route.id || "",
      category: route.category || "",
      mode,
    });
  }, [mode, route]);

  const addToCart = useCallback((product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { id: product.id, qty }];
    });
    window.rezervTrack?.("cart_add", {
      productId: product.id,
      article: product.article || "",
      name: product.name,
      categoryId: product.categoryId,
      qty,
      price: mode === "wholesale" ? product.wholesalePrice : product.retailPrice,
      mode,
    });
  }, [mode]);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  }, [removeFromCart]);

  const toggleFav = useCallback((id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, []);

  const authUrl = useCallback(() => {
    const next = `${window.location.pathname}${window.location.hash || ""}`;
    return `auth.html?return=${encodeURIComponent(next || "/REZERV.html")}`;
  }, []);

  const goLogin = useCallback(() => {
    window.location.href = authUrl();
  }, [authUrl]);

  const logout = useCallback(async () => {
    await requestJson("/api/auth/logout", { method: "POST" });
    setCurrentUser(null);
    setRoute({ name: "home" });
  }, [requestJson]);

  const submitLead = useCallback(async ({ name, contact, format, products: leadProducts, page }) => {
    window.rezervTrack?.("lead_submit", { format, page, priceMode: mode });
    const data = await requestJson("/api/leads", {
      method: "POST",
      body: JSON.stringify({
        name,
        contact,
        format,
        products: leadProducts,
        page,
        priceMode: mode,
      }),
    });
    window.rezervTrack?.("lead_success", { format, page, priceMode: mode });
    return data.lead;
  }, [mode, requestJson]);

  const openProductEditor = useCallback((product) => {
    if (currentUser?.role !== "admin") return;
    setEditingProduct({ ...product });
  }, [currentUser]);

  const closeProductEditor = useCallback(() => setEditingProduct(null), []);

  const saveProductEdits = useCallback(async (nextProduct) => {
    if (currentUser?.role !== "admin") throw new Error("Редактирование доступно только администратору.");

    const updatedCatalog = {
      ...catalog,
      products: (catalog.products || []).map(product =>
        product.id === nextProduct.id ? { ...product, ...nextProduct } : product
      ),
    };

    const savedCatalog = await requestJson("/api/admin/catalog", {
      method: "PUT",
      body: JSON.stringify(updatedCatalog),
    });

    window.REZERV_DATA = savedCatalog;
    setCatalog(savedCatalog);
    setEditingProduct(null);
    return savedCatalog;
  }, [catalog, currentUser, requestJson]);

  const products = catalog.products || [];

  const ctx = {
    mode, setMode,
    route, go,
    catalog,
    contacts: catalog.contacts || {},
    categories: catalog.categories || [],
    guideCategories: guideCategories.length ? guideCategories : catalog.categories || [],
    currentUser,
    backendError,
    authUrl,
    goLogin,
    logout,
    submitLead,
    cart, addToCart, removeFromCart, updateQty,
    favorites, toggleFav,
    products,
    openQuick: (product) => {
      setQuick(product);
      window.rezervTrack?.("product_view", {
        productId: product.id,
        article: product.article || "",
        name: product.name,
        categoryId: product.categoryId,
        price: mode === "wholesale" ? product.wholesalePrice : product.retailPrice,
        source: "quick_view",
      });
    },
    openProductEditor,
    closeProductEditor,
    saveProductEdits,
    tweaks, setTweak,
  };

  return (
    <AppCtx.Provider value={ctx}>
      <Header />
      {route.name === "home" && <HomePage />}
      {route.name === "catalog" && <CatalogPage />}
      {route.name === "product" && <ProductPage id={route.id} />}
      {route.name === "cart" && <CartPage />}
      {route.name === "account" && <AccountPage />}
      <Footer />

      {quick && <QuickView product={quick} onClose={() => setQuick(null)} />}
      {editingProduct && (
        <ProductEditorModal
          product={editingProduct}
          onClose={closeProductEditor}
          onSave={saveProductEdits}
        />
      )}

      <RezervTweaks tweaks={tweaks} setTweak={setTweak} mode={mode} setMode={setMode} />
    </AppCtx.Provider>
  );
}

function RezervTweaks({ tweaks, setTweak, mode, setMode }) {
  const { TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSelect } = window;
  if (!TweaksPanel) return null;
  return (
    <TweaksPanel title="РЕЗЕРВ — Tweaks">
      <TweakSection label="Режим витрины" />
      <TweakRadio
        label="Витрина"
        value={mode}
        onChange={setMode}
        options={[
          { value: "retail", label: "Розница" },
          { value: "wholesale", label: "Опт" },
        ]}
      />
      <TweakSection label="Внешний вид" />
      <TweakRadio
        label="Тема"
        value={tweaks.theme}
        onChange={(v) => setTweak("theme", v)}
        options={[
          { value: "light", label: "Свет" },
          { value: "dark", label: "Тёмн." },
        ]}
      />
      <TweakRadio
        label="Сетка"
        value={tweaks.density}
        onChange={(v) => setTweak("density", v)}
        options={[
          { value: "airy", label: "3" },
          { value: "comfortable", label: "4" },
          { value: "dense", label: "5" },
        ]}
      />
      <TweakSection label="B2B-карточка" />
      <TweakToggle
        label="Показывать маржу"
        value={tweaks.showWholesalePrices}
        onChange={(v) => setTweak("showWholesalePrices", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
