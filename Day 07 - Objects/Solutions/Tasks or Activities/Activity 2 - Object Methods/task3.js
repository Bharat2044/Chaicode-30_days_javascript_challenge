/**
 * Day 7 - Objects
 *
 * Activity 2: Object Methods
 *  - Task 3: Add a method to return a string with the book's title and author. Log the result.
 */


let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
    bookDetails: function() { // method to return a string with the book's title and author
        return `${this.title} by ${this.author}`;
    }
}

// printing the book object
console.log(book);

// Access and printing the bookDetails method
console.log(book.bookDetails()); // JavaScript by Bharat