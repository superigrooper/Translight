$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        prevArrow: '<button class="buttons-arrow__item left"><img src="img/icons/left.svg" alt=""></button>',
        nextArrow: '<button class="buttons-arrow__item right"><img src="img/icons/right.svg" alt=""></button>',
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1109,
                settings: {
                    variableWidth: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index())
            .addClass('catalog__content_active');
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