/* REZERV product data - inlined from data/catalog.json so the prototype works without a server */
window.REZERV_DATA = {
  contacts: {
    email: "rezervcorporation@gmail.com",
    phone: "+7 929 721-45-87",
    telegram: ""
  },
  categories: [
    { id: "home-garden", name: "Дом и сад", examples: "Опрыскиватели, ланч-боксы" },
    { id: "camping", name: "Кемпинг", examples: "Чайники, огниво, душ" },
    { id: "plumbing", name: "Сантехника", examples: "Душевые системы" },
    { id: "roomboxes", name: "Румбоксы", examples: "Миниатюры, домики" },
    { id: "active", name: "Активный отдых", examples: "SUP, падел, термобелье" },
    { id: "kids", name: "Детский спорт", examples: "Кольца, груши" }
  ],
  products: [
    { id:"sprayer-2l", name:"Опрыскиватель садовый аккумуляторный 2 л", categoryId:"home-garden", retailPrice:1603, wholesalePrice:1310, oldPrice:5000, stock:2, rating:5, reviews:16, imageUrl:"" },
    { id:"sprayer-basic", name:"Опрыскиватель садовый", categoryId:"home-garden", retailPrice:1579, wholesalePrice:1290, oldPrice:5000, stock:17, rating:5, reviews:16, imageUrl:"assets/sprayer.png" },
    { id:"sprayer-battery", name:"Опрыскиватель садовый аккумуляторный", categoryId:"home-garden", retailPrice:1756, wholesalePrice:1440, oldPrice:5000, stock:6, rating:5, reviews:9 },
    { id:"heated-lunchbox", name:"Ланч-бокс с подогревом", categoryId:"home-garden", retailPrice:3385, wholesalePrice:2780, oldPrice:13000, stock:29 },
    { id:"portable-shower", name:"Душ походный аккумуляторный", categoryId:"camping", retailPrice:2956, wholesalePrice:2420, oldPrice:9000, stock:1, rating:4.9, reviews:194 },
    { id:"shower-mixer", name:"Душевая система с тропическим душем и смесителем", categoryId:"plumbing", retailPrice:4079, wholesalePrice:3100, oldPrice:24999, stock:22, rating:5, reviews:1 },
    { id:"rezerv-shower-gray", name:"РЕЗЕРВ душевой комплект чёрно-серый", categoryId:"plumbing", retailPrice:6153, wholesalePrice:4680, oldPrice:20000, stock:21, rating:5, reviews:1 },
    { id:"shower-system-23000", name:"Душевая система с тропическим душем", categoryId:"plumbing", retailPrice:4493, wholesalePrice:3410, oldPrice:23000, stock:14, rating:4.5, reviews:29 },
    { id:"shower-system-21000", name:"Душевая система с тропическим душем", categoryId:"plumbing", retailPrice:3364, wholesalePrice:2560, oldPrice:21000, stock:11, rating:4.5, reviews:29 },
    { id:"shower-system-25000", name:"Душевая система с тропическим душем", categoryId:"plumbing", retailPrice:5336, wholesalePrice:4060, oldPrice:25000, stock:10, rating:4.5, reviews:29 },
    { id:"roombox-rest", name:"Румбокс «Время отдыха» с куполом", categoryId:"roomboxes", retailPrice:1816, wholesalePrice:1310, oldPrice:5999, stock:13, rating:4.9, reviews:76 },
    { id:"roombox-gates", name:"Румбокс «Волшебные врата»", categoryId:"roomboxes", retailPrice:2230, wholesalePrice:1610, oldPrice:5999, stock:18, rating:4.9, reviews:76 },
    { id:"roombox-coffee", name:"Румбокс «Кофейня»", categoryId:"roomboxes", retailPrice:2577, wholesalePrice:1860, oldPrice:5999, stock:19, rating:4.9, reviews:76 },
    { id:"roombox-interior", name:"Румбокс интерьерный", categoryId:"roomboxes", retailPrice:2984, wholesalePrice:2150, oldPrice:5999, stock:17, rating:4.9, reviews:76 },
    { id:"roombox-orangery", name:"Румбокс «Оранжерея»", categoryId:"roomboxes", retailPrice:3161, wholesalePrice:2280, stock:8, rating:4.9, reviews:76 },
    { id:"roombox-apothecary", name:"Румбокс «Магическая аптека»", categoryId:"roomboxes", retailPrice:1879, wholesalePrice:1350, oldPrice:7999, stock:6, rating:5, reviews:31 },
    { id:"roombox-sea", name:"Румбокс «Тайны морских глубин»", categoryId:"roomboxes", retailPrice:1539, wholesalePrice:1110, oldPrice:6999, stock:3, rating:4.9, reviews:192 },
    { id:"roombox-forest", name:"Румбокс «Тайный лесной мир»", categoryId:"roomboxes", retailPrice:1085, wholesalePrice:780, oldPrice:6999, stock:3, rating:4.9, reviews:192 },
    { id:"roombox-big", name:"Румбокс «Большой»", categoryId:"roomboxes", retailPrice:1615, wholesalePrice:1160, oldPrice:6999, stock:7, rating:4.9, reviews:192 },
    { id:"booknook-hemingway", name:"Румбокс книжный «Домик Хемингуэя»", categoryId:"roomboxes", retailPrice:3622, wholesalePrice:2610, stock:1, rating:4.9, reviews:192 },
    { id:"booknook-scarborough", name:"Румбокс книжный «Скарборо»", categoryId:"roomboxes", retailPrice:3273, wholesalePrice:2360, stock:1, rating:4.9, reviews:192 },
    { id:"roombox-seabed", name:"Румбокс-конструктор «Тайны морских глубин»", categoryId:"roomboxes", retailPrice:2584, wholesalePrice:1860, oldPrice:12000, stock:22, rating:4.9, reviews:286 },
    { id:"roombox-led-forest", name:"Румбокс с подсветкой «Тайный лесной мир»", categoryId:"roomboxes", retailPrice:2452, wholesalePrice:1770, oldPrice:12000, stock:22, rating:4.9, reviews:286 },
    { id:"roombox-led-hemingway", name:"Румбокс «Книжный домик Хемингуэя»", categoryId:"roomboxes", retailPrice:3604, wholesalePrice:2590, oldPrice:12000, stock:15, rating:4.9, reviews:286 },
    { id:"roombox-wizard-castle", name:"Румбокс «Большой волшебный замок»", categoryId:"roomboxes", retailPrice:4383, wholesalePrice:3160, stock:4, rating:4.9, reviews:76 },
    { id:"padel-racket", name:"Ракетка для падел-тенниса", categoryId:"active", retailPrice:4473, wholesalePrice:3580, oldPrice:15000, stock:3, rating:5, reviews:5 },
    { id:"kids-punching-bag", name:"Груша боксёрская детская", categoryId:"kids", retailPrice:1535, wholesalePrice:1230, oldPrice:7000, stock:7, rating:4.9, reviews:31 },
    { id:"sup-pump", name:"Насос для сапборда", categoryId:"active", retailPrice:7212, wholesalePrice:5770, oldPrice:23000, stock:6 },
    { id:"kids-basketball", name:"Баскетбольное кольцо детское", categoryId:"kids", retailPrice:1509, wholesalePrice:1210, oldPrice:7000, stock:9, rating:4.9, reviews:15 },
    { id:"thermal-underwear", name:"Комплект термобелья РЕЗЕРВ", categoryId:"active", retailPrice:1459, wholesalePrice:1170, stock:50, rating:4.8, reviews:1654 },
    { id:"camp-kettle-5000", name:"Чайник походный туристический 1.2 л", categoryId:"camping", retailPrice:1857, wholesalePrice:1520, oldPrice:5000, stock:31 },
    { id:"camp-kettle-4700", name:"Чайник походный туристический 0.8 л", categoryId:"camping", retailPrice:1909, wholesalePrice:1570, oldPrice:4700, stock:32, rating:5, reviews:75 },
    { id:"fire-starter", name:"Огниво туристическое", categoryId:"camping", retailPrice:791, wholesalePrice:650, oldPrice:2400, stock:20, rating:4.8, reviews:338 }
  ]
};

// non-breaking space helpers used in render
window.REZERV_FORMAT = (n) => new Intl.NumberFormat("ru-RU").format(n) + "\u00A0₽";

// Volume tiers for wholesale (% off retail or wholesale base)
window.REZERV_VOLUME_TIERS = [
  { from: 1,   to: 9,   discount: 0,  label: "от 1 шт" },
  { from: 10,  to: 49,  discount: 5,  label: "от 10 шт" },
  { from: 50,  to: 199, discount: 10, label: "от 50 шт" },
  { from: 200, to: null,discount: 15, label: "от 200 шт" }
];

// minimal order quantity per category
window.REZERV_MOQ = {
  "roomboxes": 4, "home-garden": 6, "camping": 6, "plumbing": 2, "active": 4, "kids": 6, "default": 4
};
