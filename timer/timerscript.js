const min = document.getElementById("min");
const hr = document.getElementById("hr");
const sec = document.getElementById("sec");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timer = false;
start.addEventListener("click", () => {
    timer = true;
    hr.innerHTML = parseInt(document.getElementById("hour").value);
    min.innerHTML = parseInt(document.getElementById("minute").value);
    sec.innerHTML = parseInt(document.getElementById("second").value);
    time();
});
stop.addEventListener("click", () => {
    timer = false;
});
reset.addEventListener("click", () => {
    timer = false;
    min.innerHTML = "00";
    hr.innerHTML = "00";
    sec.innerHTML = "00";
});
function time() {
    if (timer == true) {
        sec.innerHTML--;
        if (sec.innerHTML < 0) {
            min.innerHTML--;
            sec.innerHTML = 59;
        }
        if (min.innerHTML < 0) {
            hr.innerHTML--;
            min.innerHTML = 59;
        }
        if (hr.innerHTML < 0) {
            hr.innerHTML = 23;
        }

        if (sec.innerHTML.length < 2) {
            sec.innerHTML = "0" + sec.innerHTML;
        }
        if (min.innerHTML.length < 2) {
            min.innerHTML = "0" + min.innerHTML;
        }
        if (hr.innerHTML.length < 2) {
            hr.innerHTML = "0" + hr.innerHTML;
        }
        setTimeout(time, 1000);
    }
}


































