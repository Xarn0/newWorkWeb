let swp = new Swiper('.discont__slider',{
    slidesPerView: 4,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
            998: {
                  slidesPerView: 3,
            },
            662:{
                  slidesPerView:3 
            }
      }
});
var swiperProductHeader = new Swiper('.product__headerSlider',{
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true
})
var swiperProductFooter = new Swiper('.product__footerSlider',{
      slidesPerView: 3,
     
      spaceBetween: 30,
      centeredSlides: true, 
      // freeMode: true,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperProductHeader,
    },
})