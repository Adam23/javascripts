require('jquery-qrcode/jquery.qrcode.min.js');
let $ = require('jquery/dist/jquery.js');

$(document).ready(function() {
  var a = $("#btc_deposit_address").text();
  $('#qrcode').qrcode(a);
  $('canvas').css("border","3px solid white");

});
