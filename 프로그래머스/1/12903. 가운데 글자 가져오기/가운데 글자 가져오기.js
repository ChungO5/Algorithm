function solution(s) {
    let n = s.length 
    return n % 2 === 1 ? s.charAt(n/2) : s.slice((n-1)/2,(n+1)/2+1)
}