function solution(a, b, c, d) {
    // 모두 같다 = p
    // 두 개씩 같다 = p, q => (p + q) x [p - q]
    // 세 개가 같다 = (10 x p + q)2
    // 양 주사위의 값이 1개는 같고 (p) 나머지는 다를때 = q x r
    // 모두 다르다 = 가장 작은 수 return
    var answer = 0;
    
    // 모두 같을 때
    if(a === b && a === c && a === d) return 1111 * a;
    
    // 두 개씩 같을 때
    if(a === b && c === d) return (a + c) * Math.abs(a - c);
    if(a === c && b === d) return (a + b) * Math.abs(a - b);
    if(a === d && b === c) return (a + b) * Math.abs(a - b);
    
    // 세 개는 같고 하나만 다를 때
    if(a === b && a === c && a !== d) return (10 * a + d) ** 2;
    if(a === c && a === d && a !== b) return (10 * a + b) ** 2;
    if(b === c && b === d && b !== a) return (10 * b + a) ** 2;
    if(c === d && c === a && c !== b) return (10 * c + b) ** 2;
    if(d === a && d === b && d !== c) return (10 * d + c) ** 2;
    
    // 두 개는 같고 나머지는 다를 때
    if(a === b && c !== d) return c * d;
    if(a === c && b !== d) return b * d;
    if(a === d && b !== c) return b * c;
    if(b === c && a !== d) return a * d;
    if(b === d && a !== c) return a * c;
    if(c === d && a !== b) return a * b;
    
    
    // 모두 다를 때
    return Math.min(a, b, c ,d);
}