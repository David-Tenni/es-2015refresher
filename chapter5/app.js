function main(){
};

//objects have properties and things it can do
//user has properties like username and email methods are login and logout

//creating object using object literal notation

const children =[
    {name: 'Jane', age: 40},
    {name: 'bBb', age: 2},
    {name: 'Vladmir Putin', age: 69},
];

let user = {
name: 'jason',
email: 'jason@jmail.com',
location: 'ukraine',
children: children,
//adding a method to a object
//arrow functions work differently when declaring methods due to the this function
login: function(){console.log('user logged in')},
logout: function(){console.log('user logged out')},
logChildren: function(){
    console.log('the user has the following children');
    this.children.forEach(child => {console.log(child.name, child.age)
    })
},

};
//updating using dot notation
user.name = 'fred';
//updating using square bracket notation
user['name'] = 'caesar';
//getting using square bracket notation
console.log(user['name']);
console.log(user['email']);
//getting using dot notation
console.log(user.name);
console.log(user.email);

//square bracket can be more useful for passing in variables like the following
const email = 'email';
console.log(user[email]);

//type of operator
console.log(typeof user);

//gtting method using dot notation
user.login();
user.logout();
user.logChildren();

//the "this" operate is a context operator this is the global context





//math object
console.log(Math)
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

//round appropriatly
console.log(Math.round(area));
//round down
console.log(Math.floor(area));
//round up
console.log(Math.ceil(area));
//remove decimal
console.log(Math.trunc(area));

// oh boy you know what this is
console.log('Random number Time');
console.log(Math.random);
console.log('random between 0-1');
console.log(Math.round(Math.random));
console.log('random between 0-100');
console.log(Math.round(Math.random()*100));

//symbols
/*
numbers strings bools null undefined symols
primative types
reference types
obj iterals 
arrays
functiions
dates
all other objects
*/

//the difference is how they are used in memory
//one is stored on the stack which ahs limited space but is faster
//there is also the heap which has more space but is slower


//TLDR primatives on stack which fast but smol references stored on the heap which is slower but has more stroagte wait this was longer

//so things tend to add the valuers of the object on the heap but the pointer to it is stored on the array


let scoreOne = 50;
let scoreTwo = scoreOne; 

console.log(scoreOne);
console.log(scoreTwo);
scoreOne = 100;
console.log(scoreOne);
console.log(scoreTwo);

const  userOne = {name: 'Thomas Lasky', rank: 'Captain'};
const  userTwo = userOne; 

console.log(userOne, userTwo);

userOne.rank = 'Admiral';

//because both point to the same place on the heap they both will display the same value even though only one was updated
console.log(userOne, userTwo);

main();