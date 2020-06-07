var powerSet = function(str){
    // 1. 주어진 str을 각각 하나의 알파벳으로 쪼개놓는다.(대신 중복된 값은 제거해준다)
    // 2. 순서에 상관없이, 같은 알파벳의 조합은 같은 경우로 취급한다. 
    // 멱집합?, 모든 부분 집합의 경우를 따지는,,,
    // 중복을 제거하기 위한 set
    let set = new Set();
    for(let i = 0; i < str.length; i++) {
        set.add(str[i])
    }
    let newStr = [...set].join("");     
    // 반복문을 돌되, 반복문의 반복이 될 수록, 뒷쪽의 알파벳을 더하고, 뒤에 남은 것들만 다뤄야 한다.
    // 돌 때 마다 시작점이 이동해야 한다.
    let result = [];
    function recur(string, begin) {
        result.push(string)
        for(let i = begin; i < newStr.length; i++){
            recur(string + newStr[i], i + 1);             
  //push할 string과 반복문 도는 시작점i를 같이 이동하면, recur할 때 마다 주어진 str 기준으로 한 칸씩 이동하며 조합을 하게 된다.           
        }
    }
    recur("", 0)
    return result;
}
console.log(powerSet('jump'));
