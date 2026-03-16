const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    fullname: { type: String, minLength: 3, trim: true },
    email: { type: String, unique: true },
    password: { type: String, minLength: 6 },
    products: { type: Array, default: [] },
    picture: String,
    gstin: { type: String, unique: true }
})

module.exports = mongoose.model('owner', ownerSchema)
