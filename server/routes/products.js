const { Router } = require("express");
const Product = require('../models/bookModel')
const mongoose = require('mongoose')
const Fuse = require('fuse.js')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

module.exports = upload;
 
// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productRoutes = Router();
  
// This section will help you get a list of all the records.
productRoutes.get('/all', async (req, res) => {
  const book = await Product.find({}).sort({createdAt: -1})

  res.status(200).json(book)
})

// This section will help you add a book
productRoutes.post('/add', async (req, res) => {
  const {title, author, pages} = req.body
  
  try {
    const book = await Product.create({title, author, pages})
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

  const book = await Product.findById(id)

  if (!book) {
    return res.status(404).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

// This section will help you get records by title, author, genre, etc.
productRoutes.get('/find/byall', async (req, res) => {

  const data = req.query
  console.log(data);

  try {
    const books = await Product.find()

    const options = {
      keys: [
        'title',
        'author',
        'genre',
        'format',
        'seria',
        'publisher',
        'price',
        'recommendedAge'
      ]
    }

    const fuse = new Fuse(books, options)

    const result = fuse.search(data.data)

    const filteredBooks = result
      .filter((item) => 
        (data.price === undefined || item.item.price.toString() === data.price) &&
        (data.recommendedAge === undefined || item.item.recommendedAge.toString() === data.recommendedAge)
      )
      .map((item) => item.item)

    res.status(200).json(filteredBooks)
  } catch (error) {
    res.status(404).json({ error: 'No such book' })
  }
})

// This section will help you get records by a certain field (e.g., title, author, etc.)
productRoutes.get('/find/by', async (req, res) => {

  const data = req.query
  console.log(data);

  try {
    const books = await Product.find()

    const options = {
      keys: [
        'title',
        'author',
        'genre',
        'format',
        'seria',
        'publisher',
        'price',
        'recommendedAge'
      ]
    }

    const fuse = new Fuse(books, options)

    const result = fuse.search(data)

    const filteredBooks = result
      .filter((item) => 
        (data.price === undefined || item.item.price.toString() === data.price) &&
        (data.recommendedAge === undefined || item.item.recommendedAge.toString() === data.recommendedAge)
      )
      .map((item) => item.item)

    res.status(200).json(filteredBooks)
  } catch (error) {
    res.status(404).json({ error: 'No such book' })
  }
})

productRoutes.post('/update', async (req, res) =>{
  const bookData = req.body
  console.log(bookData);

  const book = await Product.findById(bookData._id)

  if (book){
    Object.keys(bookData).forEach(key =>{
      console.log(key, bookData[key]);
      book[key] = bookData[key]
    })

    book.save()
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json(err))
  }
  else{
    res.status(400).json({errorMessage: 'Товар не найден'})
  }
})


//Add a cover
productRoutes.put('/upd/:id', upload.single('cover'), async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such book'})
  }

  const book = await Product.findOneAndUpdate({_id: id}, {
    cover: req.file.path 
  })

  if (!book) {
    return res.status(400).json({error: 'No such book'})
  }

  res.status(200).json(book)
})

module.exports = productRoutes;