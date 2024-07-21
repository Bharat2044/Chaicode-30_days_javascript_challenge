/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 2 - Creating and Appending Elements
 *  - Task 3: Create a new `div` with text and append it to the body.
 */


// Create a new `div` element
const newDiv = document.createElement('div');

// Add text to the new `div`
newDiv.textContent = 'This is a new div element';

// Append the new `div` to the body
document.body.appendChild(newDiv);