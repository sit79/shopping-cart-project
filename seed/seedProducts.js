const mongoose = require("mongoose")
const faker = require("faker")
const Product = require("../models/product")
const chalk = require("chalk")

mongoose.connect("mongodb://localhost/shop", { useNewUrlParser: true })

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => {
  // Connection has been established
  console.log(chalk.green("DB started…"))
})

const products = []
let count = process.argv[2] || 20

while (count) {
  products.push({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    imgUrl: faker.image.imageUrl(),
    price: faker.commerce.price()
  })

  count--
}

Product.insertMany(products, err => {
  if (err) return console.error(err)
  mongoose.connection.close()
  console.log(chalk.green("DB connection closed."))
})
