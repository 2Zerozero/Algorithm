function solution(n)
{
    // 자연수 n 의 자리수의 합을 구하기
    var answer = 0
    
    let sum = String(n).split('');
    
    for(let i = 0; i < sum.length; i++) {
        answer += Number(sum[i])
    }
    

    return answer
}
