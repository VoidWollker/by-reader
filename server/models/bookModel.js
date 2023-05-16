const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    review: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    fakePrice:{
        type: Number,
        required: true
    },
    format:{
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    ratesCount: {
        type: Number,
        required: true
    },
    recomendedAge:{
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    reviewCount:{
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    dateWriting: {
        type: Date,
        required: true
    },
    reviews: [reviewSchema]
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)

