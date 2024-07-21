/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 5 - Event Handling
 *  - Task 10: Add a mouseover event listener to change an element's border color.
 */


// Select the body element
const body = document.querySelector('body');

// Add a mouseover event listener to the body
body.addEventListener('mouseover', (event) => {
  // Change the border color of the body element
  body.style.borderColor = 'red';
});