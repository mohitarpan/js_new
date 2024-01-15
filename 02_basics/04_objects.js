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
// console.log(regularUser["fullname"[userfullname[firstname]]]); we can not access object inside an object(nested) with [] method it only be accesed by "." method 
// console.log(regularUser.fullname.userfullname.lastname); 
// console.log(typeof (userfullname));
// optional chaining ? if full name was not present// read about it 
//  ? for  Api
//  merge of two objects 

const obj1 = {1:"a",2:"b"}// key: "value" format 
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

//  const obj3 = { obj1, obj
const obj4 = Object.assign([],obj1,obj2,obj3)// assign(target, obj1,obj2,obj3....)
// if we given this {} as a target  it will refelect move all the obj. value to this and printed out 
//  if we give this [] instead of this {} will print only key values 
// console.log(obj4);
const obj5 = {a:1,b:0}
const obj6 = {b:1,c:1}
const obj7 = {c:0,d:1}// key and  value \
const obj8 = Object.assign({},obj5,obj6,obj7)
console.log(obj8);
 