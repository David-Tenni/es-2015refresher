/*
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
*/

//Ok so look i'll get the above working but its not critical right now until i get it working ill use a file that's not getting commited "the right way"




// Here is the html 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Weather</title>
//     <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div>
//     </div>
//     <div class="container my-5 mx-auto">
        
//         <h1 class="text-muted text-center my-4" id="main-title"> Climate Change Potential Weather </h1>
//         <form class="change-location my-4 text-center text-muted">
//             <label for="city"> Enter location for future weather predictions...</label>
//             <input type="text" name="city" class="form-control p-4"></input>
//         </form>
//         <div class="card shadow-lg rounded">
//          <img class="time card-img-top" src="https://via.placeholder.com/400x300" alt="image">
//             <div class="icon bg-light mx-auto text-center">


//             </div>
//         <div class="text-muted text-uppercase text-center details">
//             <h5 class="my-3">City</h5>
//             <div class="my-3">Weather Condition</div>
//             <div class="display-4 my-4">
//                 <span>temp</span>
//                 <span>&deg;C</span>
//             </div>
//         </div>
//         </div>
//     </div>
//     <div id="key" class='d-none'> </div>
//     <div id="query" class='d-none'> </div>
//     <script type="module">
//         import { name, value } from './scripts/env/env.js';
//         let textbox = document.getElementById('key').innerText = value;
//         //console.log(textbox);
//     </script>
//     <script src="scripts/forecast.js"/>
//     <script src="scripts/env/env.js"/>
//     <script src="scripts/app.js"/>
// </body>
// </html>




//ok here is what I am doing in the other file
/*
const getCity = async city => {
    const CitySearchEndpoint = "http://dataservice.accuweather.com/locations/v1/cities/search";
    let query ='';
    
    query = `${CitySearchEndpoint}?apikey=${key}&q=${city}`
    const response = await fetch(query, {mode: "cors"});
    const data = await response.json();
    return data[0];
};
console.log(getCity('melbourne')
.then(data => console.log(data))
.catch(error => console.log(error))
);
*/

