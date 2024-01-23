// There are two type of scope
// 1.global and local scope 
// var can be used in local as well as in global scope it create a programing competances(problem)

// var c = 300 // it is useless because because even in scope var c= 10 is exectued outside of the scope 
let a = 300
if(1) {
    let a =20
    const b = 30 // Block scope
    // var c = 10
    // console.log("Inner: ", a);
}
// const array =[10,20,30,40]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];//i alwasys remain in block scope and user can access only in block scope 
    
// }
//  console.log(a); // a is declared inside of the if scope or inner scope 
// console.log(b);
// console.log(c);
//  console.log(i);

// nested scoping
// nested function can access the variable of parent functions 


function one() {
    const username ="Arpan"
    function two() {
        const website = "youtube"                           // Ice cream method bachhe and bade 
        // console.log(username)
        // console.log(website);
    }
    
   console.log(two());// two()

}
// console.log(one()); // one()
if(true) {
    const username = "yadav"
    if(username === "yadav") {
        const website = " arpanport"
        // console.log(username + website);
    }
    // console.log(website);// we can not access the website variable out of the scope it is declared in nested if we commented even this whole is showing
    // beacuse username is also out of the scope of first if 
}
// console.log(username);

//   +++++++++++++++++++ intresting concept ++++++++++++++++++++++++++++++
// Hoisting
console.log(addone(5))
function addone(num) {
    return num + 1   
}
// it is executed beacuse of hoisting here exection contetxt is create for whole function 
// it is also depend on decleration of function just like above we have hoisting but in variable declearion d=function we can not able to use 
console.log(addTwo(5)); // here we have
const addTwo = function(num) { // here function decleration with holding into a variable 
    return num + 2 
} 

//caution : variable are very powerful in js it can hold any thing letrally any thing  
