/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Feature Request: SessionStorage Script
 *  - Create a script that saves, retrieves, and removes items from `sessionStorage`, and displays the saved data on page load.
 */


// On page load, retrieve and display saved data from sessionStorage
window.onload = function() {
    displayData();
};

// Function to save data to sessionStorage
function saveData() {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    if (key && value) {
        sessionStorage.setItem(key, value);
        displayData();

        // Clear the input fields
        document.getElementById('key').value = '';
        document.getElementById('value').value = '';
    } else {
        alert('Please provide both key and value.');
    }
}

// Function to remove data from sessionStorage
function removeData() {
    const key = document.getElementById('keyToRemove').value;

    if (key) {
        sessionStorage.removeItem(key);
        displayData();

        // Clear the input field
        document.getElementById('keyToRemove').value = '';
    } else {
        alert('Please provide a key to remove.');
    }
}

// Function to display data from sessionStorage
function displayData() {
    const displayElement = document.getElementById('display');
    displayElement.innerHTML = '';

    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        const listItem = document.createElement('li');
        
        listItem.textContent = `Key: ${key}, Value: ${value}`;
        displayElement.appendChild(listItem);
    }
}