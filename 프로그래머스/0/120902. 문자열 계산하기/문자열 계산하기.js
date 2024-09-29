function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(' ')
    console.log(arr)
    answer += Number(arr[0])
    for (let i = 1; i < arr.length; i++){
        if (arr[i] === '+'){
            answer += Number(arr[i+1])
            i++
        } else {
            answer -= Number(arr[i+1])
            i++
        }
    }
    return answer;
}