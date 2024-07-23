/**
 * Day 11 - Promises and Async/Await
 *
 * Activity 4 - Fetching Data from an API
 *  - Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
 */


// Define the URL of the API
const url = "https://jsonplaceholder.typicode.com/posts";

// Fetch data from the API using the `fetch` API
fetch(url)
  .then((response) => {
    // Check if the response is successful
    if (response.ok) {
      // Parse the response data as JSON
      return response.json();
    } else {
      // Handle the error by rejecting the promise
      return Promise.reject("Failed to fetch data from the API");
    }
  })
  .then((data) => {
    // Log the response data to the console
    console.log(data);
  })
  .catch((error) => {
    // Log the error message to the console
    // console.error('Error:', error);
    console.error(error);
  });
