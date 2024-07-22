/**
 * Day 10 - Event Handling
 * 
 * Feature Request: Keyboard Events Script
 *  - Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
*/


// Get the input field
const inputField = document.querySelector("input");

// Get the paragraph
const keydownText = document.querySelector("#keydownText");
const keyupText = document.querySelector("#keyupText");

// Add a keydown event listener to the input field
inputField.addEventListener("keydown", (event) => {
  // Log the key press
  console.log(`Key Down: ${event.key}`);

  // Display the input field value in the paragraph
  keydownText.textContent = `Key Down: ${inputField.value}`;
});

// Add a keyup event listener to the input field
inputField.addEventListener("keyup", (event) => {
  // Log the key press
  console.log(`Key Up: ${event.key}`);

  // Display the input field value in the paragraph
  keyupText.textContent = `Key Up: ${inputField.value}`;
});