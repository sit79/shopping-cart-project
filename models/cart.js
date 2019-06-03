class ShoppingCart {
  constructor() {
    this.items = {}
  }

  add(product) {
    const { _id: id } = product
    if (this.items.hasOwnProperty(id)) {
      this.items.id.quantity++
    } else {
      this.items.id = { product, quantity: 1 }
    }
  }
}

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
  }
}
