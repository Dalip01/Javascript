/*    
1.If Statement 
    Syntax : 
         if(Condition){
         Statement1 ;
        }
*/

if(2!=3){
    console.log("Executed")
}

/*
2.If-else Statement
    Syntax :
        if(Condition){  ....if condition is true
            statement1
        }
        else            ....if condition is false
        statement
 */
       let temp = 15
        if(temp>13){
            console.log("Greater than 13")
        }
        else 
            console.log("less than 13")

const score = 200 
if(score>100){
    let username = " Dalip "
    console.log(`My name is ${username}`)
}
//console.log(username) //let cannot be accessed out of block,although var can be access out of block because it has global scope.


// Nested if
let balance= 12
if(balance<50){
    console.log("less than 50")
    if(balance<30){
        console.log("less than 30")
    }
}
else if(balance>50)
console.log("Greater than 50 ")
