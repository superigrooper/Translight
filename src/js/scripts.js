$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button class="buttons-arrow__item left"><img src="img/icons/left.svg" alt=""></button>',
        nextArrow: '<button class="buttons-arrow__item right"><img src="img/icons/right.svg" alt=""></button>',
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    });
});

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