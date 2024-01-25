//  Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai() //it is not iife so what we have to for iife

(function chai(){
    console.log(`DB Connected`);
})()

()() // it is first for the functions defination  and second is execution call
// jo function immediately execute ho jae (ok not for interview)
//what is iife
// Due to the pollution(variable and declaration) of global scope we used iife to remove them 
