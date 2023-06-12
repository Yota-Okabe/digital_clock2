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

// 機能②『ストップウォッチ』
const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours()-9).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

    time.textContent = `${h}:${m}:${s}.${ms}`;
    timeoutID = setTimeout(displayTime, 10);
}

// スタートボタン
startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    displayTime();
});

// ストップボタン
stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
    stopTime += (Date.now() - startTime);
});

// リセットボタン
resetButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = '00:00:00.000';
    stopTime = 0;
});