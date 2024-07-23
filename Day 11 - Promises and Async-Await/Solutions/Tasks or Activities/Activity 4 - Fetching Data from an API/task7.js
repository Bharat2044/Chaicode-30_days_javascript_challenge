/**
 * Day 11 - Promises and Async/Await
 * 
 * Activity 4 - Fetching Data from an API
 *  - Task 7: Use the `fetch` API to get data from a public API and log the response data to the console using async/await.
 */


// Define the URL of the API
const url = "https://jsonplaceholder.typicode.com/posts";

// Fetch data from the API using the `fetch` API and async/await
async function fetchData() {
    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is successful
        if (response.ok) {
            // Parse the response data as JSON
            const data = await response.json();
            console.log(data);
        } else {
            // Handle the error by throwing an error
            throw new Error("Failed to fetch data from the API");
        }
    } catch (error) {
        // Log the error message to the console
        // console.error('Error:', error);
        console.error(error.message);
    }
}

// Call the async function to fetch data from the API
fetchData();