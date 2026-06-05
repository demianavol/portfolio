/* global React */
const { useState, useMemo } = React;

/* ============ Home page ============ */
function HomePage() {
  const { go, mode, products, openQuick, categories, guideCategories, contacts, backendError } = useApp();
  const featured = useMemo(() =>
    [...products]
      .filter(p => p.rating && p.rating >= 4.8)
      .sort((a,b) => (b.reviews||0) - (a.reviews||0))
      .slice(0, 8)
  , [products]);

  const totalProducts = products.length;
  const categoryCount = (id) => products.filter(p => p.categoryId === id).length;
  const directionItems = (guideCategories && guideCategories.length ? guideCategories : categories).slice(0, 6);
  const contactCards = [
    {label:"Телефон", v: contacts.phone || "+7 929 721-45-87"},
    {label:"Email", v: contacts.email || "rezervcorporation@gmail.com"},
    contacts.telegram ? {label:"Telegram", v: contacts.telegram} : null,
  ].filter(Boolean);

  return (
    <main>
      <section className="hero">
        <div className="shell">
          {backendError && <div className="backend-note">{backendError}</div>}
          <div className="hero-grid">
            <div>
              <span className="eyebrow">РЕЗЕРВ · прямые поставки · с 2021</span>
              <h1 className="hero-title" style={{marginTop: 18}}>
                Компания<br/>
                РЕЗЕРВ
                <span className="section-script">{mode === "wholesale" ? "Оптовый раздел" : "Розничный раздел"}</span>
              </h1>
            </div>
            <div className="hero-meta">
              <p className="lead">
                {mode === "wholesale"
                  ? "Прямые поставки для магазинов и маркетплейсов. Прозрачные оптовые цены, отгрузка из Набережных Челнов — без посредников."
                  : "Товары для дома, кемпинга и отдыха. Без наценок маркетплейсов, доставка СДЭК и через пункты выдачи МагнитМаркет."
                }
              </p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <button className="btn btn-lg" onClick={() => go({ name: "catalog" })}>
                  Открыть каталог <Icon name="arrow" size={16}/>
                </button>
                {mode === "wholesale" && (
                  <button className="btn btn-ghost btn-lg"><Icon name="download" size={16}/> Прайс XLSX</button>
                )}
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat"><strong>{totalProducts}+</strong><span>SKU на складе</span></div>
            <div className="hero-stat"><strong>{directionItems.length}</strong><span>направлений</span></div>
            <div className="hero-stat"><strong>1–3 дн.</strong><span>отгрузка</span></div>
            <div className="hero-stat"><strong>{mode === "wholesale" ? "от 4 шт" : "без min."}</strong><span>{mode === "wholesale" ? "минимальная партия" : "заказ"}</span></div>
          </div>
        </div>

        <div className="categories-ribbon">
          {directionItems.map((c, i) => {
            const targetCategory = c.categoryId || c.id;
            return (
            <div key={c.id} className="cat-tile" onClick={() => go({ name: "catalog", category: targetCategory })}>
              <span className="cat-num">0{i+1}</span>
              <h4>{c.name}</h4>
              <small>{c.examples}</small>
              <span className="cat-count mono">{categoryCount(targetCategory)} SKU</span>
            </div>
          );})}
        </div>
      </section>

      <section className="shell">
        <div className="section-title">
          <div>
            <span className="eyebrow">Хиты · отобрано редакцией</span>
            <h2 style={{marginTop:8}}>Что покупают чаще всего</h2>
          </div>
          <a onClick={() => go({ name: "catalog" })} style={{cursor:"pointer"}}>Весь каталог →</a>
        </div>

        <div className="product-grid">
          {featured.map(p => <ProductCard key={p.id} product={p} onQuick={openQuick} />)}
        </div>

        {mode === "wholesale" && (
          <div className="b2b-banner" style={{marginTop: 56}}>
            <div>
              <span className="eyebrow" style={{color:"rgba(240,236,228,0.6)"}}>B2B</span>
              <h3 style={{marginTop:8}}>Скачайте полный прайс или закажите расчёт партии</h3>
              <p>Скидка по объёму до −15%.</p>
            </div>
            <div style={{display:"flex",gap:8,flexDirection:"column"}}>
              <button className="btn btn-ghost" style={{borderColor:"rgba(240,236,228,0.3)",color:"var(--accent-on)"}}>
                <Icon name="download" size={16}/> Прайс XLSX
              </button>
              <button className="btn" style={{background:"var(--accent-on)",color:"var(--ink)"}}>Запросить расчёт</button>
            </div>
          </div>
        )}
      </section>

      <section className="shell" id="contacts">
        <div className="section-title">
          <div>
            <span className="eyebrow">Контакты</span>
            <h2 style={{marginTop:8}}>Свяжитесь напрямую</h2>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12,marginBottom:60}}>
          {contactCards.map(c => (
            <div key={c.label} style={{border:"1px solid var(--hairline)",borderRadius:8,padding:"24px",background:"var(--surface)"}}>
              <div className="eyebrow">{c.label}</div>
              <div style={{fontFamily:"var(--serif)",fontSize:22,marginTop:10,color:"var(--ink)"}}>{c.v}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ============ Catalog page ============ */
function CatalogPage() {
  const { products, mode, openQuick, categories, route } = useApp();
  const [activeCat, setActiveCat] = useState(route.category || null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular");

  React.useEffect(() => {
    if (route.category) setActiveCat(route.category);
  }, [route.category]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCat) list = list.filter(p => p.categoryId === activeCat);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }
    list = [...list].sort((a,b) => {
      const pa = mode === "wholesale" ? a.wholesalePrice : a.retailPrice;
      const pb = mode === "wholesale" ? b.wholesalePrice : b.retailPrice;
      if (sort === "price-asc") return pa - pb;
      if (sort === "price-desc") return pb - pa;
      if (sort === "discount") return discountPct(pb, b.oldPrice) - discountPct(pa, a.oldPrice);
      return (b.reviews||0) - (a.reviews||0);
    });
    return list;
  }, [products, activeCat, query, sort, mode]);

  const counts = useMemo(() => {
    const map = { all: products.length };
    categories.forEach(c => { map[c.id] = products.filter(p => p.categoryId === c.id).length; });
    return map;
  }, [products, categories]);

  return (
    <main className="shell catalog">
      <div className="catalog-head">
        <div>
          <span className="eyebrow">{mode === "wholesale" ? "Каталог · оптовые цены" : "Каталог · розница"}</span>
          <h2 style={{marginTop:8}}>{mode === "wholesale" ? "Прямые поставки со склада" : "Товары РЕЗЕРВ"}</h2>
        </div>
        <span className="count">{filtered.length} из {products.length} позиций</span>
      </div>

      <div className="chips">
        <button className={`chip ${!activeCat ? "active" : ""}`} onClick={() => setActiveCat(null)}>
          Все <span className="num">{counts.all}</span>
        </button>
        {categories.map(c => (
          <button key={c.id} className={`chip ${activeCat === c.id ? "active" : ""}`} onClick={() => setActiveCat(c.id)}>
            {c.name} <span className="num">{counts[c.id] || 0}</span>
          </button>
        ))}
      </div>

      <div className="catalog-toolbar">
        <div className="search">
          <Icon name="search" size={16}/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Поиск по названию..." />
        </div>
        {mode === "wholesale" && (
          <button className="btn btn-ghost btn-sm"><Icon name="download" size={14}/> Прайс XLSX</button>
        )}
        <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="popular">Сначала популярные</option>
          <option value="price-asc">Цена: по возрастанию</option>
          <option value="price-desc">Цена: по убыванию</option>
          <option value="discount">По скидке</option>
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="product-grid">
          {filtered.map(p => <ProductCard key={p.id} product={p} onQuick={openQuick} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h3>Ничего не нашлось</h3>
          <p>Попробуйте изменить запрос или сбросить фильтр</p>
        </div>
      )}
    </main>
  );
}

/* ============ Product detail page ============ */
function ProductPage({ id }) {
  const { products, mode, addToCart, go, categories, currentUser, openProductEditor } = useApp();
  const product = products.find(p => p.id === id);
  if (!product) return <div className="empty-state"><h3>Товар не найден</h3></div>;
  const category = categories.find(c => c.id === product.categoryId);

  const price = mode === "wholesale" ? product.wholesalePrice : product.retailPrice;
  const disc = discountPct(price, product.oldPrice);
  const moq = window.REZERV_MOQ[product.categoryId] || window.REZERV_MOQ.default;
  const [qty, setQty] = useState(mode === "wholesale" ? moq : 1);
  const [activeImg, setActiveImg] = useState(0);
  const image = product.imageUrl || category?.imageUrl || "";

  const tiers = window.REZERV_VOLUME_TIERS;
  const activeTier = tiers.findIndex(t => qty >= t.from && (t.to == null || qty <= t.to));

  return (
    <main className="shell pdp">
      <div>
        <div style={{display:"flex",gap:8,marginBottom:14,fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.06em"}}>
          <a onClick={() => go({name:"home"})} style={{cursor:"pointer"}}>Главная</a>
          <span>/</span>
          <a onClick={() => go({name:"catalog"})} style={{cursor:"pointer"}}>Каталог</a>
          <span>/</span>
          <span style={{color:"var(--ink)"}}>{product.name.slice(0, 40)}</span>
        </div>
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            {[0,1,2,3].map(i => (
              <div key={i} className={`pdp-thumb ${activeImg === i ? "active" : ""}`} onClick={() => setActiveImg(i)}>
                {i === 0 ? "01" : `0${i+1}`}
              </div>
            ))}
          </div>
          <div className="pdp-main">
            {image
              ? <img src={image} alt={product.name}/>
              : <div className="placeholder">фото · {product.categoryId.replace("-"," ")}</div>
            }
          </div>
        </div>
      </div>

      <div className="pdp-info">
        <span className="eyebrow">Артикул {product.article || product.id} · {category?.name}</span>
        <h1 style={{marginTop:14}}>{product.name}</h1>
        <div className="pdp-meta">
          {product.rating && <><span className="stars">★★★★★</span> <span>{product.rating}</span> <span>· {product.reviews} отзывов</span></>}
          <span>· В наличии {product.stock || 0} шт</span>
        </div>

        <div className="pdp-price">
          <span className="now">{formatPrice(price)}</span>
          {product.oldPrice && <span className="old">{formatPrice(product.oldPrice)}</span>}
          {disc > 0 && <span className="save">экономия {disc}%</span>}
        </div>

        {mode === "wholesale" && (
          <>
            <div className="eyebrow" style={{marginTop:24,marginBottom:10}}>Скидка по объёму</div>
            <div className="volume-table">
              <div className="head">
                <span>Партия</span>
                <span>Цена за шт</span>
                <span>Экономия</span>
              </div>
              {tiers.map((t, i) => {
                const tprice = Math.round(price * (1 - t.discount / 100));
                return (
                  <div key={i} className={`row ${i === activeTier ? "active" : ""}`}>
                    <span>{t.label}{t.to ? ` до ${t.to}` : ""}</span>
                    <span className="price">{formatPrice(tprice)}</span>
                    <span className="save">{t.discount > 0 ? `−${t.discount}%` : "—"}</span>
                  </div>
                );
              })}
            </div>
            <div style={{fontFamily:"var(--mono)",fontSize:12,color:"var(--muted)",marginBottom:10,letterSpacing:"0.04em",textTransform:"uppercase"}}>
              Мин. партия: {moq} шт · шаг {moq}
            </div>
          </>
        )}

        <div className="pdp-actions">
          <button className="btn btn-lg" onClick={() => { addToCart(product, qty); go({name:"cart"}); }}>
            В корзину · {formatPrice(price * qty)}
          </button>
          <div className="qty-stepper" style={{height:56}}>
            <button onClick={() => setQty(Math.max(mode==="wholesale"?moq:1, qty - (mode==="wholesale"?moq:1)))}><Icon name="minus" size={14}/></button>
            <input value={qty} onChange={e => setQty(parseInt(e.target.value)||1)} />
            <button onClick={() => setQty(qty + (mode==="wholesale"?moq:1))}><Icon name="plus" size={14}/></button>
          </div>
        </div>
        {currentUser?.role === "admin" && (
          <button className="btn btn-ghost btn-lg admin-pdp-edit" onClick={() => openProductEditor(product)}>
            Редактировать карточку
          </button>
        )}

        <div className="pdp-table">
          <div className="row"><span>Категория</span><span>{category?.name}</span></div>
          <div className="row"><span>Артикул</span><span className="mono">{product.article || product.id}</span></div>
          <div className="row"><span>На складе</span><span>{product.stock || 0} шт · отгрузка 1–3 дня</span></div>
          <div className="row"><span>Гарантия</span><span>12 месяцев</span></div>
          <div className="row"><span>Доставка</span><span>СДЭК · пункт выдачи МагнитМаркет · отгрузка из Набережных Челнов</span></div>
        </div>
      </div>
    </main>
  );
}

/* ============ Cart page ============ */
function CartPage() {
  const { cart, removeFromCart, updateQty, mode, go, products, categories, currentUser, goLogin, submitLead } = useApp();
  const [checkoutStatus, setCheckoutStatus] = useState("");

  const items = cart
    .map(i => {
      const p = products.find(p => p.id === i.id);
      return p ? { ...i, p: { ...p, categoryImage: categories.find(c => c.id === p.categoryId)?.imageUrl || "" } } : { ...i, p };
    })
    .filter(i => i.p);
  const subtotal = items.reduce((s, i) => s + (mode === "wholesale" ? i.p.wholesalePrice : i.p.retailPrice) * i.qty, 0);
  const shipping = subtotal > 0 ? (mode === "wholesale" ? 0 : 490) : 0;
  const submitOrder = async () => {
    if (!currentUser) {
      goLogin();
      return;
    }

    setCheckoutStatus("Отправляем заявку...");
    try {
      await submitLead({
        name: currentUser.name || currentUser.email,
        contact: currentUser.email,
        format: mode === "wholesale" ? "Оптовая закупка" : "Розница",
        products: items.map((i, index) => {
          const price = mode === "wholesale" ? i.p.wholesalePrice : i.p.retailPrice;
          return `${index + 1}. ${i.p.name} — ${i.qty} шт × ${formatPrice(price)}`;
        }).join("\n"),
        page: "REZERV.html cart",
      });
      setCheckoutStatus(mode === "wholesale" ? "Заявка отправлена. Менеджер свяжется с вами." : "Заказ отправлен. Мы свяжемся для подтверждения.");
    } catch (error) {
      setCheckoutStatus(error.message || "Не удалось отправить заявку.");
    }
  };

  if (cart.length === 0) {
    return (
      <main className="shell" style={{padding:"60px 0"}}>
        <div className="empty-state">
          <h3>Корзина пуста</h3>
          <p>Откройте каталог и добавьте товары</p>
          <button className="btn" style={{marginTop:18}} onClick={() => go({name:"catalog"})}>В каталог →</button>
        </div>
      </main>
    );
  }

  return (
    <main className="shell cart-page">
      <div>
        <div className="catalog-head" style={{paddingBottom:14}}>
          <div>
            <span className="eyebrow">{mode === "wholesale" ? "Заявка на партию" : "Корзина"}</span>
            <h2 style={{marginTop:8}}>{mode === "wholesale" ? "Расчёт оптовой партии" : "Ваш заказ"}</h2>
          </div>
        </div>
        <div className="cart-list">
          {items.map(i => {
            const price = mode === "wholesale" ? i.p.wholesalePrice : i.p.retailPrice;
            return (
              <div key={i.id} className="cart-item">
                <div className="img" style={(i.p.imageUrl || i.p.categoryImage) ? { backgroundImage:`url(${i.p.imageUrl || i.p.categoryImage})`, backgroundSize:"cover" } : {}}/>
                <div className="info">
                  <strong>{i.p.name}</strong>
                  <small>{i.p.article || `#${i.p.id}`} · {formatPrice(price)} / шт</small>
                </div>
                <div className="qty-stepper">
                  <button onClick={() => updateQty(i.id, i.qty - 1)}><Icon name="minus" size={12}/></button>
                  <input value={i.qty} onChange={e => updateQty(i.id, parseInt(e.target.value)||1)}/>
                  <button onClick={() => updateQty(i.id, i.qty + 1)}><Icon name="plus" size={12}/></button>
                </div>
                <span className="price">{formatPrice(price * i.qty)}</span>
                <button className="remove" onClick={() => removeFromCart(i.id)}><Icon name="x" size={14}/></button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart-summary">
        <h3>{mode === "wholesale" ? "Сводка партии" : "Итого"}</h3>
        <div className="row"><span>Позиций</span><span className="mono">{items.length}</span></div>
        <div className="row"><span>Штук</span><span className="mono">{items.reduce((s,i)=>s+i.qty,0)}</span></div>
        <div className="row"><span>Сумма</span><span className="mono">{formatPrice(subtotal)}</span></div>
        <div className="row"><span>Доставка</span><span className="mono">{shipping > 0 ? formatPrice(shipping) : "бесплатно"}</span></div>
        {mode === "wholesale" && <div className="row"><span>Договор</span><span style={{color:"var(--good)"}}>оформим</span></div>}
        <div className="row total">
          <span>К оплате</span><span>{formatPrice(subtotal + shipping)}</span>
        </div>
        <button className="btn btn-lg" style={{width:"100%",marginTop:16}} onClick={submitOrder}>
          {mode === "wholesale" ? "Отправить заявку" : "Оформить заказ"} <Icon name="arrow" size={16}/>
        </button>
        {checkoutStatus && <p style={{fontSize:12,color:"var(--muted)",marginTop:12,textAlign:"center"}}>{checkoutStatus}</p>}
        <p style={{fontSize:12,color:"var(--muted)",marginTop:12,textAlign:"center"}}>
          {mode === "wholesale"
            ? "Менеджер свяжется в течение часа для уточнения партии и реквизитов"
            : "Оплата при получении или онлайн картой"}
        </p>
      </div>
    </main>
  );
}

/* ============ Account page ============ */
function AccountPage() {
  const { mode, currentUser, goLogin, logout, products } = useApp();
  const [tab, setTab] = useState("overview");

  if (!currentUser) {
    return (
      <main className="shell" style={{padding:"60px 0"}}>
        <div className="account-card" style={{maxWidth:560,margin:"0 auto"}}>
          <span className="eyebrow">Личный кабинет</span>
          <h2 style={{marginTop:8}}>Войдите в профиль</h2>
          <p style={{color:"var(--muted)",fontSize:14,margin:"14px 0 22px"}}>
            Кабинет подключён к основному бэкенду. После входа здесь появятся данные вашей сессии.
          </p>
          <button className="btn btn-lg" onClick={goLogin}>Войти или зарегистрироваться</button>
        </div>
      </main>
    );
  }

  const tabs = mode === "wholesale"
    ? [
        {id:"overview", t:"Обзор", n:""},
        {id:"orders", t:"Заявки", n:"3"},
        {id:"price", t:"Прайс-лист", n:""},
        {id:"requisites", t:"Реквизиты", n:""},
        {id:"manager", t:"Менеджер", n:""},
        {id:"docs", t:"Документы", n:"7"},
      ]
    : [
        {id:"overview", t:"Обзор", n:""},
        {id:"orders", t:"Заказы", n:"2"},
        {id:"favorites", t:"Избранное", n:"4"},
        {id:"profile", t:"Профиль", n:""},
        {id:"addresses", t:"Адреса", n:""},
      ];

  return (
    <main className="shell account-grid">
      <aside className="account-nav">
        <div className="eyebrow" style={{padding:"4px 12px 12px"}}>
          {mode === "wholesale" ? "B2B-кабинет" : "Личный кабинет"}
        </div>
        {tabs.map(t => (
          <button key={t.id} className={tab === t.id ? "active" : ""} onClick={() => setTab(t.id)}>
            <span>{t.t}</span>
            {t.n && <span className="mono" style={{fontSize:11,color:"var(--muted)"}}>{t.n}</span>}
          </button>
        ))}
        <div style={{marginTop:24,padding:"0 12px"}}>
          <button className="btn btn-ghost btn-sm" style={{width:"100%"}} onClick={logout}>Выйти</button>
        </div>
      </aside>

      <div className="account-content">
        {mode === "wholesale" && tab === "overview" && (
          <div className="b2b-banner">
            <div>
              <span className="eyebrow" style={{color:"rgba(240,236,228,0.6)"}}>Партнёр РЕЗЕРВ</span>
              <h3 style={{marginTop:8}}>{currentUser.name || currentUser.email}</h3>
              <p>Кабинет использует активную сессию сайта. Заявки из корзины сохраняются в админке.</p>
            </div>
            <button className="btn" style={{background:"var(--accent-on)",color:"var(--ink)"}}>Связаться с менеджером</button>
          </div>
        )}

        {tab === "overview" && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12}}>
            {[
              {l: mode==="wholesale"?"Оборот за месяц":"Заказы", v: mode==="wholesale"?"284 500 ₽":"5"},
              {l: mode==="wholesale"?"Активные заявки":"В обработке", v: "2"},
              {l: mode==="wholesale"?"Скидка":"Бонусы", v: mode==="wholesale"?"−10%":"312 ₽"},
            ].map(s => (
              <div key={s.l} className="account-card" style={{padding:20}}>
                <div className="eyebrow">{s.l}</div>
                <div style={{fontFamily:"var(--serif)",fontSize:32,marginTop:8,fontWeight:700,letterSpacing:"-0.02em",color:"var(--ink)"}}>{s.v}</div>
              </div>
            ))}
          </div>
        )}

        {(tab === "orders" || tab === "overview") && (
          <div className="account-card">
            <h3>{mode === "wholesale" ? "Последние заявки" : "Последние заказы"}</h3>
            {[
              {n: mode==="wholesale"?"B2B-0421":"R-3128", d:"2 мая 2026", s:"Доставлен", k:"done", a:"4 580 ₽"},
              {n: mode==="wholesale"?"B2B-0419":"R-3119", d:"28 апр 2026", s:"Сборка", k:"progress", a:mode==="wholesale"?"68 200 ₽":"1 879 ₽"},
              {n: mode==="wholesale"?"B2B-0414":"R-3105", d:"22 апр 2026", s:"Доставлен", k:"done", a:mode==="wholesale"?"124 360 ₽":"3 364 ₽"},
            ].map(o => (
              <div key={o.n} className="order-row">
                <span className="num">{o.n}</span>
                <span style={{color:"var(--muted)"}}>{o.d}</span>
                <span className={`status ${o.k}`}>{o.s}</span>
                <span className="mono" style={{textAlign:"right",fontWeight:600}}>{o.a}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "price" && (
          <div className="account-card">
            <h3>Актуальный прайс-лист</h3>
            <p style={{color:"var(--muted)",fontSize:14,marginBottom:18}}>Обновлено 4 мая 2026 · {products.length} позиций</p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <button className="btn"><Icon name="download" size={14}/> Скачать XLSX</button>
              <button className="btn btn-ghost"><Icon name="download" size={14}/> Скачать PDF</button>
              <button className="btn btn-ghost">Получить по email</button>
            </div>
          </div>
        )}

        {tab === "requisites" && (
          <div className="account-card">
            <h3>Реквизиты компании</h3>
            <div className="kv"><span>Название</span><span>ИП Иванов Иван Иванович</span></div>
            <div className="kv"><span>ИНН</span><span className="mono">770000000000</span></div>
            <div className="kv"><span>ОГРНИП</span><span className="mono">320770000000000</span></div>
            <div className="kv"><span>Банк</span><span>АО «Тинькофф Банк»</span></div>
            <div className="kv"><span>Р/счёт</span><span className="mono">40802 810 0 00000000000</span></div>
            <div className="kv"><span>НДС</span><span>УСН — без НДС</span></div>
          </div>
        )}

        {tab === "manager" && (
          <div className="account-card" style={{display:"grid",gridTemplateColumns:"80px 1fr auto",gap:20,alignItems:"center"}}>
            <div style={{width:80,height:80,borderRadius:"50%",background:"var(--paper-2)",display:"grid",placeItems:"center",fontFamily:"var(--serif)",fontSize:30,fontWeight:600,color:"var(--ink)"}}>Р</div>
            <div>
              <div className="eyebrow">Рабочие контакты</div>
              <div style={{fontFamily:"var(--serif)",fontSize:22,fontWeight:600,color:"var(--ink)",marginTop:4}}>Команда REZERV</div>
              <div style={{color:"var(--muted)",fontSize:14,marginTop:2}}>+7 929 721-45-87 · rezervcorporation@gmail.com</div>
            </div>
            <button className="btn">Написать</button>
          </div>
        )}

        {tab === "favorites" && (
          <div className="account-card">
            <h3>Избранное</h3>
            <p style={{color:"var(--muted)"}}>Здесь будут появляться товары, которые вы добавили в избранное.</p>
          </div>
        )}

        {tab === "profile" && (
          <div className="account-card">
            <h3>Профиль</h3>
            <div className="kv"><span>Имя</span><span>{currentUser.name || "Не указано"}</span></div>
            <div className="kv"><span>Email</span><span>{currentUser.email}</span></div>
            <div className="kv"><span>Роль</span><span className="mono">{currentUser.role === "admin" ? "admin" : "user"}</span></div>
            {currentUser.role === "admin" && (
              <div className="kv"><span>Админка</span><span><a className="btn btn-ghost btn-sm" href="admin.html">Открыть админку</a></span></div>
            )}
          </div>
        )}

        {tab === "addresses" && (
          <div className="account-card">
            <h3>Адреса доставки</h3>
            <div className="kv"><span>По умолчанию</span><span>Набережные Челны</span></div>
            <div className="kv"><span>Дополнительный</span><span>Санкт-Петербург, Невский пр., 50</span></div>
          </div>
        )}

        {tab === "docs" && (
          <div className="account-card">
            <h3>Документы</h3>
            {["Договор поставки №2024-118","Акт сверки за апрель 2026","Накладная B2B-0421","Счёт-фактура B2B-0419","Прайс-лист 02.05.2026","УПД B2B-0414","Договор поставки №2024-118 (доп. соглашение)"].map(d => (
              <div key={d} className="kv">
                <span className="mono">PDF</span>
                <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>{d} <button className="btn-ghost btn btn-sm"><Icon name="download" size={12}/></button></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

/* ============ Footer ============ */
function Footer() {
  const { go, categories, guideCategories, contacts } = useApp();
  const footerCategories = (guideCategories && guideCategories.length ? guideCategories : categories).slice(0, 5);
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <div className="footer-mark">РЕЗЕРВ</div>
            <p style={{opacity:0.65,marginTop:14,maxWidth:340,fontSize:14}}>
              Прямые поставки из Набережных Челнов. Розница и опт без посредников и наценок маркетплейсов.
            </p>
          </div>
          <div>
            <h4>Каталог</h4>
            {footerCategories.map(c => (
              <a key={c.id} onClick={() => go({name:"catalog", category:c.categoryId || c.id})} style={{cursor:"pointer"}}>{c.name}</a>
            ))}
          </div>
          <div>
            <h4>Покупателям</h4>
            <a>Доставка и оплата</a>
            <a>Возврат и обмен</a>
            <a>Гарантия</a>
            <a>Отзывы</a>
          </div>
          <div>
            <h4>Контакты</h4>
            <span>{contacts.phone || "+7 929 721-45-87"}</span>
            {contacts.telegram && <span>{contacts.telegram}</span>}
            <span>{contacts.email || "rezervcorporation@gmail.com"}</span>
            <span>Набережные Челны, ежедневно 9–21</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© РЕЗЕРВ 2021–2026</span>
          <span>made for retail & wholesale</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { HomePage, CatalogPage, ProductPage, CartPage, AccountPage, Footer });
