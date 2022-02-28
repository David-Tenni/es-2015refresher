// let key = document.getElementById('key').innerText;
// console.log(key);
const cityForm = document.querySelector('form');
const detailsCard = document.getElementById('details-card')
const details = document.getElementById('details')
const updateUI = data =>{
    const {cityDetails, weather} = data;
    
    detailsCard.classList.remove('d-none');
    details.innerHTML = 
    `
    <h5 id='current-city' class="my-3">${cityDetails.EnglishName}</h5>
        <div id='weather-condition' class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span id="temperature" >${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    console.log(details);
};


const updateCity = async (userCity) => {
    const cityDetails = await getCity(userCity);
    const weather = await getWeather(cityDetails.Key);
    console.log(cityDetails)
    return { cityDetails, weather };
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