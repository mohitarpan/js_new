//  Array
const myArr = [0,1,2,3,4,5]
// console.log(myArr[2]);
// const myHeores = ['saktimaan','Batman']


const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2); // it is an object type decleration of Array still get or store the value like array this the beauty of object
 
//  Array methods 
// myArr.push(6) // it is used to add values in Array
// myArr.pop()                                   // it will remove the lst elemnt or just say it nth elment (before null)
// myArr.pop(2 // index number will not refelect on real arry it just pop the last element at a time.
// myArr.unshift(1)// It is also work like push but it push the value at begining of Array of zero index.
// myArr.shift(3)// It is similar to pop it just delete that elment from index zero it does not need arguments.

// console.log(myArr.includes(9));//it gives false because it was not in the array.
// console.log(myArr.indexOf(9));// if element was not present in Array it shows -1 (means he did not know)

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
