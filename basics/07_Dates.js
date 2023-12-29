let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

// Interview alert Date is object in javaScript

// let  myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// when we declare dates in yyyy-mm-dd formate and put 00 at month section as of above line it do not start with jan it shows error

//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-17-2023")//mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());
let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getDate());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//  full date need in some program 
`${newDate.getDate()} and the time`
newDate.toLocaleString('default' ,{
    weekday:"narrow",
})