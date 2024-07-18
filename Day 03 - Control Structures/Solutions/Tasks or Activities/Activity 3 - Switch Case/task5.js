/**
 * Day 3 - Control Structures
 *
 * Activity 3 - Switch Case
 *  - Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
 */


// Declare a variable to store the score
let score = 65;

// print a grade based on the score using a switch case
switch (true) {
    case score >= 90: // If the score is greater than or equal to 90, then print grade 'A'
        console.log("Grade: A");
        break;
    case score >= 80: // If the score is greater than or equal to 80, then print grade 'B'
        console.log("Grade: B");
        break;
    case score >= 70: // If the score is greater than or equal to 70, then print grade 'C'
        console.log("Grade: C");
        break;
    case score >= 60: // If the score is greater than or equal to 60, then print grade 'D'
        console.log("Grade: D");
        break;
    default: // If the score is less than 60, then print grade 'F'
        console.log("Grade: F");
}