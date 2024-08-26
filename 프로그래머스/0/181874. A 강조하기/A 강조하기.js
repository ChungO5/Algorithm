function solution(myString) {
    var answer = '';
    for (let i of myString.toLowerCase()){
        if (i === 'a'){
            answer += 'A'
        } else{
            answer += i
        }
    }
    return answer;
}