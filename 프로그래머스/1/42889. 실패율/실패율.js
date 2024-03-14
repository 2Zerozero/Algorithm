function solution(N, stages) {
    // N : 스테이지의 개수
    // stages : 사용자가 머물러있는 스테이지 번호
    // 실패율 : 스테이지에 도달했으나 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담긴 배열 return
    
    // 스테이지 1 = stages.length
    // 스테이지 2 = stages.length 에서 스테이지 1을 넘기지 못한 사용자를 -
    
    let failureRates = [];
    
    // stage : 스테이지에 머무르는 인원 체크
    for(let i = 1; i <= N; i++) {
        // 스테이지에 도달한 플레이어 수
        let totalPlayers = stages.filter(stage => stage >= i).length;
        // 스테이지에 머무르는 플레이어 수
        let failPlayers = stages.filter(stage => stage === i).length;
        // 실패율 계산
        let failureRate = totalPlayers === 0 ? 0 : failPlayers / totalPlayers;
        // 스테이지별 실패율 대입
        failureRates.push({ stage: i, failureRate: failureRate })
    }
    
    // 실패율 내림차순 정렬
    failureRates.sort((a, b) => {
        if(a.failureRate === b.failureRate) {
            // 실패율이 같다면, 오름차순 정렬
            return a.stage - b.stage;
        }else {
            // 내림차순 정렬
            return b.failureRate - a.failureRate;
        }
    })
    
    return failureRates.map( item => item.stage) ;
}