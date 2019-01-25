var cols = 3;
var rows = 3;
var nTurn = 0;
var model = modelCreate(rows, cols);
var containerElement = document.getElementById('xo');
var containerCell = document.getElementsByClassName('xo-field__square');

viewCreate(containerElement, rows, cols);
viewRender(model, rows, cols);

for (var i = 0; i < containerCell.length; i++) {
    containerCell[i].addEventListener('click', function (event) {
        var cellId = event.target.id;
        console.log('cellId', cellId);

        updateModelCell(cellId);
        console.log('Is game ended:', checkGameEnd());
        console.log(cellId, nTurn);

        if (checkGameEnd()) {
            document.getElementById("turn").innerHTML = "";
        }
    });
}

