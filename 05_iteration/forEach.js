// for Each loop in javascript 
const coding = [ "js","cpp","c","java","python"]
coding.forEach( function (item) {
    console.log(item)
})
console.log("\n")

coding.forEach( (val)=>{
        console.log(val)
    
    })
    console.log("\n")
    
    coding.forEach((item,index,arr) => {
        console.log(item,index,arr)
    })
    console.log("\n")

    coding.forEach(printme)
    
    function printme(item){

        console.log("hello",item)
        
    }
    
    const myCoding = [
        {
            languageName: "javascript",
            languageFileName: "js"
            
        },
        {
            languageName: "Java",
            languageFileName: "java"
            
        },
        {
            languageName: "python",
            languageFileName: "py"
            
        },
    ]
    
    console.log("\n")
    myCoding.forEach((item)=>{
        console.log(item.languageName)
    })