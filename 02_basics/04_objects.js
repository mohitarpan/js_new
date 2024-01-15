//  singalton or constructor
// const rinderuser = new Object()// singalton object type decleration 

const rider = {} // out is same for both the object declearation 

rider.id = "2324aaa"
rider.name = "sunny"
rider.isLoggedIn = false

// console.log(rinderuser);
// console.log(rider);

const regularUser = {
    email: "sonadeve123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arpan",
            lastname: "Yadav"
        }
    }
}
// console.log(regularUser["fullname"[userfullname[firstname]]]); we can not access object inside an object with [] method it only be accesed by "." method 
// console.log(regularUser.fullname.userfullname.lastname); 
// console.log(typeof (userfullname));
// optional chaining ? if full name was not present// read about it 

//  merge of two objects 
 