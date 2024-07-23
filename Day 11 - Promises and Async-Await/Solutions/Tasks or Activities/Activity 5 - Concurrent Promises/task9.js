/**
 * Day 11 - Promises and Async/Await
 *
 * Activity 5 - Concurrent Promises
 *  - Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
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


// Use Promise.race to get the first resolved promise
Promise.race(promises)
  .then((value) => {
    // Log the value of the first resolved promise
    console.log(value);
  })
  .catch((error) => {
    // Log any errors that occur
    console.error(error);
  });
