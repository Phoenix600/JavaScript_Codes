// Getting Started With The Promise 
/**
 * In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
 * 
 * A promise may have one of three states.
 *  -Pending
 *  -Fulfilled
 *  -Rejected
 *  A promise starts in a pending state. That means the process is
 * not complete. If the operation is successful, the process ends in
 * a fulfilled state. And, if an error occurs, the process ends in a
 * rejected state.
 * 
 *  For example, when you request data from the server by using a
 * promise, it will be in a pending state. When the data arrives
 * successfully, it will be in a fulfilled state. If an error occurs, 
 * then it will be in a rejected state.
 * 
 */

// creating the promise
let promise = new Promise(
    (resolve,reject)=>{
        // Some Code 
        console.log("Promise...");
    }
);

// The Promise() constructor takes a function as an argument. The 
// function also accepts two functions resolve() and reject().


const isOperationSucessful = true;

let countValue = new Promise(
    (resolve,reject)=>{
        if(isOperationSucessful){
            resolve("Operation is successful....")
        }else{
            reject("Operation is unsucessful....");
        }
    }
);


console.log(countValue);