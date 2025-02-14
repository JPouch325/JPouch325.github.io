document.addEventListener("DOMContentLoaded", function () {
        const burgerMenu = document.querySelector(".burger-menu");
        const navLinks = document.querySelector(".nav-links");

        burgerMenu.addEventListener("click", function () {
            this.classList.toggle("open");
            navLinks.classList.toggle("open");
        });
    });
