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

function checkGameEnd() {
    // todo: extract function getCellByIndex()
    if ((document.getElementById("0-0").innerHTML)===(document.getElementById("1-1").innerHTML)&&(document.getElementById("1-1").innerHTML)===(document.getElementById("2-2").innerHTML)) {
        return true;
    } else if ((document.getElementById("0-1").innerHTML)===(document.getElementById("1-1").innerHTML)&&(document.getElementById("1-1").innerHTML)===(document.getElementById("2-1").innerHTML)){
        return true;
    } else if ((document.getElementById("0-2").innerHTML)===(document.getElementById("1-1").innerHTML)&&(document.getElementById("1-1").innerHTML)===(document.getElementById("2-0").innerHTML)) {
        return true;
    } else if ((document.getElementById("1-0").innerHTML)===(document.getElementById("1-1").innerHTML)&&(document.getElementById("1-1").innerHTML)===(document.getElementById("1-2").innerHTML)) {
        return true;
    } else {
        return false;
    }
}
