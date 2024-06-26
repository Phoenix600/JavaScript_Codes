function sayHello(){
    console.log("Hello User")
}

// Function aliasing or Function Nick-naming
sayHello();
const greet = sayHello;
greet();

const print = console.log;
print("Function Aliasing....")
console.log("Function Aliasing....")