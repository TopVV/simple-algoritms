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