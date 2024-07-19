/**
 * Day 7 - Objects
 *
 * Feature Request: Book Object Script
 *  - Create a book object, add methods, and log properties and results.
 */


// creating a book object with properties like title, author, and year
let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
    bookDetails: function() {
        return `${this.title} - ${this.year}`;
    }
};

// printing the book object
console.log(book);

// printing book properties
console.log(book.title); // JavaScript
console.log(book.author); // Bharat
console.log(book.year); // 2021

// Access and printing the bookDetails method
console.log(book.bookDetails()); // JavaScript - 2021