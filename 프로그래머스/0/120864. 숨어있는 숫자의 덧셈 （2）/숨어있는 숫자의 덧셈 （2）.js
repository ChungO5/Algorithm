function solution(my_string) {
    let numbers = my_string.replaceAll(/[a-zA-Z]/g, ' ').split(' ').filter((a)=>a.length!==0)
    return numbers.reduce((a, b)=>a+Number(b),0);
}