const main = () => {
console.log('hi')
userFunction();
}






const test = () => {
    
    
    const firstUser = {
        username: 'jason',
        email: 'jason@gmail.com',
        login(){
            console.log('login')
        },
        logout() {
            
        },
        
        
    }
    console.log(firstUser.email,firstUser.username)
    firstUser.login();
}



//classes and proptype models


//classes worj by creating a new empty object then binding the value of this to it then caling the constructor ro build it as specified

userFunction = () => {
    const newUser = new User('jeff', "jeff@jmail.com");
    console.log(newUser);
    newUser.login();
    newUser.incScore();
    newUser.incScore();
    


    
}

class User{
    constructor(name, email){
        this.username = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} logged out`);
        return this;
    }
    incScore(){
        this.score++;
        console.log(`${this.username}'s score is now: ${this.score}`)
        return this;
    }
}
main();