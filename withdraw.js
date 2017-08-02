let $          = require('jquery/dist/jquery.js');

$(document).ready(function(){
  $('form#new_withdraw div#balance').click(function(){
    $("form#new_withdraw input#withdraw_amount").val($(this).data('amount'));
  });

  $('form#new_withdraw :submit').click(function(){
    $('form#new_withdraw div.field').addClass('disabled');
    $('form#new_withdraw :submit').addClass('disabled');
  });
});
