/**
 * Day 3 - Control Structures
 *
 * Activity 5 - Combining Conditions
 *  - Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
 */


// Declare a variable and assign a year to it
let year = 2020;

// Check if the year is a leap year based on the conditions
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { // If the year is divisible by 4, but not by 100 unless also divisible by 400, then it is a leap year
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

