// Program with call back function 

function greet(name,myFunction)
{
    console.log("Hello World");
 
    // call back function 
    // executes only after the greet() statements are executed
    myFunction(name);
}

function sayName(name){
    console.log("Hello " + name);
}

setTimeout(greet,2000,"Pranay",sayName);
/**
 *  The callback function is helpful when you have to wait for a result that takes time. For example, the data coming from a server because it takes time for data to arrive.
 */