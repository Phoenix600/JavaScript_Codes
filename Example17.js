/**
 * Getting Started With Asycnhronous Function
 */


// SetTimeOutFunction 
// The setTimeout() method returns an intervalID, which is a positive integer.

function greet(){
    console.log("Hello World");
}

/**
 * Note: The setTimeout() method is useful when you want to execute a block of once after 
 * some time. For example, showing a message to a user after the specified time.
 */
setTimeout(greet,3000);
console.log("This is message is shown before gree function.....")

let invertalId = setTimeout(greet,3000);
console.log("ID : " + invertalId);

