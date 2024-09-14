function solution(arr) {
    if (arr.length === 1){
        return arr
    }
    
    var answer = [];
    let a = 2;
    while (a < arr.length){
        a *= 2
    }
    answer = [...arr, ...Array(a - arr.length).fill(0)]
    return answer;
}