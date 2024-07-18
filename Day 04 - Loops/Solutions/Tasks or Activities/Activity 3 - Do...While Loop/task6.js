/**
 * Day 4 - Loops
 * 
 * Activity 3: Do...While Loop
 *  - Task 6: Write a program to calculate the factorial of a number using a do...while loop.
 */


let num = 5;
let factorial = 1;

let i = num;

do {
    factorial *= i;
    i--;
} while (i >= 1);

console.log(`Factorial of ${num}: ${factorial}`);