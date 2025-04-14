const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const { connectToDatabase, databaza } = require("./database");

//thirrja e tabelave
const User = require("./models/User");
const Categories = require("./models/Categories");
const Products = require("./models/Products");
const Orders = require("./models/Orders");
const ProductVariant = require("./models/ProductVariant");
const OrderItems = require("./models/OrderItems");
const Payments = require("./models/Payments");
const Shipping = require("./models/Shipping");
const Cart = require("./models/Cart");
const Wishlist = require("./models/Wishlist");
const Reviews = require("./models/Reviews");
const Coupons = require("./models/Coupons");
const User_Addresses = require("./models/User_Addresses");
//thirrja e kontrollerave
const {SignUp , Login} = require("./controllers/UserController");


dotenv.config();
app.use(cors());

app.post("/addUser", SignUp);
app.post("/Login", Login);
databaza.sync();
app.listen(3000, () => {
  console.log("server is running on port " + process.env.PORT);
  connectToDatabase();
});
