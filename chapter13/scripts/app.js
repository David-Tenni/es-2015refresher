// let key = document.getElementById('key').innerText;
// console.log(key);
const cityForm = document.querySelector('form');
const detailsCard = document.getElementById('details-card');
const details = document.getElementById('details');
const timeImage = document.getElementById('time-image');
const weatherIcon =document.getElementById('weather-icon');

const updateUI = data =>{
    const {cityDetails, weather} = data;
    
    const timeSrc = weather.IsDayTime ? 'pix/day.svg' : 'pix/night.svg' ;

    timeImage.setAttribute('src', timeSrc);
    
    const WeatherIconSrc =`pix/icons/${weather.WeatherIcon}.svg`;
    weatherIcon.setAttribute('src', WeatherIconSrc);

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
    
    localStorage.setItem('City', cityForm.city.value.trim());
    let city = localStorage.City;
    
    cityForm.reset();
    updateCity(city).then(data =>{
        console.log(data);
        updateUI(data);
    }).catch(err => {
        console.log("an error has occure", err);
    });
  
  });

  ///8:21PM

  if(localStorage.City){
    updateCity(localStorage.City)
    .then(data =>{
        updateUI(data);
    }).catch(err => {
        console.log("an error has occure", err);
    });
  }

