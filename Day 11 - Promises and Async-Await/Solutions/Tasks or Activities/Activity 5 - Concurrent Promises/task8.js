/**
 * Day 11 - Promises and Async/Await
 *
 * Activity 5 - Concurrent Promises
 *  - Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
 */


// Create an array of promises that resolve with a message after a timeout
const promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved after 2 seconds");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved after 1 second");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved after 3 seconds");
    }, 3000);
  }),
];

// Use `Promise.all` to wait for all promises to resolve
Promise.all(promises)
  .then((values) => {
    // Log the resolved values of all promises
    console.log(values);
  })
  .catch((error) => {
    // Log any errors that occur
    console.error(error);
  });
