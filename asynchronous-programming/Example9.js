let result = true;
let promise = new Promise(
    function (resolve, reject) {
        if (result == true) {
            resolve("Fullfilled State...");
        }else{
            reject("Rejected State...")
        }
    }
);
promise.then(
    function (result){
        console.log( "Data : " + result);
    }
);

promise.catch(
    function (error){
        console.log("ERROR" + error);
    }
);

promise.finally(
    function ()
    {
        console.log("Cleanup Process...")
    }
);