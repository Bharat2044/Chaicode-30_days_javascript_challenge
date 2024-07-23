/**
 * Day 11 - Promises and Async/Await
 *
 * Feature Request: API Fetch Script
 *  - Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
 */


// Define the URL of the API
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Function to fetch data from an API using promises
function fetchDataPromise() {

  // Return a promise that fetches the data
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Fetch data using promises
fetchDataPromise()
  .then((data) => {
    console.log("Data fetched using promises:");
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


// Function to fetch data from an API using async/await
async function fetchDataAsync() {

  try {
    // Fetch data using async/await
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log("Data fetched using async/await:");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Fetch data using async/await
fetchDataAsync();
