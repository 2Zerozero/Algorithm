// 유클리드 호제법
// 2개의 자연수(또는 정식) n, m에 대해서 n를 m로 나눈 나머지를 r이라 하면(단, n > m), n와 m의 최대공약수는 m와 r의 최대공약수와 같다.

function findGcd(n, m) {
    const remainder = n % m;
    if(remainder === 0) {
        return m;
    }
    return findGcd(m, remainder);
}

function solution(n, m) {
    let answer = [];
    let gcd = findGcd(n, m);
    let lcm = (n * m) / gcd;
    answer.push(gcd);
    answer.push(lcm);
    return answer;
}