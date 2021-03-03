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
    $('.rent__carousel').slick({
        prevArrow: '<button class="buttons-arrow__item left"><img src="img/icons/left.svg" alt=""></button>',
        nextArrow: '<button class="buttons-arrow__item right"><img src="img/icons/right.svg" alt=""></button>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    // variableWidth: false,
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
    const navigation = document.querySelector('.navigation');
    const navigationItem = document.querySelectorAll('.navigation__item');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navigation.classList.toggle('navigation_active');
    });

    navigationItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            navigation.classList.toggle('navigation_active');
        });
    });
    const date = document.querySelector('.date');
    date.innerHTML = new Date().getFullYear();
});