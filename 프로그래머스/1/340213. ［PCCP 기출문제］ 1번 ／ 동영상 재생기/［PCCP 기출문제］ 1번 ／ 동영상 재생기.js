function solution(video_len, pos, op_start, op_end, commands) {
    // video_len: 동영상 길이
    // pos: 기능이 실행되기 직전의 위치
    // op_start: 오프닝 시작 시간
    // op_end: 오프닝 끝나는 시간
    // commands: 사용자 입력을 나타냄 ex) 앞으로 이동, 뒤로 이동
    
    // 모든 값은 mm:ss 로 리턴
    
    // 1. 동영상 길이 확인
    // 2. 현재 동영상 시간 확인
    // 3. 명령 수행
    // 4. 계산된 시간을 mm:ss 로 바꿔서 리턴
    var answer = '';
    
    // 타임 오프셋으로 변환
    const [min, sec] = pos.split(":").map((e) => parseInt(e));
    let nowT = min * 60 + sec;
    const [opsMin, opsSec] = op_start.split(":").map((e) => parseInt(e));
    let opsT = opsMin * 60 + opsSec;
    const [opeMin, opeSec] = op_end.split(":").map((e) => parseInt(e));
    let opeT = opeMin * 60 + opeSec;
    const [videoMin, videoSec] = video_len.split(":").map((e) => parseInt(e));
    let videoT = videoMin * 60 + videoSec;
    
    commands.forEach(command => {
        // 비디오 start, end point 체크
        if(nowT < 0) nowT = 0;
        else if(nowT > videoT) nowT = videoT;
        // 오프닝 스킵
        if(opsT <= nowT && nowT <= opeT){
            nowT = opeT;
        }
        if(command === 'prev') nowT-=10;
        else if(command === 'next'){ nowT+=10 }
        // 비디오 start, end point 체크
        if(nowT < 0) nowT = 0;
        else if(nowT > videoT) nowT = videoT;
        // 오프닝 스킵
        if(opsT <= nowT && nowT <= opeT){
            nowT = opeT;
        }
        answer = 
        Math.floor(nowT / 60).toString().padStart(2,'0') +
        ":" +
        (nowT % 60).toString().padStart(2,'0')
    })
    
    return answer;
}