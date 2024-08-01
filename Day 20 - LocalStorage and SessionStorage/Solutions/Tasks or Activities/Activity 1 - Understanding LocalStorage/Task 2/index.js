/**
 * Day 20 - LocalStorage and SessionStorage
 * 
 * Activity 1 - Understanding LocalStorage
 *  - Task 2: Write a script to save an object to `localStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.
 */


// Save an object to `localStorage` by converting it to a JSON string
const user = {
    name: 'Bharat Kumar',
    email: 'bharat@gmail.com',
    age: 22
};

// Convert the object to a JSON string and save it to `localStorage`
localStorage.setItem('user', JSON.stringify(user));

// Retrieve the saved object from `localStorage`
const retrievedSavedUser = localStorage.getItem('user');

// Parse the retrieved JSON string to an object
const savedUser = JSON.parse(retrievedSavedUser);

// Log the parsed object
console.log(savedUser);  // Output: { name: 'Bharat Kumar', email: 'bharat@gmail.com', age: 22 }