var start = Date.now();
var boxCounter = 0;
var startPosition = 5;
var speed = 10;
var symbolWidth = 27;
var symbolHeight = 30;

for (var i = 0; i < 15; i++) {
    addFallingBox();
}

function createFallingBox() {
    var div = document.createElement('div');
    div.className = "moving-box";
    div.id = 'falling-box'; // id можем не задавать, мне кажется
    document.body.appendChild(div);
    div.style.width = toPx(symbolWidth);
    div.style.height = toPx(calculateRowsHeight());
    div.innerHTML = generateRandomRow(calculateSymbolsNumber());
    return div;
}

function addFallingBox() {
    
    var x = Math.round(Math.random() * calculateColumns()) * symbolWidth;
    // var y = -Math.random() * 100;
    var y = -Math.round(Math.random() * calculateColumns()) * symbolWidth

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
            box.remove();
            addFallingBox();
        } else {
            box.style.top = toPx(y);
        }
    });
}, 200);

// new 

function generateRandomSymbol() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン"; // позже можно расширить
    // var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    // for (var i = 0; i < 5; i++)
    //   text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function generateRandomRow(sybolsNumber){
    var symbols = "";
    for (var i = 0; i < sybolsNumber; i++){
        symbols += generateRandomSymbol() + " ";
    }
    return symbols
}

// function setBoxHeight(box) {
//         var boxHeight = window.innerHeight;
//         box.style.height = toPx(boxHeight);
//     };

// function setBoxWidth(box) {
//     var boxWidth = window.innerWidth/20;
//     box.style.width = toPx(boxWidth);
// }

    // setBoxHeight();

function calculateColumns(){
    var columnsNmount = Math.round(window.innerWidth/symbolWidth);
    return columnsNmount;
}

function calculateRowsHeight() {
    return window.innerHeight;
}

function calculateSymbolsNumber() {
    return Math.round(calculateRowsHeight()/symbolHeight);
}

console.log(generateRandomRow(calculateSymbolsNumber()));