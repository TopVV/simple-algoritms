var start = Date.now();

var BoxCounter = 0;
var startPosition = 5;


function createFallingBox(){
    var div = document.createElement('div');
    div.className = "moving-box";
    div.id = 'falling-box-' + BoxCounter;
    // div.innerHTML = "";
    containerBox.appendChild(div);
};

function placeFallingBox(elementId){
    document.getElementById(elementId).style.marginLeft = startPosition + 'px';
    document.getElementById(elementId).style.marginRight = 5 + 'px';
    startPosition += 105;
};

function intervalTimer(elementId){
var timer = setInterval(function () {
    var timePassed = Date.now() - start;
    document.getElementById(elementId).style.top = timePassed / 5 + 'px';
    if (timePassed > 2000) {clearInterval(timer)
    }}, 20);
    
};

function addFallingBox(){
    createFallingBox();
    placeFallingBox('falling-box-' + BoxCounter);
    // moveElement('falling-box-' + BoxCounter);
    intervalTimer('falling-box-' + BoxCounter);
    BoxCounter++;
};



addFallingBox();
addFallingBox();
addFallingBox();
addFallingBox();
addFallingBox();



//     var timer = setInterval(function(){
//         moveElement('falling-box-' + BoxCounter);
// }, 20);

// function moveElement(elementId){
//     var timePassed = Date.now() - start;
//     if (timePassed > 2000) clearInterval(timer);
//     document.getElementById(elementId).style.top = timePassed / 5 + 'px';
// }