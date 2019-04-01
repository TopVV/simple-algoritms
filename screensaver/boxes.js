function addFallingBox() {
    var box = createFallingBox();
    var x =  Math.round(Math.random() * calculateColumns()) * symbolWidth;
    var y = -box.clientHeight - Math.random() * box.clientHeight;
    // console.log(x, y);

    box.opacity = 1;
    box.column = x / symbolWidth; // проверь что правильно
    // console.log(box.column);

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
