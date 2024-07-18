/**
 * Day 4 - Loops
 * 
 * Feature Request: Pattern Printing Script
 *  - Write a script that prints a pattern of stars using nested loops.
 */


let n = 5;

for (let row = 1; row <= n; row++) {
    let pattern = '';

    for (let col = 1; col <= row; col++) {
        pattern += '* ';
    }

    console.log(pattern);
}