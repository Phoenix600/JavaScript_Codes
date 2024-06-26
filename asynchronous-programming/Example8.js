function foo1(num) {
    return (num % 2 == 0) ? (true) : (false);
}

function foo2() {
    console.log("Checking Whether server is up or not...")
    return true;
}

function foo3() {
    console.log("Connecting To DB....");
    return true;
}

if (foo1(13)) {
    if (foo2()) {
        if (foo3()) {
            console.log("Server is running...");
        }
    }
}