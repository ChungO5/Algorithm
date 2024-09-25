function solution(s) {
    var answer = 0;
    let arr = s.split(' ').reverse()
    for (let i = 0; i < arr.length; i++){
        if (arr[i]==='Z'){
            i += 1
        }  else {
            answer += Number(arr[i])
        }
    }
    return answer;
}