window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.promo__nav');
    const menuItem = document.querySelectorAll('.promo__nav li');
    const hamburger = document.querySelector('.promo__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('promo__hamburger_active');
        nav.classList.toggle('promo__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('promo__hamburger_active');
            nav.classList.toggle('promo__nav_active');
        });
    });
});