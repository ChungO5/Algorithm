function solution(babbling) {
    var answer = 0;
    let word = ['aya', 'ye', 'woo', 'ma'];

    for (let i of babbling) {
        for (let j of word) {
            i = i.replace(j, '0');
        }
        if (/^0+$/.test(i)){
            answer++
        }
    }
    return answer;
}
