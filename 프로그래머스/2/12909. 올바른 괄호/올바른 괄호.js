function solution(s){
    var answer = true;
    let stack = [];
    
    // "()" 올바르게 괄호가 짝지어 져야 true
    // ex) "(())" "()()"
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(s[i]);
        }else if(stack.pop() === undefined) { // stack.pop() 이 실행되며 undefined 라면, 실행
            answer = false;
            break;
        }
    }
    
    // 스택에 남아있는 괄호가 없어야 올바른 괄호
    if (stack.length !== 0) {
        answer = false;
    }
    
    return answer;
}