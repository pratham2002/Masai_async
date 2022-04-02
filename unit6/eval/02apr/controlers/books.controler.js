const express = require("express");
const Books = require("../schema/books.schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Books.find();
  res.status(200).send(books);
});
router.get("/:id", async (req, res) => {
  const book = await Books.findById(req.params.id);
  res.status(200).send(book);
});
router.post("/", async (req, res) => {
  const newBook = await Books.create(req.body);
  res.status(200).send(newBook);
});
router.patch("/:id", async (req, res) => {
  const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send(updatedBook);
});
router.delete("/:id", async (req, res) => {
    const updatedBooks = await Books.findByIdAndDelete(req.params.id);
    res.status(200).send(updatedBooks);
});

module.exports = router;
