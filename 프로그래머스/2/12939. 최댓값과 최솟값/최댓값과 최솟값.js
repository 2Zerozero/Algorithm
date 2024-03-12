function solution(s) {
    // 공백으로 구분된 숫자들이 저장
    // (최소값) (최대값) 으로 리턴
    let numbers = s.split(" ").map(num => parseInt(num));
    
    return Math.min(...numbers) + ' ' + Math.max(...numbers);
}