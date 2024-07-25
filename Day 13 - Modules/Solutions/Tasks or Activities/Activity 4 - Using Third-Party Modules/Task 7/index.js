/**
 * Day 13 - Modules
 *
 * Activity 4 - Using Third-Party Modules
 *  - Task 7: Install a third-party module (e.g., `axios`) using npm. Import and use this module to make a network request in a script.
 */

/**
 * Create package.json file:
 *  - npm init -y
 * Install axios library:
 *  - npm install axios
 */


// Import the axios module
const axios = require("axios");

// Define the URL for the API request
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Make a GET request to the API
async function fetchData() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchData function
fetchData();

  