const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(key);//  it just print the key
    // console.log(myObject[key]);// it printe the values on
    // so for both me need to console both by using backtics ``
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}
const programing = ["js","rb","py","java","cpp"]
for (const key in programing) {
    // console.log(key);
    console.log(programing[key]);
}
//  for_in loop is not working for array beacuse Array default keys are in number and can't able to use by this loop
// IN array keys are number but in object you can use anything as key 
// forr_in loop is not working for map is not itteratable 