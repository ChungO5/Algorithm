function solution(x) {
    let n = String(x).split('').reduce((a, b) => a + b*1, 0)
    return x % n === 0 ? true : false
}