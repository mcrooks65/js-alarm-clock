
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
}

var updateTime = function() 
{
    var oneSecond = 1000;
    setInterval( updateTime, oneSecond);
    showCurrentTime();
}
updateTime();

