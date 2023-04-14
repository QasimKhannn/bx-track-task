const db = require("../models/index");
const Book = db.book;

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.send({
      status: "Success",
      books: books,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Unable to find any books",
    });
  }
};
exports.getOneBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({
        status: "error",
        message: "Book not found",
      });
    }
    return res.send({
      status: "success",
      book,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      status: "error",
      message: "Server error",
    });
  }
};
exports.addBook = async (req, res) => {
  const { title, author, pages, published } = req.body;
  const book = new Book({
    title,
    author,
    pages,
    published,
  });
  try {
    const newBook = await book.save();
    return res.send({
      status: "Success",
      data: newBook,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Unable to Add Book",
    });
  }
};
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const record = await Book.findByIdAndUpdate(id, body, { new: true });
    return res.send({
      status: "Updated",
      data: record,
    });
  } catch (err) {
    return res.status(500).send({
      status: "Failed",
      message: "Unable to Update records",
    });
  }
};
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({
        status: "Failed",
        message: "Record not found",
      });
    }
    return res.status(200).send({
      status: "Success",
      data: deletedBook,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      status: "Error",
      message: "Unable to delete record",
    });
  }
};
