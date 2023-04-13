const mongoose = require("mongoose");
const Book = require("./bookModel");
const db = {};
db.mongoose = mongoose;
db.book = Book;
module.exports = db;
