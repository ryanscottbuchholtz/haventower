require("../css/style.css");
require("font-awesome-webpack");

var $ = require('jquery');

$(document).ready(function() {
  $('#main-image-logo-opacity-wrapper').delay(2000).fadeOut(4000);
  $('#main-image-logo-wrapper').delay(2000).fadeOut(4000);
  $('.main-header, .learn-more').fadeIn(6000).css('display', 'flex');

  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
    console.log(windowTop);

    if(windowTop < 800) {
      $('.main-image').css('background', 'url(cbd72fa486ba7f5d6ed996df8a603bfa.jpeg) center no-repeat').css('background-size', 'cover')
    };

    if(windowTop >= 800) {
      $('.main-image').css('background', 'url(968408fe2ccbb38325c43fba30adfd75.jpeg) center no-repeat').css('background-size', 'cover');
      console.log('Time for image to change');
    };

  });

});
