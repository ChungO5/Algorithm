function gcd(num1, num2){
    if (num2 === 0){
        return num1
    } else{
        return gcd(num2, num1%num2)
    }
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    numer = denom2 * numer1 + denom1 * numer2
    denom = denom1 * denom2
    
    answer.push(numer / gcd(numer, denom), denom / gcd(numer, denom))
    return answer;
}