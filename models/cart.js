const chalk = require("chalk")
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

module.exports = ShoppingCart
