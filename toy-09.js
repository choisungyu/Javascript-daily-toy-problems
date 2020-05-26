const deepEquals = function (apple, orange) {
  // TODO: Your code here!

  if (apple === orange) {
    return true;
  }

  if (typeof orange !== "object" || typeof apple !== "object") {
    return false;
  }

  if (Object.keys(orange).length > Object.keys(apple).length) {
    [apple, orange] = [orange, apple]; // 무조건 apple의 원소 개수보다 orange의 원소 개수가 많거나 같게 맞춘다
  }

  let flag = true;

  for (let i in apple) {
    flag = deepEquals(apple[i], orange[i]);
  }

  return flag;
};
