require('../semantic/dist/components/sidebar.js');

let $          = require('jquery/dist/jquery.js');
let _          = require('underscore/underscore');
let Highcharts = require('highcharts/highstock');
let request    = require('superagent');

let backgroundColor = 'rgba(255, 255, 255, 1)';

$(document).ready(function() {
  $("a.sidebar.item").click(function() {
    $('.ui.sidebar').sidebar('toggle');
  });

  $("[data-market]").each(function(_index, market) {
    let $market = $(market);
    let klineData = $(market).data('market-k');

    new Highcharts.Chart({
      chart: {
        animation: true,
        type: 'area',
        renderTo: $market[0],
        margin: [0,-6,0,-6],
        height: 80,
        backgroundColor: backgroundColor,
        plotBackgroundColor: backgroundColor
      },
      title: {
        align: 'left',
        x: -10,
        y: 7,

        useHTML: true,
        text: "<span class='ui header highchart market'>" + $market.data('market-title') + "</span>" + 
              "<span class='ui text highchart price'></span>" +
              "<span class='highchart block ask' style='background-color: " + $market.data('market-ask-fill-color') + ";'></span>"
      },
      series: [{
        data: klineData,
        animation: false,
        enableMouseTracking: false,
        lineWidth: 1,
        fillColor: {
          linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
          stops : [
            [0, $market.data('market-ask-linear-gradient-start-color')],
            [1, $market.data('market-ask-linear-gradient-end-color')]
          ]
          //$market.data('market-ask-color'),
        },
        showInLegend: false,
        marker: {
          enabled: false
        }
      }],
      plotOptions: {
          series: {
              lineColor: $market.data('market-ask-border-color')
          }
      },
      xAxis: [{
        title: {
          enabled: false
        },
        lineWidth: 0,
        gridLineWidth: '0'
      }],
      yAxis: [{
        title: {
          enabled: false
        },
        top: "0%",
        height: "100%",
        min: _.min(klineData),
        maxPadding: 0.02,
        minPadding: 0.02,
        gridLineWidth: '0'
      }],
      credits:{
        enabled: false
      }
    });
  });

  if ($("[data-market]").length) {
    var refreshTicker = function() {
      request
        .get('/api/v2/tickers.json')
        .end(function(err, res) {
          $("[data-market]").each(function(_index, market) {
            let $market = $(market);
            let id = $market.data('market')
            $market.find('.highchart.price').text(res.body[id].ticker.last);
          });
        });
    };

    window.setInterval(refreshTicker, 5000)
    refreshTicker();
  }

  $(".more.title").click(function(){
    window.location.href="/bulletins"
  });
});
