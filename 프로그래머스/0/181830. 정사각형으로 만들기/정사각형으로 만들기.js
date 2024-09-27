function solution(arr) {
    var answer = [[]];
    let n = arr.length
    for (let i of arr){
        if (n < i.length){
            n = i.length
        }
    }
    answer = Array.from(Array(n), () => new Array(n).fill(0))
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            answer[i][j] = arr[i][j]
        }
    }
    return answer;
}