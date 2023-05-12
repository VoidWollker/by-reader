const { Schema, model } = require('mongoose')

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
    }
}, { timestamps: true })

module.exports = model('Book', bookSchema)

