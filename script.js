var alarmHourSelector = document.getElementById("alarmHourSelector")
var alarmMinuteSelector = document.getElementById("alarmMinuteSelector")
var setAlarmButton = document.getElementById("setAlarmButton")

var sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    var seconds = currentTime.getSeconds();
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds;

    clock.innerText = clockTime;
    // clock.innerText = currentTime.toUTCString();

    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var checkTime = currentHour + ":" + currentMinute;
    var alarmTime = alarmHourSelector.value + ":" + alarmMinuteSelector.value
    if (checkTime === alarmTime) 
    {
        sound.play();
    }

}

     
var start = new Date();
    
setInterval(function () {
    showCurrentTime((new Date() - start) % 1000)
}, 1000);

document.onload = showCurrentTime();

var setAlarmEvent = function()
{
    var alarmTime = alarmHourSelector.value + ":" + alarmMinuteSelector.value

    document.getElementById("alarmEvent").innerText = "The alarm is set for " + alarmTime

};

setAlarmButton.addEventListener("click", setAlarmEvent);