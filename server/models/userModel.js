const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userFavSchema = new Schema({
    book: {
        type: mongoose.Types.ObjectId,
        required: false
    }
}, { timestamps: false })

const userPurchasedSchema = new Schema({
    book: {
        type: mongoose.Types.ObjectId,
        required: false
    }
}, { timestamps: true })

const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favourite: [userFavSchema],
    purchased: [userPurchasedSchema]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema, 'users')

