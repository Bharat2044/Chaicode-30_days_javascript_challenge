/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Feature Request: Storage Comparison Script
 *  - Write a script that saves data to both `localStorage` and `sessionStorage`, retrieves the data, and compares the results.
 */


// Save data to `localStorage`
localStorage.setItem('name', 'Bharat Kumar');

// Save data to `sessionStorage`
sessionStorage.setItem('name', 'Bharat Kumar');

// Retrieve data from `localStorage`
const localStorageData = localStorage.getItem('name');

// Retrieve data from `sessionStorage`
const sessionStorageData = sessionStorage.getItem('name');

// Compare the retrieved data
if (localStorageData === sessionStorageData) {
    console.log('Data retrieved from localStorage and sessionStorage is the same.');
} else {
    console.log('Data retrieved from localStorage and sessionStorage is different.');
}
