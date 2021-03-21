// $logo = $('#hero-logo-container');
// $logoMobile = $('.mobile-logo');
// $logo.html('<div id="hero-logo-ani" class="hero-logo-ani animating stoppedAnimation"></div>');
// $logoMobile.html('<img class="mobile-dark-logo" src="/content/dam/logitech/common/en/logi-logo-dark.png" alt="logo"><img class="mobile-light-logo" src="/content/dam/logitech/common/en/logi-logo-white.png" alt="logo">');
// $logiAni = $("#hero-logo-ani");

// $logo.css('visibility', 'visible');

// $logo.hover(function() {
//         $logiAni
//         .removeClass("stoppedAnimation")
//         .addClass("hoverPlay");
//     },
//     function() {
//         $logiAni
//             .removeClass("hoverPlay")
//             .addClass("stoppedAnimation");
// });


$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

// slider1
const swiper1 = new Swiper('.swiper1', {
    speed: 800,
    effect: 'fade',
    loop: true,
    navigation: {
    nextEl: '.n1',
    prevEl: '.p1',
    },
    pagination: {
      el: '.pg1',
      clickable: true,
    },
});

// slider2
const swiper2 = new Swiper('.swiper2', {
  speed: 800,
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.n2',
    prevEl: '.p2',
  },
  pagination: {
    el: '.pg2',
    clickable: true,
  },
});

// slider3
const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.n3',
    prevEl: '.p3',
  },
  pagination: {
    el: '.pg3',
    clickable: true,
  },
});
