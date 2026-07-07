const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const translations = {
  en: {
    "lang.en": "English",
    "lang.bs": "Bosnian",
    "nav.brand": "The Brand",
    "nav.presence": "Global Presence",
    "nav.news": "News",
    "nav.menu": "Our Menu",
    "nav.careers": "Careers",
    "nav.franchise": "Franchise",
    "brand.eyebrow": "About The Brand",
    "brand.title": "Built from passion, presentation, and a memorable atmosphere.",
    "common.learnMore": "Learn More",
    "news.eyebrow": "Our Latest News",
    "news.title": "Fresh highlights from Chill & Co",
    "menu.eyebrow": "Our Menu",
    "menu.title": "Designed to impress at every table",
    "presence.eyebrow": "Where We Operate Here",
    "presence.title": "A concept made for repeat visits and wider growth",
    "who.eyebrow": "Who We Are",
    "who.title": "More than a restaurant",
    "franchise.eyebrow": "Success Is Shared",
    "franchise.title": "Franchising opportunities can grow from a strong concept",
    "careers.eyebrow": "Careers",
    "careers.title": "Join a team built around hospitality and creativity",
    "visit.eyebrow": "Visit Chill & Co",
    "visit.hours": "Working hours: 14:00 - 23:00",
    "visit.phone": "Phone: 033 742 916",
    "visit.tagline": "Designed for memorable moments",
  },
  bs: {
    "lang.en": "Engleski",
    "lang.bs": "Bosanski",
    "nav.brand": "Brend",
    "nav.presence": "Globalno prisustvo",
    "nav.news": "Vijesti",
    "nav.menu": "Nasa ponuda",
    "nav.careers": "Karijere",
    "nav.franchise": "Fransiza",
    "brand.eyebrow": "O brendu",
    "brand.title": "Izgradeno kroz strast, prezentaciju i nezaboravnu atmosferu.",
    "common.learnMore": "Saznaj vise",
    "news.eyebrow": "Najnovije vijesti",
    "news.title": "Najnoviji istaknuti trenuci Chill & Co",
    "menu.eyebrow": "Nasa ponuda",
    "menu.title": "Kreirano da odusevi za svakim stolom",
    "presence.eyebrow": "Gdje poslujemo",
    "presence.title": "Koncept za ponovne posjete i siri rast",
    "who.eyebrow": "Ko smo mi",
    "who.title": "Vise od restorana",
    "franchise.eyebrow": "Uspjeh se dijeli",
    "franchise.title": "Fransizne prilike mogu rasti iz snaznog koncepta",
    "careers.eyebrow": "Karijere",
    "careers.title": "Pridruzite se timu zasnovanom na gostoprimstvu i kreativnosti",
    "visit.eyebrow": "Posjetite Chill & Co",
    "visit.hours": "Radno vrijeme: 14:00 - 23:00",
    "visit.phone": "Telefon: 033 742 916",
    "visit.tagline": "Kreirano za nezaboravne trenutke",
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
