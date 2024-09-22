function solution(strArr) {
    var answer = 0;
    for (let i = 1; i <= 30; i++){
        let count = strArr.filter((a)=> a.length === i).length
        answer = answer > count ? answer : count
    }
    return answer;
}