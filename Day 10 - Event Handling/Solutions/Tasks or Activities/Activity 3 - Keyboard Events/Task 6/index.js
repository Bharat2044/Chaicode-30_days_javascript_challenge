/**
 * Day 10 - Event Handling
 * 
 * Activity 3 - Keyboard Events
 *  - Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
 */


// Get the input field
const inputField = document.querySelector('input');

// Get the paragraph
const output = document.querySelector('p');

// Add a keyup event listener to the input field
inputField.addEventListener('keyup', () => {
    // Display the current value in the paragraph
    output.textContent = inputField.value;
});