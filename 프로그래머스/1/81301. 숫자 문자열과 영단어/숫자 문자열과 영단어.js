function solution(s) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i of numbers) {
        s = s.replaceAll(i, numbers.indexOf(i));
    }
    return Number(s);
}
