function solution(nums) {
    // nums 요소 중 3개를 더 하여 소수를 만듦.
    // 소수가 되는 경우의 개수를 return
    
    // 소수: 자기자신과 1로만 나눠지는 수
    var answer = 0;
    
    // 반복문: 요소 3개를 더하기때문에, 3중 반복문으로.
    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}

const isPrime = (n) => {
    //Math.sqrt: 제곱근
    for(let i = 2; i <= Math.sqrt(n); i++) {
        // 소수는 자기 이외의 수로 나눠지면 아니기 때문에, false
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}