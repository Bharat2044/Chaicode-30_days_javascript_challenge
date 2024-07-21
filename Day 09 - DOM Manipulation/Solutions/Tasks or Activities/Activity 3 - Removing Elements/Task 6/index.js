/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 3 - Removing Elements
 *  - Task 6: Remove the last child of a specific HTML element.
 */


// Select the element to remove the last child from
const ul = document.querySelector('ul');

// Remove the last child of the selected element
ul.removeChild(ul.lastElementChild);