/**
 * Day 15 - Closures
 * 
 * Activity 2 - Practical Closures
 *  - Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
 */


// Create a function that captures a user's name
function greetUser(name) {

  // Return a function that greets the user by name
  return function() {
    console.log(`Hello, ${name}!`); 
  };
}

// Call the function to capture the user's name
const greet = greetUser("Bharat");

// Call the function to greet the user
greet(); // Output: "Hello, Bharat!"