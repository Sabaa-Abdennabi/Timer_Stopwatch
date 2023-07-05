const min=document.getElementById("min");
const hr=document.getElementById("hr");
const sec=document.getElementById("sec");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
let timer=false;

start.addEventListener("click",()=>{
    timer=true;
    time();
})
stop.addEventListener("click",()=>{
    timer=false;})
reset.addEventListener("click",()=>{
    timer=false;
    min.innerHTML="00";
    hr.innerHTML="00";
    sec.innerHTML="00";
})
function time(){
    if(timer==true){
        sec.innerHTML++;
        if(sec.innerHTML==60){
            sec.innerHTML=0;
            min.innerHTML++;
    }
    if(min.innerHTML==60){
        min.innerHTML=0;
        sec.innerHTML=0;
        hr.innerHTML++;
}
if(hr.innerHTML==24){
    hr.innerHTML=0;
}
if (sec.innerHTML.length<2){
    sec.innerHTML="0"+sec.innerHTML;
}
if (min.innerHTML.length<2){
    min.innerHTML="0"+min.innerHTML;
}
if (hr.innerHTML.length<2){
    hr.innerHTML="0"+hr.innerHTML;
}
setTimeout(time,1000);
    }
}
