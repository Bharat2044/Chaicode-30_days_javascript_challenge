/**
 * Day 7 - Objects
 *
 * Activity 5: Object Iteration
 *  - Task 9: Use `Object.keys` and `Object.values` to log all keys and values.
 */



// creating book object with properties like title, author, and year
let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
};

// using `Object.keys` to log all keys
console.log(Object.keys(book)); // [ 'title', 'author', 'year' ]

// using `Object.values` to log all values
console.log(Object.values(book)); // [ 'JavaScript', 'Bhara', 2021 ]