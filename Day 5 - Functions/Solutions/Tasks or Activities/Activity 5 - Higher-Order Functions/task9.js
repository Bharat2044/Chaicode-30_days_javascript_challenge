/**
 * Day 5 - Functions
 * 
 * Activity 5: Higher-Order Functions
 *  - Task 9: Function that calls another function multiple times.
 */


// Higher-order function
function callMultipleTimes(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

// Function to be called multiple times
function greet() {
  console.log("Hello, World!");
}

// Call the higher-order function
callMultipleTimes(greet, 5);
