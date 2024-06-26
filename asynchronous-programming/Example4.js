// Getting Started With CallBacks 


function greet(name,next)
{
    console.log("Hello " + name);
    next();
}


function callbackFunction()
{
    console.log("I'm Call Back Function....");
}


greet("Pranay",callbackFunction);


