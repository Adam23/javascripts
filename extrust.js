let $          = require('jquery/dist/jquery.js');

$(document).ready(function(){

  const duration = $('.duration');
  duration.click(function(){
    duration.removeClass('active');
    $(this).addClass('active');
    $('#extrust_contract_duration').val($(this).val());
    $('#duration').text($(this).text());
  });


  const add_beneficiary = $("#add_beneficiary");
  add_beneficiary.click(function(){
    const second_beneficiary_parent = $('#second_beneficiary').parent(),
          third_beneficiary_parent = $('#third_beneficiary').parent();

    if(second_beneficiary_parent.css("display") == "none"){
      second_beneficiary_parent.css("display", "block");
    }else{
      third_beneficiary_parent.css("display", "block");
    }
    if($('#second_beneficiary, #third_beneficiary').parent().css("display") == "block" && third_beneficiary_parent.css("display") == "block"){
      add_beneficiary.css("display", "none");
    }
  });
  $('#second_beneficiary, #third_beneficiary').click(function(){
    const this_parent = $(this).parent();
    this_parent.css("display", "none");
    this_parent.find('input').val("");
    if (this_parent.css("display") == "none"){
      add_beneficiary.css("display", "block");
    }
  });
});
