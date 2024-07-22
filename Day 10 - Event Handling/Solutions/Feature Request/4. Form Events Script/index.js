/**
 * Day 10 - Event Handling
 * 
 * Feature Request: Form Events Script
 *  - Create a script that handles form submission and change events on a select dropdown.
 */


// Get the form
const form = document.querySelector("#myForm");

// Get the select dropdown
const select = document.querySelector("#mySelect");

// Get the paragraph
const selectedValue = document.querySelector("#selectedValue");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  console.log('Form Submitted!');
});

// Add a change event listener to the select dropdown
select.addEventListener("change", () => {
  // Display the selected value in the paragraph
  selectedValue.textContent = `Selected Value: ${select.value}`;
});
