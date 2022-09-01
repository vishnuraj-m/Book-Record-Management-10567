const IssuedBook = require('../dtos/book-dto');
const { BookModel, UserModel } = require('../models');
const bookModel = require('../models/book-model');

exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();

    if (books.length === 0)
        return res.status(404).json({
            success: false,
            message: "No Book Found",
        });
    res.status(200).json({
        success: true,
        data: books,
    });
};

exports.getSingleBookById = async (req, res) => {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    };
    return res.status(200).json({
        success: true,
        message: book
    });
};

exports.getAllIssuedBooks = async (req, res) => {
    const users = await UserModel.find({
        issuedBook: { $exists: true }
    }).populate("issuedBook");

    const issuedBooks = users.map((each)=>new IssuedBook(each));

    if (issuedBooks.length === 0)
        return res.status(404).json({
            success: false,
            message: "No books issued yet"
        });
    return res.status(200).json({
        success: true,
        data: issuedBooks,
    });
};
