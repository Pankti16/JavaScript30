const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

async function init() {
  const searchInput = document.querySelector('input.search');
  const suggestions = document.querySelector('ul.suggestions');
  const initialList = suggestions.innerHTML;
  const cities =  await axios.get(endpoint)
  .then(function (response) {
    if (response.data.length > 0) {
      return response.data;
    }
    return [];
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return [];
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function findCities (wordToMatch) {
    const regex = new RegExp(wordToMatch, 'gi');
    return cities.filter(place => place.city.match(regex) || place.state.match(regex));
  }

  function displayCities() {
    if (this.value.trim().length === 0) {
      suggestions.innerHTML = initialList;
      return;
    }
    const matchArray = findCities(this.value);
    const displayList = matchArray.map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const cityState = `<li><span class="name">${cityName}, ${stateName}</span><span class="population">${numberWithCommas(place.population)}</span></li>`;
      return cityState;
    }).join(' ');
    suggestions.innerHTML = displayList;
  }

  searchInput.addEventListener('change', displayCities);
  searchInput.addEventListener('keyup', displayCities);

}
init();