const createError = require("http-errors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const mongoose = require("mongoose")
const session = require("express-session")
const chalk = require("chalk")

const shopRouter = require("./routes/shop")

const app = express()
const mongoUrl = "mongodb://localhost:27017/shop"

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

// session middleware
// will be added to req. object when app is used (via a route)
app.use(
  session({
    secret: "norfolk terrier",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 86400000 }
  })
)

app.use("/", shopRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

// mongoose connection
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(chalk.green("CONNECTED TO MONGO"))
  })
  .catch(error => {
    console.log(chalk.red("COULD NOT CONNECT", error))
  })

module.exports = app
