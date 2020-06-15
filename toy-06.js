const commonCharacters = function(...string) {
    
    let obj = {};
    
    for (let i = 0; i < string.length; i++) {

        for (let j = 0; j < string[i].length; j++) {
            if (obj.hasOwnProperty(string[i][j])) {
                obj[string[i][j]]++;
            } else {
                obj[string[i][j]] = 1;
            }
        }
    }
    let result = [];
    for (let prop in obj) {
        if (obj[prop] === string.length) {
            result.push(prop);
        }
    }
    return result.join('')
};
commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa');
var result = commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa');
