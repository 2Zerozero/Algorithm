function solution(arr, queries) {
    // arr 에 있는 요소를 queries 에 있는 배열과 같이 요소의 순서를 변경
    // [0, 3] => arr[0] 과 arr[3] 요소의 값을 서로 변경
    
    for (let [i, j] of queries) {
        // arr[i]와 arr[j]의 값을 서로 변경
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
