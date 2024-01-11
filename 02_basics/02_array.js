const marvel_heros =["thor","Ironman","Spiderman"]
const dc_heros =["Superman","Flash","Aquaman"]

// marvel_heros.push(dc_heros);// it just push dc_heroes array inro marvel_heros array 

// console.log(marvel_heros);
// const allHeros = marvel_heros.concat(dc_heros);// add two array and return a new array
// console.log(allHeros);
// spread operator it just bring a glass and drop it automatically spread  
const all_new_heros = [...marvel_heros, ...dc_heros]// syntext of spread operator
// console.log(all_new_heros);

// flat method of array
const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_Array.flat(Infinity)// instead of infinty u need to give value just how many layer need to peal off 
// console.log(real_another_array);

// data scrping method used 
console.log(Array.isArray("Arpan Yadav"))

console.log(Array.from("Arpan Yadav"))// from is used for convert any thing in array if type was not in array it also take objects and strings too.
console.log(Array.from({name:"Arpan"}))//if from fail to make array it gives empty array []