/**
 * Day 12 - Error Handling
 * 
 * Feature Request: Fetch Error Handling Script
 *  - Create a script that handles errors when using the `fetch` API to request data from invalid URLs.
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