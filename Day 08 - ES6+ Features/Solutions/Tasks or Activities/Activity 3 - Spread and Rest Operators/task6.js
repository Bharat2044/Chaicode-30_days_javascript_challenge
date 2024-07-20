/**
 * Day 8 - ES6+ Features
 *
 * Activity 3 - Spread and Rest Operators
 *  - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
 */


function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
