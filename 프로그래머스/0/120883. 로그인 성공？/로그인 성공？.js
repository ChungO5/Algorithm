function solution(id_pw, db) {
    let answer = ''
    for (let i of db) {
        if (JSON.stringify(id_pw)===JSON.stringify(i)){
            return 'login'
        } else if(id_pw[0] === i[0]) {
            answer = 'wrong pw'
            break
        } else {
            answer = 'fail'
        }
    }
    return answer
}