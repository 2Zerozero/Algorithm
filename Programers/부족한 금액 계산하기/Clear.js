function solution(price, money, count) {
    let answer = 0;
    let totalPrice = 0;
    // 총 금액을 구하기 위한 for문
    for (let i = 0; i <= count; i++) {
        totalPrice += price * i;
    }
    // 가지고 있는 금액과, 총 금액을 비교하기 위한 if문
    if(money > totalPrice) {
        answer = 0;
    }else if(money < totalPrice) {
        answer = totalPrice - money;
    }
    // 결과값 도출
    return answer;
}

function solution(price, money, count) {
    // 이용료: price, 가진돈: money, 곱하기: count
    // 금액이 부족하지 않으면 return 0
    // 부족하다면, 부족한 금액 ruturn
    let total = 0;
    
    // 결제 금액
    for(let i = 0; i <= count; i++) {
        total += price * i;
    }
    
    // 부족한 금액
    // 3항 연산자 total(총 금액)이 money(가진 돈) 보다 크다면 total - money, 아니라면 0 을 반환
    return total > money ? total-money : 0;
}