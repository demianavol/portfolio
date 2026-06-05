/* global React */
const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } = React;

/* ============ Icons (inline SVG) ============ */
const Icon = ({ name, size = 18 }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    cart:   <><path d="M3 4h2.5l2 12.5a2 2 0 0 0 2 1.5H18a2 2 0 0 0 2-1.5L21.5 8H6"/><circle cx="9.5" cy="20.5" r="1.5"/><circle cx="17.5" cy="20.5" r="1.5"/></>,
    user:   <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
    heart:  <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/>,
    heartFilled: <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" fill="currentColor"/>,
    plus:   <><path d="M12 5v14"/><path d="M5 12h14"/></>,
    minus:  <path d="M5 12h14"/>,
    x:      <><path d="M6 6 18 18"/><path d="M18 6 6 18"/></>,
    arrow:  <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>,
    grid:   <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    grid5:  <><rect x="3" y="3" width="4.5" height="4.5"/><rect x="9.75" y="3" width="4.5" height="4.5"/><rect x="16.5" y="3" width="4.5" height="4.5"/><rect x="3" y="9.75" width="4.5" height="4.5"/><rect x="9.75" y="9.75" width="4.5" height="4.5"/></>,
    download: <><path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M4 20h16"/></>,
    check:  <path d="m4 12 5 5L20 6"/>,
    chev:   <path d="m9 6 6 6-6 6"/>,
    bag:    <><path d="M6 8h12l-1 12H7Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
    box:    <><path d="M3 7 12 3l9 4-9 4Z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></>,
    truck:  <><path d="M3 16V6h11v10"/><path d="M14 9h4l3 4v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
    shield: <path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6Z"/>,
    spark:  <path d="M12 3v6m0 6v6M3 12h6m6 0h6m-3-7L13 9m4 8-4-4M5 5l4 4m-4 8 4-4"/>,
    sun:    <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>,
    moon:   <path d="M20 14.4A7.5 7.5 0 0 1 9.6 4a7.5 7.5 0 1 0 10.4 10.4Z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

/* ============ App contexts ============ */
const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);

const formatPrice = (n) => new Intl.NumberFormat("ru-RU").format(n) + "\u00A0₽";

/* ============ Top bar ============ */
function TopBar() {
  const { mode, setMode, tweaks, setTweak } = useApp();
  const isDark = tweaks.theme === "dark";
  return (
    <div className="topbar">
      <div className="topbar-info">
        <span><span className="dot"></span>Набережные Челны</span>
        <span className="topbar-hide-mid">Доставка СДЭК · пункт выдачи МагнитМаркет</span>
      </div>
      <div className="topbar-center">
        <div className="mode-switch" role="tablist" aria-label="Формат покупки">
          <button className={mode === "retail" ? "active" : ""} onClick={() => setMode("retail")}>Розница</button>
          <button className={mode === "wholesale" ? "active" : ""} onClick={() => setMode("wholesale")}>Опт · B2B</button>
        </div>
      </div>
      <div className="topbar-actions">
        <a href="#contacts" className="topbar-hide-mid">+7 929 721-45-87</a>
        <a href="mailto:rezervcorporation@gmail.com" className="topbar-hide-mid">rezervcorporation@gmail.com</a>
        <button
          className="topbar-theme"
          type="button"
          aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
          aria-pressed={String(isDark)}
          onClick={() => setTweak("theme", isDark ? "light" : "dark")}
        >
          <Icon name={isDark ? "sun" : "moon"} size={16} />
        </button>
      </div>
    </div>
  );
}

/* ============ Header ============ */
function Header() {
  const { route, go, cart, mode, favorites, currentUser, goLogin } = useApp();
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const openAccount = () => currentUser ? go({ name: "account" }) : goLogin();
  return (
    <header className="site-header">
      <TopBar />
      <div className="header-inner">
        <a className="brand" onClick={() => go({ name: "home" })} style={{cursor:"pointer"}}>
          <span className="brand-mark">Р</span>
          <strong>РЕЗЕРВ</strong>
        </a>
        <nav className="nav">
          <button className={route.name === "home" ? "active" : ""} onClick={() => go({ name: "home" })}>Главная</button>
          <button className={route.name === "catalog" ? "active" : ""} onClick={() => go({ name: "catalog" })}>Каталог</button>
          {mode === "wholesale" && (
            <button onClick={() => go({ name: "catalog", filter: "deals" })}>Прайс-лист</button>
          )}
          <button onClick={() => go({ name: "home", scrollTo: "contacts" })}>Контакты</button>
          <button onClick={openAccount}>{mode === "wholesale" ? "B2B-кабинет" : "Кабинет"}</button>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Поиск" onClick={() => go({ name: "catalog", focusSearch: true })}>
            <Icon name="search" />
          </button>
          <button className="icon-btn" aria-label="Избранное">
            <Icon name="heart" />
            {favorites.length > 0 && <span className="badge-count">{favorites.length}</span>}
          </button>
          <button className="icon-btn" aria-label="Корзина" onClick={() => go({ name: "cart" })}>
            <Icon name="cart" />
            {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
          </button>
          <button className="btn btn-ghost btn-sm" onClick={openAccount}>
            <Icon name="user" size={14} />
            <span style={{marginLeft: 6}}>{currentUser ? "Кабинет" : "Войти"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ============ Product card ============ */
function discountPct(now, old) {
  if (!old || old <= now) return 0;
  return Math.round((1 - now / old) * 100);
}

function ProductCard({ product, onQuick }) {
  const { mode, addToCart, cart, favorites, toggleFav, tweaks, categories, currentUser, openProductEditor } = useApp();
  const inCart = cart.find(i => i.id === product.id);
  const fav = favorites.includes(product.id);
  const isAdmin = currentUser?.role === "admin";
  const moq = window.REZERV_MOQ[product.categoryId] || window.REZERV_MOQ.default;
  const [qty, setQty] = useState(mode === "wholesale" ? moq : 1);

  const price = mode === "wholesale" ? product.wholesalePrice : product.retailPrice;
  const oldPrice = product.oldPrice;
  const disc = discountPct(price, oldPrice);
  const stock = product.stock ?? 0;
  const categoryImage = categories.find(c => c.id === product.categoryId)?.imageUrl || "";
  const image = product.imageUrl || categoryImage;

  const badges = [];
  if (disc >= 50) badges.push({ k: "sale", t: `−${disc}%` });
  else if (disc > 0) badges.push({ k: "sale", t: `−${disc}%` });
  if ((product.reviews || 0) > 100) badges.push({ k: "hit", t: "Хит" });
  if (mode === "wholesale") badges.push({ k: "opt", t: "B2B" });
  if (stock > 0 && stock <= 3) badges.push({ k: "low", t: `Осталось ${stock}` });

  const stars = product.rating ? "★".repeat(Math.round(product.rating)) + "☆".repeat(5 - Math.round(product.rating)) : null;

  return (
    <article className="product-card">
      <div className="product-img">
        <div className="badge-row">
          {badges.slice(0, 2).map(b => <span key={b.k+b.t} className={`badge ${b.k}`}>{b.t}</span>)}
        </div>
        <button className={`fav-btn ${fav ? "active" : ""}`} onClick={(e)=>{e.stopPropagation(); toggleFav(product.id);}} aria-label="В избранное">
          <Icon name={fav ? "heartFilled" : "heart"} size={15} />
        </button>
        {isAdmin && (
          <button
            className="admin-card-edit"
            type="button"
            onClick={(e) => { e.stopPropagation(); openProductEditor(product); }}
          >
            Редактировать
          </button>
        )}
        {image
          ? <img src={image} alt={product.name} onError={(e)=>{e.target.style.display="none";}} />
          : <div className="placeholder">{product.categoryId.replace(/-/g," ")}<br/>фото товара</div>
        }
        <button className="quick-view" onClick={() => onQuick(product)}>Быстрый просмотр</button>
      </div>

      <div className="product-body">
        <div className="product-name" title={product.name}>{product.name}</div>

        {stars && (
          <div className="product-rating">
            <span className="stars">{stars}</span>
            <span>{product.rating}</span>
            <span style={{opacity:0.6}}>· {product.reviews} отзывов</span>
          </div>
        )}

        <div className="price-row">
          <span className="price-now">{formatPrice(price)}</span>
          {oldPrice && oldPrice > price && <span className="price-old">{formatPrice(oldPrice)}</span>}
          {disc > 0 && <span className="price-discount">−{disc}%</span>}
        </div>

        <div className="stock-row">
          <span className={`stock-dot ${stock === 0 ? "out" : stock <= 3 ? "low" : ""}`}></span>
          {stock > 0 ? <span>В наличии · {stock} шт</span> : <span>Под заказ</span>}
        </div>

        {mode === "wholesale" && tweaks.showWholesalePrices && (
          <div className="wholesale-strip">
            <div className="row"><span>МЗ · мин. партия</span><strong>{moq} шт</strong></div>
            <div className="row"><span>Розн. цена</span><span>{formatPrice(product.retailPrice)}</span></div>
            <div className="row"><span>Маржа</span><strong style={{color:"var(--good)"}}>+{Math.round((product.retailPrice / price - 1) * 100)}%</strong></div>
          </div>
        )}

        <div className="add-row">
          <button
            className={`add-btn ${inCart ? "added" : ""}`}
            onClick={() => addToCart(product, qty)}
          >
            {inCart ? <><Icon name="check" size={14}/> В корзине · {inCart.qty}</> : "В корзину"}
          </button>
          {mode === "wholesale" && (
            <div className="qty-stepper">
              <button onClick={() => setQty(Math.max(moq, qty - moq))}><Icon name="minus" size={12}/></button>
              <input value={qty} onChange={e => setQty(parseInt(e.target.value)||moq)} className="mono" />
              <button onClick={() => setQty(qty + moq)}><Icon name="plus" size={12}/></button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function ProductEditorModal({ product, onClose, onSave }) {
  const { categories } = useApp();
  const [form, setForm] = useState(() => ({ ...product }));
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  if (!product) return null;

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const numberOrNull = (value) => value === "" || value == null ? null : Number(value);

  const uploadPhoto = async (file) => {
    if (!file) return;
    setUploading(true);
    setStatus("Загружаю фото...");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        credentials: "same-origin",
        body: formData,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Не удалось загрузить фото");
      update("imageUrl", data.url);
      setStatus("Фото загружено. Нажмите «Сохранить», чтобы применить к карточке.");
    } catch (error) {
      setStatus(error.message || "Не удалось загрузить фото.");
    } finally {
      setUploading(false);
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setStatus("Сохраняю...");
    try {
      await onSave({
        ...form,
        article: String(form.article || "").trim(),
        retailPrice: Number(form.retailPrice) || 0,
        wholesalePrice: Number(form.wholesalePrice) || 0,
        oldPrice: numberOrNull(form.oldPrice),
        stock: Number(form.stock) || 0,
        rating: numberOrNull(form.rating),
        reviews: Number(form.reviews) || 0,
        imageUrl: String(form.imageUrl || "").trim(),
        visible: form.visible !== false,
      });
      setStatus("");
    } catch (error) {
      setStatus(error.message || "Не удалось сохранить карточку.");
      setSaving(false);
    }
  };

  return (
    <div className="modal-backdrop admin-edit-backdrop" onClick={onClose}>
      <form className="admin-product-modal" onSubmit={submit} onClick={e => e.stopPropagation()}>
        <div className="admin-modal-head">
          <div>
            <span className="eyebrow">Админ · карточка товара</span>
            <h3>Редактировать товар</h3>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Закрыть">
            <Icon name="x" size={16}/>
          </button>
        </div>

        <label className="field field-wide">
          <span>Название</span>
          <input value={form.name || ""} onChange={e => update("name", e.target.value)} required />
        </label>

        <label className="field">
          <span>Артикул</span>
          <input value={form.article || ""} onChange={e => update("article", e.target.value)} placeholder="Артикул из Мой склад / XLSX" />
        </label>

        <label className="field">
          <span>Категория</span>
          <select value={form.categoryId || ""} onChange={e => update("categoryId", e.target.value)} required>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>

        <label className="field">
          <span>Остаток, шт</span>
          <input type="number" min="0" value={form.stock ?? 0} onChange={e => update("stock", e.target.value)} />
        </label>

        <label className="field">
          <span>Розница, ₽</span>
          <input type="number" min="0" value={form.retailPrice ?? 0} onChange={e => update("retailPrice", e.target.value)} required />
        </label>

        <label className="field">
          <span>Опт, ₽</span>
          <input type="number" min="0" value={form.wholesalePrice ?? 0} onChange={e => update("wholesalePrice", e.target.value)} required />
        </label>

        <label className="field">
          <span>Старая цена, ₽</span>
          <input type="number" min="0" value={form.oldPrice ?? ""} onChange={e => update("oldPrice", e.target.value)} />
        </label>

        <label className="field">
          <span>Рейтинг</span>
          <input type="number" min="0" max="5" step="0.1" value={form.rating ?? ""} onChange={e => update("rating", e.target.value)} />
        </label>

        <label className="field">
          <span>Отзывы</span>
          <input type="number" min="0" value={form.reviews ?? 0} onChange={e => update("reviews", e.target.value)} />
        </label>

        <label className="field field-wide">
          <span>Фото URL</span>
          <input value={form.imageUrl || ""} onChange={e => update("imageUrl", e.target.value)} placeholder="/uploads/photo.png или https://..." />
        </label>

        <div className="admin-photo-actions">
          <a
            className="btn btn-ghost admin-download-link"
            href={form.imageUrl || "#"}
            download
            aria-disabled={form.imageUrl ? "false" : "true"}
          >
            Скачать фото
          </a>
          <label className="btn btn-ghost admin-upload-button">
            {uploading ? "Загружаю..." : "Загрузить фото"}
            <input type="file" accept="image/*" disabled={uploading} onChange={e => uploadPhoto(e.target.files?.[0])} />
          </label>
          <span className="eyebrow">Формат 3:4, без обрезки</span>
        </div>

        <label className="admin-check field-wide">
          <input type="checkbox" checked={form.visible !== false} onChange={e => update("visible", e.target.checked)} />
          <span>Показывать товар на сайте</span>
        </label>

        {status && <p className="admin-modal-status">{status}</p>}

        <div className="admin-modal-actions">
          <a className="btn btn-ghost" href="admin.html">Открыть админку</a>
          <button className="btn btn-ghost" type="button" onClick={onClose}>Отмена</button>
          <button className="btn" type="submit" disabled={saving}>{saving ? "Сохраняю..." : "Сохранить"}</button>
        </div>
      </form>
    </div>
  );
}

/* ============ Quick view modal ============ */
function QuickView({ product, onClose }) {
  const { mode, addToCart, categories } = useApp();
  if (!product) return null;
  const price = mode === "wholesale" ? product.wholesalePrice : product.retailPrice;
  const disc = discountPct(price, product.oldPrice);
  const moq = window.REZERV_MOQ[product.categoryId] || window.REZERV_MOQ.default;
  const [qty, setQty] = useState(mode === "wholesale" ? moq : 1);
  const image = product.imageUrl || categories.find(c => c.id === product.categoryId)?.imageUrl || "";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{position:"relative"}}>
        <button className="modal-close" onClick={onClose}><Icon name="x" size={16}/></button>
        <div className="pdp-img">
          {image
            ? <img src={image} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            : <div className="placeholder" style={{width:"100%",height:"100%",display:"grid",placeItems:"center",background:"repeating-linear-gradient(135deg, var(--paper-2) 0 14px, var(--paper-3) 14px 15px)",color:"var(--muted)",fontFamily:"var(--mono)",fontSize:13,letterSpacing:"0.08em",textTransform:"uppercase"}}>фото товара</div>
          }
        </div>
        <div className="pdp-side">
          <span className="eyebrow">{product.categoryId.replace("-"," ")} · {product.article || `#${product.id}`}</span>
          <h2 style={{fontSize:28}}>{product.name}</h2>
          {product.rating && <div className="product-rating"><span className="stars">{"★".repeat(Math.round(product.rating))}</span> {product.rating} · {product.reviews} отзывов</div>}
          <div className="pdp-price">
            <span className="now">{formatPrice(price)}</span>
            {product.oldPrice && <span className="old">{formatPrice(product.oldPrice)}</span>}
            {disc > 0 && <span className="save">−{disc}%</span>}
          </div>
          {mode === "wholesale" && (
            <div className="mono" style={{fontSize:12,color:"var(--muted)",letterSpacing:"0.04em"}}>
              Минимальная партия: <strong style={{color:"var(--ink)"}}>{moq} шт</strong> · шаг {moq}
            </div>
          )}
          <div className="pdp-actions" style={{margin: "10px 0 0"}}>
            <button className="btn" onClick={() => { addToCart(product, qty); onClose(); }}>В корзину {mode === "wholesale" ? `· ${qty} шт` : ""}</button>
            <button className="btn btn-ghost">Подробнее</button>
          </div>
          <div style={{display:"flex",gap:18,marginTop:12,fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.06em"}}>
            <span><Icon name="truck" size={14}/> Доставка 1–3 дня</span>
            <span><Icon name="shield" size={14}/> Гарантия 1 год</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, AppCtx, useApp, formatPrice, Header, ProductCard, ProductEditorModal, QuickView, discountPct });
