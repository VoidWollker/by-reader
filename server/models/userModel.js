const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userFavSchema = new Schema({
    book: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

const userPurchasedSchema = new Schema({
    book: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favourite: [userFavSchema],
    purchased: [userPurchasedSchema]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)

