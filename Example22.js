let HASH = new Array(101);

for (let i = 0; i < HASH.length; i++) {
    HASH[i] = 0;
}

console.log(HASH)

for (let i = 1; i < HASH.length; i++) {
    for (let j = 1; j < HASH.length; j++) {
        if (j % i == 0) {
            if (HASH[j] == 0) {
                HASH[j] = 1;
            } else {
                HASH[j] = 0;
            }
        }
    }
}

let count = 0;
for (let i=1; i < HASH.length; i++)
{
    if(HASH[i] == 0)
        count++;
}

console.log(count);

