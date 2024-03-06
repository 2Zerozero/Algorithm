function solution(num) {
    // 정수 num 이 짝수: "Even", 홀수: "Odd"
    var answer = '';

    // 조건문
    if(num%2===0){
        answer = "Even"
    } else {
        answer = "Odd"
    }
    return answer;
}

