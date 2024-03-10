function solution(t, p) {
    // 작거나 같은
    // t = "3141592" p= "271" 길이가 3인 부분 문자열로 비교
    var answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let temp = t.slice(i, i + p.length);
        if(temp <= p) {
            answer ++;
        }
    }
    
    return answer;
}