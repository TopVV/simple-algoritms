function main() {
        
}

var n = 10;
var arr = [];
var x = 1;

for (var i = 1; arr.length < n; i++) {
    if (isPrime(i)) {
        arr.push(i);
    }
}

console.log(arr);

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}