function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1){
        return a**2 + b**2
    } else if ((a+b) % 2 === 1) {
        return (a + b) * 2
    } else {
        return a - b > 0 ? a - b : b - a
    }
}