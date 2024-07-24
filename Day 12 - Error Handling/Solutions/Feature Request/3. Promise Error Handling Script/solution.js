/**
 * Day 12 - Error Handling
 *
 * Feature Request: Promise Error Handling Script
 *  - Write a script that handles errors in promises using `.catch()` and try-catch within async functions.
 */


// Function that returns a promise that randomly resolves or rejects
function promiseExample() {
  return new Promise((resolve, reject) => {
    const random = Math.random();

    if (random < 0.5) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  });
}

// Call the function and handle the rejection using `.catch()`
promiseExample()
  .then((result) => console.log("Promise result:", result))
  .catch((error) => console.log("Promise error:", error));


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