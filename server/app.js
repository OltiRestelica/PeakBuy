const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const { connectToDatabase, databaza } = require("./database");

//thirrja e tabelave
const models = require("./models");
const {
  User,
  Categories,
  Products,
  Orders,
  ProductVariant,
  OrderItems,
  Payments,
  Shipping,
  Cart,
  Wishlist,
  Reviews,
  Coupons,
  User_Addresses,
} = models;

//thirrja e kontrollerave
const { SignUp, Login } = require("./controllers/UserController");

//thirrja e routes
const orderRoutes = require("./routes/orderRoutes");
const orderItemsRoutes = require("./routes/orderItemRoutes");

dotenv.config();
app.use(cors());

app.use("/orders", orderRoutes);
app.use("/order-items", orderItemsRoutes);

app.post("/addUser", SignUp);
app.post("/Login", Login);
databaza.sync({force:true});
app.listen(3000, () => {
  console.log("server is running on port " + process.env.PORT);
  connectToDatabase();
});
