// let key = document.getElementById('key').innerText;
// console.log(key);
const cityForm = document.querySelector('form');
const detailsCard = document.getElementById('details-card')
const details = document.getElementById('details')
const updateUI = data =>{
    const cityDets = data.cityDets;
    const weather = data.weather;
    console.log(cityDets);
    detailsCard.classList.remove('d-none');
    details.innerHTML = 
    `
    <h5 id='current-city' class="my-3">${cityDets.EnglishName}</h5>
        <div id='weather-condition' class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span id="temperature" >${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    console.log(details);
};


const updateCity = async (userCity) => {
    const cityDets = await getCity(userCity);
    const weather = await getWeather(cityDets.Key);
    console.log(cityDets)
    return { cityDets, weather };
};


cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then(data =>{
        console.log(data);
        updateUI(data);
    }).catch(err => {
        console.log("an error has occure", err);
    });
  
  });

  ///8:21PM