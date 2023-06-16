// 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

// 가우스 공식

// 처음 숫자와, 마지막 숫자를 더한 합 = ( a + b )
// 더할 숫자의 개수 총합의 1 / 2 = ( b - a + 1 ) * 1 / 2
// = ( a + b ) * ( b - a + 1 ) * 1 / 2
function solution(a, b) {
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
    // 음수가 안나오기 때문에, 순서를 신경 쓸 필요가 없다.
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
