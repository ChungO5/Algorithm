function solution(polynomial) {
    if (polynomial === 'x') {
        return polynomial
    }
    let arr = polynomial.split(" + ");
    let [x, a] = [0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("x")) {
            let n = arr[i].slice(0, -1);
            if (n === "") {
                x++;
            } else {
                x += n * 1;
            }
        } else {
            a += arr[i] * 1;
        }
    }
    if (a === 0) return `${x}x`;
    if (x === 0) return `${a}`;
    if (x === 1){
        return a === 0 ? 'x' : `x + ${a}`
    } 
        
    return `${x}x + ${a}`;
}

