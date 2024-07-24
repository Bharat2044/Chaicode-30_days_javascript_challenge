/**
 * Day 12 - Error Handling
 *
 * Activity 5 - Graceful Error Handling in Fetch
 *  - Task 8: Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.
 */


// Function to fetch data from an invalid URL and handle the error using `.catch()`
function fetchDataInvalidURL() {
  fetch("https://invalid-url.com")
    .then((response) => response.json())
    .catch((error) => console.log("Fetch error:", error));
}

fetchDataInvalidURL();
