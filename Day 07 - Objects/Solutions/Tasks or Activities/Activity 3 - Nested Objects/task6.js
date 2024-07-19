/**
 * Day 7 - Objects
 *
 * Activity 3: Nested Objects
 *  - Task 6: Log the library's name and book titles.
 */


// creating book objects
let book1 = {
    title: "JavaScript",
    author: "Bharat",
    year: 2021
};

let book2 = {
    title: "Python",
    author: "Deepak",
    year: 2022
};

let book3 = {
    title: "Java",
    author: "Raju",
    year: 2023
};

// creating library object with name and books (array of book objects)
let library = {
    name: "Coding Library",
    books: [book1, book2, book3]
};

// printing the library object
console.log(library);

// Access and printing the library's name and book titles
console.log(`Library Name: ${library.name}`);

library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});