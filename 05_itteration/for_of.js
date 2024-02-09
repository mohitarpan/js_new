//  below loops are Array specific :=

// for of

// ["","",""] strings as elements 
// [{},{},{}]//  objects as an elements

const myArray =[1,2,3,4,5,6,7]

for (const num  of myArray) { // Inthis "for of"  loop it did automatically terminates and increment the value of i == num  
    // console.log(num);
}

const greatings = "Ram Ram Ne sareayane!"
for (const greet of greatings) {
    if(greet == " ") { // for skip the space in string greeting we use this condition 
        // greet is iterator so we have to put conditions on greet in this case 
        continue
    }
    // console.log(`each letter of ${greet}`);   
}

//--------------------------------------------------------------------------------
//-----------------------map------------------------------

const map = new Map()
map.set('IN', "India")
map.set('usa', "United state of America")
map.set('Fe', "france")
console.log(map);