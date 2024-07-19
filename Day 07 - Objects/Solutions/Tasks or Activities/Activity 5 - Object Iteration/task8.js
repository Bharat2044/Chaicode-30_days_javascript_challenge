/**
 * Day 7 - Objects
 *
 * Activity 5: Object Iteration
 *  - Task 8: Use a `for...in` loop to log each property and its value.
 */


// creating book object with properties like title, author, and year
let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
};

// using a `for...in` loop to log each property and its value
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}


