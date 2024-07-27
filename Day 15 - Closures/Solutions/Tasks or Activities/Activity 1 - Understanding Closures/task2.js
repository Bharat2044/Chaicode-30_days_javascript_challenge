/**
 * Day 15 - Closures
 * 
 * Activity 1 - Understanding Closures
 *  - Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
 */


// Create a function that returns an object with two methods: increment and get.
function createCounter() {
  // Declare a variable to store the counter
  let count = 0;

  // Return an object with two methods
  return {
    // Method to increment the counter
    increment: function() {
      count++;
    },
    // Method to get the current value of the counter
    getCount: function() {
      return count;
    }
  };
}

// Call the function to create a counter object
const counter = createCounter();

// Increment the counter
counter.increment();

// Log the current value of the counter
console.log(counter.getCount()); // Output: 1