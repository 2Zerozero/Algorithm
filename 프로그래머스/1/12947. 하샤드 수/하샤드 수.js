function solution(x) {
    let answer = true;
    let result = '';
    // 1+8 = 9 18은 9로 나누어 떨어지니 true
    // 2+9 = 11 29는 11로 나누어 떨이지지 않으니 false
    let stringX = String(x);
    let sumX = 0;
    // Stirng 타입으로 만들어서, 배열로 모든자리수의 합을 구할것이다.
    for(let i=0; i < stringX.length; i++) {
        result = result + stringX[i];
        sumX = sumX + Number(stringX[i]);
        if(Number(result) % Number(sumX) === 0) {
            answer = true;
        }else {
            answer = false;
        }
    }
    
    return answer;
}