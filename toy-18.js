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
