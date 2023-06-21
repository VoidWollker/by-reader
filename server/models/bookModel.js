const mongoose = require('mongoose')

const Schema = mongoose.Schema

const quoteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
}, { timestamps: false })

const reviewSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        unique: false,
        required: false
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
    seria: {
        type: String,
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
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateWriting: {
        type: Date,
        required: true
    },
    cover: {
        type: String,
        required: false
    },
    avg_rate:{
        type: Number,
        required: false
    },
    quotes: [quoteSchema],
    reviews: [reviewSchema],
}, { timestamps: true })



module.exports = mongoose.model('Book', bookSchema)

