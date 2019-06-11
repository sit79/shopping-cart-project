const shoppingCart = require("../models/cart")

const initCart = (req, res, next) => {
  req.session.cart = new shoppingCart(req.session.cart)
  next()
}

module.exports = { initCart }
