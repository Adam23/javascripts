let $ = require('jquery/dist/jquery.js');

$(document).ready(function(){
    var qrcodeObj = $("#access_token_qrcode");
    if (qrcodeObj.length) {
        var payload = {
            access_key: $('#access_key').text(),
            secret_key: $('#secret_key').text(),
            partner: "imToken"
        };
        var tokenQRCode = JSON.stringify(payload);
        qrcodeObj.qrcode(tokenQRCode);
  }
});
