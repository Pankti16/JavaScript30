/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.player__button');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.player__fullscreen');
const fsChild = fullscreen.querySelector('.fa');

let rangeClick = false;
let progressClick = false;
let isFS = false;

/* Build our functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  let skipValue = this.dataset.skip;
  video.currentTime += parseFloat(skipValue);
}

function handleRangeUpdate(e) {
  if (e.type === 'change' || (e.type === 'mousemove' && rangeClick))
  {
    video[this.name] = this.value;
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function drag(e) {
  const dragTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = dragTime;
}

// function toggleFullScreen() {
//   isFS = true;
//   video.requestFullscreen();
//   // fsChild.classList.remove('fa-compress');
//   // fsChild.classList.add('fa-expand');
// }

// function updateFSButton(e) {
//   if (isFS) {
//     isFS = false;
//   }
// }

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// video.addEventListener('fullscreenchange', updateFSButton);
// video.addEventListener('webkitfullscreenchange', updateFSButton);
// video.addEventListener('mozfullscreenchange', updateFSButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((skipBtn) => skipBtn.addEventListener('click', skip));

ranges.forEach((range) => {
  range.addEventListener('mousedown', () => rangeClick = true)
  range.addEventListener('mouseup', () => rangeClick = false);
  range.addEventListener('change', handleRangeUpdate);
  range.addEventListener('mousemove', handleRangeUpdate);
});

progress.addEventListener('mousedown', () => progressClick = true);
progress.addEventListener('mouseup', () => progressClick = false);
progress.addEventListener('click', drag);
progress.addEventListener('mousemove', (e) => progressClick && drag(e));

// fullscreen.addEventListener('click', toggleFullScreen);