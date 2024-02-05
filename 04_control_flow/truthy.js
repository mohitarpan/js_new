//  Truthy and false value 
const userEmail = [] // truthy value is assume a truth value to just like email in string 
// there are falsy values 
// false,0, -0, bigint 0n,"", null , undefined, NaN
// 0 is cavaiate points 
// truthy values are :
//  "0",'false', " ",[],{},function(){}




if(userEmail) {
    // console.log("Got user email")
} else{
    // console.log("Dont have user Email");
}
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }
// check object is empty 
const emptyobj ={} 
if(Object.keys(emptyobj).length === 0) { // it make the array of keys so once it become array we can apply .lenght method and check it is empty or not
    // console.log("object is empty");
}


// Nullish coalescing Operator (???) : null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? undefined
// val1 = null ?? 20 ?? 30 // it gives the first value except null
val1 = ""?? null//empty value but work 
// console.log(val1);
// ternory operator and nullish coalescing operator

//  Terniary operator
// condition ? true : false
const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80"): console.log("morethan 80");

const iceTeapricue = 300
iceTeaprice <= 80 ? console.log("less than 80"): console.log("morethan 80");