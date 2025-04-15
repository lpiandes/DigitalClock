setInterval(currentTime, 1000)
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hour > 12) {
        hh -= 12;
        session = "PM";
    }
    
    if (hour == 0) {
        hh = 12;
        session = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hour + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = currentTime;

}

currentTime()

