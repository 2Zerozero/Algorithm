// 작동 순서
// solution 의 반복문 에서 const lcm 이 실행
// lcm 에서 gcd 에 (a, b) 변수를 대입하여 실행
// const gcd 에서 최대 공약수를 구하여 반환
// lcm 에서 (a, b) / gcd 에서 구해진 최대 공약수
// answer = (a, b) / gcd

const gcd = (a, b) => {
    if(b === 0){
        return a;
    }else if(a % b === 0){
        return b;
    }else{
        return gcd(b, a % b);
    };
};

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

function solution(arr){
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    };
    
    return answer;
};

// 손코딩

// 1. solution(arr) 함수 호출
//    - 초기값: answer = 1

// 2. arr의 각 요소에 대해 반복문 실행
//    - i = 0일 때:
//      - lcm(answer, arr[0]) 계산
//        - lcm(1, 2)
//          - (1 * 2) / gcd(1, 2)
//            - gcd(1, 2) = 1 (2와 1의 최대 공약수)
//          - (1 * 2) / 1 = 2
//        - answer = 2

//    - i = 1일 때:
//      - lcm(answer, arr[1]) 계산
//        - lcm(2, 6)
//          - (2 * 6) / gcd(2, 6)
//            - gcd(2, 6) = 2 (2와 6의 최대 공약수)
//          - (2 * 6) / 2 = 6
//        - answer = 6

//    - i = 2일 때:
//      - lcm(answer, arr[2]) 계산
//        - lcm(6, 8)
//          - (6 * 8) / gcd(6, 8)
//            - gcd(6, 8) = 2 (6과 8의 최대 공약수)
//          - (6 * 8) / 2 = 24
//        - answer = 24

//    - i = 3일 때:
//      - lcm(answer, arr[3]) 계산
//        - lcm(24, 14)
//          - (24 * 14) / gcd(24, 14)
//            - gcd(24, 14) = 2 (24와 14의 최대 공약수)
//          - (24 * 14) / 2 = 168
//        - answer = 168

// 3. 반복문 종료 및 최종 결과 반환
//    - 최종 answer = 168