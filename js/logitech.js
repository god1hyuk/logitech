$logo = $('#hero-logo-container');
$logoMobile = $('.mobile-logo');
$logo.html('<div id="hero-logo-ani" class="hero-logo-ani animating stoppedAnimation"></div>');
$logoMobile.html('<img class="mobile-dark-logo" src="/content/dam/logitech/common/en/logi-logo-dark.png" alt="logo"><img class="mobile-light-logo" src="/content/dam/logitech/common/en/logi-logo-white.png" alt="logo">');
$logiAni = $("#hero-logo-ani");

$logo.css('visibility', 'visible');

$logo.hover(function() {
        $logiAni
        .removeClass("stoppedAnimation")
        .addClass("hoverPlay");
    },
    function() {
        $logiAni
            .removeClass("hoverPlay")
            .addClass("stoppedAnimation");
});


$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });


// Banner slide

// var swiper = new Swiper('.swiper-container', {
//     speed: 700,
//     spaceBetween: 30,
//     effect: 'fade',
//     loop: 'true',
//     autoplay: {
//         delay: 12000,
//     },
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
// });