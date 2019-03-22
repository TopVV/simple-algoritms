var start = Date.now();
var boxCounter = 0;
var startPosition = 5;
var speed = 10;

for (var i = 0; i < 5; i++) {
    addFallingBox();
}

function createFallingBox() {
    var div = document.createElement('div');
    div.className = "moving-box";
    div.id = 'falling-box';
    document.body.appendChild(div);
    return div;
}

function addFallingBox() {
    
    var x = Math.random() * window.innerWidth;
    var y = -Math.random() * 100;

    var box = createFallingBox();
    box.style.left = toPx(x);
    box.style.top = toPx(y);
}

function toPx(n) {
    return String(n) + 'px';
}

function placeFallingBox(elementId) {
    var box = document.getElementById(elementId);
    box.style.marginLeft = startPosition + 'px';
    box.style.marginRight = 5 + 'px';
    startPosition += 105;
}

setInterval(function () {
    var boxes = document.querySelectorAll('.moving-box');
    boxes.forEach(function (box) {
        var y = parseInt(box.style.top);
        y += speed;
 
        if (y > window.innerHeight) {
            document.body.removeChild(box);
            addFallingBox();
        } else {
            box.style.top = toPx(y);
        }
    });
}, 200);