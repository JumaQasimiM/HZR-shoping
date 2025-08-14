
// item swiper
const swiper = new Swiper('.mysiwper', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 10,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

 breakpoints: {
  
     550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1200 : {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  },

});
// bestseller swiper

// item swiper
const bestseller = new Swiper('.bestseller-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
   // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

 breakpoints: {
   
     550: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200 : {
      slidesPerView: 4,
    },
  },

});