function solution(arr, queries) {
    for (let i of queries) {
        let a = arr[i[0]];
        let b = arr[i[1]]
        arr[i[0]] = b
        arr[i[1]] = a
    }
    return arr;
}