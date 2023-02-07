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

function reverseString(s){
    let s1 = '';
    if(typeof s === "string"){
        for(let i = s.length- 1;i>=0;i--){
            s1 += s[i];
        }
        console.log(s1);
    }
    else{
       
        console.log('s.split is not a function');
        console.log(s);
    }
}



function main() {
    const s = eval(readLine());
    
    reverseString(s);
}