// for of & for in 

const arr = [1, 2, 3,4, 5, 6, 7]

//for of loop 
for (const num of arr) {
    console.log(num) 
}

//for in loop
for( const key in arr){
    console.log(`${key} : ${arr[key]}`)
}


const string = " Hello World!"
for (const i of string) {
    console.log(i)
    
}

const map = new Map()
map.set('In',"India")
map.set('USA',"Unites States of America")
console.log(map)

for (const [key,value] of map) {
    console.log(key, ":", value)
}

const myObject = {
    'game1': "NFS",
    'game2': "spiderman"
}
// for (const [i,j] of myObject) {
//     console.log(i, " : ", j)
// }

//for in 
for (const key in myObject) {

        console.log(`${key} : ${myObject[key]}`)
    }


