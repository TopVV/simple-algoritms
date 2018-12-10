function modelCreate (rows, cols) {
    var field = [];
    for (var y = 0; y < rows; y++) {
        field.push([]);
        for (var x = 0; x < cols; x++) {
            field[y].push(" ");
        }
    }
    nTurn++;
    return field;
}

function modelCreateRandom (rows, cols) {
    var field = [];
    for (var y = 0; y < rows; y++) {
        field.push([]);
        for (var x = 0; x < cols; x++) {
            if (Math.random() > 0.5) {
                field[y].push("X");
            } else {
                field[y].push("O");
            }
        }
    }
    return field;
}

function modelToString(model) {
    return model.map(row => row.join(' ')).join('\n')
}