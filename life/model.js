// начало сверху - так понятней и всегда можно выйти из функции)
// а это - IIFE (Immediately Invoked Function Expression)
(function main() {
    let newWorld = generateRandomWorld(15,15) // не забываем точкозапятые ;
    drawWorldTable(newWorld);
    // newGeneration(forTest);
    setInterval(newGeneration, 1000, newWorld) // не забываем точкозапятые ;
})();

let forTest = [
    [true, false, true, false, false, true],
    [false, true, false, false, true, false],
    [true, false, true, false, false, true],
    [false, true, false, false, true, false],
    [true, false, true, false, false, true],
    [false, true, false, false, true, false]
];

function generateRandomWorld(rows, columns) {
    // без var / let / const - переменная становится глобальной: window.arr
    // глобальные переменные - зло в чистом виде
    arr = [];

    for (let i = 0; i < columns; i++) {
        arr.push([]);
        for (let j = 0; j < rows; j++) {
            // Math.floor(Math.random() * 11) < 5 ? arr[i].push(false) : arr[i].push(true)

            // тут можно проще)
            const probability = 0.5;
            const isCellExist = Math.random() < probability;
            arr[i].push(isCellExist);

        }
    }

    // неиспользуемый под удаляем
/*     alert(arr);
    console.log(arr) */

    return arr
}

// неиспользуемый под удаляем
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
        }) // не забываем точкозапятые ;

        document.querySelector('.world').appendChild(row);
    })
}

// неиспользуемый под удаляем
let currentCellX;
let currentCellY;



function checkHowMuchIsAliveAround(arr, y, x) {
    let arrayLengthX = arr[0].length;
    let arrayLengthY = arr.length;
    let aliveCells;

    // if (arr[y][x]) { aliveCells = -1 }
    // else { aliveCells = 0; }; // а тут - лишняя ;

    // кста, хорошее место для тернарного оператора
    aliveCells = arr[y][x] ? -1 : 0;

    // вокруг (y +- 1) скобки необязательны
    for (let i = (y - 1); i <= (y + 1); i++) {
        if (i < 0 || i > arrayLengthY - 1) {
            continue // не забываем точкозапятые ;
        }

        // вокруг (x +- 1) скобки необязательны
        for (let j = (x - 1); j <= (x + 1); j++) {

            if (j < 0 || j > arrayLengthX - 1) {
                continue // не забываем точкозапятые ;
            }
            if (arr[i][j]) {
                aliveCells++;
            }
        }
    }

    return aliveCells // не забываем точкозапятые ;
}

// неиспользуемый под удаляем
// console.log(checkHowMuchIsAliveAround(forTest, 5, 5)); 

function newGeneration(arr) {

    // без var / let / const - переменная становится глобальной: window.arr
    // глобальные переменные - зло в квадрате
    // тут очень хорошо, что скопировал массив - клёво :)
    temporaryArr = Array.from(arr) // но опять же, не забываем точкозапятые ;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(checkHowMuchIsAliveAround(arr, i, j));
            if (arr[i][j]) {
                // === лучше, чем == проверкой сравниваемых типов
                if (checkHowMuchIsAliveAround(arr, i, j) == (2 || 3)) {
                    continue // не забываем точкозапятые ;
                } else {
                    temporaryArr[i][j] = false // не забываем точкозапятые ;
                }
            } else {
                if (checkHowMuchIsAliveAround(arr, i, j) === 3) {
                    temporaryArr[i][j] = true // не забываем точкозапятые ;
                }
            }
        }
    }
    drawWorldTable(temporaryArr);
    newWorld = Array.from(temporaryArr);
}
