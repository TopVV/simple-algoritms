function toRoman(roman) {
    let arabic = 0;
    for (var i = 0; i < roman.length; i++) {
    	if (romanToArabic[roman[i]] >= romanToArabic[roman[i + 1]] || romanToArabic[roman[i + 1]] === undefined) {
    		arabic += romanToArabic[roman[i]]
    	} else{
    		arabic += (romanToArabic[roman[i + 1]] - romanToArabic[roman[i]]); 
    		i++
    	}
    }
    return arabic
}

let romanToArabic = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

alert('Арабские цифры: ' + toRoman(prompt('Римские цифры?', 'MCMXLIX')))
