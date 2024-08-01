/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 5 - Comparing LocalStorage and SessionStorage
 *  - Task 10: Write a function that clears all data from both `localStorage` and `sessionStorage`. Verify that both storages are empty.
 */


// Function to clear all data from both `localStorage` and `sessionStorage`
function clearAllDataFromStroages() {
    // Clear all data from localStorage
    localStorage.clear();

    // Clear all data from sessionStorage
    sessionStorage.clear();

    // Verify that both storages are empty
    console.log(`LocalStorage: ${localStorage.length}`);
    console.log(`SessionStorage: ${sessionStorage.length}`);
}

// Clear all data from both `localStorage` and `sessionStorage`
clearAllDataFromStroages();  // Output: LocalStorage: 0, SessionStorage: 0
