/**
 * Day 3 - Control Structures
 *
 * Activity 2 - Nested If-Else Statements
 *  - Task 3: Write a program to find the largest of three numbers using nested if-else statements.
 */


// Declare three variables and assign numbers to them
let num1 = 10;
let num2 = 20;
let num3 = 15;

// Check which number is the largest among the three numbers
if (num1 >= num2) { // If num1 is greater than or equal to num2
    if (num1 >= num3) { // If num1 is greater than or equal to num3
        console.log(`${num1} is the largest number.`);
    } else { // If num1 is less than num3
        console.log(`${num3} is the largest number.`);
    }
} else { // If num1 is less than num2
    if (num2 >= num3) { // If num2 is greater than or equal to num3
        console.log(`${num2} is the largest number.`);
    } else { // If num2 is less than num3
        console.log(`${num3} is the largest number.`);
    }
}