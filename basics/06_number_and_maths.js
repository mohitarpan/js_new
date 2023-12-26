const score = 400
// console.log(score);
// when we use new Number where we define the type of value
// 
// const balance = new Number(100.999)
// console.log(balance);

// console.log(balance.toString().length);//find the lenth of string 
// console.log(balance.toFixed(2));// with this we fixed the precision value or decimal value 

// const otherNumber = 23.8766
// // console.log(otherNumber.toPrecision(4));


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// used this for apply coma in numbers 10,00,000


////  +++++++++++++++++ Maths +++++++++++++++++++++//
// console.log(Math);
// console.log(Math.abs(-4));//absoluted value or +ve value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,2,3,-1,7));
// console.log(Math.max(4,2,3,-1,7));

// console.log(Math.random());
// console.log((Math.random()*10)+ 1);
const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max-min +1)) + min);



