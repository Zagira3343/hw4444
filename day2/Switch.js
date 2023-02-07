'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    let ans = 0;
    const A = ['a','e','u','i','o'];
    const B = ['b','c','d','f','g'];
    const C = ['h','j','k','l','m'];
    for(let i = 0;i<5;i++)
    {
        if(s[0] == A[i])
        ans = 1;
    }
    if(ans == 0)
    for(let i = 0;i<5;i++)
    {
        if(s[0] == B[i])
        ans = 2;
    }if(ans == 0)
    for(let i = 0;i<5;i++)
    {
        if(s[0] == C[i])
        ans = 3;
    }
    if(ans == 0)
    ans = 4;
    if(ans == 1)
    letter = 'A'
    if(ans == 2)
    letter = 'B'
    if(ans == 3)
    letter = 'C'
    if(ans == 4)
    letter = 'D'
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}