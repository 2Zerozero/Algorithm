// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

function solution(absolutes, signs) {
    // 1. absolutes 의 length 만큼 순회한다.
    // 2. signs 가 true: 양수, false: 음수
    // 3. absolutes 의 값들을 모두 더해서 리턴
    var answer = 0;
    
    for(let i = 0; i < absolutes.length; i++) {
        // false: 음수로 변경
        if(signs[i] === false) {
            absolutes[i] = absolutes[i] * -1;
        }
        answer = answer + absolutes[i];
    }
    return answer;
}

function solution(absolutes, signs) {
    // 절댓값 배열 absolutes, 부호를 담은 signs
    // true: 양수 false: 음수
    var answer = 0;
    
    // 반복문
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === true) {
            answer += absolutes[i];
        }else if(signs[i] === false) {
            answer += -absolutes[i];
        }
    }
    return answer;
}