import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

if( document.querySelector('.s-gallery__slider') ) {
    const gallerySlider = new Swiper('.s-gallery__slider', {
        modules: [Navigation],
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
        575: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
          1200: {
            spaceBetween: 100,
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
    });
}
