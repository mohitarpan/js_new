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