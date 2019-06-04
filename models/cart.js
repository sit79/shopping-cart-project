const chalk = require("chalk")

const items = {
  "5cf5021a2df6635d380b9410": {
    productDetails: {
      _id: "5cf5021a2df6635d380b9410",
      name: "Handmade Fresh Chicken",
      description:
        "A qui qui odit doloremque et quasi totam et. Assumenda ab id est odio. Omnis laborum voluptatem.",
      imgUrl: "http://lorempixel.com/640/480",
      price: 808,
      __v: 0
    },
    quantity: 1
  },
  "5cf5021a2df6635d380b9411": {
    productDetails: {
      _id: "5cf5021a2df6635d380b9411",
      name: "Small Granite Mouse",
      description:
        "Non ullam numquam eveniet quae et nihil nobis soluta. Porro debitis et nihil. Iure sed itaque et est cupiditate.",
      imgUrl: "http://lorempixel.com/640/480",
      price: 236,
      __v: 0
    },
    quantity: 1
  },
  "5cf5021a2df6635d380b9412": {
    productDetails: {
      _id: "5cf5021a2df6635d380b9412",
      name: "Gorgeous Granite Shoes",
      description:
        "Cumque cum libero quas est ex accusantium reiciendis maiores omnis. Voluptatibus error quaerat aliquam reprehenderit accusantium corrupti sed. At nisi delectus quae quia quis eum.",
      imgUrl: "http://lorempixel.com/640/480",
      price: 389,
      __v: 0
    }
  }
}

class ShoppingCart {
  constructor() {
    this.items = {}
  }

  add(product) {
    const { _id: id } = product.productDetails
    if (this.items.hasOwnProperty(id)) {
      console.log(chalk.blue(`${id} added`))
      this.items[id].quantity++
    } else {
      console.log(chalk.green(`${id} created `))
      this.items[id] = { ...product, quantity: 1 }
    }
  }

  remove(product) {
    const { _id: id } = product.productDetails
    if (this.items.hasOwnProperty(id)) {
      if (this.items[id].quantity > 1) {
        this.items[id].quantity--
        console.log(chalk.red(`${id} removed`))
      } else {
        delete this.items[id]
        console.log(chalk.red(`${id} deleted`))
      }
    } else {
      console.log(chalk.blue(`${id} is not in cart`))
    }
  }
}

const cart = new ShoppingCart()
console.clear()
console.log(cart)
console.log("\n*********** OPERATIONS ******************\n")
cart.add(items["5cf5021a2df6635d380b9411"])
cart.add(items["5cf5021a2df6635d380b9411"])
cart.add(items["5cf5021a2df6635d380b9410"])
cart.add(items["5cf5021a2df6635d380b9410"])
cart.add(items["5cf5021a2df6635d380b9410"])
cart.add(items["5cf5021a2df6635d380b9410"])
cart.add(items["5cf5021a2df6635d380b9410"])
cart.remove(items["5cf5021a2df6635d380b9410"])
cart.remove(items["5cf5021a2df6635d380b9410"])
cart.remove(items["5cf5021a2df6635d380b9410"])
cart.remove(items["5cf5021a2df6635d380b9410"])
cart.remove(items["5cf5021a2df6635d380b9410"])
console.log("\n*********** RESULTING CART **************\n")
console.log(cart)
console.log("\n*********** END *************************\n")
