/**
 * Day 15 - Closures
 *
 * Activity 3 - Closures in Loops
 *  - Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
 */


// Create an array to store functions
function createFunctionArray() {
  const functions = [];

  // Loop to create functions
  for (let i = 0; i < 5; i++) {
    // Create a function that logs the index
    functions.push(((index) => {
        // Return the function
        return function () {
          console.log(index);
        };
      })(i)); // Pass the index to the function
  }

  return functions;
}

// Call the function to create an array of functions
const functionArray = createFunctionArray();

// Call each function in the array
functionArray.forEach((func) => func());
