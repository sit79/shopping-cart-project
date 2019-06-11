const Product = require("../models/product")

module.exports = {
  welcomeToShop: (req, res) => {
    res.json({ response: "Welcome to this shopping thingy!" })
  },
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await Product.find({})
      res.status(200).send(allProducts)
    } catch (error) {
      res.send(error)
    }
  },
  getProductById: async (req, res) => {
    const { id } = req.params
    try {
      const product = await Product.find({
        _id: id,
      })
      res.status(200).send(product)
    } catch (error) {
      res.status(500).send(error)
    }
  },
}
