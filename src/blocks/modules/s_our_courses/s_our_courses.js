import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

if( document.querySelector('.s-our-courses__slider') ) {
    const gallerySlider = new Swiper('.s-our-courses__slider', {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        breakpoints: {
        575: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 60,
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
    });
}
