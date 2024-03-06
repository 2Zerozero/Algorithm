function solution(n)
{
    var answer = 0
    
    let sum = String(n).split('');
    
    for(let i = 0; i < sum.length; i++) {
        answer += Number(sum[i])
    }
    

    return answer
}
