/*In browser 
this always indicated about windows
Global exectuion context is put into "this" variable 
this == window objects 
 js is single threaded and process according to that...



 js execution context two part 
1> Memory creation 
2> Memory execution 

function exection context

eval execution context in mogos

-----------------------------------------------------------------
                       Program
------------------------------------------------------------------
let val1 = 10
let val2 = 5
function addNum(num1,num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,4)

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
First Phase == Global exectuion Phase  
store the value in "this" variable
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
second Phase  memory allocation phase 
val1= undefined 
val2= undefined 
addNum = defination or whole function 
result1 = undefined 
result = undefined
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Third Phase == execution Phase 
val1 = 10
val2 = 5
addNum --> a new execution context is build and with new thread 
Whenever function is executed a new sandbox(execution context) is created   
-------------------------------------------------------------------\\
             call stack
---------------------------------------------------------------
 

*/