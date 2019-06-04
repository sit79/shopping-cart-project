const shoppingCart = require("../models/cart")

describe("Testing the shopping cart", () => {
  test("Creating a new, empty shopping cart", () => {
    const cart = new shoppingCart()
    expect(cart).toEqual(
      (ShoppingCart = {
        items: {}
      })
    )
  })

  test("Make new cart and add one item", () => {
    const cart = new shoppingCart()
    const item = {
      _id: "5cf5021a2df6635d380b9410",
      name: "Handmade Fresh Chicken",
      description:
        "A qui qui odit doloremque et quasi totam et. Assumenda ab id est odio. Omnis laborum voluptatem.",
      imgUrl: "http://lorempixel.com/640/480",
      price: 808,
      __v: 0
    }
    cart.add(item)
    expect(cart.totalQty).toBe(1)
  })
})
