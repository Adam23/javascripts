let $          = require('jquery/dist/jquery.js');
let Highcharts = require('highcharts/highcharts.js');


$(document).ready(function() {
  if ($("#assets_allocation").length) {
    let data = []

    $("[data-asset-raito]").each(function() {
      data.push({name: $(this).data('asset-name'), y: parseFloat($(this).data('asset-raito')), sliced: true, selected: true})
    });

    Highcharts.chart('assets_allocation', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text:$('#pie_chart_assets').data('total-assets')
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data
      }]
    });  
  }
});
