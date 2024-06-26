/**
 * The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
 */

function greet(){
    console.log("Hello People");
}

setTimeout(greet,3000);
console.log("This will execute before 3 seconds")