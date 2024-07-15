/**
 * Day 3 - Control Structures
 * 
 * Feature Request: Day of the Week Script
 *  - Write a script that uses a switch case to determine the day of the week based on a number (1-7) and log the day name.
 */


// Declare a variable to store the day number
let dayNumber = 4;

// Print the day name based on the day number using a switch case
switch (dayNumber) {
    case 1: // If the day number is 1, then print "Monday"
        console.log("Monday");
        break;
    case 2: // If the day number is 2, then print "Tuesday"
        console.log("Tuesday");
        break;
    case 3: // If the day number is 3, then print "Wednesday"
        console.log("Wednesday");
        break;
    case 4: // If the day number is 4, then print "Thursday"
        console.log("Thursday");
        break;
    case 5: // If the day number is 5, then print "Friday"  
        console.log("Friday");
        break;
    case 6: // If the day number is 6, then print "Saturday"    
        console.log("Saturday");
        break;
    case 7: // If the day number is 7, then print "Sunday"  
        console.log("Sunday");
        break;
    default: // If the day number is not between 1 and 7
        console.log("Invalid day number. Please enter a number between 1 and 7.");
}