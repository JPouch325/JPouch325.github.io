// Sélection des éléments
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

// Ajouter l'événement pour ouvrir/fermer le menu
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
