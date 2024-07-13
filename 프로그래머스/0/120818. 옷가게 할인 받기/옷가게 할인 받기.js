function solution(price) {
    var answer = 0;
    if (price < 100000) {
        answer = price
    } else if (price < 300000){
        answer = Math.floor(price * 0.95)
    } else if (price < 500000){
        answer = Math.floor(price * 0.90)
    } else {
        answer = Math.floor(price * 0.80)
    }
    return answer;
}