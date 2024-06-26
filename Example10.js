/**
 * @file Example10.js 
 * @description This file talks about string methods 
 */

let str = "JAVASCRIPT";
console.log(str.charAt(7));
console.log(str.replace('A','a'));

let str1 = "_PROGRAMMING";
let str2 = "JS";
console.log(str2.concat(str1));

str = "APPLE,MANGO,CHERRY";
console.log(str.split(',')); // ["APPLE","MANGO","CHERRY"]

str3 = "SAMPLE";
console.log(str3.substring(3));

console.log(str3.substring(2,4)); // 4-1

console.log(str3.search("PE"));


str4 = "BACKEND DEVELOPMENT IN NODE";
console.log(str4.slice(2,7));
console.log(str4.slice(2,7));


let str5 = "   SAMPLE   ";
console.log(str5);
console.log(str5.trim());


let str6 = "SAMPLE"; // ==> sample
console.log(`${str6} : ${str6.toLowerCase()}`);

let str7 = "sample";
console.log(str7.toUpperCase());