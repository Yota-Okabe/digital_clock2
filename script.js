// 現在時刻
var elem = document.getElementById("now");

function real_time(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    elem.innerHTML = year+"年"+month+"月"+day+"日"+" "+hours+"時"+minutes+"分"+seconds+"秒" ;
}
setInterval("real_time()", 1000);
