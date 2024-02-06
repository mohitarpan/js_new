//  for 
for (let i = 0; i <10; i++) {
    const element = i;
    if(element==6) {
        // console.log("5 is best of best");
    }
    // console.log(element);
    
}

for (let i = 1; i <10; i++) {
    // console.log(`outer loop values: ${i}`);
    for (let j = 1; j <10; j++) {
       // console.log(i + '*' + j +' = ' + i*j);
        
    }
    
}
let myArray =["flash","batman","superman"]
// console.log(myArray.length);
for (let o = 0; o < myArray.length; o++) {
    const element = myArray[o];
    // console.log(element);
    
}
//  
for (let index = 0; index < 20; index++) {
    if( index == 5){
        // console.log(`Detected 5`);
        break// one break is executed it will breact the floe and comes out of the for loop and control reaches to line no 34
    }
    // console.log(`value of i is ${index}`);
}
for (let index = 0; index < 20; index++) {
    if( index == 5){
        console.log(`Detected 5`);
        continue// it skip that part and continue as a name suggest it will break the flow and reaches back to the previous location by increae the i value and work untill
        // loop is over or terminated 
    }
    console.log(`value of i is ${index}`);
}

