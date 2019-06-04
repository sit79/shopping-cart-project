const express = require("express")
const shopRouter = express.Router({ strict: true })

// Controller
const {
  getAllProducts,
  welcomeToShop,
  getProductById
} = require("../controller/shop")

// Route Configuration
const shopRoutes = {
  homepage: "/shop",
  getAllProducts: "/shop/all",
  getProductById: "/shop/:id"
}

// GET
shopRouter.get(shopRoutes.homepage, welcomeToShop)
shopRouter.get(shopRoutes.getAllProducts, getAllProducts)
shopRouter.get(shopRoutes.getProductById, getProductById)

module.exports = shopRouter
