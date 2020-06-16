var longestRun = function (string) {
  // TODO: Your code here!
  let start = 0;
  let end = 0;
  let currentStart = 0;
  let current = string[0];
  let len = 0;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === current) {
      if (i - currentStart > len) {
        len = i - currentStart;
        start = currentStart;
        end = i;
      }
    } else {
      currentStart = i;
    }

    current = string[i];
  }
  return [start, end];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


//2
let longestRun = function (string) {
  if (string.length === 0) {
    return null;
  }
  let characters = string.split('');
  let commonCount = [];
  let count = 1;
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === characters[i + 1]) {
      count ++;
    } else {
        commonCount.push(count)
        count = 1;
      }
  }
  let largest = Math.max(...commonCount);
  let largeIndex = commonCount.indexOf(largest);
  if (largeIndex === 0 && commonCount[0] === 1) {
    return [0, 0];
  }
  if (largeIndex === 0 && commonCount[0] > 1) {
    return [0, commonCount[0]-1]
  }
  let start = commonCount.slice(0, largeIndex).reduce((a, b) => {  return a + b });
  let end = start + largest - 1;
  return [start, end];
};

// # 3
var longestRun = function(string) {
  // TODO: Your code here!
  var max = [0, 0];
  var curr = [0, 0];

  for (var i = 1; i < string.length; i++) {
    // 앞 뒤 같은지 비교 => 같으면? 하나 추가
    if (string[i - 1] === string[i]) {
      // 1번째 idx 에 +1 식 해주기 위해
      curr[1] = i;
      if (curr[1] - curr[0] > max[1] - max[0]) {
        // 연속되는 숫자를 계속 max에 채워넣음, max보다 큰 숫자가 안 나오면 맥스가 가장 긴 연속된 문자열
        max = curr;
      }
    } else {
      curr = [i, i];
    }
  }

  return max;
};
