function solution(food) {
    var answer = "";
    for (let i = 1; i < food.length; i++) {
        answer += `${i}`.repeat(food[i] / 2);
    }
    return answer + "0" + [...answer].reverse().join("");
}
