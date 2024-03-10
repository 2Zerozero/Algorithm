function solution(number) {
    // 3명의 수를 모두 더했을때 0이 되면 "삼총사"
    // 모든 경우의 수의 총합 = answer
    // 없을 경우 = 0;
    var answer = 0;
    
    for(let i = 0; i < number.length - 2; i++) {
        for(let j = i+1; j < number.length - 1; j++) {
            for(let k = j+1; k < number.length; k++) {
                if(number[i] + number[j] + number[k] === 0) {
                    answer ++;
                }
            }
        }
    }
    return answer;
}