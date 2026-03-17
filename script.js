document.addEventListener("DOMContentLoaded", function () {

  // ============================================
  // NAVBAR — Glassmorphism on scroll
  // ============================================
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");

  function updateNavbar() {
    if (!hero) return;
    const heroBottom = hero.offsetHeight - 80;
    if (window.scrollY > heroBottom) {
      navbar.classList.remove("at-top");
    } else {
      navbar.classList.add("at-top");
    }
  }

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // ============================================
  // BURGER MENU — Mobile fullscreen nav
  // ============================================
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", function () {
      this.classList.toggle("open");
      navLinks.classList.toggle("open");
      // Prevent body scroll when menu is open
      document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("open");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Reset on resize
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 769) {
        burgerMenu.classList.remove("open");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

});
