/**
 * Day 3 - Control Structures
 * 
 * Feature Request: Grade Assignment Script
 *  - Create a script that uses a switch case to assign a grade based on a score and logs the grade.
 */


// Declare a variable to store the score
let score = 85;

// Assign a grade based on the score using a switch case
switch (true) {
    case score >= 90: // If the score is greater than or equal to 90
        console.log("Grade: A");
        break;
    case score >= 80: // If the score is greater than or equal to 80
        console.log("Grade: B");
        break;
    case score >= 70: // If the score is greater than or equal to 70
        console.log("Grade: C");
        break;
    case score >= 60: // If the score is greater than or equal to 60
        console.log("Grade: D");
        break;
    default: // If the score is less than 60
        console.log("Grade: F");
}