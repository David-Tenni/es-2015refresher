const form = document.querySelector('.signup-form');

// const username = document.querySelector('#username');

//submit refreshes page
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //dot notation can be used tog et thing by id
    console.log(form.username.value)
    
})