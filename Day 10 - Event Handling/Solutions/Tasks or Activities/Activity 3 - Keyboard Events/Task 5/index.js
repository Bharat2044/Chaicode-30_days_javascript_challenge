/**
 * Day 10 - Event Handling
 * 
 * Activity 3 - Keyboard Events
 *  - Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
 */


// Get the input field
const inputField = document.querySelector('input');

// Add a keydown event listener to the input field
inputField.addEventListener('keydown', (event) => {
    // Log the key pressed to the console
    console.log('Key pressed:', event.key);
});