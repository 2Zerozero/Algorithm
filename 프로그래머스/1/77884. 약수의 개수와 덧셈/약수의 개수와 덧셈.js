function solution(left, right) {
    // 반복문으로, left ~ right 사이의 수를 구한다.
    // 구한 수의 약수를 체크한다.
    // 짝수면 더하고, 홀수면 뺀다.
    
    // 제곱근은 약수가 홀수
    // 제곱근이 아닐땐 약수가 짝수
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        if(Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        }else {
            answer += i;
        }
    }
    
    return answer;
}