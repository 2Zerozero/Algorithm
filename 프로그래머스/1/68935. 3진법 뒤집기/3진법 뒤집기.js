function solution(n) {
    // reverse() 메서드를 사용하기 위해서는 배열로 변환 후, 다시 문자열로 결합.
    // 3진법으로 바꿨기 때문에, parseInt 를 사용할 때도 3을 대입해줘야 한다.
    let temp = n.toString(3).split('').reverse().join('');
    let answer = parseInt(temp, 3);
    
    return answer;
}