const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userViewedSchema = new Schema({
}, { timestamps: true})

const userFavSchema = new Schema({
}, { timestamps: false })

const userPurchasedSchema = new Schema({
}, { timestamps: true })

const userCartSchema = new Schema({
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
    patronymic: {
        type: String,
        required: false
    },
    birthDate: {
        type: Date,
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
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    viewed: [userViewedSchema],
    favourite: [userFavSchema],
    purchased: [userPurchasedSchema],
    cart: [userCartSchema]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema, 'users')

