function addFallingBox() {
    var box = createFallingBox();
    var x =  chooseRandomColumn() * symbolWidth;
    var y = -box.clientHeight - Math.random() * box.clientHeight;
    // console.log(x, y);

    box.opacity = 1;
    box.column = x / symbolWidth; // проверь что правильно
    occupiedColumns.push(box.column);

    // индекс колонок текущих боксов
    // [].slice.call(document.querySelectorAll('.moving-box')).map(x => x.column)

    box.style.left = toPx(x);
    box.style.top = toPx(y);
}

function createFallingBox() {
    var box = document.createElement('div');
    box.className = "moving-box";
    box.opacity = 0;
    box.style.width = toPx(symbolWidth);
    box.innerHTML = generateRandomRow(minCharNumber, maxCharNumber);

    document.body.appendChild(box);

    return box;
}

function toPx(n) {
    return String(n) + 'px';
}

function calculateColumns() {
    return Math.round(window.innerWidth / symbolWidth);
}

function calculateRowsHeight() {
    return window.innerHeight;
}

function calculateSymbolsNumber() {
    return Math.round(calculateRowsHeight()/symbolHeight);
}

function chooseRandomColumn(){
    var randomColumn = Math.round(Math.random() * (calculateColumns()-1));
    console.log(randomColumn);
    occupiedColumns.forEach(function(item, i, arr) {
        if(item == randomColumn){
            return randomColumn++;
        };
      });
      console.log(randomColumn);
    return randomColumn;
}

console.log(occupiedColumns);