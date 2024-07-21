/**
 * Day 9 - DOM Manipulation
 * 
 * Feature Request: Element Creation Script
 *  - Create and append a `div`.
 */


// Create a new `div` element
const newDiv = document.createElement('div');

// Add text to the new `div`
newDiv.textContent = 'This is a new div element';

// Append the new `div` to the body
document.body.appendChild(newDiv);