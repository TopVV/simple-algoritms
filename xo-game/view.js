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

function viewRender(containerElement, model, rows, cols) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            var id = y + '-' + x;
            var cell = document.getElementById(id);
            cell.innerHTML = model[y][x];
        }
    }
}

function updateModelCell(cellID){
    // var clickID = (cellID.split('-'));
    var changeContentTo;
    if(nTurn%2){
        changeContentTo = "X"
    } else {
        changeContentTo = "O"
    };
    document.getElementById(cellID).innerHTML = changeContentTo;
}