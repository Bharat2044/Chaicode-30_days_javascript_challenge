/**
 * Day 11 - Promises and Async/Await
 *
 * Feature Request: Concurrent Promises Script
 *  - Write a script that uses `Promise.all` and `Promise.race` to handle multiple promises concurrently and logs the results.
 */


// Function returning a promise that resolves after a delay
function delayedPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Create an array of promises that resolve with a message after a timeout
const promises = [
  delayedPromise("Promise 1 resolved after 2 seconds", 2000),
  delayedPromise("Promise 2 resolved after 1 second", 1000),
  delayedPromise("Promise 3 resolved after 3 seconds", 3000),
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

// Use `Promise.race` to get the first resolved promise
Promise.race(promises)
  .then((value) => {
    // Log the value of the first resolved promise
    console.log(value);
  })
  .catch((error) => {
    // Log any errors that occur
    console.error(error);
  });
