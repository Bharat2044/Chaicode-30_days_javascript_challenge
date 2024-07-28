/**
 * Day 16 - Recursion
 * 
 * Activity 1 - Basic Recursion
 *  - Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
 */



/**
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
 * 
 * The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.
 * 
 * The sequence starts with 0 and 1. The next number in the sequence is found by adding the two numbers before it.
 * 0, 1, 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13, and so on.
 * 
 * Formula: fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
 */

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
    // Base case - if n is 0 or 1, return n
    if (n === 0 || n === 1) {
        return n;
    }

    // Recursive case - calculate the sum of the two preceding Fibonacci numbers (n - 1 and n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5