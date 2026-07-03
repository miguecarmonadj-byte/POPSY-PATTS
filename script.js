// =========================================================
// POPSY PATITAS — script.js
// =========================================================
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Menú móvil ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra el menú al elegir una opción
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Header: sombra/compactado al hacer scroll ---------- */
  const header = document.getElementById("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (header) {
      header.style.top = current > 80 ? "10px" : "18px";
    }
    lastScroll = current;
  }, { passive: true });

  /* ---------- Animación de aparición al hacer scroll ---------- */
  const revealTargets = document.querySelectorAll(
    ".granel, .marcas-group, .cat-card, .ubicacion-info, .ubicacion-map, .hero-copy, .hero-portrait"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));

  /* ---------- Año dinámico en el footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
