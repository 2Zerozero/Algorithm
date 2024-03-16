function solution(food) {
    // 음식은 일렬로 배치.
    // 양 선수는 서로 반대 방향의 음식을 먹기 시작하며, 중앙의 물을 먼저 마시는 선수가 승리
    // 공정성을 위해 음식의 종류, 양, 먹는 순서도 같아야한다.
    // 칼로리가 낮은 음식부터 배치
    var answer = '';
    
    // 가져온 음식을 2로 나누고 repeat() 메서드를 이용하여 먹을 순서를 정한다.
    for(let i = 0; i < food.length; i++) {
        answer += String(i).repeat(Math.floor(food[i] / 2));
    }
    
    // 서로 양쪽에서 같은 순서로 음식을 먹어야하기 때문에
    // 가운데 0(물)을 넣고 reverse() 메서드를 이용해 대칭을 만들어준다.
    return answer + "0" + [...answer].reverse().join("");
}