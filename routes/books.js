const express = require("express");
const { books } = require('../data/books.json');
const { users } = require('../data/users.json');
const { getAllBooks, getSingleBookById, getAllIssuedBooks, AddNewBook, updateBookById, getSingleBookByName } = require("../controller/book-controller");


const router = express.Router();

/** 
 * Route: /books
 * Method: GET,
 * Description: Get all books
 * Access: Public
 * Parameters: none
*/
router.get('/', getAllBooks);

/** 
 * Route: /books/:id
 * Method: GET,
 * Description: Get single books by id
 * Access: Public
 * Parameters: id
*/

router.get('/:id', getSingleBookById);

router.get('/get-book/name/:name', getSingleBookByName);


/** 
 * Route: /books/issued/by-user
 * Method: GET,
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
*/

router.get('/issued/by-user', getAllIssuedBooks);

/** 
 * Route: /books
 * Method: POST,
 * Description: Create new Book
 * Access: Public
 * Parameters: none
 * Data: author, name, genre, price, publisher, id
*/

router.post("/", AddNewBook);

/**
* Route: /books/:id
* Method: PUT
* Description: Update book
* Access: Public
* Parameters: id
* Data: author, name, genre, price, publisher, id
*/

router.put("/:id", updateBookById);

// default export
module.exports = router;