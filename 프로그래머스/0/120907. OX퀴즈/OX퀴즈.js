function operations(p) {
    let [X, operator, Y, equal, Z] = p.split(' ')
    switch (operator) {
        case '+': return X*1+Y*1 == Z ? 'O':'X'
        case '-': return X*1-Y*1 == Z ? 'O':'X'
    }
}

function solution(quiz) {
    var answer = [];
    for (let i of quiz) {
        answer.push(operations(i))
    }
    return answer;
}