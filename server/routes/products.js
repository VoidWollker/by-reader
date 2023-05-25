const { Router } = require("express");
const Book = require('../models/bookModel')
const mongoose = require('mongoose')
 
// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productRoutes = Router();
  
// This section will help you get a list of all the records.
productRoutes.get('/all', async (req, res) => {
  const book = await Book.find({}).sort({createdAt: -1})

  res.status(200).json(book)
})

// This section will help you add a book
productRoutes.post('/add', async (req, res) => {
  const {title, author, pages} = req.body
  
  try {
    const book = await Book.create({title, author, pages})
    res.status(200).json(book)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})
 
// This section will help you get a single record by id
productRoutes.get('/:id', async (req, res) => {
  const {id}  = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such book'})
  }

  const book = await Book.findById(id)

  if (!book) {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

productRoutes.get('/find/bytitle', async (req, res) => {
  const title = req.body.title
  const regex = new RegExp(title, 'i');

  const book = await Book.find(
    {
        "$or":[
            {title: {$regex: regex}}
        ]
    })

  if (book == '') {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

// This section will help you get a single record by author
productRoutes.get('/find/byauthor', async (req, res) => {
  const author = req.body.author
  const regex = new RegExp(author, 'i');

  const book = await Book.find(
    {
        "$or":[
            {author: {$regex: regex}}
        ]
    })

  if (book == '') {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

// This section will help you get a single record by genre
productRoutes.get('/find/bygenre', async (req, res) => {
  const genre = req.body.genre
  const regex = new RegExp(genre, 'i');

  const book = await Book.find(
    {
        "$or":[
            {genre: {$regex: regex}}
        ]
    })

  if (book == '') {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

// This section will help you get a single record by publisher
productRoutes.get('/find/bypublisher', async (req, res) => {
  const publisher = req.body.publisher
  const regex = new RegExp(publisher, 'i');

  const book = await Book.find(
    {
        "$or":[
            {publisher: {$regex: regex}}
        ]
    })

  if (book == '') {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

// This section will help you get a single record by seria
productRoutes.get('/find/byseria', async (req, res) => {
  const seria = req.body.seria
  const regex = new RegExp(seria, 'i');

  const book = await Book.find(
    {
        "$or":[
            {seria: {$regex: regex}}
        ]
    })

  if (book == '') {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

module.exports = productRoutes;