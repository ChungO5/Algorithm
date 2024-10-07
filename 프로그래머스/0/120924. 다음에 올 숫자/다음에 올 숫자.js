function solution(common) {
    if (common[0] - common[1] === common[1] - common[2]) {
        return common.at(-1) + (common[1] - common[0])
    } else {
        return common.at(-1) * (common[1] / common[0]);
    }
}
