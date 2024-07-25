/**
 * Day 13 - Modules
 * 
 * Feature Request: Third-Party Module Script
 *  - Write a script that installs, imports, and uses functions from third-party modules like `lodash` and `axios`.
 */

// Import the lodash module
const _ = require('lodash');

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call the sum function from lodash and log the result
let sum = _.sum(numbers);
console.log(`Sum of numbers: ${sum}`);


// Import the axios module
const axios = require('axios');

// Define the URL for the API
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request to the API
async function getPosts() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call the getPosts function
getPosts();

