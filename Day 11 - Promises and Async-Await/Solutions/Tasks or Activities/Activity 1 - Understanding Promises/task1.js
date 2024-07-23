/**
 * Day 11 - Promises and Async/Await
 * 
 * Activity 1 - Understanding Promises
 *  - Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
 */


// Create a promise that resolves with a message after a 2-second timeout
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved after 2 seconds');
    }, 2000);
});

// Log the message to the console
promise.then((message) => {
    console.log(message);
});


// promise.then(console.log);

