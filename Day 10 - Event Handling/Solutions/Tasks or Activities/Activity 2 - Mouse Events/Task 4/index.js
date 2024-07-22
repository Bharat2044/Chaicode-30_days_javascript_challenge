/**
 * Day 10 - Event Handling
 * 
 * Activity 2 - Mouse Events
 *  - Task 4: Add a mouseout event listener to an element that resets its background color.
 */


const hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = 'yellow';
});

hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.backgroundColor = 'lightblue';
});
