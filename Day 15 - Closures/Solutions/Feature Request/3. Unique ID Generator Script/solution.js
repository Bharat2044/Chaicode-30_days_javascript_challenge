/**
 * Day 15 - Closures
 * 
 * Feature Request: Unique ID Generator Script
 *  - Write a script that generates unique IDs using a closure to keep track of the last generated ID.
 */


// Write a function that generates unique IDs
function idGenerator() {
  // Declare a variable to store the last generated ID
  let oldId = 0;

  // Return a function that generates unique IDs
  return function () {
    // Increment the last generated ID
    let newId = ++oldId;

    // Return the new ID
    return newId;
  };
}

// Call the function to create an ID generator
const generateId = idGenerator();

// Generate unique IDs
console.log(generateId()); // Output: 1

// Generate unique IDs
console.log(generateId()); // Output: 2

// Generate unique IDs
console.log(generateId()); // Output: 3