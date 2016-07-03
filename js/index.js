require("../css/style.css");
require("font-awesome-webpack");

var $ = require('jquery');

$(document).ready(function() {
  $('#main-image-logo-opacity-wrapper').delay(2000).fadeOut(4000);
  $('#main-image-logo-wrapper').delay(2000).fadeOut(4000);
  $('.main-header, .learn-more').fadeIn(6000).css('display', 'flex');
})
