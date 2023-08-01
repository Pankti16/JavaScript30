const slider = document.querySelector('.items');
let isDown = false;
let scrollX;
let scrollLeft;

function handleDown (e) {
  isDown = true;
  slider.classList.add('active');
  scrollX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
function handleUp () {
  isDown = false;
  slider.classList.remove('active');
}
function handleMove (e) {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - scrollX) * 3;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleDown);
slider.addEventListener('mouseleave', handleUp);
slider.addEventListener('mouseup', handleUp);
slider.addEventListener('mousemove', handleMove);