/**
 * Day 11 - Promises and Async/Await
 *
 * Feature Request: Promise Chaining Script
 *  - Create a script that chains multiple promises and logs messages in a specific sequence.
 */


// Function returning a promise that resolves after a delay
function delayedPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Chaining promises
delayedPromise("Step 1 complete", 1000)
  .then((result) => {
    console.log(result);
    return delayedPromise("Step 2 complete", 1000);
  })
  .then((result) => {
    console.log(result);
    return delayedPromise("Step 3 complete", 1000);
  })
  .then((result) => {
    console.log(result);
    console.log("All steps complete");
  });
