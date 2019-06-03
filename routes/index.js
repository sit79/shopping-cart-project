const express = require("express")
const router = express.Router()
const Product = require("../models/product")

/* GET home page. */
router.get("/", function(req, res) {
  res.json({ response: "Welcome to this API" })
})

router.get("/all", async (req, res) => {
  try {
    const allProducts = await Product.find({})
    res.status(200).send(allProducts)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router
