'use strict';


const swiperEmbedded = new Swiper('.slider-embedded', {
    navigation: {
        nextEl: '.swiper-button-next-embedded',
        prevEl: '.swiper-button-prev-embedded',
    },
});


const swiperTurnkey = new Swiper('.slider-turnkey', {
    navigation: {
        nextEl: '.swiper-button-next-turnkey',
        prevEl: '.swiper-button-prev-turnkey',
    },
});

const swiperAccessories = new Swiper('.slider-accessories', {
    navigation: {
        nextEl: '.swiper-button-next-accessories',
        prevEl: '.swiper-button-prev-accessories',
    },
});

const swiperForm = new Swiper('.slider-form', {
    navigation: {
        nextEl: '.swiper-button-next-form',
        prevEl: '.swiper-button-prev-form',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

