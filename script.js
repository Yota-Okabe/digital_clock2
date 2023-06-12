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


// 機能①『カウントダウン』
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
    const diff = tomorrow.getTime() - now.getTime();
    const calcHour = Math.floor(diff / 1000 / 60 / 60) -6;
    const calcMin = Math.floor(diff / 1000 / 60) % 60;
    const calcSec = Math.floor(diff / 1000) % 60;

    hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
    min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
    sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}
setInterval("countdown()", 1000);

