const coding = ["js","ruby","java","python","cpp"]

let values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )
// console.log(values);
 
// forEach loop does not return @nything 

//-------------- Number ---------------------------------------
//--------------------------------------------------------------

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const NewmyNums = myNums.filter( (num) => num>5)// it is written in the form of this then it will return autometically 
// console.log(NewmyNums);

const myNums = [1,2,3,4,5,6,7,8,9,10]
const NewmyNums = myNums.filter( (num) => {
    const rub= num > 4 //return num>4
    return rub
})

// console.log(NewmyNums);// it will show empty arrya its means "filter operation" did not return any thing 
// for returning something return keyword must be there or u can say that manual return    


const NewNums =[]
myNums.forEach( (item) => {
    if (item>4) {
        NewNums.push(item)
    }
})
console.log(NewNums);