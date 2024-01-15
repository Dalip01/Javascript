const myNums = [1,2,3]
let initialvalue = 0 
const myTotal = myNums.reduce( function (accumulator , currentValue){
    console.log(`Accumulator : ${accumulator} and Current Value : ${currentValue}`)
    return accumulator + currentValue
},7)
console.log(myTotal)

//Using Arrow function
const myTotal1 = myNums.reduce( (acc,curr_value)=> acc+curr_value , 0)
console.log(myTotal1)

const shopping_cart = [
    {
        itemName : "Js Course",
        price : 1500
    },
    {
        itemName : "Java Course",
        price : 2000
    },
    {
        itemName : "Python Course",
        price : 1500
    },
]
const Total = shopping_cart.reduce((accumulator,object)=> accumulator + object.price , 0)
console.log(Total)
