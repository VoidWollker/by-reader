const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: String,
    author: String
})

module.exports = mongoose.model('book', schema)