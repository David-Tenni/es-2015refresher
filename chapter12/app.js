
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

    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
        //ensuring that there is a ready state of 4 and status of 200 which means everything is good
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4){
        callback('could not fetch the data', undefined);
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  
};
  
  
requestFunction('todo/bob.json', (err, data) => {
    console.log(data);
    requestFunction('todo/jason.json', (err, data) => {
      console.log(data);
      requestFunction('todo/sam.json', (err, data) => {
        console.log(data);
      });
    });
});


//promises

