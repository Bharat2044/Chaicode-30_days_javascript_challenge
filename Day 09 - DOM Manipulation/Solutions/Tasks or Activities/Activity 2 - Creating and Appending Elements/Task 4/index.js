/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 2 - Creating and Appending Elements
 *  - Task 3: Create a new `li` element and add it to an existing `ul`.
 */


// Create a new `li` element
const newLi = document.createElement('li');

// Add text to the new `li`
newLi.textContent = 'New List Item';

// Append the new `li` to the existing `ul`
document.querySelector('ul').appendChild(newLi);
