//  Basic while loop structure 
let index =0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}
let myArray = ["Ironman","Batman","hulk"]
let arr = 0
while (arr<myArray.length) {
    // console.log(`here are the hero ${myArray[arr]}`);
    arr= arr + 1;// we can use other increments type arr++ 
    
}

//  do while loop 
//  in this loop condition check at the last first we are more focused working of a loop

let score =1;// if we put the value of score is 11 
// becuase of the syntax or structure of loop it will run  first and give o/p as score is 11 then
// go for the condition check 
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);