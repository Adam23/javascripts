require('../semantic/dist/components/dimmer.js');
let $ = require('jquery/dist/jquery.js');

$(document).ready(function() {
  $(".active-dimmer").click(function() {
    $($(this).data('dimmer')).dimmer('show');
  });

  $(".hidden-dimmer").click(function() {
    $($(this).data('dimmer')).dimmer('hide');
  });

  $('.ui.automation.dimmer').parents('.ui.segment').dimmer('show');
  $('.ui.automation.dimmer button.hide.action').click(function() {
    $(this).parents('.ui.segment').dimmer('hide')
  });
});
