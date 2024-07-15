/**
 * Day 3 - Control Structures
 * 
 * Feature Request: Leap Year Check Script
 *  - Write a script that checks if a year is a leap year using multiple conditions and logs the result.
 */


// Declare a variable to store the year
let year = 2020;

// Check if the year is divisible by 4
if (year % 4 === 0) {
    // If divisible by 4, check if it is also divisible by 100
    if (year % 100 === 0) {
        // If divisible by 100, check if it is also divisible by 400
        if (year % 400 === 0) {
            // If divisible by 400, it is a leap year
            console.log(`${year} is a leap year.`);
        } else {
            // If not divisible by 400, it is not a leap year
            console.log(`${year} is not a leap year.`);
        }
    } else {
        // If not divisible by 100 but divisible by 4, it is a leap year
        console.log(`${year} is a leap year.`);
    }
} else {
    // If not divisible by 4, it is not a leap year
    console.log(`${year} is not a leap year.`);
}
