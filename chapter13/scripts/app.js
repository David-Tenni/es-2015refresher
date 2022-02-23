// let key = document.getElementById('key').innerText;
// console.log(key);
const weatherForm = document.querySelector('form');
const cityDisplay = document.getElementById('current-city')
const weatherDisplay = document.getElementById('weather-condition')
const temperatureDisplay = document.getElementById('temperature')


const updateCity = async userCity => {
console.log(userCity)
};

weatherForm.addEventListener('submit', e => {
e.preventDefault();
const city = weatherform.city.value.trim();
weatherForm.reset();
updateCity(city);
});