/**
 * Day 7 - Objects
 * 
 * Feature Request: Object Iteration Script
 *  - Demonstrate iterating over an object's properties using `for...in` and `Object.keys`/`Object.values`.
 */


// creating book object with properties like title, author, and year
let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
};

// using `for...in` to iterate over all properties
console.log("Using for...in loop:");
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}


// using `Object.keys` to log all keys
console.log("\nUsing Object.keys:");
let keys = Object.keys(book);

keys.forEach(key => {
    console.log(`${key}: ${book[key]}`);
});


// using `Object.values` to log all values
console.log("\nUsing Object.values:");
let values = Object.values(book);

values.forEach(value => {
    console.log(value);
});