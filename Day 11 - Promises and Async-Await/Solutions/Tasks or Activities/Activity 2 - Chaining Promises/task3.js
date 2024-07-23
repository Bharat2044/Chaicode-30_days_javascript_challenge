/**
 * Day 11 - Promises and Async/Await
 *
 * Activity 2 - Chaining Promises
 *  - Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
 */


// async function fetchData() {
//   const data = await Promise.resolve("Data fetched!");
//   console.log(data);
// }

// fetchData();


// Create a sequence of promises that simulate fetching data from a server
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

// Chain the promises to log messages in a specific order
fetchData()
  .then((data) => {
    console.log(data);
    return fetchData();
  })
  .then((data) => {
    console.log(data);
    return fetchData();
  })
  .then((data) => {
    console.log(data);
  });