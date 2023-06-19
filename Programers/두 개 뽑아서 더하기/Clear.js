function solution(numbers) {
    // 두 개의 수를 뽑아, 더해서 만들 수 있는 모든 수를 오름차순으로 담아 리턴
    // [2, 1, 3, 4, 1]  // [5, 0, 2, 7]
    // [2] 1+1          // [2] 0 + 2
    // [3] 1+2          // [5] 0 + 5
    // [4] 1+3          // [7] 0 + 7
    // [5] 1+4          // [9] 2 + 7
    // [6] 2+4          // [12] 5 + 7 
    // [7] 3+4
    
    // 배열 요소 2개를 더한 값을 리턴
    // 같은 값을 제거
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            // includes: 특정 값을 포함하고 있는지 확인하는 배열 메서드
            // answer 배열에, numbers[i] + numbers[j] 의 값이 없다면, push
            if(!answer.includes(numbers[i]+numbers[j])) {
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    
    // 정렬
    answer.sort((a, b) => (a - b));
    
    return answer;
}