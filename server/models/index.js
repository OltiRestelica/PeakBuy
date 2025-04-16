const User = require("./User");
const Categories = require("./Categories");
const Products = require("./Products");
const Orders = require("./Orders");
const ProductVariants = require("./ProductVariant");
const OrderItems = require("./OrderItems");
const Payments = require("./Payments");
const Shipping = require("./Shipping");
const Cart = require("./Cart");
const Wishlist = require("./Wishlist");
const Reviews = require("./Reviews");
const Coupons = require("./Coupons");
const UserAddresses = require("./User_Addresses");

const models = {
  User,
  Categories,
  Orders,
  ProductVariants,
  OrderItems,
  Payments,
  Shipping,
  Products,
  Cart,
  Wishlist,
  Reviews,
  Coupons,
  UserAddresses,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = models;
