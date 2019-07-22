//create variables
let year = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
const Belgique = ['1012,8', '1007,8', '1013,7', '2999,4', '1022,8', '1034,4', '1043,6', '1067,3', '1072,0', '1111,0', '1073,8'];
const Bulgarie = ['146,9', '143,9', '142,1', '137,8', '136,4', '134,7', '126,7', '138,1', '147,0', '128,6', '1073,8'];
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