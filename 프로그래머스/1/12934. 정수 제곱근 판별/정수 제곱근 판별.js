function solution(n) {
    // 제곱근: Math.sqrt()
    var answer = 0;
    
    let nums = Math.sqrt(n);
    
    if(n % nums === 0) {
        answer = (nums + 1) * (nums + 1)
    }else {
        answer = -1
    }
    
    return answer
}