function solution(a, b) {
    return xSum(a,b) > a*b*2 ? xSum(a,b) : a*b*2
}

function xSum(a, b){
    return Number(String(a)+String(b))
}