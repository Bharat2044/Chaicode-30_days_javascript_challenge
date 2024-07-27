/**
 * Day 15 - Closures
 *
 * Activity 5 - Memoization
 *  - Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
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

// Example usage
function square(n) {
  console.log(`Computing square of ${n}`);
  return n * n;
}

// Memoize the square function
const memoizedSquare = memoize(square);

// Call the memoized function
console.log(memoizedSquare(5)); // Output: Computing square of 5, 25
