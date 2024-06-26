/**
 * @description Operators In JavaScript 
 */

const a = 3, b = 2;
console.log(a > b); // true 

// Equals to Operator 
// Same value and Same Types 
console.log(5 == 5);

// Same Value, Different Type
console.log(2 == "2");// True 

// Different Value, Same Types 
console.log("Hello" == "hello"); // False 


let x = 100;
let y = 33;
let operand1 = (x = x-y,y = x*y,x*y);
// 67 ==> 67*100 ==> 6300*33

console.log(operand1);