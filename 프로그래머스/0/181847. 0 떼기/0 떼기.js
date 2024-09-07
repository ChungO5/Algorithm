function solution(n_str) {
    let index = n_str.split('').findIndex((a)=> a!=0)
    return n_str.slice(index)
}