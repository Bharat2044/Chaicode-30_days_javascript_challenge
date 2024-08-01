/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 2 - Using LocalStorage
 *  - Task 4: Write a script to remove an item from `localStorage`. Log the `localStorage` content before and after removal.
 */


// Save a string value to `localStorage` for demonstration
localStorage.setItem('name', 'Bharat Kumar');

// Log the localStorage content before removal
console.log('Before removal:', localStorage);

// Remove an item from localStorage
localStorage.removeItem('name');

// Log the localStorage content after removal
console.log('After removal:', localStorage);