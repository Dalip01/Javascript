const myNums = [ 1,2,3,4,5,6,7,8,9,10]
myNums.filter((item)=>{
    console.log(item)
}
)

const nums1 = myNums.filter((num)=> num>4
)
console.log(nums1)

const nums = myNums.filter((num)=>{ //if we write call back function in Scope/block'{' then we have to write return keyword
return num>4
})
console.log(nums)


//Implementing the Same thing using forEach loop instead of filter 
const newNums = []

myNums.forEach((num)=>{
    if(num>4)
    newNums.push(num)
})
console.log(newNums)


