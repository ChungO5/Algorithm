function solution(num_list) {
    var answer = [0, 0];
    for (i of num_list){
        if (i % 2 === 1){
            answer[1]++
        } else{
            answer[0]++
        }
    }
    return answer;
}