const form = document.querySelector('.signup-form');
const formFeedback = document.getElementById('validationFeedback');
// const username = document.querySelector('#username');

//submit refreshes page



//regex patterns need thge /s they cant be in a regular string or else you can't call regex methods like test
const pattern = /[a-z]{9,}/;

let result = pattern.test(username);
console.log(result);

//advtanges of this way is its easier to search through large amount of text
//let largeSearch =username.search(pattern);
//returns a int that's position of the match
//console.log(largeSearch);

const usernamePattern = /^[a-zA-Z]{8,16}$/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //dot notation can be used tog et thing by id
    console.log(form.username.value)
    const username = form.username.value;
    if(usernamePattern.test(username)){
    formFeedback.textContent = 'Valid';
    }   else{
    formFeedback.textContent = 'Invalid Submission';
    } 
})

// validating form



const validation =  () => {

};