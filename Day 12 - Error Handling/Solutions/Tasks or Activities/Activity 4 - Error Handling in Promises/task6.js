/**
 * Day 12 - Error Handling
 *
 * Activity 4 - Error Handling in Promises
 *  - Task 6: Create a promise that randomly resolves or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.
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
promiseExample().catch((error) => console.log("Promise error:", error));


/*
// Function that returns a promise that randomly resolves or rejects
function promiseExample() {
  const promise = new Promise((resolve, reject) => {
    const random = Math.random();

    if (random < 0.5) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  });

  // Handle the rejection using `.catch()` method
  promise.catch((error) => console.log("Promise error:", error));
}

// Call the function
promiseExample();
*/