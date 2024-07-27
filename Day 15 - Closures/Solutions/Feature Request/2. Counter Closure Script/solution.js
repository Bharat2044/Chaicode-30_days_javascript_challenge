/**
 * Day 15 - Closures
 * 
 * Feature Request: Counter Closure Script
 *  - Create a script that uses a closure to maintain a private counter with increment and get functions.
 */


// Create a function that maintains a private counter
function counterClosure() {
  // Declare a variable to store the counter
  let count = 0;

  // Return an object with methods to increment and get the counter
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
}

// Call the function to create a counter closure
const counter = counterClosure();

// Increment the counter
counter.increment();

// Increment the counter
counter.increment();

// Get the counter value
console.log(counter.getCount()); // Output: 2