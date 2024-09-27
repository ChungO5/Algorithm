function solution(arr, k) {
    var answer = [];
    for (let i of arr) {
        if (!answer.includes(i)) {
            answer.push(i);
        }
    }
    
    if (answer.length > k) {
        return answer.slice(0, k);
    } else {
        answer = [...answer, ...new Array(k - answer.length).fill(-1)];
    }
    return answer;
}
