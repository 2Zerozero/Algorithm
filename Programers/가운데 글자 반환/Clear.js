function solution(s) {
    // 단어 s의 가운데 글자를 반환, 단어의 길이가 짝수라면 가운데 두글자를 반환
    var answer = '';
    
    if(s.length % 2 === 0) {
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    }else {
        answer = s[Math.floor([s.length / 2])];
    }
    console.log(Math.floor([s.length / 2]));
    return answer;
}

// 조원분 코드
function solution(s) {
    var answer = '';

    if(s.length%2===0){
        answer= s.substring(s.length/2-1, s.length/2+1) 
    } else {
        answer= s.substring(s.length/2, s.length/2+1)
    }
    return answer;
}