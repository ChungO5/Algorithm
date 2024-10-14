function solution(s, n) {
    var answer = '';
    for (let i of s) {
        let char = i.charCodeAt() + n;
        if (i === ' ') {
            answer += i;
        } else if (i <= 'Z') {   
            if (char > 90) {
                char -= 26
            } 
            answer += String.fromCharCode(char)
        } else {
            if (char > 122) {
                answer += String.fromCharCode(char - 26);
            } else {
                answer += String.fromCharCode(char);
            }
        }
    }
    return answer;
}


