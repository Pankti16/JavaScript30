let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const oldTitle = document.title;

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime (timestamp) {
  const thenDate = new Date(timestamp);
  const hours = thenDate.getHours();
  const minutes = thenDate.getMinutes();
  const hours12 = hours > 12 ? hours - 12 : hours;
  let text = 'Be back at';
  text += " ";
  text += `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  text += "(";
  text += `${hours12 < 10 ? '0' : ''}${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
  text += ")";
  endTime.textContent = text;
}

function timer(seconds) {
  //clear any existing timers
  clearInterval(countdown);

  //get now and then
  const now = Date.now();
  const then = now + seconds * 1000;

  //Show for the initials
  displayTimeLeft(seconds);
  displayEndTime(then);

  //calculate every 1 second
  countdown = setInterval(function () {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //If time is passed then clear interval and return
    if (secondsLeft < 0) {
      clearInterval(countdown);
      document.title = oldTitle;
      timerDisplay.textContent = "";
      text.textContent = "";
      return;
    }
    //Display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});