function generateRandomRow(minCharCount, maxCharNumber) {
    var symbols = "";
    var limit = minCharCount + Math.floor(Math.random() * (maxCharNumber - minCharCount + 1));

    for (var i = 0; i < limit; i++) {
        symbols += generateRandomSymbol() + " ";
    }
    
    return symbols
}

function generateRandomSymbol() {
    return characterMap.charAt(Math.floor(Math.random() * characterMap.length));
}
