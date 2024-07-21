/**
 * Day 9 - DOM Manipulation
 * 
 * Feature Request: Text Content Manipulation Script
 *  - Change text content by ID.
 */


// Get the element with the ID of "elementId"
// const elementId = document.getElementById('elementId');
const elementId = document.querySelector('#elementId'); // This is another way to select an element by its ID

// Change the text content of the element
// elementId.innerHTML = 'Hi, Everyone!!'; // This will render the text as HTML
elementId.textContent = 'Hi, Everyone!!'; // This will render the text as plain text