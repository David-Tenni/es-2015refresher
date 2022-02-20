
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

//request object
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if(request.readyState == 4){
        console.log(request.responseText);
    };
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();