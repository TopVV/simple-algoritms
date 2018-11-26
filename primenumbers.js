// !! - convert to boolean (better use Boolean(x))
// +  - convert to number (better use Number(x))

// All types:
//  * Value (primitive) types: 
// * Reference types (64 bit memory address):

// JS Number is 64 bit floating-point value (called double) 

function main() {
    var n = 10; // 0. замени на prompt()
    var arr = [];

    // 1. вынеси в функцию
    for (var i = 1; arr.length < n; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }

    console.log(arr);
}

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}