// let key = document.getElementById('key').innerText;
// console.log(key);
const cityForm = document.querySelector('form');
const cityDisplay = document.getElementById('current-city')
const weatherDisplay = document.getElementById('weather-condition')
const temperatureDisplay = document.getElementById('temperature')


const updateCity = async userCity => {
console.log(userCity)
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
  
  });