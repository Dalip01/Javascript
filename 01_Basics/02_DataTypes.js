//Primitive
// Types : String, Number, Boolean, null, undefined, Symbol , BigInt
"use strict";
let name = "Dalip"                           //String type
let age = 23                                //Number
let isLoggedIn = true                      //Boolean
let city = null ;                         //Null
let state ;                              //undefined
const id = Symbol('123')                //Symbol
const bigNumber = 34567654324565432345n//BigNumber
const anotherId = Symbol('123')
console.log(id === anotherId)




console.log(typeof age);
console.log(typeof null); // Output : Object

//Reference (Non Primitive)
//Array,Objects ,Functions

const heros = ["Shaktiman","naagraj","doga"]
let myObj = {
    name:"hitesh",
    age:33,
}
const myFunction = function(){
    console.log("Hello world"); 
}

