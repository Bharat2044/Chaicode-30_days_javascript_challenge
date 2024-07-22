/**
 * Day 10 - Event Handling
 * 
 * Activity 2 - Mouse Events
 *  - Task 3: Add a mouseover event listener to an element that changes its background color.
 */


const hoverDiv = document.querySelector('#hoverDiv');

hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = 'yellow';
});