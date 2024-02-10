const coding =["js","ruby","java","python","cpp","bhailang"]
// coding.forEach(function (val){ //A function to execute for each element in the array. Its return value is discarded.

//     console.log(val);
// })
// Arrow function in for_each loop


// coding.forEach( (val) =>{
//     console.log(val);
// })
function printme(value) {
    console.log(value);
}
coding.forEach(printme)// we just need to pass the function as argument no need to execute 