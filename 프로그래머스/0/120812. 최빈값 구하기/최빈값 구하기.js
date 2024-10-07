function solution(array) {
    if (array.length === 1) return array[0];
    let count = {};
    for (let i of array) {
        if (count[i] === undefined) {
            count[i] = 1;
        } else {
            count[i]++;
        }
    }
    let arr = Object.values(count).sort((a, b) => b - a);
    if (arr[0] === arr[1]) {
        return -1;
    }

    return Object.keys(count).find((keys) => count[keys] === arr[0]) * 1;
}
