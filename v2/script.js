const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const translations = {
  en: {
    "lang.en": "English",
    "lang.bs": "Bosnian",
    "nav.brand": "The Brand",
    "nav.news": "News",
    "nav.menu": "Our Menu",
    "nav.careers": "Careers",
    "nav.franchise": "Franchise",
    "brand.eyebrow": "About The Brand",
    "brand.title": "Built from passion, presentation, and a memorable atmosphere.",
    "brand.p1": "Chill & Co was created by an enthusiastic young man with a passion for beautifully crafted food, creative presentation, and inspiring interior design.",
    "brand.vision": "His vision was simple...",
    "brand.highlight": "TO CREATE A PLACE PEOPLE LOVE TO COME BACK TO.",
    "brand.p2": "By combining exceptional flavors, eye-catching dishes, and a modern, welcoming atmosphere, he turned that vision into a destination where every visit is about more than just dining - it's about creating memorable moments.",
    "brand.p3": "Today, Chill & Co continues to bring people together through great food, stylish surroundings, and an experience designed to be enjoyed and shared.",
    "common.learnMore": "Learn More",
    "news.eyebrow": "Our Latest News",
    "news.title": "Fresh highlights from Chill & Co",
    "news.item1.title": "Chill&co expands in Saudi Arabia with a new location in Al Khobar",
    "news.item1.p": "From plating to atmosphere, every detail is designed to stand out.",
    "news.item2.title": "A welcoming destination for friends, families, and shared moments",
    "news.item2.p": "Comfort, hospitality, and style come together in every visit.",
    "news.item3.title": "Creative food, modern design, and a brand built to grow",
    "news.item3.p": "Chill & Co blends visual identity, food quality, and a return-worthy experience.",
    "menu.eyebrow": "Our Menu",
    "menu.title": "Designed to impress at every table",
    "menu.p": "We take pride in serving dishes that are rich in flavor, bold in presentation, and made to create memorable moments worth sharing.",
    "who.eyebrow": "Who We Are",
    "who.title": "More than a restaurant",
    "who.p1": "At Chill & Co, our story is built on passion, creativity, and bringing people together. We're more than just a restaurant - we're a place where great food, stylish surroundings, and memorable experiences come together.",
    "who.mission": "Our mission is simple:",
    "who.highlight": "To create moments people love to share and memories they'll always come back for.",
    "who.p2": "Every visit to Chill & Co is designed to feel welcoming, comfortable, and unforgettable. From our carefully crafted dishes to our modern interior and warm hospitality, every detail is created to make our guests feel at home.",
    "who.p3": "We believe that exceptional food deserves an exceptional atmosphere. That's why we've created a destination where friends gather, families connect, and every meal becomes a special occasion.",
    "who.p4": "At Chill & Co, we're passionate about delivering more than just great flavors - we create experiences that keep our guests coming back, again and again.",
    "franchise.eyebrow": "Success Is Shared",
    "franchise.title": "Franchising opportunities can grow from a strong concept",
    "franchise.p": "Chill & Co is built on a clear identity: strong branding, a welcoming space, and a food experience guests remember. That makes it a concept with room to expand.",
    "careers.eyebrow": "Careers",
    "careers.title": "Join the team",
    "careers.p": "The Chill & Co experience depends on people who care about food quality, guest comfort, and a polished presentation from start to finish.",
    "visit.eyebrow": "Visit Chill & Co",
    "visit.address": "Dzemala Bijedica br. 279, Ilidza, Kanton Sarajevo",
    "visit.hours": "Working hours: 14:00 - 23:00",
    "visit.phone": "Phone: 033 742 916",
    "visit.tagline": "Designed for memorable moments",
    "footer.rights": "Chill & Co. All rights reserved.",
  },
  bs: {
    "lang.en": "Engleski",
    "lang.bs": "Bosanski",
    "nav.brand": "Brend",
    "nav.news": "Vijesti",
    "nav.menu": "Nasa ponuda",
    "nav.careers": "Karijere",
    "nav.franchise": "Fransiza",
    "brand.eyebrow": "O brendu",
    "brand.title": "Izgradeno kroz strast, prezentaciju i nezaboravnu atmosferu.",
    "brand.p1": "Chill & Co je kreiran od strane entuzijasticnog mladog covjeka sa strašcu prema lijepo pripremljenim jelima, kreativnoj prezentaciji i inspirativnom interijeru.",
    "brand.vision": "Njegova vizija je bila jednostavna...",
    "brand.highlight": "STVORITI MJESTO KOJE LJUDI VOLE PONOVO POSJECIVATI.",
    "brand.p2": "Kombiniranjem izuzetnih okusa, upecatljivih jela i moderne, dobrodošle atmosfere, pretvorio je tu viziju u odrediste gdje svaki posjet znaci vise od obicnog jela - radi se o stvaranju nezaboravnih trenutaka.",
    "brand.p3": "Danas, Chill & Co nastavlja spajati ljude kroz odlicnu hranu, stilsko okruzenje i iskustvo kreirano da se uziva i dijeli.",
    "common.learnMore": "Saznaj vise",
    "news.eyebrow": "Najnovije vijesti",
    "news.title": "Najnoviji istaknuti trenuci Chill & Co",
    "news.item1.title": "Chill&co se širi u Saudijsku Arabiju s novom lokacijom u Al Khobaru",
    "news.item1.p": "Od serviranja do atmosfere, svaki detalj je osmišljen da se istakne.",
    "news.item2.title": "Dobrodošlo odrediste za prijatelje, porodice i zajednicke trenutke",
    "news.item2.p": "Ugodnost, gostoprimstvo i stil se spajaju u svakom posjetu.",
    "news.item3.title": "Kreativna hrana, moderan dizajn i brend izgraden za rast",
    "news.item3.p": "Chill & Co spaja vizualni identitet, kvalitet hrane i iskustvo koje zasluzuje povratak.",
    "menu.eyebrow": "Nasa ponuda",
    "menu.title": "Kreirano da odusevi za svakim stolom",
    "menu.p": "Ponosni smo na serviranje jela bogatih ukusima, smjelih u prezentaciji, napravljena da stvore nezaboravne trenutke vrijedne dijeljenja.",
    "who.eyebrow": "Ko smo mi",
    "who.title": "Vise od restorana",
    "who.p1": "U Chill & Co, nasa prica je izgradena na strasti, kreativnosti i spajanju ljudi. Mi smo vise od restorana - mi smo mjesto gdje se odlicna hrana, stilsko okruzenje i nezaboravna iskustva spajaju.",
    "who.mission": "Nasa misija je jednostavna:",
    "who.highlight": "Stvoriti trenutke koje ljudi vole dijeliti i uspomene zbog kojih ce uvijek se vracati.",
    "who.p2": "Svaki posjet Chill & Co je osmišljen da se osjecate dobrodošlo, ugodno i nezaboravno. Od pazljivo pripremljenih jela do modernog interijera i toplog gostoprimstva, svaki detalj je kreiran da nasi gosti osjete domaci ugodaj.",
    "who.p3": "Vjerujemo da izuzetna hrana zasluzuje izuzetnu atmosferu. Zato smo kreirali odrediste gdje se prijatelji skupljaju, porodice povezuju i svaki obrok postaje posebna prigoda.",
    "who.p4": "U Chill & Co, strastveni smo u pruzanju vise od samo odlicnih okusa - kreiramo iskustva koja nateraju nase goste da se vracaju, iznova i iznova.",
    "franchise.eyebrow": "Uspjeh se dijeli",
    "franchise.title": "Fransizne prilike mogu rasti iz snaznog koncepta",
    "franchise.p": "Chill & Co je izgraden na jasnom identitetu: snaznom brendiranju, dobrodošlom prostoru i iskustvu hrane kojeg gosti pamte. To ga cini konceptom s prostorom za rast.",
    "careers.eyebrow": "Karijere",
    "careers.title": "Pridruzite se timu",
    "careers.p": "Iskustvo Chill & Co ovisi o ljudima koji brinu o kvalitetu hrane, ugodnosti gostiju i ugladenoj prezentaciji od pocetka do kraja.",
    "visit.eyebrow": "Posjetite Chill & Co",
    "visit.address": "Dzemala Bijedica br. 279, Ilidza, Kanton Sarajevo",
    "visit.hours": "Radno vrijeme: 14:00 - 23:00",
    "visit.phone": "Telefon: 033 742 916",
    "visit.tagline": "Kreirano za nezaboravne trenutke",
    "footer.rights": "Chill & Co. Sva prava zadrzana.",
  },
};

const languageLinks = document.querySelectorAll(".language-switch a[data-lang]");

const applyLanguage = (lang) => {
  const selected = translations[lang] ? lang : "en";
  const map = translations[selected];

  document.documentElement.lang = selected;

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.getAttribute("data-i18n");
    const text = map[key] || translations.en[key];
    if (text) element.textContent = text;
  }

  for (const link of languageLinks) {
    const isActive = link.dataset.lang === selected;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "true" : "false");
  }

  localStorage.setItem("chillco-lang", selected);
};

for (const link of languageLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    applyLanguage(link.dataset.lang);
  });
}

applyLanguage(localStorage.getItem("chillco-lang") || "en");

const heroVideo = document.querySelector(".hero-visual video");
if (heroVideo) {
  heroVideo.muted = true;

  const forcePlay = () => {
    const playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  heroVideo.addEventListener("loadeddata", forcePlay);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) forcePlay();
  });
  document.addEventListener("touchstart", forcePlay, { once: true, passive: true });
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

for (const photoButton of document.querySelectorAll(".photo")) {
  photoButton.addEventListener("click", () => {
    const fullImagePath = photoButton.dataset.full;
    lightboxImage.src = fullImagePath;
    lightbox.showModal();
  });
}

closeLightbox.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (const element of document.querySelectorAll(".reveal")) {
  observer.observe(element);
}
