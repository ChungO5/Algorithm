function solution(array) {
    var answer = 0;
    answer = array.sort((a, b) => a-b)[(array.length-1)/2]
    return answer;
}