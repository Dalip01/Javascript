// String=> It uses Stack memory allocation 
let variable1 = " Hello World "
let variable2 = variable1
console.log(variable2)
variable2 = " Hello Username"
console.log(variable1)
console.log(variable2)

//Object=> It uses Heap Memory Allocation
let UserOne = {
    email:"user@gmail.com",
    upi: " user@ybl"
}

console.log(UserOne.email)
let UserTwo = UserOne
UserTwo.email = "Dalip@gmail.com"
//In this Value take directly reference from heap and hence changes made in one variable reflect in other assigned variable(Original Value) too.
console.log(UserOne.email)
console.log(UserTwo.email)