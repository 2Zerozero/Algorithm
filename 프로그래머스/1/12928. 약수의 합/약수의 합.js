function solution(n) {
    let answer = 0;
 
    // n 의 모든 약수의 합
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer += i;
        }
    }
    
    return answer;
}