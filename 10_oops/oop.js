const user = { 
    username: "Dalip",
    loginCount: 8,
    signedInt: true,
    getUserDetail:function(){
        console.log("this is detail")
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
console.log(user.username)
console.log(user.getUserDetail())

function User(username,loginCount ,isLoggedIn){
this.username = username 
this.loginCount = loginCount
this.isLoggedIn = isLoggedIn
// return this

}
const userOne = new User("Dalip", 12, true )
const userTwo = new User("kumar",15,false)
console.log(userOne)
console.log(userTwo)