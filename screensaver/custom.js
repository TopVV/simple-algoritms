var start = Date.now();
var boxCounter = 0;
var startPosition = 5;
var speed = 10;

for (var i = 0; i < 5; i++) {
    addFallingBox();
}

setInterval(function () {
    var boxes = document.querySelectorAll('.moving-box');
    boxes.forEach(function (box) {
        var y = parseInt(box.style.top);
        y += speed;
 
        if (y > window.innerHeight) {
            box.style.backgroundColor = '#c00';
            document.body.removeChild(box);
            addFallingBox();
        } else {
            box.style.top = toPx(y);
        }
    });
}, 200);

function toPx(n) {
    return String(n) + 'px';
}

function addFallingBox() {
    // Math.random() return value in interval [0, 1} - 1 is always EXCLUDED

    var x = Math.random() * window.innerWidth;
    var y = -Math.random() * 100;

    var box = createFallingBox();
    box.style.left = toPx(x);
    box.style.top = toPx(y);
}

function createFallingBox() {
    var div = document.createElement('div');
    div.className = "moving-box";
    div.id = 'falling-box-' + boxCounter;
    document.body.appendChild(div);

    return div;
}

function placeFallingBox(elementId) {
    var box = document.getElementById(elementId);
    box.style.marginLeft = startPosition + 'px';
    box.style.marginRight = 5 + 'px';
    startPosition += 105;
}

function intervalTimer(elementId) {
    var timer = setInterval(function () {
        var timePassed = Date.now() - start;
        document.getElementById(elementId).style.top = timePassed / 5 + 'px';
        if (timePassed > 2000) {
            clearInterval(timer);
        }
    }, 20);
};


//     var timer = setInterval(function(){
//         moveElement('falling-box-' + BoxCounter);
// }, 20);

// function moveElement(elementId){
//     var timePassed = Date.now() - start;
//     if (timePassed > 2000) clearInterval(timer);
//     document.getElementById(elementId).style.top = timePassed / 5 + 'px';
// }