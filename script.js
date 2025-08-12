
// item swiper
const swiper = new Swiper('.mysiwper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,

 pagination:{
    el: '.swiper-pagination',
    clickable: true,
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