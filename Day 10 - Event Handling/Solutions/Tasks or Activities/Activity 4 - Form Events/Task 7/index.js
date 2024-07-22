/**
 * Day 10 - Event Handling
 *
 * Activity 4 - Form Events
 *  - Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
 */

// Get the form
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Log the form data to the console
  // console.log("Form Data:", formData);

  // Loop through the form data and log each entry
  formData.forEach((value, key) => {
    console.log(key + ": " + value); // Log each form data entry
  });
});
