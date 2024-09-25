const n = Number(require('fs').readFileSync('/dev/stdin'));

for(let i = 1; i<=n; i++){
    console.log("*".repeat(i));
}