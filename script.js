document.addEventListener("DOMContentLoaded", function () {

  /* ── Navbar: transparent on hero, glass on scroll ── */
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");

  function onScroll() {
    if (!hero) return;
    const past = window.scrollY > hero.offsetHeight - 60;
    navbar.classList.toggle("at-top", !past);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── Burger menu ── */
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close when a link is tapped
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Close on resize to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  /* ── Scroll reveal ── */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    reveals.forEach(function (el) { revObs.observe(el); });
  }
});
