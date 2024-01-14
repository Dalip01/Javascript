// Immediately Invoked Function Expression(IIFE)
// In IIFE we have two set of parenthesis ()() , one for declaration and for calling that function 

//Named IIFE - function have some name 
(function chai(){ 
    console.log(`DB connected`)
})(); //semicolon is required to end invoked function.

//Simple IIFE - function don't have any name 
( (name)=>{
    console.log(`2.DB connected ${name}`);
} )
('dalip') //calling function