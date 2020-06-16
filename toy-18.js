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
