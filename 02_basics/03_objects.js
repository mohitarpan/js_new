// Singleton :- it means it is single type of object or unique
//  if we declared object like literals it will never form singleton 
// Object.create if we declaRED THIS type object then it is singleton objects 


const mySym = Symbol("Key1")


// object literals

//  


const jsUser = {
    name: "Arpan",
    "full name" : "Arpan yadav",
    age: 18,
    //mySym: "mykey1",// it did not show the error even easly fatch the value but it typeof is string not symbol.
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "Arpan@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//  how to access objects in js there are two wasys 
// 1. console.log(jsUser.email)// Bad pratices 
// 2.console.log(jsUser["email"]) // good practice because in object like name is string 

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);// here . fullname is not able to access but in square brackit it will take or fetch the value 
// console.log(jsUser[mySym]);//when we did not use "" it will shows undefine 

// jsUser.email ="arpanyadav.01@gmail.com"
// Object.freeze(jsUser)
// jsUser.email ="1900300100044@ipec.org.in"// here after freezing the object it will not update the value so it will so arpanyadav.01@gmail.com
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Arpan user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Arpan, ${this.name}`);// here is string interpulation 
}
console.log(jsUser.greetingTwo());