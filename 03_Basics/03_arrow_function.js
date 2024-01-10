const user = {
    username : "dalip",
    price : 90,
    welcomeMessage : function(){
        console.log(`Hello Mr.${this.username}, Welcome to website`)
        //console.log(this)  //'this' is used for current context 
    }
}
user.welcomeMessage()

user.username = "sam"
user.welcomeMessage()//print the current username which is sam 

console.log(this) //empty

function one(){
    const username = "user 1 "
    console.log(this.username)  //undefined
}
one()

const chai = ()=>{
    const username = "user 3"
    // console.log(this.username) //undefined
    console.log("calling arrow function chai") 
    console.log(this)//empty

}
chai()

// Different way to declare arrow functions 
//explicit return 
// 1.
const addtwo = (num1,num2)=>{

return num1 + num2
}
console.log(addtwo(4,3))

//Impicit return

// 2.
const addtwo2 = (num1,num2)=> num1 + num2

console.log(addtwo2(48,3))

// 3.
const addtwo3 = (num1,num2)=> (num1 + num2)
console.log(addtwo3(2,3))


const returnObject = (num1,num2)=>({username:"dalip"})
console.log(returnObject(3,2))




