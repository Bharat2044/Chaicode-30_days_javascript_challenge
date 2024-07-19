/**
 * Day 7 - Objects
 *
 * Activity 4: The this Keyword
 *  - Task 7: Add a method using `this` to return the book’s title and year. Log the result.
 */


let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
}

// adding a method using `this` to return the book's title and year
book.bookDetails = function() {
    return `${this.title} - ${this.year}`;
}

// printing the book object
console.log(book);

// Access and printing the bookDetails method
console.log(book.bookDetails()); // JavaScript - 2021