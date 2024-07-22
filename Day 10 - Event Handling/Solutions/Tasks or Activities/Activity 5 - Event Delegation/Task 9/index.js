/**
 * Day 10 - Event Handling
 * 
 * Activity 5 - Event Delegation
 *  - Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
 */


// Get the list
const list = document.querySelector("#list");

// Add a click event listener to the list
list.addEventListener("click", (event) => {

  // Check if the clicked target is a list item
  if (event.target.tagName === "LI") {  // event.target.nodeName === 'LI'
    // Log the text content of the clicked list item
    console.log("Clicked Item Text:", event.target.textContent);
  }
});