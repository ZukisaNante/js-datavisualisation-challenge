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
        }
    }
})