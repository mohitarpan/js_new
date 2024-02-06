//  for 
for (let i = 0; i <10; i++) {
    const element = i;
    if(element==6) {
        // console.log("5 is best of best");
    }
    // console.log(element);
    
}

for (let i = 1; i <10; i++) {
    console.log(`outer loop values: ${i}`);
    for (let j = 1; j <10; j++) {
        console.log(i + '*' + j +' = ' + i*j);
        
    }
    
}