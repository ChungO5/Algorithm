function solution(array, height) {
    var answer = 0;
    answer = array.filter((i) => i > height).length
    return answer;
}