const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

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
