/**
 * Day 5 - Functions
 * 
 * Feature Request: Higher-Order Function Script
 *  - Apply a function multiple times.
 */


// Higher-order function
function applyMultipleTimes(func, times) {
  for (let i = 1; i <= times; i++) {
    func();
  }
}

// Function to be called multiple times
function greet() {
  console.log("Hello, World!");
}

// Call the higher-order function
applyMultipleTimes(greet, 5);