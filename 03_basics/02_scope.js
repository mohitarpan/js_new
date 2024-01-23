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
        console.log(username + website);
    }
    // console.log(website);// we can not access the website variable out of the scope it is declared in nested if we commented even this whole is showing
    // beacuse username is also out of the scope of first if 
}
// console.log(username);