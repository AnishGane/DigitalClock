let clock = document.getElementsByClassName("clock-container")[0];
setInterval(function showTime() {

    let date = new Date();
    let meridiem = (date.getHours() >= 12) ? "PM" : "AM";
    
    // Hour
    let h = date.getHours();
    let hourElem = clock.querySelector(".hour");
    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12;
    }
    hourElem.textContent = h + ":";

    // Minute
    let m = date.getMinutes();
    let minElem = clock.querySelector(".minute");
    minElem.textContent = ("0" + m).slice(-2);
    
    // Second
    let s = date.getSeconds();
    let secElem = clock.querySelector(".second");
    secElem.textContent = ":" + ("0" + s).slice(-2) + meridiem;
}, 1000);

showTime();
