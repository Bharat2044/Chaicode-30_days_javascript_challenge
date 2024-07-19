/**
 * Day 7 - Objects
 *
 * Activity 2: Object Methods
 *  - Task 4: Add a method to update the book's year and log the updated object.
 */

let book = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021,
    updateYear: function (newYear) {
        this.year = newYear;
    },
};

// printing the book object
console.log(book);

// updating the year property
book.updateYear(2022);

// printing the updated book object
console.log(book);