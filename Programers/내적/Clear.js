function solution(a, b) {
    // (a[0] * b[0]) + (a[1] * b[1]) + ... + (a[n-1] * b[n-1])\
    // n-1인 이유: 배열의 인덱스는 0부터, 시작하기때문.
    var answer = 0;
    
    for(let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    
    return answer;
}