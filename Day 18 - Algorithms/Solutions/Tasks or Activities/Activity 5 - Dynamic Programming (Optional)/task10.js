/**
 * Day 18 - Algorithms
 * 
 * Activity 5 - Dynamic Programming (Optional)
 *  - Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
 */


// Function to solve the Fibonacci sequence using dynamic programming
function fibonacci(n) {
    // Initialize an array to store the Fibonacci numbers
    let fib = [0, 1];
    
    // Loop through the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        // Calculate the next Fibonacci number
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    // Return the Fibonacci numbers
    return fib;
}

// Define the number of Fibonacci numbers to generate
let n = 10;

// Call the fibonacci function to solve the Fibonacci sequence
let fibNumbers = fibonacci(n);

// Log the Fibonacci numbers
console.log(`Fibonacci numbers up to ${n}:`, fibNumbers);