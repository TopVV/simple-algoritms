var start = Date.now();
var boxCounter = 0;
var startPosition = 5;
var speed = 10;
var symbolWidth = 27;
var symbolHeight = 30;
var characterMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン";

var minCharNumber = Math.floor(window.innerHeight/30);
var maxCharNumber = 15 + minCharNumber;

var occupiedColumns = [];
var unoccupiedColumns = [];