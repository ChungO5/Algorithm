function solution(my_string) {
    var answer = my_string.trim().replace(/ +/g, ' ').split(' ');
    return answer;
}