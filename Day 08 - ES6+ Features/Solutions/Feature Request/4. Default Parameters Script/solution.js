/**
 * Day 8 - ES6+ Features
 *
 * Feature Request: Default Parameters Script
 * - Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
 */


function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(3, 4)); // 12
console.log(multiply(3)); // 6
