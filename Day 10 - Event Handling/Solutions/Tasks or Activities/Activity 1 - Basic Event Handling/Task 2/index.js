/**
 * Day 10 - Event Handling
 * 
 * Activity 1 - Basic Event Handling
 *  - Task 2: Add a double-click event listener to an image that toggles its visibility.
 */


const toggleImage = document.getElementById('toggleImage');

toggleImage.addEventListener('dblclick', () => {
    toggleImage.style.display = 'none';
});