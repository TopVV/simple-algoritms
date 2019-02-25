var start = Date.now();


var timer = setInterval(function(){
    moveElement("falling-box-1");
}, 20);


function moveElement(elementId){
    var timePassed = Date.now() - start;
    if (timePassed > 2000) clearInterval(timer);
    document.getElementById(elementId).style.top = timePassed / 5 + 'px';
}


