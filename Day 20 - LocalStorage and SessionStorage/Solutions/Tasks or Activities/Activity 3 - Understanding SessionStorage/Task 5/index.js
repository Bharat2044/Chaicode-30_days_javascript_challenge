/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 3 - Understanding LocalStorage
 *  - Task 5: Write a script to save a string value to `sessionStorage` and retrieve it. Log the retrieved value.
 */


// Save a string value to `sessionStorage` for demonstration
sessionStorage.setItem('name', 'Bharat Kumar');

// Retrieve the saved value from `sessionStorage`
const name = sessionStorage.getItem('name');

// Log the retrieved value
console.log(name);  // Output: Bharat Kumar