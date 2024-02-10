const coding =["js","ruby","java","python","cpp","bhailang"]
// coding.forEach(function (val){ //A function to execute for each element in the array. Its return value is discarded.

//     console.log(val);
// })
// Arrow function in for_each loop


// coding.forEach( (val) =>{
//     console.log(val);
// })
// function printme(value) {
//     console.log(value);
// }
// coding.forEach(printme)// we just need to pass the function as argument no need to execute 


//  coding.forEach((item,index,arr)=>{ // it does not hold only itemor val arguments it also give us index and about an array 

//     console.log(item,index,arr);
//  })
const mycoding =[
    {
        languagename:"javscript",
        lnhuagefilename:"js"
    },
    {
        languagename:"java",
        lnhuagefilename:"java"
    },
    {
        languagename:"python",
        lnhuagefilename:"py"
    },
]
mycoding.forEach((item) =>{
    // console.log(item.languagename);/// here we can fatch the objects from array using forEach loop
})

const new = Map