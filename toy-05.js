const bubbleSort = function(array) {
    // TODO: Your code here!
    // 0 1, 2
    let flag = false;

    for (let i = 0; i < array.length ; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            flag = true
        }
    }
    if (flag) {
        console.log(array);
        return bubbleSort(array);
    }
    // console.log(array);
    
    return array;
};
bubbleSort([24.7, 24.3, 23, 9, 3, 3, 100, 25, 100])
