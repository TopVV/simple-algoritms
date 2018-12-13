// console.log('hi!');

var cols = 3;
var rows = 3;
var nTurn = 0;
var cellID; 
// var model = modelCreate(rows, cols);
var model = modelCreateRandom(rows, cols);

var containerElement = document.getElementById('xo');
viewCreate(containerElement, rows, cols);
viewRender(containerElement, model, rows, cols);

// Handling clicks
containerElement.addEventListener('click', function (event) {
    cellID = ('click', event.target.id);
    updateModelCell(cellID);
    console.log(cellID,nTurn++);   
    // todo: extract coordinated from cell ID
    // todo: update model cell
    // todo: redraw model
});
