const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    if (input[0] % 2 === 0){
        console.log(input[0],'is even')
    }else{
        console.log(input[0],'is odd')        
    }
});