import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
 
const servicesSlider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
      });
}

export default servicesSlider