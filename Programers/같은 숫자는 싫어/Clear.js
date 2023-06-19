function solution(arr)
{
    // 배열의 중복 숫자는 제거하되, 순서는 유지.
    var answer = [];
    
    // 배열을 순회하면서 중복체크
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i])
        }
    }
    
    return answer;
}