var nColumns = getColumnsNumber();
for (var i = 0; i < nColumns; i++) {
    addFallingBox();
}

setInterval(loop, 20);

function loop() {
    var boxes = document.querySelectorAll('.moving-box');
    boxes.forEach(function (box) {
        var y = parseInt(box.style.top);
        y += speed;

        if (y > window.innerHeight) {
            box.remove();
            occupiedColumns = occupiedColumns.filter(col => col != box.column);
            addFallingBox();
        } else {
            box.style.top = toPx(y);
        }
    });
}