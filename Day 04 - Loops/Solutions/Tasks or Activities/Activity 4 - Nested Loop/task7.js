/**
 * Day 4 - Loops
 * 
 * Activity 4: Nested Loop
 *  - Task 7: Write a program to print a pattern using nested for loops:
 *          *
 *          * *
 *          * * *
 *          * * * *
 *          * * * * *
 */


let n = 5;

for (let row = 1; row <= n; row++) {
    let pattern = '';

    for (let col = 1; col <= row; col++) {
        pattern += '* ';
    }
    
    console.log(pattern);
}
