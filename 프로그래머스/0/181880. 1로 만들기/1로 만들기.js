function solution(num_list) {
    var answer = 0;
    for (let i of num_list){
        while (i !== 1){
            i = Math.floor(i / 2)
            answer += 1
        }
    }
    return answer;
}