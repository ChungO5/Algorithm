function solution(arr, idx) {
    var answer = arr.slice(idx).findIndex((i)=> {return i === 1})
    return answer === -1 ? answer : answer + idx;
}