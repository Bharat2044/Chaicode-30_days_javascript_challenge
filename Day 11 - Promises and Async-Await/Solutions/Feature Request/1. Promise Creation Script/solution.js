/**
 * Day 11 - Promises and Async/Await
 *
 * Feature Request: Promise Creation Script
 *  - Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
 */


// Function that returns a promise
function createPromise(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected with an error.");
      }
    }, 2000);
  });
}

// Handling resolved promise
createPromise(true)
  .then((result) => {
    console.log(result); // Log resolved value
  })
  .catch((error) => {
    console.error(error); // Log error if rejected
  });

// Handling rejected promise
createPromise(false)
  .then((result) => {
    console.log(result); // Log resolved value
  })
  .catch((error) => {
    console.error(error); // Log error if rejected
  });
