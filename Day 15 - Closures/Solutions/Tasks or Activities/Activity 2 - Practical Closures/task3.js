/**
 * Day 15 - Closures
 *
 * Activity 2 - Practical Closures
 *  - Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
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
