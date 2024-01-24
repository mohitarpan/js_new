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

function chai() {
    let username ="Avinash"
    console.log(this.username); 
    // i can't able to use this i this fuction but in objects we can do it there 
}
chai()
