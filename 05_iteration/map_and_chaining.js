const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num)=>{ return num+10})
console.log(newNums)


// using forEach 
const newNums1 = []
myNumbers.forEach((num)=>{
    num = num + 10
    newNums1.push(num)
})
console.log(newNums1)

//chaining 
const newNums2 = myNumbers.map((num)=>num*10).map((num)=> num + 1).filter((num)=>num>40)
console.log(newNums2)