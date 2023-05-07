const express = require('express')
const book = require('./models/book')
const router =  express.Router()

router.get('/books', async (req, res) =>{
    const books = await book.find()
    res.send(books)
})

module.exports = router