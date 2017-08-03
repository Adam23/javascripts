let $ = require('jquery/dist/jquery.js');

$(document).ready(function(){
  $('form#new_withdraw div#balance').click(function(){
    $("form#new_withdraw input#withdraw_amount").val($(this).data('amount'));
  });

  const submit_btn = $('form#new_withdraw :submit');
  submit_btn.click(function(){
    $('form#new_withdraw div.field').addClass('disabled');
    submit_btn.addClass('disabled');
  });
});
