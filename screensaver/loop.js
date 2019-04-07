for (var i = 0; i < 40; i++) {
    addFallingBox();
}

setInterval(loop, 200);

function loop() {
    var boxes = document.querySelectorAll('.moving-box');
    boxes.forEach(function (box) {
        var y = parseInt(box.style.top);
        y += speed;

        if (y > window.innerHeight) {
            box.remove();
            occupiedColumns.forEach(function(item, i, arr) {
                if(item == box.column){
                    delete arr[i]
                }
            });
            addFallingBox();
        } else {
            box.style.top = toPx(y);
        }
    });
}