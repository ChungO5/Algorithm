function solution(a, b, c) {
    let set = new Set([a,b,c])
    if (set.size === 3) {
        return a + b + c
    } else if (set.size === 2){
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
    } else {
        return a**6 * 27
    }
}