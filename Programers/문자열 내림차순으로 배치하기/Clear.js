function solution(s) {
    // 정렬기준: 큰것부터 작은순으로 (역순)
    // 대문자는 소문자보다 작은것으로 간주
    
    // 새로운 문자열을 리턴
    let words = s.split('').sort()
    
    // reverse(): 원본 배열의 순서를 뒤집는 역할
    words.reverse()
    
    return words.join('');
}

function solution(s) {
    // 코드 간소화
    return s.split('').sort().reverse().join('');
}