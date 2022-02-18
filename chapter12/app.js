
function countSeconds(waitTime){
    let second = waitTime;
    setTimeout ((waitTime) => {
        console.log(`${second} seconds` );
    }, waitTime*1000); 
    
};


countSeconds(1);
countSeconds(2);
countSeconds(3);
countSeconds(4);

