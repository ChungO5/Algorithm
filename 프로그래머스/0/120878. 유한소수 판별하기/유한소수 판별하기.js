function gcd (a, b) {
    return b === 0 ? a : gcd(b, a%b)
}

function solution(a, b) {
    var answer = b / gcd(a, b);
    while (answer != 1) {
        if (answer % 2 === 0) {
            answer /= 2
        } else if (answer % 5 === 0) {
            answer /= 5
        } else {
            return 2
        }
    }
    return 1;
}