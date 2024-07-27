/**
 * Day 15 - Closures
 * 
 * Feature Request: Loop Closure Script
 *  - Create a script that demonstrates closures in loops to ensure functions log the correct index.
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
