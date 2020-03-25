const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const date = new Date(); /* create new date object */
    
    /* set the seconds hand */
    const seconds = date.getSeconds();
    const secondsDegree = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    /* set the minute hand */
    const minutes = date.getMinutes();
    const minutesDegree = ((minutes / 60 ) * 360 + 90);
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    /* set the hours hand */
    const hours = date.getHours();
    const hoursDegree = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    
    document.getElementById('digitalClock').innerHTML = addZero(hours) + " : " + addZero(minutes) + " : " + addZero(seconds);
}

function addZero(time) {
    if(time < 10) {
        time = "0" + time;
    }
    return time;
}

setInterval(setDate, 1000);