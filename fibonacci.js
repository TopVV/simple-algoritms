var n = prompt('Размер ряда?', 0);

function fib(n) {
	var x = 0;
	var y = 1;
	var z;
	var numbers = [0];
	for(var i= 1; i < n; i++) {
		z = x + y,
		x = y,
		y = z
		numbers.push(z)
	}
	return numbers;
}

alert(fib(n));
