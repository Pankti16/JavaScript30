//Select the seconds hand
const secondsHand = document.querySelector('.second-hand');
//Select the min hand
const minsHand = document.querySelector('.min-hand');
//Select the hour hand
const hoursHand = document.querySelector('.hour-hand');

//Get date and set it in the UI
function setDate () {
    const now = new Date();

    //Update seconds hand
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    //Update mins hand
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;

    //Update hours hand
    const hours = now.getHours();
    const hoursDegree = ((hours / 60) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

//Update date in UI every second
setInterval(setDate, 1000);

//Call on startup
setDate();