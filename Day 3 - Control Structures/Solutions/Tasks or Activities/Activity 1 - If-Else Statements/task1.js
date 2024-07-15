/**
 * Day 3 - Control Structures
 * 
 * Activity 1 - If-Else Statements
 *  - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
 */


// Declare a variable and assign a number to it
let num = -5;

// Check if the number is positive, negative, or zero
if (num > 0) {  // If the number is greater than 0
    console.log(`${num} is a positive number.`);
} else if (num < 0) { // If the number is less than 0
    console.log(`${num} is a negative number.`);
} else { // If the number is 0
    console.log(`${num} is zero.`);
}