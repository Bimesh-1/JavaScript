/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/
const library = [
  { title: "How to be happy", author: "Oviya Upreti", yearPublished: 2020 },
  { title: "How not to be happy", author: "AD", yearPublished: 2020 },
];
// Your code here
/* const library = {
  book1: {
    title: "The Alchemist",
    author: "Paulo Cohero",
    yearPublished: 1988,
  },
  book2: {
    title: "How to be Happy",
    author: "Oviya Upreti",
    yearPublished: 2020,
  },
};

*/
console.log(library);

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
/* 
console.log(Object.keys(library.book1)[0]);
console.log(Object.values(library.book1)[0]);
*/
console.log(library.title);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
/*
library.book1.genre = "fiction";
library.book2.genre = "reality";
console.log(library.book1);
console.log(library.book2);
*/

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
