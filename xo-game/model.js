function modelCreate (rows, cols) {
    var field = [];
    for (var y = 0; y < rows; y++) {
        field.push([]);
        for (var x = 0; x < cols; x++) {
            field[y].push(" ");
        }
    }
    nTurn;
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

function getCellByIndex(cellID) {
    return document.getElementById(cellID).innerHTML;
}

function checkGameEnd() {
    if(getCellByIndex("0-0")!==" "&&getCellByIndex("0-0")===getCellByIndex("0-1")&&getCellByIndex("0-1")===getCellByIndex("0-2")&&getCellByIndex("0-2")==="X"){
        document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("1-0")!==" "&&getCellByIndex("1-0")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("1-2")&&getCellByIndex("1-2")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("2-0")!==" "&&getCellByIndex("2-0")===getCellByIndex("2-1")&&getCellByIndex("2-1")===getCellByIndex("2-2")&&getCellByIndex("2-2")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("0-0")!==" "&&getCellByIndex("0-0")===getCellByIndex("1-0")&&getCellByIndex("1-0")===getCellByIndex("2-0")&&getCellByIndex("2-0")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("0-1")!==" "&&getCellByIndex("0-1")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("2-1")&&getCellByIndex("2-1")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("0-2")!==" "&&getCellByIndex("0-2")===getCellByIndex("1-2")&&getCellByIndex("1-2")===getCellByIndex("2-2")&&getCellByIndex("2-2")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("0-0")!==" "&&getCellByIndex("0-0")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("2-2")&&getCellByIndex("2-2")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    } else if(getCellByIndex("2-0")!==" "&&getCellByIndex("2-0")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("0-2")&&getCellByIndex("0-2")==="X"){
        return document.getElementById('winner').innerHTML = "The winner is X"
    }
    if(getCellByIndex("0-0")!==" "&&getCellByIndex("0-0")===getCellByIndex("0-1")&&getCellByIndex("0-1")===getCellByIndex("0-2")&&getCellByIndex("0-2")==="O"){
        document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("1-0")!==" "&&getCellByIndex("1-0")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("1-2")&&getCellByIndex("1-2")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("2-0")!==" "&&getCellByIndex("2-0")===getCellByIndex("2-1")&&getCellByIndex("2-1")===getCellByIndex("2-2")&&getCellByIndex("2-2")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("0-0")!==" "&&getCellByIndex("0-0")===getCellByIndex("1-0")&&getCellByIndex("1-0")===getCellByIndex("2-0")&&getCellByIndex("2-0")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("0-1")!==" "&&getCellByIndex("0-1")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("2-1")&&getCellByIndex("2-1")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("0-2")!==" "&&getCellByIndex("0-2")===getCellByIndex("1-2")&&getCellByIndex("1-2")===getCellByIndex("2-2")&&getCellByIndex("2-2")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("0-0")!==" "&&getCellByIndex("0-0")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("2-2")&&getCellByIndex("2-2")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(getCellByIndex("2-0")!==" "&&getCellByIndex("2-0")===getCellByIndex("1-1")&&getCellByIndex("1-1")===getCellByIndex("0-2")&&getCellByIndex("0-2")==="O"){
        return document.getElementById('winner').innerHTML = "The winner is O"
    } else if(nTurn>8){
        document.getElementById('winner').innerHTML = "Draw"
    }
    else {
        return false
    }
}

