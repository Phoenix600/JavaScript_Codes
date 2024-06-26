// ClearTimeOut Function

let count = 0;

function increaseCount(){
    count++;
    console.log(count);
}

let id = setTimeout(increaseCount, 3000);

clearTimeout(id);
console.log("SetTimeOut is stoppped.....");