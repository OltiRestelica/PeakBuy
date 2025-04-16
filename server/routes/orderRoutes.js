const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post("/", OrderController.createOrder);

router.get("/", OrderController.getAllOrders);

router.get("/:id", OrderController.getOrderById);

router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
