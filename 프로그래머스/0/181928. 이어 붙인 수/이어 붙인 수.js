function solution(num_list) {
    let odd = ''
    let even = ''
    for (let i of num_list){
        if(i % 2 === 0){
            even += i
        } else {
            odd += i
        }
    }
    return Number(odd) + Number(even);
}