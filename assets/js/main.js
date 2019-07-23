//create variables
//let headers = document.getElementsByTagName('h3'); //calling the header
//var tableInfo = document.getElementById('table1'); //calling the table

//converingtable HTML to an array

/* var data = []; // first row needs to be headers var headers = []; 
for (var i = 0; i < tableInfo.rows[0].cells.length; i++) {
    headers[i] = tableInfo.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, ''); //gi ? google
}
// go through cells 
for (var i = 1; i < tableInfo.rows.length; i++) {
    var tableRow = tableInfo.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
        [headers[j]][headers[j]]
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
    data.push(rowData);
}
console.log(data); */

var table = document.getElementById("table1")
var tableLen = table.rows.length
var data = { labels: [], country: [], area: [] }
for (var i = 1; i < tableLen; i++) {
    data.labels.push(table.rows[i].cells[0].innerText)
    data.country.push(table.rows[i].cells[1].innerText.replace(',', ''))
    data.area.push(table.rows[i].cells[2].innerText)
    console.log(data.area[0]);
    let changePass = parseInt(data.area[0]);
    console.log(changePass);
}

var canvasP = document.getElementById("chartInfo")
var ctxP = canvasP.getContext('2d')
var myPieChart = new Chart(ctxP, {
    type: 'line',
    data: {
        labels: data.labels,
        datasets: [{
            data: data.country,
            backgroundColor: ["#64B5F6", "#FFD54F", "#2196F3", "#FFC107", "#1976D2", "#FFA000", "#0D47A1"],
            hoverBackgroundColor: ["#B2EBF2", "#FFCCBC", "#4DD0E1", "#FF8A65", "#00BCD4", "#FF5722", "#0097A7"]
        }]
    },
    options: {
        legend: {
            display: true,
            position: "right"
        }
    }
})


//draw chart
/* var years = [];
let noYears = years.push(tableRow.rows[0]);
console.log(noYears);
var labels = [];
const datasets = [];
console.log(years);
var ctx = document.getElementById('chartInfo');
var chartInfo = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Pays,
        datasets: [{
            data: Belgique,
        }]
    }

}); */
/* function drawChart() {
    var canvas = document.getElementById('chartInfo');//link to html
    console.log(canvas);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            },
            options: options
        });

    }
} */