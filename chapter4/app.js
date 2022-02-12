function main (){
    console.log('start')
    doSomething();
    logSomething("javon");
    logSomething("javon");
    const somethingNew = returnSomething('joysh');
   peoplesNames(); 
    console.log(somethingNew)
}



const doSomething = function (){
console.log('log')
};

const logSomething = function (name){
    console.log(name)
};


const returnSomething = function (name){
    console.log(name)
    name = name+"otato"
    return name;
};
//arrow fun
//if there is only one parameter parentheseies is not required so = r => {reutrn 2*r}; would work the return keyword also isn't required

const peoplesNames = function (){
let lads = ['bil', 'nill', 'lovier', 'edward'];

lads.forEach(person => {console.log(person);
});
};




const calcArea = (r) => {return r*3.14**2};

const DoSomethingArrowFunc = name => {console.log(name)};
const returnSomething2 = function (r){
    let calculation = r * 3.14**2;
    console.log(calculation)
    return calculation;
};

main();


//method vs function

// a method is a function 

//function
const greet = () => 'Gday';
//method uses dot notation such as string.toUpperCase

//tostring is the method
let result2 = greet.toString();


//callback function

const myFunc = (callbackfunction) => {

    let value = 50;
    callbackfunction(value);

};

myFunc(function(value){
    console.log(value);
});



