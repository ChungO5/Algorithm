function solution(array, n) {
    var answer = 0;
    answer = array.filter((i)=> i === n).length
    return answer;
}