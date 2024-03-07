function solution(arr) {
    // 배열의 요소 중 가장 작은 수 1개를 제거 후 리턴
    // 정렬로 풀면 안됨.
    let minNumber = Math.min(...arr)
    // Math.min 으로 찾은 가장 작은수를 indexOf 를 이용하여 찾는다.
    // spliice 로 해당 index 에서 가장 작은 수를 제거한다.
    arr.splice(arr.indexOf(minNumber),1);
    // 배열이 비어있다면 [-1], 아니라면, 나머지 배열을 리턴.
    let answer = arr.length ? arr : [-1];
    
    return answer;
}