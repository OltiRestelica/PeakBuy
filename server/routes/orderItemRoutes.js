const express = require("express");
const router = express.Router();
const OrderItemsController = require("../controllers/OrderItemsController");

router.post("/", OrderItemsController.addOrderItem);

router.get("/order/:orderId", OrderItemsController.getOrderItemsByOrderId);

router.put("/:id", OrderItemsController.updateOrderItemQuantity);

router.delete("/:id", OrderItemsController.deleteOrderItem);

module.exports = router;
