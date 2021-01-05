const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
    description: String,
    price: Number,
    pictures: [String],
    tags: String
})

module.exports = mongoose.model("User", schema)