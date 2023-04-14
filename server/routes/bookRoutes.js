const express = require("express");
const router = express.Router();
const BookController = require("../controllers/bookControllers");

router.get("/getAllBooks", BookController.getAllBooks);
router.get("/getOneBook/:id", BookController.getOneBook);
router.post("/addBook", BookController.addBook);
router.put("/updateBook/:id", BookController.updateBook);
router.delete("/deleteBook/:id", BookController.deleteBook);
module.exports = router;
