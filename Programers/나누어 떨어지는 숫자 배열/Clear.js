// 테스트 케이스 1,2,3,4,9,10,11,12,14,15,16 실패

function solution(arr, divisor) {
    // 입출력 예시 arr = [5, 9, 7, 10] divisor = 5 return [5, 10];
    // ([2, 36, 1, 3],1) return [1, 2, 3, 36]; 오름차순 정렬
    // ([3,2,6], 10) return [-1]; 나누어 떨어지지 않으면, -1
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            // 나누어 떨어진 수를 출력한다.
            answer.push(arr[i]); 
        }
        if(answer.length === 0) {
            // 나누어 떨어진 수가 없다면, 출력 [-1]
            return [-1];
        }
    }
    // 오름차순 정렬
    // 두 숫자의 차가 양수값이냐, 음수값이냐를 이용
    answer.sort(function(a,b) {
        return a - b;
    })
    
    return answer;
}

// 테스트 케이스 충족
function solution(arr, divisor) {
    // arr: 기본 배열
    // divisor: 나눌 숫자
    // arr 요소 중 divisor로 나누어지는 요소를 리턴
    var answer = [];
    
    // 배열을 순회할 반복문
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }

    return answer.length !== 0 ? answer.sort(function(a, b){return a - b}) : [-1]
}