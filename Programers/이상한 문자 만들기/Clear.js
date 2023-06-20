function solution(s) {
    // 짝수 번째 = 대문자 , 홀수 번째 = 소문자
    // 단어 별로 짝/홀수 인덱스 판단
    // 첫번째 글자는 0번째 인덱스로 짝수 처리
    let answer = ''; 
    // 문자열을 공백 기준으로 잘라서, 받아줄 변수가 필요하다.
    let newStr = s.split(' '); // slice를 사용하고 있어서, join 메서드가 계속 오류가 났었다.
    // console.log(newStr);
    // 자른 문자열을 임시로 받아줄 변수가 필요하다. (temporary) 의 줄임말로 temp 로 할당한다.
    let temp = '';
    // 자른 문자열의 인덱스를 알아봐야돼
    for (let i = 0; i < newStr.length; i++) {
        // 받아온 문자열이 빈 문자열이 아니라면,
        if(newStr[i].length > 0) {
            // temp 를 초기화한다.
            temp = '';
            for (let j = 0; j < newStr[i].length; j++) {
                // 문자의 인덱스 위치에 따라 대, 소문자 구분을 해줄것이다.
                if(j % 2 === 0) {
                    temp += newStr[i][j].toUpperCase();
                }else {
                    temp += newStr[i][j].toLowerCase();
                }
            }
            newStr[i] = temp; // 임시로 받은 문자열을, newStr로 할당한다. 
        }
    }
    answer = newStr.join(' ');
    return answer;
}

