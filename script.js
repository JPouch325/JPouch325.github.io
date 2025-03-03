document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle du menu au clic
    burgerMenu.addEventListener("click", function () {
      this.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  
    // Réinitialisation lors du redimensionnement
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1025) {
        // Supprime la classe .open en mode PC
        burgerMenu.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  
    // Vérifie l'état initial au chargement
    if (window.innerWidth >= 1025) {
      burgerMenu.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });
