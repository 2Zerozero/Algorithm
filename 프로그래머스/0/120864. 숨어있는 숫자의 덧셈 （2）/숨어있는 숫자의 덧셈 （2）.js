function solution(my_string) {
    var answer = 0;
    
    // 문자열 안에 연속된 숫자들만 추출하여 더하기
    let currentNumber = ""; // 현재 발견한 연속된 숫자를 저장할 변수
    
    for (let i = 0; i < my_string.length; i++) {
        // 현재 문자가 숫자인지 확인
        if (!isNaN(parseInt(my_string[i]))) {
            // 숫자라면 currentNumber에 추가
            currentNumber += my_string[i];
        } else {
            // 숫자가 아닌 문자를 만나면 현재까지의 currentNumber를 더하고 초기화
            if (currentNumber !== "") {
                answer += parseInt(currentNumber);
                currentNumber = "";
            }
        }
    }
    
    // 마지막에 currentNumber가 비어있지 않다면, 마지막 숫자까지 더하기
    if (currentNumber !== "") {
        answer += parseInt(currentNumber);
    }
    
    return answer;
}