function solution(arr1, arr2) {
    var answer = [[]];
    
    for(let i = 0; i < arr1.length; i++) {
        // answer[i] 로 배열의 합을 저장.
        answer[i] = [];
        console.log(answer[i])
        for(let j = 0; j < arr1[i].length; j++) {
            // answer[0].push(arr1[1][2] + arr2[3][4])
            // answer[0] = [[4,6]]
            // answer[1] = [[7,9]
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    
    return answer;
}


// map 을 이용한 방법
function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}