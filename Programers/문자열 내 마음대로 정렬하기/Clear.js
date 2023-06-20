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

// 다른방법 코드

function solution(strings, n) {
    // n번째 글자를 기준으로 오름차순 정렬
    return strings.sort((prev, next) => {
        // 사전순으로 문자열을 정렬하는데, 사전순으로 밀린 문자열은 뒤로 위치하게한다.
        if(prev[n] < next[n]) {
            return -1
        }
        // 사전순으로 문자열을 정렬하는데, 사전순으로 앞선 문자열은 앞으로 위치하게한다.
        if(prev[n] > next[n]) {
            return 1;
        }
        // 문자열의 n번째 요소의 글자가 똑같다면, 문자열끼리 비교해서 위의 조건문과 똑같이 다시 실행한다.
        
        // if(prev[n] === next[n]) {
        //     return prev > next ? 1 : -1;
        // }
        
        // localeCompare() 메서드: 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환.
        return prev.localeCompare(next); 
    })
}

