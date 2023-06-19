function solution(x, n) {
    // 정수 x, 자연수 n
    // x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
    // x = 4; n = 3;
    // [4, 8, 12]
    var answer = [];
    
    for(let i = 1; i < n+1; i++) {
        answer.push(x * i);
    }
    return answer;
}