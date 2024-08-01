/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 5 - Comparing LocalStorage and SessionStorage
 *  - Task 9: Write a function that accepts a key and a value, and saves the value to both `localStorage` and `sessionStorage`. Retrieve and log the values from both storage mechanisms.
 */


// Function to save a value to both `localStorage` and `sessionStorage`  
function saveToBothStorages(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);

    // Save to sessionStorage
    sessionStorage.setItem(key, value);

    // Retrieve from localStorage
    const localStorageValue = localStorage.getItem(key);

    // Retrieve from sessionStorage
    const sessionStorageValue = sessionStorage.getItem(key);

    // Log the values from both storages
    console.log(`LocalStorage: ${localStorageValue}`);
    console.log(`SessionStorage: ${sessionStorageValue}`);
}

// Save a value to both `localStorage` and `sessionStorage`
saveToBothStorages('name', 'Bharat Kumar');

