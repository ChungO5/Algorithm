function solution(myString) {
    var answer = '';
    for (i of myString) {
        if (i < 'l'){
            answer += 'l'
        } else {
            answer += i
        }
    }
    return answer;
}