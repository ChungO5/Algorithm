function gcd(num1, num2){
    if (num2 === 0) {
        return num1
    } else {
        return gcd(num2, num1%num2)
    }
}

function solution(n) {
    var answer = n / gcd(n, 6);
    return answer;
}