const User = require("./User");
const Categories = require("./Categories");
const Products = require("./Products");
const Orders = require("./Orders");
const ProductVariant = require("./ProductVariant");
const OrderItems = require("./OrderItems");
const Payments = require("./Payments");
const Shipping = require("./Shipping");
const Cart = require("./Cart");
const Wishlist = require("./Wishlist");
const Reviews = require("./Reviews");
const Coupons = require("./Coupons");
const User_Addresses = require("./User_Addresses");

const models = {
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
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = models;
