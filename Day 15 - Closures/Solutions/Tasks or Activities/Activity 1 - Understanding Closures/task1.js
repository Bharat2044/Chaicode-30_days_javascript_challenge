/**
 * Day 15 - Closures
 *
 * Activity 1 - Understanding Closures
 *  - Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
 */


// Write a function that returns another function
function outerFunction() {
  // Declare a variable in the outer function
  const outerVar = "Hello";

  // Return a function that accesses the outer variable
  return function innerFunction() {
    console.log(outerVar);
  };
}

// Call the outer function and store the returned inner function in a variable
const func = outerFunction();

// Call the inner function
func(); // Output: "Hello"
