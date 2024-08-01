/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Feature Request: LocalStorage Script
 *  - Write a script that saves, retrieves, and removes items from `localStorage`, and displays the saved data on page load.
 */


// On page load, retrieve and display saved data from localStorage
window.onload = function() {
    displayData();
};

// Function to save data to localStorage
function saveData() {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    if (key && value) {
        localStorage.setItem(key, value);
        displayData();

        // Clear the input fields
        document.getElementById('key').value = '';
        document.getElementById('value').value = '';
    } else {
        alert('Please provide both key and value.');
    }
}

// Function to remove data from localStorage
function removeData() {
    const key = document.getElementById('keyToRemove').value;

    if (key) {
        localStorage.removeItem(key);
        displayData();

        // Clear the input field
        document.getElementById('keyToRemove').value = '';
    } else {
        alert('Please provide a key to remove.');
    }
}

// Function to display data from localStorage
function displayData() {
    const displayElement = document.getElementById('display');
    displayElement.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const listItem = document.createElement('li');
        
        listItem.textContent = `Key: ${key}, Value: ${value}`;
        displayElement.appendChild(listItem);
    }
}
