//  자연수 뒤집어 더하기
// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "`5+4+3+2+1=15`" 라는 문자열을 리턴합니다.

//  제한 조건
// - N의 범위 : 100,000,000 이하의 자연수

// 입출력 예
//   n          result
// 12345        "5+4+3+2+1=15"
// 1532576      "6+7+5+2+3+5+1=29"

// JavaScript 답안 포맷
function solution(n){
    // 1. 자연수 n 을 문자열로 변환해, 자리 수 마다 하나의 요소로 변환
    // 2. 내림차순, 오름차순으로 정렬이 아니기때문에 reverse() 메서드를 사용
	let result = "";

    let nums = String(n).split('').reverse();
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        result += nums[i]
        sum += Number(nums[i])
        if(i !== nums.length-1) {
            result += "+"
        }
    }

	return result + "=" + sum;
}

console.log(solution(718253))