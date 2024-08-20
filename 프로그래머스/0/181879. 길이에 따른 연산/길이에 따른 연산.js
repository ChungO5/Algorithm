function solution(num_list) {
    var answer = 0;
    if (num_list.length > 10) {
        answer = num_list.reduce((a,b)=> {return a+b}, 0)
    } else {
        answer = num_list.reduce((a,b)=> {return a*b}, 1)
    }
    return answer;
}