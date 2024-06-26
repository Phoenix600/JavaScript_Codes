/**
 * @file Example9.js
 * @description Explains About the Number Data Type In JS
 */

let number;
console.log(number); //undefined 

var number1; // undefined 
console.log(number1);

const number2 = 12e10; // Strictly Initilize The Value 
console.log(number2);

// "Hello " + 1==> Hello1
// "Hello" - 1 ===>???===> NaN

let result = "Hello " + 1;
console.log(typeof(result));

result = "Hello" - 1; // NaN
console.log(result);

result = 10/0;
console.log(result);

result = -10/0;
console.log(result);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isNaN("Hello"-1)); // "Hello" -1 ==> int / string x==> Nan
console.log(Number.isNaN(12+12)); // 24


// collection of variables and operators

console.log("Finite Answer : ",Number.isFinite(10/0));
console.log("Finite Answer : ",Number.isFinite(10/2));


console.log("Is Integer : ", Number.isInteger(0.5));
console.log("Is Integer : ", Number.isInteger(5));

result =  Number.parseInt("121a2a"); // 1212
console.log(result);
console.log(typeof(result));


let input = 12000;
console.log(input.toExponential());
input = 0.00001;
console.log(input.toExponential());


input = 12.121212121;
console.log(input.toFixed(10));


input = 10;
console.log(input.toString(10));









