let hours=document.querySelectorAll('.hrs');
let minutes=document.querySelectorAll('.min');
let seconds=document.querySelectorAll('.sec');

function runClock(){
    let fullDate=new Date();
    let hrs=fullDate.getHours();
    let min=fullDate.getMinutes();
    let sec=fullDate.getSeconds()/60;

    seconds.style=("--rotate", sec*360)
    console.log(sec)
}
runClock();
setInterval(runClock, 1000)
