/**
 * Day 10 - Event Handling
 * 
 * Activity 1 - Basic Event Handling
 *  - Task 1: Add a click event listener to a button that changes the text content of a paragraph.
 */


const paragraphText = document.querySelector('#paragraphText');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    paragraphText.textContent = 'The text of paragraph has been changed!';
});