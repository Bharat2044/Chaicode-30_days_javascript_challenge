/**
 * Day 7 - Objects
 *
 * Activity 3: Nested Objects
 *  - Task 5: Create a library object with name and books (array of book objects). Log it to the console.
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

