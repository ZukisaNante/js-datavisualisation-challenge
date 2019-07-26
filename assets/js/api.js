var text = '{[[0,15],[1,19],[2,16],[3,20],[4,15],[5,15],[6,20],[7,17],[8,14],[9,13]]}';
console.log(text);
var obj = JSON.parse(text);
console.log(obj);
document.getElementById("chartContainer").innerHTML = obj;