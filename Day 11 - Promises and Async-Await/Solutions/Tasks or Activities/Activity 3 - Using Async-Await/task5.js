/**
 * Day 11 - Promises and Async/Await
 *
 * Activity 3 - Using Async/Await
 *  - Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
 */


async function handleRejectedPromise() {

  // Create a promise that rejects after a 2-second timeout
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected after 2 seconds");
    }, 2000);
  });

  // Handle the rejected promise using try-catch
  try {
    const errorMessage = await promise;
    console.log(errorMessage);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
handleRejectedPromise();
