/**
 * Day 10 - Event Handling
 * 
 * Feature Request: Keyboard Events Script
 *  - Create a script that handles mouseover and mouseout events to change the background color of an element.
*/


// Get the element
const element = document.querySelector("#hoverDiv");

// Add a mouseover event listener to the element
element.addEventListener("mouseover", () => {
  // Change the background color of the element
  element.style.backgroundColor = "lightblue";
});

// Add a mouseout event listener to the element
element.addEventListener("mouseout", () => {
  // Change the background color of the element
  element.style.backgroundColor = "lightcoral";
});