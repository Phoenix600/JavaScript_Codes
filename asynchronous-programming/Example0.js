function sayHello(name){
console.log(`Hello ${name}...`); // Hello Pranay 
}

function higherOrderFunction(name,next)
{
    console.log("This is higher order function....")

    /// callbacks are called at end of the caller function 
    next(name);
}

higherOrderFunction("Pranay",sayHello);