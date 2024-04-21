///-------------------------Promises ---------------------------------------------------------------------//////////////////////////

//       How basic promises created
// promise have two parameters resolve and reject 
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography,networks
    setTimeout(function(){
        console.log('Async task is compelete');
        // without resolve call we can not connect created promises to consumed promise call
        resolve() 
    },1000)
})
// here we consumed the promise which is created by someone 

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Advance promises
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
})
.then(function(){
    console.log("Async @ resolve")
})

const promiseThree = new Promise(function (resolve,reject) 
{
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)    
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Arpan",password: "123"})
        } else {
            reject('ERROR: Something went Wrong')
        }
    },1000)
})
// we can not access user name directly by storing promisFour into constant..
// const username = promiseFour.then(() =>{}) It will doest not give Arpan output 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
}).catch(function(Error) {
    console.log(Error);
    
}).finally(()=> {
    console.log("The promise is resolved or rejeced ");// it will work either then or catch not grab he promises promies did not wait for more than their thresholde
})


const promiseFive = new Promise((function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"sabri",password: "879"})
        } else {
            reject('ERROR: sabri did not respond Wrong')
        }
    },1000)
}));

async function consumedPromiseFive(){
    try{
        const respond = await promiseFive
        console.log(respond);
    }catch(error) {
        console.log(error)
    }
}
consumedPromiseFive()

async function getUserAll(){
    const respond = await fetch('')
}




















// -----------------------  Dictonary ------------------------
// callback hell : callback into callback into callback it is also reduce by promise
///