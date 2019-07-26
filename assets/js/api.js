//Getting data from external JSON

var dataPoints = [];
$.getJSON(" https://canvasjs.com/services/data/datapoints.php", function(data) {
    $.each(data, function(key, value) {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
    });
    chart = new Chart("chartInfo", {
        title: {
            text: "Live Chart with dataPoints from External JSON"
        },
        data: [{
            type: "line",
            dataPoints: dataPoints,
        }]
    });
    chart.render();
    updateChart();
});