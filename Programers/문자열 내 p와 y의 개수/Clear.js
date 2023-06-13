function solution(s){
    var answer = true;
    
    // 대,소문자가 섞인 문자열 s
    // s에 "p"의 개수와 "y"의 개수 비교
    // 같으면 true, 틀리면 false
    let lowercase = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    // 1. 반복문으로 s의 길이만큼 반복.
    // 2. 조건문으로, p와 y를 검열
    // 3. 개수가 같으면 true, 다르면 false
    for (let i = 0; i < lowercase.length; i++) {
        if(lowercase[i] === "p") pCount ++;
        if(lowercase[i] === "y") yCount ++;
        if(pCount === yCount) {
            answer = true;
        } else {
            answer = false;
        }
    } 
    return answer;
}