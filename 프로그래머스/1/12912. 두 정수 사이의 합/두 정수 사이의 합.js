function solution(a, b) {
    // 가우스 공식

    // 처음 숫자와, 마지막 숫자를 더한 합 = ( a + b )
    // 더할 숫자의 개수 총합의 1 / 2 = ( b - a + 1 ) * 1 / 2
    // = ( a + b ) * ( b - a + 1 ) * 1 / 2
    var answer = 0;
    
    if( a === b ) {
        answer = a;
    } else if( a < b ) {
        answer = ( a + b ) * ( b - a + 1 ) * 1 / 2;
    } else if( b < a ) {
        answer = ( b + a ) * ( a - b + 1 ) * 1 / 2;
    }
    
    return answer;
}

function solution(a, b) {
    // Math.abs: 주어진 숫자의 절대값을 반환
    return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}


function solution(a, b) {
    var answer = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    for(let i = min; i <= max; i++) {
        answer += i;
    }

    return answer;
}
