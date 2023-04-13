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
    const record = await Book.findByIdAndDelete(id);
    return res.send({
      status: "Deleted",
      data: record,
    });
  } catch (err) {
    return res.status(500).send({
      status: "Failed",
      message: "Unable to Delete records",
    });
  }
};
