/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 5 - Event Handling
 *  - Task 9: Add a click event listener to a button to change paragraph text.
 */


// Select the button and paragraph elements
const button = document.querySelector('#btnElement');
const paragraph = document.querySelector('p');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Change the paragraph text
  paragraph.textContent = 'The paragraph text has been changed!';
});