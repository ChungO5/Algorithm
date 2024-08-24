function solution(num_str) {
    var answer = num_str.split('')
    return answer.reduce((a,b) => {return Number(a)+Number(b)}, 0)
}