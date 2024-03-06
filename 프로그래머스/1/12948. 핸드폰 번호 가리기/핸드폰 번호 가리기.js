function solution(phone_number) {
    // 핸드폰 전화번호 뒷 4자리를 제외한 모든 숫자 * 로 변경
    var answer = '';
    
    for(let i = 0; i < phone_number.length; i++) {
        if(i < phone_number.length - 4) {
            answer += "*";
        } else {
            answer += phone_number[i];
        }
    }
    
    return answer;
}

function solution(phone_number) {
    const leng = phone_number.length - 4;
    return "*".repeat(leng) + phone_number.substring(leng);
}