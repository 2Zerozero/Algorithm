function solution(num) {
    let answer = 0;
    let count = 0;
    
    // 조건 1. 짝수라면 %2
    // 조건 2. 홀수라면 *3 + 1
    // 결과값이 1이 될때까지 반복
    for( count = 0; count < 500; count++ ) {
        if( num % 2 === 0 ) {
            num = num / 2;
        }else if( num === 1 ) {
            answer = count;
            break
        }else if( num % 2 !== 0 ) {
            num = (num * 3) + 1
        }
    }
    // 주어진 수가 1이라면, 0 작업을 500번 반복해도 1이 안된다면, -1로 반환.
    if( count === 500 ) {
        answer = -1;
    }
    return answer;
}