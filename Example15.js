/**
 * JavaScript Arrays 
 */

let fruits = ["Apple", "Banana", "Pineapple", "Orange"];
console.log(fruits);

// create the array of numbers 
const numbers = [10, 20, 30, 40, 50, 60, 70];
// accessing the elements via numbered index
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Adding Elements To An Array 
let dailyActivities = ["eat", "sleep"];
dailyActivities.push("exercise");
dailyActivities.push("code");
console.log(dailyActivities);

// using the unshift() to add element at the begining of the array 
dailyActivities.unshift("pray");
console.log(dailyActivities);

// Changing the existing element in array
dailyActivities[2] = "work";
console.log(dailyActivities);

// Removing The Elements From Array 
console.log(dailyActivities);
let removedList =  dailyActivities.splice(2,2,"Teach","Study");
console.log("Removing Elements : ");
console.log(removedList)
console.log(dailyActivities);

// The concat() method returns a new array by merging two or more values/arrays.
let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];
let joinedArray = primeNumbers.concat(evenNumbers);
console.log(joinedArray);

let languages1 = ["JavaScript", "Python", "Java"];
let languages2 = ["C/C++", "Assembly"];

let new_languages1 = languages1.concat(languages2);
console.log(new_languages1);

let new_languages2 = languages1.concat("Lua", languages2);
console.log(new_languages2);

// Concatenating nested arrays
let randomList = [1, 2, 3];
let randomNestedList = [
    [4, 5, 6],
    [7, 8, 9]
];

let combinedRandomArray = randomList.concat(randomNestedList);
console.log(combinedRandomArray);
combinedRandomArray[0] = 111;
console.log(combinedRandomArray);

