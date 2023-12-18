const name = "Arpan"
const repocount = 50;

/// console.log(name + repocount +"value"); ** Do not use this syntax is not proper syntax

// string interpulation using in backtics
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// how to Declare string another way 
const gameName = new  String('arpan-yadav- powerful-employee');
//console.log(gameName[0]);
//console.log(gameName.__proto__);


//String are always store in key vallue pair.
/* like:
0
: 
"A"
1
: 
"r"
2
: 
"p"
3
: 
"a"
4
: 
"n" */
//// ***************String few methods*******************///
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("d"));
// const newString = gameName.substring(0,7)//in Substring we can do reverse of string we need to use slice and excluded last value like 7 
// // it just print upto 0 to 6 key value .
// console.log(newString);
// const anotherString = gameName.slice(-4,11)
// console.log(anotherString);




// Details about slice method in string 
// It support negative value as well but only take the key_values
 //it always run from +ve(right side only)
//if arpan-yadav was the string 
//slice(-4,11) it gives adav we can take negative values 

// const newStringOne = "        Arpan     "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/arpan%20Yadav"
// console.log(url.replace('%20','-'));zzzzzz
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));// use to string into array  