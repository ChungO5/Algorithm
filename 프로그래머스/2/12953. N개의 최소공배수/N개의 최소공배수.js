function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(arr) {
    return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
