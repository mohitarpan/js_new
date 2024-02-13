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
// console.log(NewNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk)=>{
    return bk.publish>= 1995 && bk.genre === 'History'
} )
console.log(userBooks);