const myNumbers = [1,2,3,4,5,6,7,8,9,10,45]
// const newNums= myNumbers.map( (num) => {
//     return num + 10
// })
// // console.log(newNums);
const newNum =[]
const mynew = myNumbers.forEach( (num) => {
        num = num + 10
        newNum.push(num)// i stuch here for almost 10 minutes because of syntax error so please be aware
})
console.log(newNum);
