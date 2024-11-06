function solution(n) {
    let [a, b] = [1, 1]
    if (n === 2) return 1
    for (let i = 2; i < n; i++){
        [a, b] = [b % 1234567, (a+b) % 1234567]
    }
    return b;
}