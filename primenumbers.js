// !! - convert to boolean (better use Boolean(x))
// +  - convert to number (better use Number(x))

// All types:
//  * Value (primitive) types: 
// * Reference types (64 bit memory address):

// JS Number is 64 bit floating-point value (called double) 

function main() {
    var numberAmount = prompt('Number?', 0);
    var primeArray = formPrimeArray(numberAmount);
    console.log(primeArray);
}

function formPrimeArray (n) {
	var arr = [];
    for (var i = 2; arr.length < n; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }; 
    return arr; //присваивается как массив или ссылка? 
}

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

main();

// как тестить только js файл? и без алертов просто открывать консоль и смотреть?