const Product = require("../models/product")
const mongoose = require("mongoose")

module.exports = {
  welcomeToShop: (req, res, next) => {
    res.json({ response: "Welcome to this shopping thingy!" })
  },
  getAllProducts: async (req, res, next) => {
    try {
      const allProducts = await Product.find({})
      res.status(200).send(allProducts)
    } catch (error) {
      res.send(error)
    }
  },
  getProductById: async (req, res, next) => {
    const { id } = req.params
    try {
      const product = await Product.find({
        _id: id
      })
      res.status(200).send(product)
    } catch (error) {
      next(error)
    }
  }
}
