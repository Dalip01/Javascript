let a = 10 
const b = 20 
var c = 30
if(true){
    let a = 40;
    console.log("innner : ", a)  // Block scope

}



console.log(a) //global scope
console.log(b)
console.log(c)

function one(){
    const username = " Dalip"
    function two(){
        const website = "github"
        console.log(username) //In nested function, child function can accesed parent function variables
    }
    // console.log(website) //cannot be accesed out of function 
    two()
}

one() //calling function which will also call fuction two() which is with in the fuction one()

if(true){
    const username = " Dalip "
    if(true){
        const website = " github "
        console.log(username + website)
    }
    //console.log(website) //cannot be accesed
}
//console.log(username) // cannot be accessed out of the block

console.log(addone(5)) //can be call before declaration
function addone(num){
    return num + 1 
}

console.log(addtwo(3)) // calling before initialization/declaration 
const addtwo = function(num){
    return num + 2
}
