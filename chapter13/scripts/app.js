// let key = document.getElementById('key').innerText;
// console.log(key);
const weatherForm = document.getElementById('weather-form');
const cityDisplay = document.getElementById('current-city')
const weatherDisplay = document.getElementById('weather-condition')
const temperatureDisplay = document.getElementById('temperature')


weatherForm.addEventListener('submit', e => {
e.preventDefault();
const city = weatherform.city.value.trim();
console.log(city);
debugger;
cityDisplay.innerText = city;
weatherForm.requestFullscreen();
});