const shoppingCart = require("../models/cart")

test("makes new shopping cart", () => {
  const cart = new shoppingCart()
  expect(cart).toEqual(
    (ShoppingCart = {
      items: {}
    })
  )
})
