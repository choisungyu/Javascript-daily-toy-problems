/*
 * 임의의 string이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 return하는 함수를 작성하세요.
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = function(string) {
    // TODO: Your code here!
    let arr = string.split('');
    let resultObj = {};
    for (let prop of arr) {
        if (resultObj[prop]) {
            resultObj[prop]++;
        } else {
            resultObj[prop] = 1;
        }
    }
    for (let prop in resultObj) {
        if (resultObj[prop] === 1) {
            return prop;
        }
    }
};
