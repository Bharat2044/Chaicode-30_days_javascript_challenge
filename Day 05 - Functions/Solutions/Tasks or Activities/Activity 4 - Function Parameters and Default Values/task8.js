/**
 * Day 5 - Functions
 *
 * Activity 4: Function Parameters and Default Values
 *  - Task 8: Greeting message with name and age.
 */


// Function with default value
function greet(name, age = 21) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Bharat"));   // Hello, Bharat! You are 21 years old.
