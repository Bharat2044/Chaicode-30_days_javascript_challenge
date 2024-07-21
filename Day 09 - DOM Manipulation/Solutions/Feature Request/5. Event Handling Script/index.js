/**
 * Day 9 - DOM Manipulation
 * 
 * Feature Request: Event Handling Script
 *  - Add event listeners to change content or style.
 */


// Select the button and paragraph elements
const button = document.querySelector('#btnElement');
const paragraph = document.querySelector('p');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Change the paragraph text
  paragraph.textContent = 'The paragraph text has been changed!';
  
  // Change the paragraph style
  paragraph.style.color = 'blue';
});