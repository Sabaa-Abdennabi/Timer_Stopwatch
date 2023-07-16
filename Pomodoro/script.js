//hide and show the content
const timerIcon = document.getElementById('timer-icon');
const shortBreakIcon = document.getElementById('short-break-icon');
const longBreakIcon = document.getElementById('long-break-icon');


const timerContent = document.getElementById('timer-content');
const shortBreakContent = document.getElementById('short-break-content');
const longBreakContent = document.getElementById('long-break-content');

timerIcon.classList.add('active');
timerContent.classList.add('show');

timerIcon.addEventListener('click', function () {
    document.body.style.backgroundColor = '#f2f2f2';
    timerIcon.classList.remove('active');
    shortBreakIcon.classList.remove('active');
    longBreakIcon.classList.remove('active');


    timerContent.classList.remove('show');
    shortBreakContent.classList.remove('show');
    longBreakContent.classList.remove('show');

    timerIcon.classList.add('active');
    timerContent.classList.add('show');
});

shortBreakIcon.addEventListener('click', function () {
    document.body.style.backgroundColor = '#069AA8';

    timerIcon.classList.remove('active');
    shortBreakIcon.classList.remove('active');
    longBreakIcon.classList.remove('active');

    timerContent.classList.remove('show');
    shortBreakContent.classList.remove('show');
    longBreakContent.classList.remove('show');

    shortBreakIcon.classList.add('active');
    shortBreakContent.classList.add('show');
});

longBreakIcon.addEventListener('click', function () {
    document.body.style.backgroundColor = '#014D6D';

    timerIcon.classList.remove('active');
    shortBreakIcon.classList.remove('active');
    longBreakIcon.classList.remove('active');

    timerContent.classList.remove('show');
    shortBreakContent.classList.remove('show');
    longBreakContent.classList.remove('show');

    longBreakIcon.classList.add('active');
    longBreakContent.classList.add('show');
});
//start the timer and stop the timer for timer
let timerInterval; 
const tstart = document.getElementById('tstart');

function time(min, sec) {
    sec.innerHTML--;
    if (sec.innerHTML < 0) {
        sec.innerHTML = 59;
        min.innerHTML--;
    }
    if (min.innerHTML < 0) {
        min.innerHTML = 0;
        sec.innerHTML = 0;
    }
    
if (sec.innerHTML.length<2){
    sec.innerHTML="0"+sec.innerHTML;
}
if (min.innerHTML.length<2){
    min.innerHTML="0"+min.innerHTML;
}

}

tstart.addEventListener('click', function () {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('tstart').innerHTML = 'Start';
    } else {
        timerInterval = setInterval(function () {
            
            time(
                document.getElementById('tmin'),
                document.getElementById('tsec')
            );
        }, 1000);
        document.getElementById('tstart').innerHTML = 'Stop';
    }
});
//start and stop for long break
let lbtimerInterval;
const lbstart = document.getElementById('lbstart');
lbstart.addEventListener('click', function () {
    if (lbtimerInterval) {
        clearInterval(lbtimerInterval);
        lbtimerInterval = null;
        lbstart.innerHTML = 'Start';
    } else {
        lbtimerInterval = setInterval(function () {
            
            time(
                document.getElementById('lbmin'),
                document.getElementById('lbsec')
            );
        }, 1000);
        lbstart.innerHTML = 'Stop';
    }
});
//start and stop for short break
let btimerInterval;
const bstart = document.getElementById('bstart');
bstart.addEventListener('click', function () {
    if (btimerInterval) {
        clearInterval(btimerInterval);
        btimerInterval = null;
        bstart.innerHTML = 'Start';
    } else {
        btimerInterval = setInterval(function () {
            
            time(
                document.getElementById('bmin'),
                document.getElementById('bsec')
            );
        }, 1000);
        bstart.innerHTML = 'Stop';
    }
});
