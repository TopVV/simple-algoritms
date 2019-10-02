let forTest = [
    [true, false, true, false, false, true],
    [false, true, false, false, true, false],
    [true, false, true, false, false, true],
    [false, true, false, false, true, false],
    [true, false, true, false, false, true],
    [false, true, false, false, true, false]
];

function generateRandomWorld(rows, columns) {
    arr = [];
    for (let i = 0; i < columns; i++) {
        arr.push([]);
        for (let j = 0; j < rows; j++) {
            Math.floor(Math.random() * 11) < 5 ? arr[i].push(false) : arr[i].push(true)
        }
    }
/*     alert(arr);
    console.log(arr) */
    return arr
}


function drawWorldDiv(arr) { // with Divs
    arr.forEach(element => {
        let cell = document.createElement("div");

        element ? cell.classList.add('cell--alive') : cell.classList.add('cell--dead');

        document.querySelector('body').appendChild(cell);

        console.log('test')

    });
}

function drawWorldTable(arr) {
    document.querySelector('.world').innerHTML = '';

    arr.forEach(elementY => {
        let row = document.createElement('tr');
        elementY.forEach(elementX => {
            let cell = row.appendChild(document.createElement('td'));
            elementX ? cell.classList.add('cell--alive') : cell.classList.add('cell--dead');
        })

        document.querySelector('.world').appendChild(row);
    })
}

let currentCellX;
let currentCellY;



function checkHowMuchIsAliveAround(arr, y, x) {
    let arrayLengthX = arr[0].length;
    let arrayLengthY = arr.length;
    let aliveCells;

    if (arr[y][x]) { aliveCells = -1 }
    else { aliveCells = 0; };

    for (let i = (y - 1); i <= (y + 1); i++) {
        if (i < 0 || i > arrayLengthY - 1) {
            continue
        }

        for (let j = (x - 1); j <= (x + 1); j++) {

            if (j < 0 || j > arrayLengthX - 1) {
                continue
            }
            if (arr[i][j]) {
                aliveCells++;
            }
        }
    }

    return aliveCells
}

// console.log(checkHowMuchIsAliveAround(forTest, 5, 5)); 

function newGeneration(arr) {

    temporaryArr = Array.from(arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(checkHowMuchIsAliveAround(arr, i, j));
            if (arr[i][j]) {
                if (checkHowMuchIsAliveAround(arr, i, j) == (2 || 3)) {
                    continue
                } else {
                    temporaryArr[i][j] = false
                }
            } else {
                if (checkHowMuchIsAliveAround(arr, i, j) === 3) {
                    temporaryArr[i][j] = true
                }
            }
        }
    }
    drawWorldTable(temporaryArr);
    newWorld = Array.from(temporaryArr);
}


let newWorld = generateRandomWorld(15,15)

drawWorldTable(newWorld);
// newGeneration(forTest);


setInterval(newGeneration, 1000, newWorld)