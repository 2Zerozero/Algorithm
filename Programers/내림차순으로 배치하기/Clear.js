function solution(n) {
    // 내람차순으로 정렬하기
    var answer = '';
    
    let nums = String(n).split('').sort((a, b) => {return b - a}).map((e) => Number(e))
    
    for(let i = 0; i < nums.length; i++) {
        answer += String(nums[i]);
    }
    
    return Number(answer);
}

//코드 간결화
function solution(n) {
    let nums = String(n).split('').sort((a, b) => b - a).join('');
    return parseInt(nums)
}