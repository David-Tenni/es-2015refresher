let key ='';
let query='';
//console.log(key);
const getKey = () => {
    key = document.getElementById('key').innerText;
}
const makeQuery = async city => {
    const CitySearchEndpoint = "http://dataservice.accuweather.com/locations/v1/cities/search";
    let query ='';
    setTimeout(function(){
        getKey();
        query = `${CitySearchEndpoint}?apiKey=${key}&q=${city}`
        console.log(query);
        document.getElementById('query').innerText = query;
        query =document.getElementById('query').innerText;
        
    },250);
};



const getCity = async () => {
    
    
    const response = await fetch(query, {mode: "cors"});
};



