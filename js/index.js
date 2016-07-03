require('../css/style.css');

var $ = require('jquery');

$(document).ready(function() {
  $('#main-image-logo-opacity-wrapper').delay(2000).fadeOut(4000);
  $('#main-image-logo-wrapper').delay(2000).fadeOut(4000);
  $('.main-header, .learn-more').fadeIn(7000).css('display', 'flex');
})
