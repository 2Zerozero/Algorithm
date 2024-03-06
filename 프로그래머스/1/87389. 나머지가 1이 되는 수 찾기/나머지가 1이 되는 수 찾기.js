function solution(n) {
    let answer = 0;
    
    // n % x === 1 이 되게하는 가장 작은 자연수
    // x 를 찾는 방법은 무엇?
    for(let x = 0; x < n; x++) {
        if(n % x === 1) {
            answer = x;
            break;
        }
    }
    return answer;
}