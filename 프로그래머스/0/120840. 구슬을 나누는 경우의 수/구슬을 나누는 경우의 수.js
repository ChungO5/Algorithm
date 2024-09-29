const factorial = (n) => {
    return n === 0 ? 1 : factorial(n-1)*n
}

function solution(balls, share) {
    return Math.round(factorial(balls)/factorial(share)/factorial(balls-share))
}