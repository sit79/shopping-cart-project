const express = require("express")
const cartRouter = express.Router({ strict: true })
const Product = require("../models/product")

// Route Configuration
const cartRoutes = {
  cart: "/",
  addProductById: "/:id",
}

// Show all endpoints at home route (/)
cartRouter.get(cartRoutes.addProductById, async (req, res) => {
  const { id } = req.params
  const { cart } = req.session

  const product = await Product.findById(id)

  cart.add(product)

  res.json({ cart })
})

module.exports = cartRouter
