/**
 * Day 11 - Promises and Async/Await
 * 
 * Feature Request: Async-Await Script
 *  - Write a script that uses async/await to handle promises and includes error handling with try-catch.
 */


// Function returning a promise that resolves after a delay
function delayedPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Async function using await to handle promises
async function runAsyncTasks() {
  try {
    // Await each promise to resolve before proceeding
    const result1 = await delayedPromise("Step 1 complete", 1000);
    console.log(result1);

    const result2 = await delayedPromise("Step 2 complete", 1000);
    console.log(result2);

    const result3 = await delayedPromise("Step 3 complete", 1000);
    console.log(result3);

    console.log("All steps complete");
  } catch (error) {
    console.error(error);
  }
}

// Call the async function to run the tasks
runAsyncTasks();
