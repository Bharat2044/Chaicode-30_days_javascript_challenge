/**
 * Day 11 - Promises and Async/Await
 *
 * Activity 1 - Understanding Promises
 *  - Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
 */


// Create a promise that rejects with an error message after a 2-second timeout
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

// Handle the error using `.catch()`
// promise.catch((error) => {
//   console.error(error);
// });


// promise.catch(console.error);