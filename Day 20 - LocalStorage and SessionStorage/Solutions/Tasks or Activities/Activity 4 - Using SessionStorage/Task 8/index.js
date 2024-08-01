/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 4 - Using SessionStorage
 *  - Task 8: Write a script to remove an item from `sessionStorage`. Log the `sessionStorage` content before and after removal.
 */


// Save a string value to `sessionStorage` for demonstration
sessionStorage.setItem('name', 'Bharat Kumar');

// Log the sessionStorage content before removal
console.log('Before removal:', sessionStorage);

// Remove an item from sessionStorage
sessionStorage.removeItem('name');

// Log the sessionStorage content after removal
console.log('After removal:', sessionStorage);

