var n = prompt('N?', 0);

var arr = [];
var x = 1;

outer: while (arr.length != n) {
    for (i = (x + 1); i < (x + 2); i++) {
        for (j = 2; j < i; j++) {
            if (!(i % j)) {
                x = i;
                continue outer
            }
        }
        x = i;
        arr.push(i)
    }
}

alert(arr[n - 1])
