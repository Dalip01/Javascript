//for
for (let i = 0; i < 10; i++) {
    const element = i;

    console.log(element)
    
}

for(let i = 2;i<=10;i++){
    console.log("Table of " + i)
    for (let j = 1; j <=10; j++) {
        console.log(i + '*' + j + ' = ' + i*j)
    }
    console.log("\n")
}

let array = [0,1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(array[index]==5){
        console.log("5 detected")
        continue  // skip the next code written in block and control go to starting of for loop
    }
    console.log(element)
    if(array[index] == 8)
    {
        console.log("8 is detected ")
        break // skip whole for loop
    }
    
}