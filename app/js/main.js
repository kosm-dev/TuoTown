$(function () {


  $('.menu-btn').on('click', function () {
    $('.menu').removeClass('menu--close');
    $('body').addClass('body-lock');
  });
  $('.menu-btn__close').on('click', function () {
    $('.menu').addClass('menu--close');
    $('body').removeClass('body-lock');
  });

  $('.top-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrows"><img src="images/icon/arrow-right.svg" alt=""></button>',
    dots: true,
    autoplay: true,
    infinite: true
  });


  // шапка
  $(window).scroll(function () {
    $('.header').toggleClass('header--scroll', $(this).scrollTop() > 0);
  });
});
