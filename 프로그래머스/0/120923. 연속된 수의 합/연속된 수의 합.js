function solution(num, total) {
    let x = (total - (num ** 2 - num) / 2) / num;
    return [...Array(num).keys()].map((a) => a + x);
}
