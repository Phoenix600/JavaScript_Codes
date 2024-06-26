function displayTime(){
    let date = new Date();

    let time = date.toLocaleTimeString();
    console.log(time);

    setTimeout(displayTime,3000);
}


displayTime();