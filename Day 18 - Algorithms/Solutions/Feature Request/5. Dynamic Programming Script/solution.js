/**
 * Day 18 - Algorithms
 * 
 * Feature Request: Dynamic Programming Script
 *  - Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming.
 */


// Function to solve the Fibonacci sequence using dynamic programming
function fibonacci(n) {
    // Initialize an array to store the Fibonacci numbers
    let fib = Array(n + 1).fill(0);
    
    // Base cases
    fib[1] = 1;
    
    // Loop through the remaining numbers
    for (let i = 2; i <= n; i++) {
        // Calculate the Fibonacci number using the previous two numbers
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    // Return the nth Fibonacci number
    return fib[n];
}

// Define the position in the Fibonacci sequence
let n = 10;

// Call the fibonacci function to solve the Fibonacci sequence
let fibonacciNumber = fibonacci(n);

// Log the nth Fibonacci number
console.log(`Fibonacci Number at position ${n}:`, fibonacciNumber);


// Function to solve the knapsack problem using dynamic programming
function knapsack(weights, values, capacity) {
    // Get the number of items
    let n = weights.length;
    
    // Create a 2D array to store the maximum values
    let dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
    
    // Loop through the items
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            // Check if the current item can be included
            if (weights[i - 1] <= w) {
                // Calculate the maximum value by including or excluding the item
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                // If the item cannot be included, use the previous value
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    // Return the maximum value for the given capacity
    return dp[n][capacity];
}

// Define the weights and values of the items
let weights = [2, 3, 4, 5];
let values = [3, 4, 5, 6];

// Define the capacity of the knapsack
let capacity = 5;

// Call the knapsack function to solve the knapsack problem
let maxValue = knapsack(weights, values, capacity);

// Log the maximum value that can be achieved
console.log(`Maximum Value in Knapsack with Capacity ${capacity}:`, maxValue);

