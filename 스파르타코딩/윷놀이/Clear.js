// 문제 설명
// 우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서 배(0)와 등(1)이 나오는 숫자를 세어 도, 개, 걸, 윷, 모를 결정합니다. 
// 네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때 도(배 1개, 등 3개), 개(배 2개, 등 2개), 걸(배 3개, 등 1개), 윷(배 4개), 모(등 4개) 중 어떤 것인지를 결정하는 프로그램을 작성하세요.

// 입출력 예
// [0,1,0,1] : 개
// [1,1,1,0] : 도
// [0,0,1,1] : 개

// 지정 입력값
// [0,1,0,0] : 걸

// 기본 작성란
function solution(arr1){
	let answer= "";

    // 해결방안.
    // 배열의 요소가 0 이면 + , 1이면 - 로 카운팅
    let count = 0;

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] === 0) {
            count += 1;
        }else {
            count -= 1;
        }
    }

    if(count === -4) {
        answer = "모"
    }else if(count === -2) {
        answer = "도"
    }else if(count === 0) {
        answer = "개"
    }else if(count === 2) {
        answer = "걸"
    }else if(count === 4) {
        answer = "윷"
    }

	return answer;
}

let arr1=[0,1,0,0];
console.log(solution(arr1))

// 다른 방법

function solution2(arr2){
    const checkCount = arr2.filter( (e) => e === 1 ).length

    switch (checkCount) {
        case 1:
            return "도";
        case 2:
            return "개";
        case 3:
            return "걸";
        case 4:
            return "윷";
        default:
            return "모";
    }
}
let arr2=[0,0,0,0];
console.log(solution2(arr2))