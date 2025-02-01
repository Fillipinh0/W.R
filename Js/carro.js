const swiper = new Swiper('.swiper', {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {

        1234: {
            slidesPerView: 1,
            spaceBetween: 15,
            },
        1236: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        
        1480: {
        slidesPerView: 3,
        spaceBetween: 18
        },
        
        1700: {
        slidesPerView: 4,
        spaceBetween: 20
        }
    }
  });