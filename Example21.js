function takes3Sec(){
    setTimeout(
        function (){
        console.log("Execuated After 3 Secs")
    }, 
    3000);
} 

async function executeInTime()
{
    console.log("Statement-1");
    console.log("Statement-2");
    await takes3Sec();
    console.log("Statement-3");
} 


executeInTime();
