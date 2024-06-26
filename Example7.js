// Number Data Type:
let num0 = 1212;
console.log(num0);
console.log(typeof(num0));

let num1 = 10/0;
console.log(num1);

let result = Number.POSITIVE_INFINITY;
console.log(result);

result = Number.NEGATIVE_INFINITY;
console.log(result);

result = Number.MAX_VALUE;
console.log(result);

result = Number.MIN_VALUE;
console.log(result);

console.log(typeof(Number.POSITIVE_INFINITY));

// Exponential Numbers 
const SPEED_OF_LIGHT = 3e8;
console.log(SPEED_OF_LIGHT); // 3 x 10^8 = 300000000

// Hexadecimal 
const myColorCode = 0xffd500;
console.log(myColorCode);



console.log((12).toLocaleString("ar-EG"));

console.log((12).toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
console.log((1230000).toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000


console.log((12).toString(2));