//create variables
let headers = document.getElementsByTagName('h3'); //calling the header
var tableInfo = document.getElementById('table1'); //calling the table

//converingtable HTML to an array

var data = []; // first row needs to be headers var headers = []; 
for (var i = 0; i < tableInfo.rows[0].cells.length; i++) {
    headers[i] = tableInfo.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, ''); //gi ? google
}
// go through cells 
for (var i = 1; i < tableInfo.rows.length; i++) {
    var tableRow = tableInfo.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
    data.push(rowData);
}
console.log(data);

//draw chart
function drawChart() {
    var newChart = document.getElementById('chartInfo');
    console.log(newChart);
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
}