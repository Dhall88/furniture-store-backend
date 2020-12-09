const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
    description: String,
    price: Number,
    tags: String
})

module.exports = mongoose.model("Product", schema)