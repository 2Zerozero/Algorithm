function solution(d, budget) {
    // d = 부서별 지원물품 가격
    // budget = 예산
    // 예산으로 가장 많은 부서에 지원할 수 있는 경우의 수
    let sortD = d.sort((a, b) => a - b); // [1, 2, 3, 4, 5];
    
    // arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
    // 배열.reduce(callback(누적값, 현재값, 인덱스, 요소), 초기값);
    while((sortD.reduce((a, b) => (a + b), 0) > budget)) {
        sortD.pop();
    }

    
    return sortD.length;
}