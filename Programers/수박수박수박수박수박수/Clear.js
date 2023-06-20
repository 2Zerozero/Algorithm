// 실패 이유 : n 은 배열이 아닌, 자연수 였다.
function solution(n) {
    // 패턴 반복
    var answer = '';
    
    for(let i = 0; i < n.length; i++) {
        if(i % 2 === 1) {
            answer += "수";
        }else {
            answer += "박";
        }
    }
    
    return answer;
}

// 성공 코드
function solution(n) {
    // 패턴 반복
    var answer = '';
    
    for(let i = 0; i < n; i++) {
        if(i % 2 === 1) {
            answer += "박";
        }else {
            answer += "수";
        }
    }
    
    return answer;
}

