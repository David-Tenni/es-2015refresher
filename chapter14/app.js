//storing
OldStuff = () => {

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
        console.log(localStorage.Age);
        
        
        //deleting data in local storage
        localStorage.removeItem('Name')
        console.log(localStorage.Name);
        
        
        //clear all local data
        localStorage.clear();
        console.log(localStorage.Age);
}

//Stringifying data

const items = [
        {text: 'something', Name: 'Jeff'},
        {text: 'something', Name: 'Jeff'},
        {text: 'something', Name: 'Jeff'},
]        

localStorage.setItem('items', JSON.stringify(items));

console.log(localStorage.items);