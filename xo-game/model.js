var cols = 3, rows = 3; nTurn = 0;


function model (x, y) {
    var field = [];
    for (var i = 0; i < x; i++) {
        field.push([]);
        for (var j = 0; j < y; j++) {
            field[i].push("");
        }
    }
    nTurn++;
    return field
}

console.log(model(cols, rows));
console.log(model(cols, rows));
console.log(model(cols, rows));
console.log(model(cols, rows));
console.log(model(cols, rows));


function modelRandom () {
    var field = [];
    for (var i = 0; i < cols; i++) {
        field.push([]);
        for (var j = 0; j < rows; j++) {
            if(Math.random()>0.5) {
                field[i].push("X")
            } else {
                field[i].push("O")
            }
        }
    }
    return console.table(field)
}

modelRandom ();

console.log(nTurn)
// счетчик ходов 
// 