// 테스트 3, 13만 통과한 실패코드
// function solution(n) {
//     let result = [];
//     let nums = String(n).split('').sort((a, b) => { return b - a });
    
//     for(let i = 0; i < nums.length; i++) {
//         result.push(parseInt(nums[i]))
//     }
    
//     return result
// }

function solution(n) {
    return String(n).split('').reverse().map( (e) => Number(e))
}