/**
 * Day 12 - Error Handling
 * 
 * Activity 1 - Basic Error Handling with Try-Catch
 *  - Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 
 */


// Function that throws an error
function throwError() {
    throw new Error('An error has occurred');
}

// Try-catch block to handle the error
try {
    throwError();
} catch (error) {
    console.log(error.message);
}

