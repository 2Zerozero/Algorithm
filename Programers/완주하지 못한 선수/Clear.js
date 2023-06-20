function solution(participant, completion) {
    // participant : 참가명단
    // completion : 완주자
    
    // 해설: 참가명단에서 완주자를 제거하면, 완주하지 못한 선수의 명단이 남는다.
    let result = '';
    
    // 두 매개변수를 sort()로 정렬해서 비교해나간다.
    let p = participant.sort()
    let c = completion.sort()
    
    for(let i = 0; p.length; i++) {
        if(p[i] !== c[i]) {
            return p[i];
        }
    }
    
    return result;
}