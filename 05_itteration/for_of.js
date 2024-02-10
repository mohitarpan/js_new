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
// map only take unique values and always in order so if we repeat in key and india value it will consider only once 
// console.log(map);

// loops on map 
for (const key of map) {
    // console.log(key);// * It return the value in the error 
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'roadras',
    'game3' : 'gta5'
}
// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
// }

// for_of loop is not working on objects.....
// objects is not itteratable  