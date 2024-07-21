/**
 * Day 9 - DOM Manipulation
 * 
 * Activity 1 - Selecting and Manipulating Elements
 *  - Task 2: Select an HTML element by its class and change its background color.
 */


// Get the element with the ID of "classElement1"
const classElement1 = document.getElementsByClassName('classElement1');

classElement1[0].style.backgroundColor = 'red'; // Change the background color of the element
classElement1[1].style.backgroundColor = 'blue'; // Change the background color of the element


// // Get the element with the ID of "classElement2" -> This will return an HTMLCollection of elements with the class name "classElement1"
const classElement2 = document.querySelector('.classElement2');
classElement2.style.backgroundColor = 'yellow'; // Change the background color of the element
