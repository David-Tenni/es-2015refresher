// let key = document.getElementById('key').innerText;
// console.log(key);
const cityForm = document.querySelector('form');
const cityDisplay = document.getElementById('current-city')
const weatherDisplay = document.getElementById('weather-condition')
const temperatureDisplay = document.getElementById('temperature')

const updateCity = async userCity => {
    console.log(userCity);
const cityDetails = await getCity(userCity);
const weather = await getWeather(cityDetails.Key);
console.log(weather);
console.log(cityDetails);
return {CityDetails: cityDetails, weather: weather};
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then(data =>{
        cityDisplay.textContent = data.CityDetails.localisedName;
        weatherDisplay.textContent = data.CityDetails.weather;

    });
  
  });