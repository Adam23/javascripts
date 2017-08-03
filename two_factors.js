let $ = require('jquery/dist/jquery.js');

$(document).ready(function(){
  const bund_sms_send_btn = $("#bund_sms_send_btn");
  bund_sms_send_btn.click(function(){
   $.post("/verify/sms_auth", {
     'sms_auth[country]': $("#sms_auth_country").val(),
     'sms_auth[phone_number]': $("#sms_auth_phone_number").val(),
     'sms_auth[otp]': $("#sms_auth_otp").val(),
     'commit': 'send_code',
     '_method': "patch"
    })
    bund_sms_send_btn.hide();
    $('#bund_sms_send_tip').show();
  });

  const sms_send_btn = $("#sms_send_btn");
  sms_send_btn.click(function(){
    $.ajax("/two_factors/sms?refresh=true").done(function() {
      sms_send_btn.hide();
      $('#sms_send_tip').show();
    });
  });

  $("#two_factor_auth_app").click(function() {
    $("#two_factor_auth_app, #two_factor_auth_sms").removeClass('active')
    $(this).addClass('active');
    $("#two_factor_sms_field").hide();
    const two_factor_otp = $("#two_factor_otp");
    two_factor_otp.attr('placeholder', two_factor_otp.data("app-placeholder"));
    $("#two_factor_type").val("app");
  });

  $("#two_factor_auth_sms").click(function() {
    $("#two_factor_auth_app, #two_factor_auth_sms").removeClass('active')
    $(this).addClass('active');
    const two_factor_otp = $("#two_factor_otp");
    two_factor_otp.attr('placeholder', two_factor_otp.data("sms-placeholder"));
    $("#two_factor_sms_field").show();
    $("#two_factor_type").val("sms");
  });
  var ga_uri = $("#ga_uri").val();
  $('#two_factor_qrcode').qrcode(ga_uri);
});
