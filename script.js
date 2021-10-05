
var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var clockTime = hours + ':' + minutes + ':' + seconds;

    clock.innerText = clockTime;
}
showCurrentTime();