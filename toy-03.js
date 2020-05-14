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
        /* !array.includes(ele) 이렇게 반대로 놓고 짜는 이유는? 
        => ! 안하고 짜면 return true 가 되어야 하는데, 그러면 참 값이 나올 때, 바로 return true로  탈출함 */
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

*/
