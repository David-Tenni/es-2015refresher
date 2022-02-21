
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







const requestFunction = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            //ensuring that there is a ready state of 4 and status of 200 which means everything is good
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4){
                reject('error calling api');
            }
            
        });
        
        request.open('GET', resource);
        request.send();
    });
    
};


//requestFunction('todo/bob.json').then( data =>{
//    console.log('promise 1 resolved ', data);
//return requestFunction('todo/jason.json');
//}).then(data => {
//    console.log('promise 2 resolved', data)
//    return requestFunction('todo/sam.json');
//}).then(data => {
//    console.log('promise 3 resolved', data)
//}).catch((error) => {
//    console.log(error);
//});
//

//promises inside a promise you either resolve it when you scuesfful get the data or reject it when you get some kind of error

const promiseGetSomething = () => {
    return new Promise((resolve, reject) => {
        //resolve('data');
        //reject('error');
    });
};
//promiseGetSomething().then((data) => {
    //    console.log(data)
    //});
    
    //refactoring of the above
    promiseGetSomething()
    .then(data => {console.log(data)})
    .catch(error => {
        console.log(error);
    });
    
    //using the fetch api instead of httprequest this is how you should actually be doing so in modern times
    
    
    /* 
    
    fetch('todo/jason.json').then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(() => {
        console.log('failed', err);
    });
    
    */

    const getItems = async () => {

        const response = await fetch('todo/jason.json');
        const data = await response.json();
        console.log(data);
        
        return data;
    };


getItems().then(data => {console.log('resolved', data)});



    //basic steps 
    //1. fetch data
    //2. take response and return response.json()
    //3. then use .then and .catch to return data and catch errors respectively

