function solution(friends, gifts) {
    // 코드 작성
    // 1. 유저의 교환기록
    // 2. 유저의 선물 카운트 (선물 지수)
    // 3. 두 사람의 선물 교환 기록
    // 4. 다음달 선물 받은 사람
    let answer = 0;
    
    let frhash = {}; // friends 배열 hash 화
    friends.forEach((friend) => frhash[friend] = 0);
    
    // console.log(giver, reciever)
    // { muzi: 0, ryan: 0, frodo: 0, neo: 0 }
    
    let frinfr = {};
    friends.forEach((friend) => frinfr[friend] = Object.assign({}, frhash));
    
    // console.log(frinfr)
    // {
    //   muzi: { muzi: 0, ryan: 0, frodo: 0, neo: 0 },
    //   ryan: { muzi: 0, ryan: 0, frodo: 0, neo: 0 },
    //   frodo: { muzi: 0, ryan: 0, frodo: 0, neo: 0 },
    //   neo: { muzi: 0, ryan: 0, frodo: 0, neo: 0 }
    // }
    
    // gifts 전체 순회
    gifts.forEach((gift, index) => {
        // giver : 선물한 사람 , reciever : 선물 받은사람
        let [giver, reciever] = gift.split(" ");
        
        // console.log(giver, reciever)
        // muzi frodo
        // muzi frodo   
        // ryan muzi
        // ryan muzi
        // ryan muzi
        // frodo muzi
        // frodo ryan
        // neo muzi
        
        // 선물 교환 기록
        frinfr[giver][reciever]++;
        
        // 선물지수+
        frinfr[giver][giver]++;
        frinfr[reciever][reciever]--;
    })
    
    // frhash 순회 시작
    friends.forEach((one) => {
        // 체크중인 사람이 받을 선물 개수
        let counting = 0;
        friends.forEach((two) => { // 자기 자신에게 받은 선물을 확인하진 않음
            if (one != two) {
                let oneC = frinfr[one][two];
                let twoC = frinfr[two][one];
                
                if (oneC > twoC || (oneC == twoC && frinfr[one][one] > frinfr[two][two])) { // one이 선물을 받는 경우
                    counting++;
                }
            }
        })
        answer = Math.max(answer, counting);
    })
    return answer;
}

/*
    muzi: { muzi: 2, ryan: 0, frodo: 0, neo: 0 },
    ryan: { muzi: 0, ryan: 3, frodo: 0, neo: 0 },
    frodo: { muzi: 0, ryan: 0, frodo: -2, neo: 0 },
    neo: { muzi: 0, ryan: 0, frodo: 0, neo: 1 }
    
    첫 번째 루프
    
    외부 루프
    one = muzi
    
    내부 루프
    two = muzi : 동일하므로 스킵
    two = ryan
    
    oneC = frinfr["muzi"]["ryan"] = 0
    twoC = frinfr["ryan"]["muzi"] = 0
    
    frinfr["muzi"]["muzi"] = 2, frinfr["ryan"]["ryan"] = 3
    0 == 0 && 2 > 3는 거짓이므로 counting 증가 안함.
    
    two = "frodo"
    
    oneC = frinfr["muzi"]["frodo"] = 0
    twoC = frinfr["frodo"]["muzi"] = 0
    
    frinfr["muzi"]["muzi"] = 2, frinfr["frodo"]["frodo"] = -2
    0 == 0 && 2 > -2는 참이므로 counting++ -> counting = 1
    
    two = "neo"
    
    oneC = frinfr["muzi"]["neo"] = 0
    twoC = frinfr["neo"]["muzi"] = 0
    
    frinfr["muzi"]["muzi"] = 2, frinfr["neo"]["neo"] = 1
    0 == 0 && 2 > 1는 참이므로 counting++ -> counting = 2
*/