function solution(numbers) {
    // numbers 에 없는 0 ~ 9 사이의 자연수를 모두 더함
    var answer = 0;
    
    // 반복문
    for(let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}