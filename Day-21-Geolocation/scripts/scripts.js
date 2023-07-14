/*Compass: https://thenounproject.com/search/?q=compass&i=592352*/
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  speed.textContent = data.coords.speed;
}, (err) => console.error(err));