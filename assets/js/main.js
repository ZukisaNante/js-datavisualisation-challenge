//getting data from html file and creating an array
var table = document.getElementById("table1")
var tableLength = table.rows.length
var data = { labels: [], country: [], area: [] }
for (var i = 1; i < tableLength; i++) {
    data.labels.push(table.rows[i].cells[1].innerText)
    data.country.push(table.rows[i].cells[2].innerText.replace(',', ''))
    data.area.push(table.rows[i].cells[3].innerText)
}
//random function to generate different colours
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 36; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//chart
var canvas = document.getElementById("chartInfo") //calling canvas from html
canvas.style.width = "100%";
var ctx = canvas.getContext('2d')
var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.country,
                backgroundColor: ["#64B5F6", "#FFD54F", "#2196F3", "#FFC107", "#1976D2", "#FFA000", "#0D47A1", "#00FFFF", "#008080", "#00FFFF", "#008000", "#00FF00"],
                hoverBackgroundColor: getRandomColor()
            }]
        },
        options: {
            legend: {
                responsive: true,
                maintainAspectRatio: false,
                display: true,
                position: "right"
            } //comma added
            //new code
            /* scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            } */
        }
    })
    // used for example purposes
/* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// this post id drives the example data
var postId = 1;

// logic to get new data
var getData = function() {
    $.ajax({
        url: 'https://canvasjs.com/services/data/datapoints.php' + postId + '/comments',
        success: function(data) {
            // process your data to pull out what you plan to use to update the chart
            // e.g. new label and a new data point

            // add new label and data point to chart's underlying data structures
            myChart.data.labels.push("Post " + postId++);
            myChart.data.datasets[0].data.push(getRandomIntInclusive(1, 25));

            // re-render the chart
            myChart.update();
        }
    });
}; */

// get new data every 3 seconds
setInterval(getData, 3000);
//Getting data from external JSON

/* var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {
    $.each(data, function(key, value) {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
        console.log(dataPoints);
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
//function update
function updateChart() {
    $.getJSON("https://canvasjs.com/services/data/datapoints.php=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
        $.each(data, function(key, value) {
            dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1])
            });
        });
        chart.render();
        setTimeout(function() { updateChart() }, 1000);
    });
} */