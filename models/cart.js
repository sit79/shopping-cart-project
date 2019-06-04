const chalk = require("chalk")

const items = [
  {
    _id: "5cf5021a2df6635d380b9412",
    name: "Gorgeous Granite Shoes",
    description:
      "Cumque cum libero quas est ex accusantium reiciendis maiores omnis. Voluptatibus error quaerat aliquam reprehenderit accusantium corrupti sed. At nisi delectus quae quia quis eum.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 389,
    __v: 0
  },
  {
    _id: "5cf5021a2df6635d380b9415",
    name: "Unbranded Plastic Bike",
    description:
      "Nisi modi fugiat voluptas. Labore corporis ullam et distinctio occaecati exercitationem. Inventore quam possimus omnis voluptatem eum voluptas. Ut omnis qui. Ullam voluptatibus velit.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 759,
    __v: 0
  },
  {
    _id: "5cf5021a2df6635d380b9418",
    name: "Refined Wooden Cheese",
    description:
      "Vitae nihil accusamus ad autem. Minus temporibus laudantium sunt corrupti est consequatur. Voluptatibus qui corrupti rerum id quibusdam ratione.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 663,
    __v: 0
  },
  {
    _id: "5cf5021a2df6635d380b9419",
    name: "Tasty Steel Soap",
    description:
      "Autem est qui id et qui ipsam nihil deserunt. Error est qui mollitia voluptatem vel porro. Magnam excepturi corporis cum magnam labore sapiente praesentium porro.",
    imgUrl: "http://lorempixel.com/640/480",
    price: 350,
    __v: 0
  }
]

class ShoppingCart {
  constructor() {
    this.items = {}
  }

  add(product) {
    const { _id: id } = product
    const item = this.items[id]
    if (this.items.hasOwnProperty(id)) {
      console.log(chalk.green(`${id} ++`))
      item.quantity++
      item.price = item.quantity * item.productDetails.price
    } else {
      console.log(chalk.blue(`${id} added `))
      this.items[id] = {
        productDetails: product,
        quantity: 1,
        price: product.price
      }
    }
  }

  remove(product) {
    const { _id: id } = product
    const item = this.items[id]
    if (this.items.hasOwnProperty(id)) {
      if (item.quantity > 1) {
        item.quantity--
        item.price = item.quantity * item.productDetails.price
        console.log(chalk.red(`${id} --`))
      } else {
        delete this.items[id]
        console.log(chalk.red(`${id} deleted`))
      }
    } else {
      console.log(chalk.blue(`${id} not in cart`))
    }
  }

  removeAll(product) {
    const { _id: id } = product
    if (this.items.hasOwnProperty(id)) {
      delete this.items[id]
      console.log(chalk.red(`${id} deleted`))
    } else {
      console.log(chalk.blue(`${id} not in cart`))
    }
  }

  isEmpty(obj = this.items) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }

  get totalQty() {
    const items = this.items
    if (!this._isEmpty(items)) {
      let totalQuantity = 0
      for (let key in items) {
        totalQuantity += items[key].quantity
      }
      return totalQuantity
    } else {
      return 0
    }
  }

  get totalPrc() {
    const items = this.items
    if (!this.isEmpty()) {
      // count and return total price
      let totalPrice = 0
      for (let key in items) {
        totalPrice += items[key].price
      }
      return totalPrice
    } else {
      return 0
    }
  }
}

const cart = new ShoppingCart()
module.exports = cart

// Playground

// console.clear()
// console.log("\n*********** CART AT START ***************\n")
// console.log(cart)
// console.log("\n*********** OPERATIONS ******************\n")
// cart.add(items[0])
// cart.add(items[1])
// cart.add(items[2])
// cart.add(items[1])
// cart.add(items[2])
// cart.add(items[3])
// cart.remove(items[0])
// cart.remove(items[0])
// cart.remove(items[0])
// cart.removeAll(items[1])
// cart.removeAll(items[2])
// console.log("\n*********** RESULTING CART **************\n")
// console.log(cart)
// console.log("\n*********** TEST ************************\n")
// console.log(cart.totalPrc)
// console.log("\n*********** END *************************\n")

// const SHOPPING-CART-EXAMPLE = {
//   "5cf5021a2df6635d380b9410": {
//     productDetails: {
//       _id: "5cf5021a2df6635d380b9410",
//       name: "Handmade Fresh Chicken",
//       description:
//         "A qui qui odit doloremque et quasi totam et. Assumenda ab id est odio. Omnis laborum voluptatem.",
//       imgUrl: "http://lorempixel.com/640/480",
//       price: 808,
//       __v: 0
//     },
//     quantity: 1
//   },
//   "5cf5021a2df6635d380b9411": {
//     productDetails: {
//       _id: "5cf5021a2df6635d380b9411",
//       name: "Small Granite Mouse",
//       description:
//         "Non ullam numquam eveniet quae et nihil nobis soluta. Porro debitis et nihil. Iure sed itaque et est cupiditate.",
//       imgUrl: "http://lorempixel.com/640/480",
//       price: 236,
//       __v: 0
//     },
//     quantity: 1
//   },
//   "5cf5021a2df6635d380b9412": {
//     productDetails: {
//       _id: "5cf5021a2df6635d380b9412",
//       name: "Gorgeous Granite Shoes",
//       description:
//         "Cumque cum libero quas est ex accusantium reiciendis maiores omnis. Voluptatibus error quaerat aliquam reprehenderit accusantium corrupti sed. At nisi delectus quae quia quis eum.",
//       imgUrl: "http://lorempixel.com/640/480",
//       price: 389,
//       __v: 0
//     }
//   }
// }
