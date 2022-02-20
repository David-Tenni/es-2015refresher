
const countSeconds  = waitTime =>{
    let second = waitTime;
    setTimeout ((waitTime) => {
        console.log(`${second} seconds since started counting` );
    }, waitTime*1000); 
    
};



const countToFive = () => {
    countSeconds(1);
    countSeconds(2);
    countSeconds(3);
    countSeconds(4);
    countSeconds(5);
}
countToFive();





const requestsFunction = callback =>{
//request object
const request = new XMLHttpRequest();
//add a listener for the request 
request.addEventListener('readystatechange', () => {
    //if a request is in readystae 4 the 'done' log it's value also checking the response status is 200 which means everything is okn with the request 
        if(request.readyState == 4 && request.status =="200"){
            const requestResponse = JSON.parse(request.responseText);
            callback(undefined, requestResponse);
           
        } else if (request.status =='404'){
            
            callback("endpoint not found (404)", undefined);
        };
    });
    //request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', 'todo.json');
    request.send();
};

requestsFunction((error, data) => {
if (data){
requestResponse = data;
console.log(requestResponse);
}else{
    console.log(error);
};
});


