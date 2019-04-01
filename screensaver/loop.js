for (var i = 0; i < 15; i++) {
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
            addFallingBox();
        } else {
            box.style.top = toPx(y);
        }
    });
}