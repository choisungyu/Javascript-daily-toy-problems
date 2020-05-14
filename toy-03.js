/*
 * 특정 배열이 매개변수로 전달되는 배열의 부분집합인지를 판단하는 메소드를 만드세요.
 * 비교 대상인 두 배열 모두 문자열로 이루어졌다고 가정합니다.
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * 참고 : 배열 내의 중복값은 무시하세요.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * 부분집합(subset)의 정의에 대한 자세한 정보는 여기(http://ko.wikipedia.org/wiki/부분집합)를 참고하세요.
 *
 */

/*
 * Advanced : 메소드가 문자열 이외의 자료형을 포함한 배열에도 작동하도록 개선해 보세요.
 */

Array.prototype.isSubsetOf = function(array) {
    // TODO: Your code here!
    // console.log(array)
    // for (let i = 0; i < array.length; i++) {
    // 만약 이렇게 되면 포함되는 문자열 생기면 바로 리턴 시켜버림 => for of 로 순회로 돌려야 함
    // if (array.includes(this[i])) {
    //     // console.log(this[i])
    //     return true;
    // }

    // }
    // this 로 하는 이유? => Array.prototype 이 array 역할을 함 , array 는 this를 가리켜서?
    for (let ele of this) {
        // 왜 반대로 놓고 짜야 되는지 꼭 알아내기....물어봐 좀 제발.....
        if (!array.includes(ele)) {
            return false;
        }
    }
    return true;
    // for(let el of array) {
    //   array.
    // }

};

/*
해결방법 : 
1. 포함되어 있는지 확인 하기 위해서는 include 사용하면 될 거 같음https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes
2. input array는 
  [ 'dog', 'cow', 'fox' ]
  [ 4, 3, 'cat', 1 ] // 문자열 + 숫자
  [ 'alice', [ 'cat', 'dog' ], 'bob' ] // 배열 안에 배열
  [ 'alice', 'bob', { name: 'chuck' } ] // 배열 안에 객체
  [ 'alice', 'bob', [ 'cat' ], { name: 'chuck' } ] // 문자열 + 배열 + 객체 들어 있음.
  그러기 위해서는 recursion 을 통해서 element 로 배열이나 객체로 올 때에 풀어주는 로직을 짜야 함.
3. should disregard duplicates => 
4. should return false if not all of the elements in the first array are in the second =>
5. 
 advanced 를 해결하려면 어떻게 해야 할까? recursion 다시 복습....
 1) should handle array element
      2) should handle object element
      3) should handle mixed arrays with object/array element

* forEach로 풀어볼 수 잇을까? 안 되면 왜 안 되는지?


*/
