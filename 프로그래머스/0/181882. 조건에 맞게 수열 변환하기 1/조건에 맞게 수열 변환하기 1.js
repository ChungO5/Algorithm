function solution(arr) {
    var answer = arr.map((a) => {
        if (a % 2 === 0 && a >= 50){
            return a/2
        } else if (a < 50 && a % 2 === 1) {
            return a*2
        } else {
            return a
        }
    })
    return answer;
}