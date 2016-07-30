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

function stickyHeader() {

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
    var secondImageTop = $('.second-image').offset().top;
    var headerHeight = $('.main-header').height();

    // console.log(secondImageTop + "= second image top");
    // console.log(windowTop + "= window top");

    console.log(windowTop + ' = windowTop');
    console.log(headerTop + ' = headerTop');
    console.log(secondImageTop + ' = secondImageTop');


  //   if(windowTop < 800) {
  //     $('.main-image').css('background', 'url(cbd72fa486ba7f5d6ed996df8a603bfa.jpeg) center no-repeat').css('background-size', 'cover')
  //   };

  //   if(windowTop >= 800) {
  //     $('.main-image').css('background', 'url(968408fe2ccbb38325c43fba30adfd75.jpeg) center no-repeat').css('background-size', 'cover');
  //     console.log('Time for image to change');
  //   };

    // var headerTop = $('.primary-nav-wrap').offset().top;

    if (headerTop <= windowTop) {
      $('.main-header').addClass('sticky-header');
    } 

    if (headerTop < 625) {
      $('.main-header').removeClass('sticky-header');
    }

    if (secondImageTop <= windowTop + headerHeight) {
      $('.second-image').addClass('sticky-image');
      $('.approach-and-services-wrap').addClass('approach-and-services-wrap-sticky');
    // } else {
    //   $('.second-image').removeClass('sticky-image');
    //   $('.approach-and-services-wrap').removeClass('approach-and-services-wrap-sticky');
      }

    if (secondImageTop < 1356.50) {
      $('.second-image').removeClass('sticky-image');
      $('.approach-and-services-wrap').removeClass('approach-and-services-wrap-sticky');
      console.log('unstuck');
    }
  });



});
