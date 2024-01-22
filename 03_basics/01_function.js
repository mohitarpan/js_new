 // Function 

function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("A");
    console.log("N");
} 
// sayMyName // it is called reference(function lived there we just pointing out about function )
// sayMyName() // execution of function 

function addToNUmber(num1,mum2) { //  when you declare a function it takes prameter but when you call out function it will said arguments both are same
    console.log(num1+mum2 );

}
addToNUmber(3,4) // if we DND(did not define) values must be in number or any data type it will consider few 
// if any of the value is string it will autometically take both the string 
// same for other as well 

function addToNUmber(num3,num4) {
    // this is fist type of method to take values from function
    // let result = num3 + num4 // result only work with in the scope;
    // return result;
    return num3 + num4;
}
const result = addToNUmber(3,5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){// sam is default value is there no input 
    if(username === undefined){// it is also write as if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just login in`
}
// console.log(loginUserMessage());
// function rob(lock1, lock2){
//     if(lock1 === null){
//         console.log(lock1);  ////use less

//         return
//     }

// }

function CalculateCartPrice(...num1){ /// ... in parameter denoted as REST operator which include all arguments in single array 
    return num1 // if we pass a parameter as (val1,val2,...num1) so the o/p must me val1 have 200 anda val2 have 300 and num1 have rest of the values or agrumnets passed 
}
console.log(CalculateCartPrice(200,300,400))// op is [200,300,400]
 const user = {
    username: "Kaushal",
    price: 2000
 }
 
 function handleOnject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

handleOnject(user) //compulsory paas the object here 
 // type
 handleOnject({
    username: "Arpan",
    price:299
 })
 const myNameArray = [200,400,600,500,800]

 function  returnNextArray(myNameArray){
    return myNameArray[1]
 }
 console.log(returnNextArray(myNameArray));
console.log(returnNextArray([200,300,600,500,800]));