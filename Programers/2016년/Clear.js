function solution(a, b) {
    // new Date 생성자, a: 월, b: 일
    let date = new Date(`2016-${a}-${b}`);
    
    // 요일
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    // getDay() 메서드, 주어진 날짜의 현지 시간 기준 요일을 반환.
    // getDay() 메서드는 해당 요일에 해당하는 숫자를 리턴한다.
    // week[date.getDay()] 로 하면, week[2] 로 리턴되기 때문에, 화요일이 리턴된다.
    return week[date.getDay()];
}