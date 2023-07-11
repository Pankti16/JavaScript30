//Get all the tags/node with data time assigned and convert it to array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
//Loop through the data time array and sum to total seconds
const seconds = timeNodes.reduce((total, timeNode) => {
  const [mins, secs] = timeNode.dataset.time.split(':').map(parseFloat);
  return total + (mins * 60) + secs;
}, 0);

//Temp variable to hold total seconds
let secondsLeft = seconds;
//Convert hours from total seconds
const hours = Math.floor(secondsLeft / 3600);
//Seconds left after converting to hours
secondsLeft %= 3600;

//Convert mins from left total seconds
const mins = Math.floor(secondsLeft / 60);
//Seconds left after converting to mins
secondsLeft %= 60;

//hours, minutes, and seconds
console.log(hours, mins, secondsLeft);
