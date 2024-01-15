let hours = document.querySelector('.hour');
let minutes = document.querySelector('.min');
let seconds = document.querySelector('.sec');
let soundEffect = document.getElementsByTagName('audio');

function runClock() {
    let fullDate = new Date();
    let hrs = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds() / 60;

    // Calculate rotation angles for each needle
    let hrsRotation = (hrs % 12 + min / 60) * 360 / 12;
    let minRotation = (min + sec) * 360 / 60;  // corrected min rotation calculation
    let secRotation = sec * 360;

    // Apply rotation to needle elements
    hours.style.setProperty('--rotate', hrsRotation);
    minutes.style.setProperty('--rotate', minRotation);
    seconds.style.setProperty('--rotate', secRotation);

}

runClock();
setInterval(runClock, 1000);
