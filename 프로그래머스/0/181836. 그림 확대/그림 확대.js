function solution(picture, k) {
    var answer = [];
    for (let i of picture){
        str=''
        for (let j=0; j<i.length; j++){
            str += i[j].repeat(k)
        }
        answer = [...answer, ...Array(k).fill(str)]
    }
    return answer;
}