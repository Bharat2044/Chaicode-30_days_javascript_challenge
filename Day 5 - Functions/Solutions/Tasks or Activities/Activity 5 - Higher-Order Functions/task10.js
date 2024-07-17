/**
 * Day 5 - Functions
 *
 * Activity 5: Higher-Order Functions
 *  - Task 10: Apply two functions sequentially to a value.
 */


// Higher-order function
function applyFunctions(value, func1, func2) {
  return func2(func1(value));
}

// Functions to be applied
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

// Apply the functions
console.log(applyFunctions(5, double, square)); // 100
console.log(applyFunctions(10, square, double)); // 200
