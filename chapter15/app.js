class User{
    constructor(username, email){
        this.username = username;
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


class Admin extends User{
    constructor(username, email, permission){
        super(username, email);
        this.permission = permission;
    }

    deleteUser(userToDelete){
        userArray = userArray.filter(user => user.username !== userToDelete.username)
    };
}



//classes and proptype models


//classes work by creating a new empty object then binding the value of this to it then caling the constructor ro build it as specified

const newUser1 = new User('jeff', "jeff@jmail.com");
const newUser2 = new User('bob', "bob@qmail.com");
const mainAdmin = new Admin('Jason', "jason@jmail.com", "Full");

newUser1.login();
newUser1.incScore();
newUser1.incScore();

let  userArray = [newUser1, newUser2, mainAdmin]
console.log(userArray)

mainAdmin.deleteUser(newUser2);
console.log(userArray);
console.log(mainAdmin);











// const test = () => {
    
    
//     const firstUser = {
//         username: 'jason',
//         email: 'jason@gmail.com',
//         login(){
//             console.log('login')
//         },
//         logout() {
            
//         },
        
        
//     }
//     console.log(firstUser.email,firstUser.username)
//     firstUser.login();
// }
