/**
 * Day 10 - Event Handling
 * 
 * Feature Request: Event Delegation Script
 *  - Write a script that demonstrates event delegation by handling events on dynamically added child elements.
 */


// Get the parent element
const parent = document.querySelector("#parent");

// Add an event listener to the parent element
parent.addEventListener('click', function(event) {
    if (event.target && event.target.matches('.childElement')) {
        console.log('Clicked child element:', event.target.textContent);
    }
});

// Example of adding a child element dynamically
const newChild = document.createElement('div');
newChild.className = 'childElement';
newChild.textContent = 'New Child';
document.getElementById('parent').appendChild(newChild);