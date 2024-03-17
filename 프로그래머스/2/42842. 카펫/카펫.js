function solution(brown, yellow) {
    // 완전탐색
    var answer = [];
    let sum = brown + yellow;
    
    // 이미지 예시를 보아도 높이는 최소 3부터 시작
    for(let height = 3; height <= brown; height++) {
        // 블록의 총합을 높이로 나눴을때 맞아 떨어진다면
        if(sum % height === 0) {
            let width = sum / height;
            
            if((height - 2) * (width - 2) === yellow) {
                answer = [width, height]
                break;
            }
        }
    }
    return answer;
}