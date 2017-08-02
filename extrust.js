let $          = require('jquery/dist/jquery.js');

$(document).ready(function(){

  $('.duration').click(function(){
    $('.duration').removeClass('active');
    $(this).addClass('active');
    $('#extrust_contract_duration').val($(this).val());
    $('#duration').text($(this).text());
  });

  $("#add_beneficiary").click(function(){
    if($('#second_beneficiary').parent().css("display") == "none"){
      $('#second_beneficiary').parent().css("display", "block");
    }else{
      $('#third_beneficiary').parent().css("display", "block");
    } 
    if($('#second_beneficiary, #third_beneficiary').parent().css("display") == "block" && $('#third_beneficiary').parent().css("display") == "block"){
      $("#add_beneficiary").css("display", "none");
    }
  });
  $('#second_beneficiary, #third_beneficiary').click(function(){
    $(this).parent().css("display", "none");  
    $(this).parent().find('input').val(""); 
    if ($(this).parent().css("display") == "none"){
      $("#add_beneficiary").css("display", "block");
    }
  });
});
