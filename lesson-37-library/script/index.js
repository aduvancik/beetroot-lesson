new Swiper(".image-slider", {
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
autoplay: {
  delay: 3500,
  stopOnLastSlide: false,
  disableOnInteraction: false,
},
speed: 1600,
effect: "fade",
fadeEffect: {
  crossFade: true,
},
});
