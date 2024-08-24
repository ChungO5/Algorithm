function solution(myString) {
    var answer = [];
    let list = myString.split('x')
    answer = list.map((a)=> {return a.length})
    return answer;
}