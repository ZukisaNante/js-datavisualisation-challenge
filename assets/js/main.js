//create variables
var tableInfo = document.getElementById('table1');
//converingtable to json

var data = []; // first row needs to be headers var headers = []; 
for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}
// go through cells 
for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
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