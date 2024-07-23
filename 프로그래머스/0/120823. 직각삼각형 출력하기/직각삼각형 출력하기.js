const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i=0; i < input[0]; i++){
        let star = '*'.repeat(i+1)
        console.log(star)
}
});

