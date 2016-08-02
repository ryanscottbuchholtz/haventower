var $ = require('jquery');

require("../css/style.css");
require("font-awesome-webpack");
require("slick-carousel");

function initialFadeIn() {
  $('#main-image-logo-opacity-wrapper').delay(2000).fadeOut(4000);
  $('#main-image-logo-wrapper').delay(2000).fadeOut(4000);
  $('.main-header').fadeIn(6000).css('display', 'flex');
  $('.main-image-headline').delay(2000).fadeIn(6000).delay(2000).css('display', 'flex');
  $('.body-wrap').fadeIn(6000);
}




$(document).ready(function() {

  initialFadeIn();

  $('.testimonials').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000
  });

  $('.specific-services').slick({
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(window).scroll( function() {
  
    var windowTop = $(window).scrollTop();
    var headerTop = $('.main-header').offset().top;
    var headerHeight = $('.main-header').height();
    var secondImageTop = $('.second-image-sticky-anchor').offset().top;
    var thirdImageTop = $('.third-image-sticky-anchor').offset().top;
    var fourthImageTop = $('.fourth-image-sticky-anchor').offset().top;

    if (headerTop <= windowTop) {
      $('.main-header').addClass('sticky-header');
    } 

    if (headerTop < 625) {
      $('.main-header').removeClass('sticky-header');
    }

    if (windowTop >= (secondImageTop - headerHeight)) {
      $('.second-image').addClass('sticky-image');
      $('.second-image-sticky-anchor').height($('.second-image').outerHeight());
    } else {
      $('.second-image').removeClass('sticky-image');
      $('.second-image-sticky-anchor').height(0);
    }

    if (windowTop >= (thirdImageTop - headerHeight)) {
      $('.third-image').addClass('sticky-image');
      $('.third-image-sticky-anchor').height($('.third-image').outerHeight());
    } else {
      $('.third-image').removeClass('sticky-image');
      $('.third-image-sticky-anchor').height(0);
    }

    if (windowTop >= (fourthImageTop - headerHeight)) {
      $('.fourth-image').addClass('sticky-image');
      $('.fourth-image-sticky-anchor').height($('.fourth-image').outerHeight());
    } else {
      $('.fourth-image').removeClass('sticky-image');
      $('.fourth-image-sticky-anchor').height(0);
    }

  });

});
