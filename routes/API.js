const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET ALL BOOKS
router.get("/api/books", async(req, res) => {
    try {
        const allBooks = await Book.find();
        res.status(200).json(allBooks);
    } catch (err) {
        res.status(404).json(err);
    }
});

// SAVE A BOOK
router.post("/api/books", async({ body }, res) => {
    try {
        const savedBook = await Book.create(body);
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(404).json(err);
    }
});

// DELETE BOOK BY ID
router.delete("/api/books/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const bookQuery = await Book.findById({ _id: id });
        const deletedBook = await bookQuery.remove();
        res.status(200).json(deletedBook);
    } catch (err) {
        res.status(404).json(err);
    }
});

module.exports = router;