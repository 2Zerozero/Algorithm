function solution(arr, divisor) {
    // arr: 기본 배열
    // divisor: 나눌 숫자
    // arr 요소 중 divisor로 나누어지는 요소를 리턴
    var answer = [];
    
    // 배열을 순회할 반복문
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }

    return answer.length !== 0 ? answer.sort(function(a, b){return a - b}) : [-1]
}