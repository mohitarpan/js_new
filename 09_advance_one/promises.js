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

constpromiseFour = new Promise

// -----------------------  Dictonary ------------------------
// callback hell : callback into callback into callback it is also reduce by promise
///