**TODO**:

1. Create a controller to list all of the products in our database, and modify the `/` route handler in `index.js` to send the list of products as a json response.

2. Add the [`express-session`](https://github.com/expressjs/session) middleware to `app.js` to handle our cookies and sessions. This will store our shopping cart information. Make sure to put any secrets in `config/environment.js`. Configure `express-session` so that each cookie is only valid for max 24 hrs.

3. Create a `cart` class to serve as a state container for our cart. This model should **not** be a mongoose model and it needs to implement the following:

   - The cart constructor takes in an old cart and reintializes it.
   - The cart items should be saved in a **_hash map_** where the id of an item is the key and the cart item object is the value.
   - Each cart item object should have the following properties:
     - id: String (The id of the product)
     - product: Object (The product object which is in the cart)
     - qty: Number (The quantity amount of that product in the cart)
     - price: Number (The total price of that product in the cart. calculated by multiplying the `product.price` with `qty`)
   - The class should also have two getter methods:
     - `get totalQty()`: returns the total quantity of all items in the cart. Calculated by summing the `qty` property of each cart item.
     - `get totalPrice()`: returns the total price of all the items in the cart. Calculated by summing up the `price` property of each cart item.
   - The class should have three instance methods:
     - `add()`: takes in an id and a product object and adds an item to the items hash map, or updates the `qty` and `price` properties of the item, if it already exists.
     - `remove()`: takes in an id and removes an item from the items hash map, or updates the `qty` and `price` properties of the item, if the item's `qty` property is greater than 1.
     - `removeAll()`: takes in an id and removes an item from the items hash map, regardless of it's `qty` property.

4. Create middleware to initialize the cart in our sessions

5. Create a cart router to handle cart operations. the router should have the following endpoints:

   - `add/:id`: Finds the product with a given id and adds it to the cart in session
   - `remove/:id`: Finds the product with a given id and removes it from the cart in session
   - `remove-all/:id`: Finds the product with the given id and removes all of that product from the cart in session

6. Add the cart's total item count to the json response returned from `routes/index.js`

7. Add a `/cart` route to `routes/index.js` which will return the cart in session as a json response

8. Install [`connect-mongo`](https://github.com/jdesboeufs/connect-mongo) and add a mongodb session store to our `express-session` configuration in `app.js`
