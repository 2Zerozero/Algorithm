function solution(sizes) {
    // 긴 길이 요소 중 "가장 긴 요소"
    // 짦은 길이 요소 중 "가장 긴 요소"
    
    // [ [ 60, 50 ], [ 30, 70 ], [ 60, 30 ], [ 80, 40 ] 
    // 60, 70, 70, 80
    // 50, 30, 30, 40
    // "가장 긴 요소" 두개 : 80, 50
    // 80 * 50 = 4000
    
    let long = [];
    let short = [];
    
    for(let i = 0; i < sizes.length; i++) {
        // 요소 중 큰 수, 작은 수 분리해서 새로운 배열
        if(sizes[i][0] > sizes[i][1]) {
            long.push(sizes[i][0])
            short.push(sizes[i][1])
        }else {
            long.push(sizes[i][1])
            short.push(sizes[i][0])
        }
    }
    
    // Math.max(long) 을 하면 NaN이 나오는 이유: long의 type은 object라서 전개구문(...)을 사용
    return Math.max(...long) * Math.max(...short)
}