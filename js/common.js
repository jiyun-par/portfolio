$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
    speed: 2000,
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // Navigation arrows
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide:false,
      draggable: true,
      snapOnRelease:true,
    },
    mousewheel: {
      invert: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
});
