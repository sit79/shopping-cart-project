const shoppingCart = require("../models/cart")

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

const cart = new shoppingCart()

console.clear()
console.log("\n*********** CART AT START ***************\n")
console.log(cart)
console.log("\n*********** OPERATIONS ******************\n")
cart.add(items[0])
cart.add(items[1])
cart.add(items[2])
cart.add(items[1])
cart.add(items[2])
cart.add(items[3])
cart.remove(items[0])
cart.remove(items[0])
cart.remove(items[0])
cart.removeAll(items[1])
cart.removeAll(items[2])
console.log("\n*********** RESULTING CART **************\n")
console.log(cart)
console.log("\n*********** TEST ************************\n")
console.log(cart.totalPrc)
console.log("\n*********** END *************************\n")

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
