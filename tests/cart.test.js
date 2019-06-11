const shoppingCart = require("../models/cart")

const items = [
  {
    _id: "5cf5021a2df6635d380b9412",
    name: "Gorgeous Granite Shoes",
    description:
      "Cumque cum libero quas est ex accusantium reiciendis maiores omnis. Voluptatibus error quaerat aliquam reprehenderit accusantium corrupti sed. At nisi delectus quae quia quis eum.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 389,
    __v: 0,
  },
  {
    _id: "5cf5021a2df6635d380b9415",
    name: "Unbranded Plastic Bike",
    description:
      "Nisi modi fugiat voluptas. Labore corporis ullam et distinctio occaecati exercitationem. Inventore quam possimus omnis voluptatem eum voluptas. Ut omnis qui. Ullam voluptatibus velit.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 759,
    __v: 0,
  },
  {
    _id: "5cf5021a2df6635d380b9418",
    name: "Refined Wooden Cheese",
    description:
      "Vitae nihil accusamus ad autem. Minus temporibus laudantium sunt corrupti est consequatur. Voluptatibus qui corrupti rerum id quibusdam ratione.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 663,
    __v: 0,
  },
  {
    _id: "5cf5021a2df6635d380b9419",
    name: "Tasty Steel Soap",
    description:
      "Autem est qui id et qui ipsam nihil deserunt. Error est qui mollitia voluptatem vel porro. Magnam excepturi corporis cum magnam labore sapiente praesentium porro.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 350,
    __v: 0,
  },
]

describe("Testing the shopping cart", () => {
  test("Creating a new, empty shopping cart", () => {
    const cart = new shoppingCart()
    expect(cart).toEqual(
      (shoppingCart = {
        items: {},
      })
    )
  })

  test("Add and remove items from a new cart", () => {
    const cart = new shoppingCart()
    cart.add(items[0])
    cart.add(items[0])
    cart.add(items[0])
    cart.remove(items[0])
    expect(cart.totalQty).toBe(2)
  })

  test("Remove all items from a cart", () => {
    const cart = new shoppingCart()
    cart.add(items[0])
    cart.add(items[0])
    cart.add(items[0])
    cart.removeAll(items[0])
    expect(cart.totalQty).toBe(0)
  })
})
