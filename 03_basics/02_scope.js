// There are two type of scope
// 1.global and local scope 
// var can be used in local as well as in global scope it create a programing competances(problem)

// var c = 300 // it is useless because because even in scope var c= 10 is exectued outside of the scope 
let a = 300
if(1) {
    let a =20
    const b = 30 // Block scope
    // var c = 10
    console.log("Inner: ", a);
}
// const array =[10,20,30,40]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];//i alwasys remain in block scope and user can access only in block scope 
    
// }
 console.log(a); // a is declared inside of the if scope or inner scope 
// console.log(b);
// console.log(c);
//  console.log(i);