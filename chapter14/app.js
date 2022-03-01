//storing
localStorage.setItem('Name', 'Bob');
localStorage.setItem('Age', 80);
//retrieving 
let Name = localStorage.getItem('Name');
console.log(Name);

//over writing local storage

localStorage.setItem('Name', 'Jason');

Name = localStorage.getItem('Name');
console.log(Name);


//using dot notation
localStorage.Name = 'Fred';
console.log(localStorage.Name);