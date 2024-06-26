// JavaScript Object 
const person = {
    "name" : "Rajesh",
    "age" : 34,
    "isMarried" : false,
    "isEmployed":true,
    "salary":78000,
};

// [0][1][2]
// console.log(person)
console.log(person["name"]);
console.log(person["age"]);
console.log(person["skill"]);

person["skill"] = "C/C++, JAVA";
console.log(person["skill"]);

// Nested Object 
// console.log(user['user_name']['required'])
const user = {
    user_name : {
        type:String,
        required:true,
        length:20
    },
    password:{
        type:String,
        required:true,
        length:20
    },
}

console.log(user['user_name']['required']);
console.log(user['user_name']['length']);