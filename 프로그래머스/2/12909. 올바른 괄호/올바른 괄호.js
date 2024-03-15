function solution(s){
    var answer = true;
    let stack = [];
    
    // "()" 올바르게 괄호가 짝지어 져야 true
    // ex) "(())" "()()"
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(s[i]);
        }else {
            // 스택이 비어있는 경우
            let poppedElement = stack.pop(); // 스택에서 요소를 제거하고 반환
            if (poppedElement === undefined) {
                // pop 연산이 undefined를 반환하면 스택이 비어있는 경우임
                answer = false;
                break;
            }
        }
    }
    
    // 스택에 남아있는 괄호가 없어야 올바른 괄호
    if (stack.length !== 0) {
        answer = false;
    }
    
    return answer;
}