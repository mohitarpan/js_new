let score = null

console.log(typeof score);

let valueInNumber = Number(score)// It convert string but did not print number it print Nan
console.log(typeof valueInNumber)
console.log(valueInNumber)// its shows a Nan(not a number ) is

//  "33" => 33
//  "3abc" => Nan
// true => 1 ; false => 0


let isloggedIn = "null"
let bolleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof bolleanIsLoggedIn)
console.log(bolleanIsLoggedIn)
//  1=>  true ; 0=> false
// "" => false; "anything" => true

let someNumber = 33
let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)