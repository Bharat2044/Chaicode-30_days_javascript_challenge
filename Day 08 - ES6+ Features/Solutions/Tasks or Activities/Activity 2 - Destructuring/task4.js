/**
 * Day 8 - ES6+ Features
 * 
 * Activity 2 - Destructuring
 *  - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
 */



let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021
};

let { title, author } = book;

console.log(`Title: ${title}, Author: ${author}`); // Title: Title: JavaScript, Author: Bharat