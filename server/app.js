const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
dotenv.config();
app.use(cors());

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
  UserAddresses,
} = models;

//thirrja e routes
const orderRoutes = require("./routes/orderRoutes");
const orderItemsRoutes = require("./routes/orderItemRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const couponRoutes = require("./routes/couponRoutes");
const productRoutes = require("./routes/ProductRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/CartRoutes");
const userAddressesRoutes = require("./routes/userAddressesRoutes");
const shippingRoutes = require("./routes/ShippingRoutes")

app.use("/orders", orderRoutes);
app.use("/order-items", orderItemsRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/coupons", couponRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/addresses", userAddressesRoutes);
app.use("/shipping", shippingRoutes)

databaza.sync();
app.listen(3000, () => {
  console.log("server is running on port " + process.env.PORT);
  connectToDatabase();
});
