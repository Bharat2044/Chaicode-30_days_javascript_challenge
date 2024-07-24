/**
 * Day 12 - Error Handling
 * 
 * Activity 1 - Basic Error Handling with Try-Catch
 *  - Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
 */


// Function that divides two numbers and throws an error if the denominator is zero
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Denominator cannot be zero.");
    }

    return a / b;
}

// Try-catch block to handle the error
try {
    let result = divideNumbers(10, 0);
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}

