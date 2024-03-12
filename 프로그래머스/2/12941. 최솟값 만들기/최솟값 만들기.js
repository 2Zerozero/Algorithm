function solution(A,B){
    var answer = 0;
    
    // 최솟값 만들기
    // 두 배열의 수를 곱하여 만들수 있는 최솟값
    // 최솟값을 만드는 공식은 최솟값 * 최댓값 을 해주면된다.
    
    // 오름차순 정렬 / 내림차순 정렬로 맞추어준다.
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    
    return answer;
}