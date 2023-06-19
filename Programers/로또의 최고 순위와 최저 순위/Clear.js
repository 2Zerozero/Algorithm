function solution(lottos, win_nums) {
    // 구매번호: lottos
    // 당첨번호: win_nums
    // answer: 당첨가능한 최고 순위, 최저 순위
    
    // 0 에는 모든 경우의 숫자가 들어갈 수 있다.
    let max_count = 0;
    let min_count = 0;
    var answer = [];
    
    // 카운트 체크
    for(let i = 0; i < lottos.length; i++) {
        if(win_nums.includes(lottos[i])) {
            max_count += 1;
            min_count += 1;
        }else if(lottos[i] === 0) {
            max_count += 1;
        }
    }
    
    // 조건문
    if(max_count === 6) {
        answer.push(1);
    }else if(max_count === 5) {
        answer.push(2);
    }else if(max_count === 4) {
        answer.push(3);
    }else if(max_count === 3) {
        answer.push(4);
    }else if(max_count === 2) {
        answer.push(5);
    }else if(max_count < 2) {
        answer.push(6);
    }
    
    if(min_count === 6) {
        answer.push(1);
    }else if(min_count === 5) {
        answer.push(2);
    }else if(min_count === 4) {
        answer.push(3);
    }else if(min_count === 3) {
        answer.push(4);
    }else if(min_count === 2) {
        answer.push(5);
    }else if(min_count < 2) {
        answer.push(6);
    }
    
    return answer;
}