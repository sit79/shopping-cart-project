const express = require("express")
const router = express.Router()
const Product = require("../models/product")

/* GET home page. */
router.get("/api", function(req, res) {
  res.json({ response: "Welcome to this API" })
})

router.get("/api/all", async (req, res) => {
  try {
    const allProducts = await Product.find({})
    res.status(200).send(allProducts)
  } catch (error) {
    res.send(error)
  }
})

router.get("/api/:id", async (req, res) => {
  try {
    const allProducts = await Product.find({ _id: req.params.id })
    res.status(200).send(allProducts)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router
