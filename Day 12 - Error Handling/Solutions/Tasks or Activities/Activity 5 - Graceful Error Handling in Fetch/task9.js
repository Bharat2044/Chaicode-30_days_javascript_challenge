/**
 * Day 12 - Error Handling
 *
 * Activity 5 - Graceful Error Handling in Fetch
 *  - Task 9: Use the `fetch` API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
 */


// Function to fetch data from an invalid URL and handle the error using try-catch
async function fetchDataAsync() {
  try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Async fetch error:", error);
  }
}

// Call the async function
fetchDataAsync();
