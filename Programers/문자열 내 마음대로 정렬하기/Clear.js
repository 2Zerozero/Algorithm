function solution(strings, n) {
    // 문자열 정렬
    // strings[n]번째의 문자열 기준으로 오름차순 정렬
    var answer = [];
    
    // 1. 문자열 가장 앞 글자를 붙인 배열 만들기
    for(let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i]
    }
    
    // 2. 해당 배열을 사전순으로 정렬(sort)
    strings.sort()
    
    // 3. 앞글자 제거 후 리턴
    for(let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j]);
    }
    return answer;
}

function solution(strings, n) {
    return strings.sort(function (prev, next) {
        if(prev[n] < next[n]) {
            // 사전순으로 문자열을 정렬하는데, 사전순으로 밀린 문자열은 뒤로 위치하게한다.
            return -1;
        }
        if(prev[n] > next[n]) {
            // 사전순으로 문자열을 정렬하는데, 사전순으로 앞선 문자열은 앞으로 위치하게한다.
            return 1;
        }
        if(prev[n] === next[n]) {
            // 문자열의 n번째 요소의 글자가 똑같다면, 문자열끼리 비교해서 위의 조건문과 똑같이 다시 실행한다.
            return prev > next ? 1 : -1;
        }
    })
}