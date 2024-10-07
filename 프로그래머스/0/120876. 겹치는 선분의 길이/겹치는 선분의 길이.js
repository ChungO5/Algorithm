function solution(lines) {
    let line = {};
    for (let i of lines) {
        for (let j of [...Array(i[1] - i[0] ).keys()].map((a) => a + i[0])) {
            if (line[j] === undefined) {
                line[j] = 1;
            } else if (line[j] === 2) {
                continue;
            } else {
                line[j]++;
            }
        }
    }
    return Object.values(line).filter((a) => a === 2).length;
}
