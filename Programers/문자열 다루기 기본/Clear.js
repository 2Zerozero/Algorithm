
// 실패코드
function solution(s) {
    // 1. string s = 1 ~ 8 의 문자열
    // 2. 문자열 s 의 length = 4 or 6 , 숫자로만 구성 인지 확인
    // 3. boolean type return
    // 문자열 s 의 길이 검사
    if(s.length === '4' || s.length === '6') {
        // 숫자로만 구성 됐는지 검사
        // Number 타입으로 바꾸고, NaN 인지 아닌지로 숫자를 판별해볼 생각.
        if(typeof(Number(s)) === 'number' && isNaN(Number(s)) === true) {
            return false;
        }else if(typeof(Number(s)) === 'number' && isNaN(Number(s)) === false) {
            return true;
        }
    }
}

// 성공코드
function solution(s) {
    // s.length: 4 or 6
    // Number type Check
    
    // Array.every: 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
    // every((element) => { ... } )
    // isNaN(): Not a Number 숫자가 아니라면,
    // !isNaN(): !Not a Number 숫자라면,
    
    if(s.length === 4 || s.length === 6) {
        // s의 요소를 판별
        // s의 모든 요소가 !isNaN: 숫자라면, true를 리턴
        return s.split("").every((e) => !isNaN(e))
    }else {
        return false;
    }
}

