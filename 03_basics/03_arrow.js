const user = {
    username: " Arpan",
    price: 843,
    welcomeMessage: function()  {
        //  console.log(`${this.username}, Welcome to website`);
        // console.log(this);// it will show current context.  
    }
} // This is refercs to corrent context   
// user.welcomeMessage();
// user.username ="samBhadur"
// user.price = "2882"
// user.welcomeMessage();
// console.log(this); // if we are in node environment then it will show the empty object beacuse we dont have any current context      
//************************* important Note  */
// browser have there global object by the name of Window object

// function chai() {
//     let username ="Avinash"
//     console.log(this.username); 
//     // i can't able to use this i this fuction but in objects we can do it there 
// }
// chai()
// const chai = function () {
//     // let username ="sawera"
//     console.log(this); // this behave the same for any type of function decleration(did not behave like hoisting )
// }
// chai()
//Aarrow function. if we executed "this" then it give empty objects just like if you executed outside the function 
const chai = () => {
    // let username ="sawera"
    console.log(this); // this behave the same for any type of function decleration(did not behave like hoisting ) here is also undefined 
}
// chai()
////////Basic arrow function 
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// Implicit Return 

// It usually write for one line of code like we did not need return and {} in the syntax without that we can do the same 

// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => ({username:"logan"}) // need of paraenthes for wraping into a object in that other it gives undefine
console.log(addTwo(3,5));

