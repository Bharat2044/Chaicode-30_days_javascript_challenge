/**
 * Day 12 - Error Handling
 * 
 * Activity 4 - Error Handling in Promises
 *  - Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
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

// Async function that handles errors using try-catch
async function handlePromiseError() {
    try {
        const result = await promiseExample();
        console.log("Promise result:", result);
    } catch (error) {
        console.log("Promise error:", error);
    }
}

// Call the async function to handle the promise error
handlePromiseError();