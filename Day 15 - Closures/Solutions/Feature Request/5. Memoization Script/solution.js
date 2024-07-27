/**
 * Day 15 - Closures
 *
 * Feature Request: Memoization Script
 *  - Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
 */


// Write a function that memoizes the results of another function
function memoize(func) {
  // Declare a cache to store the results of previous computations
  const cache = {};

  // Return a function that memoizes the results
  return function (arg) {
    // Check if the result is already cached
    if (cache[arg] === undefined) {
      // Compute the result and store it in the cache
      cache[arg] = func(arg);
    }

    // Return the cached result
    return cache[arg];
  };
}

// Write a function that calculates the factorial of a number
function factorial(n) {
  // Declare a variable to store the
  let fact = 1;

  // Loop to calculate the factorial
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  // Return the factorial
  return fact;
}

// Memoize the factorial function
const memoizedFactorial = memoize(factorial);

// Call the memoized function
console.log(memoizedFactorial(5)); // Output: 120
