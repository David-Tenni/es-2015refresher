const main = () => {
console.log('hi')
}


main();



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