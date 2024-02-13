//  Reduce method 
const myNums =[1,2,3,45,6]
 const mytotal = myNums.reduce( (acc,curval) =>{
    // console.log(`acc: ${acc} and curval:${curval}`);
    return acc + curval
},0) 
// console.log(mytotal);

const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "beauty course",
        price: 4999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 5999
    }
]
// here we can use reduce method a lot in shoping cart or adding large value at a time
const PricetoPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(PricetoPay);