class Forecast{
    constructor() {
        this.key = key;
        this.CitySearchEndpoint = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.CurrentConditionEndpoint ="http://dataservice.accuweather.com/currentconditions/v1/";
    }


    async getCity(city){
        let query = `${this.CitySearchEndpoint}?apikey=${key}&q=${city}`

        const response = await fetch(query, {mode: "cors"});
        const data = await response.json();
        return data[0];
    }


    async getWeather(cityKey){
        let query = `${this.CurrentConditionEndpoint}${cityKey}?apikey=${key}`
        
        const response = await fetch(query, {mode: "cors"});
        const data = await response.json();
        return data[0];
    }

    async updateCity(userCity){
        const cityDetails = await this.getCity(userCity);
        const weather = await this.getWeather(cityDetails.Key);

        return { cityDetails, weather };
    }
}