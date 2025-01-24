function solution(array, n) {
    
    var answer = array.filter((number) => number === n).length;
    return answer;
}