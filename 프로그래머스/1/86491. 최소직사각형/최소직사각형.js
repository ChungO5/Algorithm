function solution(sizes) {
    sizes.map((a) => a.sort((a, b) => b - a));
    let x = sizes.map((a) => a[0]).sort((a, b) => b - a);
    let y = sizes.map((a) => a[1]).sort((a, b) => b - a);

    return x[0] * y[0];
}
