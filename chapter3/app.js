main();
function main (){

let lads = ['John', 'Avery', 'Jacob', 'George', 'Thomas', 'Chips'];
let password = "sssss8ss!sssss8sssssssss";
let numbers = ["Tom","2","4"];
forLoopMethod();
whileLoopMethod();
forLoopArrayMethod(lads);
whileArrayMethod(lads);
doWhileArrayMethod(lads);
passWordVerifier(password)
breakableLoop(lads);
switchStatement(numbers);

};




function forLoopMethod(){
    for (let i=0; i<5; i++){
        console.log(i)
        }
        let ii = 0;

};


function whileLoopMethod(){
    let ii = 0;
    while (ii < 10){
        console.log(ii)
        ii+= 1;

        }
};


function forLoopArrayMethod(array){

    for (let i = 0; i < array.length; i++){
    // console.log(array[i]) ;
    let html = `<div> ${array[i]} </div>`
    console.log(html)
    }
};

function whileArrayMethod(array){
    let i = array.length;
    while(i != -1){
        let html = `<div> ${array[i]} </div>`
        console.log(html)
        // console.log(array[i]);
        i--;

    }
};

function doWhileArrayMethod(array){
    let i = 1;
    do
    console.log(array[0])

    while(i <= 0){
        let html = `<div> ${array[i]} </div>`
        console.log(html)
        i--;

    }
};

function passWordVerifier (password){
    if (password.length < 8 ){
        console.log("too short");
    } else  if(password.length < 10 ){ 
        console.log("getting warmer, just a little longer");

    } else if ( password.length > 12 && password.includes('!'))
    {
        console.log("good on ya")
    } else{
        console.log("invalid password partner")
    }
};



function breakableLoop(array){

    console.log("array length: " + array.length)
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
        
        if( 0 == 0 ){
            continue;
        }


        if (i === 4){
            break;
        }
    }

};




function switchStatement(array){
switch(array){

    case "Tom":
    console.log("1")
        break;
    case "2":
    console.log("2")
        break;
    case "3":
    console.log("3")
        break;
    default:
        console.log('oks');


}
};
;