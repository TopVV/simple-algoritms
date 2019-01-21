// Model
////////////////////////////////////////

class Field {
    constructor() {
        this.width = 3;
        this.height = 3;
        this.cells = [];

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = [];
            for (let x = 0; x < this.width; x++) {
                this.cells[y][x] = Math.random() > 0.5 ? 'x' : 'o';
            }
        }
    }
}

var field1 = new Field();
var field2 = new Field();

// View
////////////////////////////////////////

function drawModel(model) {
    for (let y = 0; y < model.height; y++) {
        var row = [];
        for (let x = 0; x < model.width; x++) {
            row.push(model.cells[y][x]);
        }
        console.log(row.join(' '));
    }
}

drawModel(field1);
console.log('\n');
drawModel(field2);