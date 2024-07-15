function solution(my_string) {
    var answer = 0;
    for (let i=0; i < my_string.length; i++){
        if (Number(my_string[i]) in [0, 1,2,3,4,5,6,7,8,9]){
            answer += Number(my_string[i])
        }
    }
    return answer;
}