const express = require("express")
const cartRouter = express.Router({ strict: true })
const Product = require("../models/product")

// Route Configuration
const cartRoutes = {
  cart: "/",
  addProductById: "/add/:id",
  removeProductById: "/remove/:id",
  removeAllProductsById: "/remove-all/:id",
}

// show cart
cartRouter.get(cartRoutes.cart, (req, res) => {
  const { cart } = req.session
  cart["totalQuantity"] = cart.totalQty
  cart["totalPrice"] = cart.totalPrc
  res.json(cart)
})

// addProductById
cartRouter.get(cartRoutes.addProductById, async (req, res) => {
  const { id } = req.params
  const { cart } = req.session
  const product = await Product.findById(id)
  cart.add(product)
  cart["totalQuantity"] = cart.totalQty
  cart["totalPrice"] = cart.totalPrc
  res.json({ cart })
})

// removeProductById
cartRouter.get(cartRoutes.removeProductById, async (req, res) => {
  const { id } = req.params
  const { cart } = req.session
  const product = await Product.findById(id)
  cart.remove(product)
  cart["totalQuantity"] = cart.totalQty
  cart["totalPrice"] = cart.totalPrc
  res.json({ cart })
})

// removeAllProductsById
cartRouter.get(cartRoutes.removeAllProductsById, async (req, res) => {
  const { id } = req.params
  const { cart } = req.session
  const product = await Product.findById(id)
  cart.removeAll(product)
  cart["totalQuantity"] = cart.totalQty
  cart["totalPrice"] = cart.totalPrc
  res.json({ cart })
})

module.exports = cartRouter
