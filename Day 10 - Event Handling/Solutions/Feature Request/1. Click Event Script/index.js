/**
 * Day 10 - Event Handling
 *
 * Feature Request: Keyboard Events Script
 *  - Write a script that adds a click event listener to a button to change the text content of a paragraph.
 */


// Get the button
const button = document.querySelector("button");

// Get the paragraph
const paragraph = document.querySelector("p");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Change the text content of the paragraph
  paragraph.textContent = "The text of paragraph has been changed!";
});
