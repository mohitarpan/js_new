const obj11 = {1:"a",2:"b"}// key: "value" format 
const obj22 = {3:"a",4:"b"}
const obj32 = {5:"a",6:"b"}

const obj12 = Object.assign([],obj11,obj22,obj32)
console.log(obj12);