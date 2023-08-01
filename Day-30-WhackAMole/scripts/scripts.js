const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const gameWrapper = document.querySelector('.game');
const startBtn = document.querySelector('button.start');
let lastHole;
let score = 0;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep(e) {
  const time = randomTime(500, 2000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
    if (timeUp) gameWrapper.classList.remove('game-start');
  }, time);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

function startGame() {
  gameWrapper.classList.add('game-start');
  startBtn.disabled = true;
  score = 0;
  timeUp = false;
  scoreBoard.textContent = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
    startBtn.disabled = false;
    let wait = false;
    holes.forEach(hole => {
      if (hole.classList.contains('up')) {
        wait = true;
      }
    });
    if (!wait) {
      gameWrapper.classList.remove('game-start');
    }
  }, 10 * 1000);
}

moles.forEach(mole => mole.addEventListener('click', bonk));