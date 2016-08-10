var $ = require('jquery');
window.jQuery = $;  //for featherlight issue re: requires a window jquery
window.$ = $;


require("font-awesome-webpack");
require("slick-carousel");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require("fancybox")($);
require("fancybox/dist/css/jquery.fancybox.css");
require("../css/style.css");

function initialFadeIn() {
  $('#main-image-logo-opacity-wrapper').delay(2000).fadeOut(4000);
  $('#main-image-logo-wrapper').delay(2000).fadeOut(4000);
  $('.main-header').fadeIn(6000).css('display', 'flex');
  $('.main-image-headline').delay(2000).fadeIn(6000).delay(2000).css('display', 'flex');
  $('.body-wrap').fadeIn(6000);
}

function scrollTop(linkID, topMargin, milliseconds) {
  $(linkID).on('click', function(event) {
    event.preventDefault();
    console.log('clicked');

    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top - topMargin
    }, milliseconds);
  });
}

$(document).ready(function() {

  var headerTop = $('.main-header-sticky-anchor').offset().top;
  var headerHeight = $('.main-header').height();
  var mainImageHeight = $('.main-image-headline').height();

  scrollTop('#approach-and-services-link', headerHeight, 4000);
  scrollTop('#expect-wrap-link', headerHeight, 4000);
  scrollTop('#video-partners-link', (headerHeight + 15), 4000);
  scrollTop('#the-team-link', headerHeight, 4000);
  scrollTop('#our-portfolio-link', headerHeight, 4000);
  scrollTop('#logo', (mainImageHeight + (headerHeight * 2)), 6000);

  $('.fancybox').fancybox({
      closeClick: true
  });

  initialFadeIn();

  $('.testimonials').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: null,
    nextArrow: null
  });

  $('.specific-services').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: null,
    nextArrow: null
  });

  $('.portfolio-logos').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.team-member').hover(
    function(){$('.team-member-image', this).toggleClass('grayscale');}
    );



  // var secondImageTop = $('.second-image-sticky-anchor').offset().top;
  // var thirdImageTop = $('.third-image-sticky-anchor').offset().top;
  // var fourthImageTop = $('.fourth-image-sticky-anchor').offset().top;

  // console.log(headerHeight, secondImageTop, thirdImageTop);

  $(window).resize( function() {
    var headerTop = $('.main-header-sticky-anchor').offset().top;
    // var secondImageTop = $('.second-image-sticky-anchor').offset().top;
    // var thirdImageTop = $('.third-image-sticky-anchor').offset().top;
    // var fourthImageTop = $('.fourth-image-sticky-anchor').offset().top;
    })

  $(window).scroll( function() {
  
    var windowTop = $(window).scrollTop();

    if (windowTop >= headerTop) {
      $('.main-header').addClass('sticky-header');
      $('.main-header-sticky-anchor').height($('.main-header').outerHeight());
    } else {
      $('.main-header').removeClass('sticky-header');
      $('.main-header-sticky-anchor').height(625);
    }

    // if (windowTop >= (secondImageTop - headerHeight)) {
    //   $('.second-image').addClass('sticky-image');
    //   $('.second-image-sticky-anchor').height($('.second-image').outerHeight());
    //   console.log("sticky");
    // } else {
    //   $('.second-image').removeClass('sticky-image');
    //   $('.second-image-sticky-anchor').height(0);
    // }

    // if (windowTop >= (thirdImageTop - headerHeight)) {
    //   $('.third-image').addClass('sticky-image');
    //   $('.third-image-sticky-anchor').height($('.third-image').outerHeight());
    // } else {
    //   $('.third-image').removeClass('sticky-image');
    //   $('.third-image-sticky-anchor').height(0);
    // }

    // if (windowTop >= (fourthImageTop - headerHeight)) {
    //   $('.fourth-image').addClass('sticky-image');
    //   $('.fourth-image-sticky-anchor').height($('.fourth-image').outerHeight());  
    // } else {
    //   $('.fourth-image').removeClass('sticky-image');
    //   $('.fourth-image-sticky-anchor').height(0);
    // }

  });

});
