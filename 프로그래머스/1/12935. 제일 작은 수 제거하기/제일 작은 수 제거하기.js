function solution(arr) {
    if (arr.length === 1) return [-1]
    let answer = [...arr]
    let min = arr.sort((a, b) => a - b)[0]
    return answer.filter((a) => a !== min)
}