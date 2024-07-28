/**
 * Day 16 - Recursion
 * 
 * Feature Request: Factorial and Fibonacci Script
 *  - Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
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

// Test cases for factorial
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120



// Function to calculate the nth Fibonacci number
function fibonacci(n) {
    // Base case - if n is 0 or 1, return n
    if (n === 0 || n === 1) {
        return n;
    }

    // Recursive case - calculate the sum of the two preceding Fibonacci numbers (n - 1 and n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases for Fibonacci
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8