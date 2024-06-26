/**
 * @file Example19.js 
 * @description All About Plain Functions In JS 
 */

/**
 * Monotonous Function 
 */
function add(num1, num2) {
    let c = num1 + num2;
    return c;
}

/**
 * Predicate Function 
 * @param {*} num 
 * @returns 
 */
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}


let result = add(12, 14);
console.log(result)

result = isEven(23);
console.log(result);


// Anonymous Function 
const addThreeNum =  function (a,b,c){
    return a+b+c;
};


console.log(addThreeNum(12,5,3));

const printf = console.log;
printf(addThreeNum(12,12,12));