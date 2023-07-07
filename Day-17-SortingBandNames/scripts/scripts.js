const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripName(bandName) {
  return bandName.replace(/^(the |an |a )/i, '').trim();
}

const sortedBands = [...bands].sort((a, b) => stripName(a) > stripName(b) ? 1 : -1);

const listHolder = document.getElementById('bands');
sortedBands.forEach((band) => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  listHolder.appendChild(listItem);
});