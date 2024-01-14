/* Javascript Execution Context 
1.Global Execution Context
2.Functioin Execution Context
3.Eval Execution Context - It is a property of global object

code run in two blocks 

1. Memory Creation Phase - allocate all the space for variable 
2. Exection Phase - 

*/
let val1 = 10 
let val2 = 5 
function addNum(num1,num2)
{
    let total = num1 + num2 
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)


/* 
Steps   :  Process 

1       :  Global Execution
---------------------------------------------
2       :  Memory Phase
        val1 - Undefined
        val2 - undefined
        addNum - defination
        result1 - Undefined
        result2 - Undefined
---------------------------------------------
3       :  Execution Phase
        val1 = 10
        val2 = 5
        addNum[
            //New Variable Environment + Execution thread , Memory Phase and Execution Phase are created again for this addNum block
            Memory Phase :
            val1 - Undefined
            val2 - Undefined
            total- Undefined

            Execution Phase: 
            num1=10
            num2=5
            total=15 

        ] // Once the above Execution completed The block get delted 
        result1 = 15
        result2 = Same as Result1.