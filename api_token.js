let $          = require('jquery/dist/jquery.js');

$(document).ready(function(){
  if ($("#access_token_qrcode").length) {
    var payload = {access_key: $('#access_key').text(), secret_key: $('#secret_key').text(), partner: "imToken"}
    var tokenQRCode = JSON.stringify(payload)
    $('#access_token_qrcode').qrcode(tokenQRCode);
  }
});
