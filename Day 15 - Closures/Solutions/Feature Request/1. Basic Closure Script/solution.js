/**
 * Day 15 - Closures
 *
 * Activity 1: Basic Closure Script
 *  - Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
 */


// Create a function that captures a variable
function outerFunction() {
  // Declare a variable to capture
  let message = "Hello, World!";

  // Return a function that accesses the captured variable
  return function () {
    console.log(message);
  };
}

// Call the function to create a closure
const innerFunction = outerFunction();

// Call the inner function to access the captured variable
innerFunction(); // Output: "Hello, World!"
