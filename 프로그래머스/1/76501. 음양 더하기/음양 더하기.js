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