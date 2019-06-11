const mongoose = require("mongoose")
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: String,
  description: String,
  imgUrl: String,
  price: Number,
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product
