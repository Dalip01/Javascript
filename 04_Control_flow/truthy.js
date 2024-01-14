const userEmail = "dalip@gmail.com"
if(userEmail){
    console.log("Got the Email")
}
else
console.log("Do not get the Email")

/* 

Falsy values : 
    false, 0, -0, BigInt 0n, "", null, undefined, Nan
Truthy values : 
    "false", "0", " ", [], {}, function(){},

*/
let Array = []
if(Array.length===0)
{
    console.log("Array is empty")
}
const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("empty object ")
}


