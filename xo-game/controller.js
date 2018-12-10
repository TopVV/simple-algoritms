console.log('hi!');

var cols = 3;
var rows = 3;
var nTurn = 0;
// var model = modelCreate(rows, cols);
var model = modelCreateRandom(rows, cols);

var containerElement = document.getElementById('xo');
viewCreate(containerElement, rows, cols);
viewRender(containerElement, model, rows, cols);

// Handling clicks
containerElement.addEventListener('click', function (event) {
    console.log('click', event.target.id);
    // todo: extract coordinated from cell ID
    // todo: update model cell
    // todo: redraw model
});