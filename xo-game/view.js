function viewCreate(containerElement, rows, cols) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            var cell = document.createElement('div');
            cell.className = 'xo-field__square';
            cell.id = y + '-' + x;
            containerElement.appendChild(cell);
        }
    }
}

function viewRender(model, rows, cols) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            var id = y + '-' + x;
            var cell = document.getElementById(id);
            cell.innerHTML = model[y][x];
        }
    }
}

function updateModelCell(cellID) {
    if (document.getElementById(cellID).innerHTML === " ") {
        (nTurn % 2) ? document.getElementById(cellID).innerHTML = "O" : document.getElementById(cellID).innerHTML = "X";
        (nTurn % 2) ? document.getElementById("turn").innerHTML = "X, it's your turn" : document.getElementById("turn").innerHTML = "O, it's your turn";
        nTurn++;
    }
}