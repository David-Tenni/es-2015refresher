
var x = key;
const getCity = async city => {
    const CitySearchEndpoint = "http://dataservice.accuweather.com/locations/v1/cities/search";
    let query ='';
    
    query = `${CitySearchEndpoint}?apikey=${key}&q=${city}`
    const response = await fetch(query, {mode: "cors"});
    const data = await response.json();
    return data[0];
};

const getWeather = async cityKey =>{
    const CurrentConditionEndpoint ="http://dataservice.accuweather.com/currentconditions/v1/"
    let query ='';
    query = `${CurrentConditionEndpoint}${cityKey}?apikey=${key}`
    
    console.log(query);
    console.log(cityKey);
    const response = await fetch(query, {mode: "cors"});
    const data = await response.json();
    return data[0];
};



//console.log(getWeather(26216));

// console.log(getCity('melbourne')
// .then(data => {
//     return getWeather(data.Key);
// }).then(weatherData => {
//     console.log(weatherData);
// }).catch(error => console.log(error))
// );


