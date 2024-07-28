/**
 * Day 16 - Recursion
 * 
 * Activity 1 - Basic Recursion
 *  - Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
 */


// Function to calculate the factorial of a number
function factorial(n) {
    // Base case - if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case - calculate the factorial of n by multiplying n with the factorial
    return n * factorial(n - 1);
}

// Test cases
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120