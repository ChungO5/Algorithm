function solution(dots) {
    let x = dots.map(([a,b])=>a).sort((a,b)=>a-b)
    let y = dots.map(([a,b])=>b).sort((a,b)=>a-b)
    return (x[3]-x[0])*(y[3]-y[0]);
}