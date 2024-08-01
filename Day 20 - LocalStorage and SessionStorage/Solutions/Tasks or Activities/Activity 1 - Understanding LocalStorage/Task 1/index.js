/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 1 - Understanding LocalStorage
 *  - Task 1: Write a script to save a string value to `localStorage` and retrieve it. Log the retrieved value.
 */


// Save a string value to `localStorage`
localStorage.setItem('name', 'Bharat Kumar');

// Retrieve the saved value from `localStorage`
const name = localStorage.getItem('name');

// Log the retrieved value
console.log(name);  // Output: Bharat Kumar