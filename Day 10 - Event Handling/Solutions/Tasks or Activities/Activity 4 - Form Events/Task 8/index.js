/**
 * Day 10 - Event Handling
 * 
 * Activity 4 - Form Events
 *  - Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
 */


// Get the select dropdown
const select = document.querySelector("select");

// Get the paragraph
const paragraph = document.querySelector("p");

// Add a change event listener to the select dropdown
select.addEventListener("change", (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Display the selected value in the paragraph
  paragraph.textContent = `Selected Value: ${selectedValue}`;
});