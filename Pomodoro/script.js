
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

const timer = document.getElementById('timer');
function time(min,sec){
    sec.innerHTML --;
    if(sec.value()<0){
        sec.innerHTML = 59;
        min.innerHTML--;
    }
    if(min.value()<0){
        min.innerHTML = 0;
        sec.innerHTML = 0;
    }
}
const tstart = document.getElementById('tstart');
tstart.addEventListener('click',function(){
    setInterval(time(document.getElementById('tmin'),document.getElementById('tsec')),1000);
});
