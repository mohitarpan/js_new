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

function loginUserMessage(username){
    if(username === undefined){// it is also write as if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just login in`
}
console.log(loginUserMessage());
function rob(lock1, lock2){
    if(lock1 === null){
        console.log(lock1);
        return
    }

}