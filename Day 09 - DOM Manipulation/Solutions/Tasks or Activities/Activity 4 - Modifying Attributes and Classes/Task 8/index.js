/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 4 - Modifying Attributes and Classes
 *  - Task 8: Add and remove a CSS class to/from an element.
 */


// Select the element to add and remove the class from
const element = document.querySelector('.classElement');

// Add a CSS class to the element
element.classList.add('newClass');

// Remove the CSS class from the element
element.classList.remove('oldClass');